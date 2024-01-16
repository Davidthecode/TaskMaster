"use client";

import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "../firebase/firebase-config";
import { StaticImageData } from "next/image";
import noUser from "../../../public/nouser.jpg";

type ProfileMembersDataType = {
    profileData: { username: string; photoUrl: string }
}

type ProfileDataType = {
    username: string,
    photoUrl: string
}

type ProjectMembersContextType = {
    projectBrief: string,
    projectOwnerName: string | null,
    projectOwnerImageUrl: string | StaticImageData,
    projectMembers: ProfileDataType[]
}

const ProjectMembersContext = createContext<ProjectMembersContextType | null>(null);

export const UseProjectMembersContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const params = useParams();
    const id = params.id as string;
    const [projectBrief, setProjectBrief] = useState("");
    const [projectOwnerName, setProjectOwnerName] = useState<string | null>(null);
    const [projectOwnerImageUrl, setProjectOwnerImageUrl] = useState<string | StaticImageData>(noUser);
    const [projectMembers, setProjectMembers] = useState<ProfileDataType[]>([])

    useEffect(() => {
        if (id) {
            const docRef = doc(db, "projects", id);
            const unsubscribe = onSnapshot(docRef, async (snapshot) => {
                if (snapshot.exists()) {
                    setProjectOwnerName("");
                    setProjectOwnerImageUrl(noUser);
                    setProjectMembers([]);
                    setProjectBrief(snapshot.data().projectData.projectBrief);
                    const checkForProjectOwner: string = snapshot.data().projectData.userId;
                    const checkForProjectMembers: string[] = snapshot.data().projectData.members;

                    if (checkForProjectOwner) {
                        const userDocRef = doc(db, 'profile', checkForProjectOwner);
                        try {
                            const userDocSnapshot = await getDoc(userDocRef);
                            if (userDocSnapshot.exists()) {
                                const userData = userDocSnapshot.data();
                                setProjectOwnerName(userData.profileData.username);
                                setProjectOwnerImageUrl(userData.profileData.photoUrl);
                            } else {
                                console.warn('User not found in the users collection');
                            };
                        } catch (error) {
                            console.error('Error fetching user details:');
                        };
                    };

                    if (checkForProjectMembers.length > 0) {
                        const filteredProjectMembers = checkForProjectMembers.filter((memberId: string) => memberId !== checkForProjectOwner);
                        if (filteredProjectMembers.length > 0) {
                            const docRefs = filteredProjectMembers.map((filteredProjectId: string) => doc(db, "profile", filteredProjectId));
                            try {
                                const docSnapshots = await Promise.all(docRefs.map((docRef) => getDoc(docRef)));
                                const projectMembersData = docSnapshots.map((snapshot) => {
                                    const data = snapshot.data() as ProfileMembersDataType;
                                    return {
                                        username: data.profileData.username,
                                        photoUrl: data.profileData.photoUrl,
                                    }
                                });
                                setProjectMembers(projectMembersData);
                            } catch (error) {
                                console.error("Error getting data");
                            }
                        }
                    }
                };
            });

            return () => unsubscribe();
        }
    }, [id]);
    return (
        <ProjectMembersContext.Provider value={{ projectBrief, projectOwnerName, projectOwnerImageUrl, projectMembers }}>
            {children}
        </ProjectMembersContext.Provider>
    )
}

export function useProjectMembersContext() {
    const context = useContext(ProjectMembersContext);
    if (!context) {
        throw new Error("useProjectMembers must be used within UseProjectMembersContext");
    };
    return context;
}