"use client";

import { IoIosAdd } from "react-icons/io";
import Image from "next/image";
import keyResourcesImg from "../../../../../../../public/key_resources.png";
import { LiaStickyNote } from "react-icons/lia";
import { useEffect, useState } from "react";
import ProjectBrief from "@/app/components/projects/projectBrief";
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";
import { useParams } from "next/navigation";
import Addmember from "@/app/components/projects/addMember";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import { StaticImageData } from "next/image";
import noUser from "../../../../../../../public/nouser.jpg";

export default function Overview() {
    type ProfileMembersDataType = {
        profileData: { username: string; photoUrl: string }
    }

    type ProfileDataType = {
        username: string; photoUrl: string
    }

    const { currentUser } = CurrentUserHook();
    const params = useParams();
    const id = params.id as string;
    const docRef = doc(db, "projects", id);
    const [toggleProjectBriefPopup, setToggleProjectBriefPopup] = useState(false);
    const [toggleAddMemberPopup, setToggleAddMemberPopup] = useState(false);
    const [projectBrief, setProjectBrief] = useState("");
    const [projectOwnerName, setProjectOwnerName] = useState<string | null>(null);
    const [projectOwnerImageUrl, setProjectOwnerImageUrl] = useState<string | StaticImageData>(noUser);
    const [projectMembers, setProjectMembers] = useState<ProfileDataType[]>([])
    console.log(projectMembers)
    const openAddMember = () => {
        setToggleAddMemberPopup(true);
    };

    const closeAddMember = () => {
        setToggleAddMemberPopup(false);
    };

    const createProjectBrief = () => {
        setToggleProjectBriefPopup(true);
    };

    const closeProjectBrief = () => {
        setToggleProjectBriefPopup(false);
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(docRef, async (snapshot) => {
            if (snapshot.exists()) {
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
    }, []);

    useEffect(() => {
        const adduserAsMember = async () => {
            try {
                await updateDoc(docRef, {
                    "projectData.members": arrayUnion(currentUser?.uid)
                });
            } catch (error) {
                console.error(error);
            };
        };
        adduserAsMember();
    }, [currentUser]);

    return (
        <section className="mx-12 pt-10">
            <div>
                <h1 className="font-medium text-lg">Project description</h1>
            </div>
            <div className="pt-10">
                <h1 className="font-medium text-lg pb-6">Project roles</h1>
                <div className="flex items-center">
                    <div className="flex items-center hover:bg-[#F9F8F8] w-fit pl-2 pr-14 cursor-pointer rounded-md" onClick={openAddMember}>
                        <div className="border border-gray-500 border-dotted rounded-full w-fit p-1 mr-2">
                            <IoIosAdd size="1.5rem" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">Add member</p>
                        </div>
                    </div>
                    <div className="flex items-center h-full w-60 px-4">
                        <div className="mr-2">
                            <Image src={projectOwnerImageUrl} alt="image" width={30} height={30} className="rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium">{projectOwnerName}</p>
                            <p className="text-xs">ProjectOwner</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8 overflow-x-auto w-full">
                        {projectMembers.map((projectMember, id) => {
                            return (
                                <div key={id} className="mt-5 flex items-center">
                                    <div className="mr-2">
                                        <Image src={projectMember.photoUrl} alt="image" width={30} height={30} className="rounded-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium">{projectMember.username}</p>
                                        <p className="text-xs">Project member</p>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-lg font-medium">Key Resources</h1>
                <div className="border h-[10rem] w-[70%] mt-6 rounded-md flex items-center justify-center">
                    <div className="w-[20%] h-[10rem]">
                        <Image src={keyResourcesImg} alt="image" width={0} height={0} className="w-full h-full" />
                    </div>
                    <div className="w-[40%] flex flex-col">
                        <p className="">Align your team around a shared vision with a project brief</p>
                        <div className="flex items-center mt-4 cursor-pointer hover:bg-[#F9F8F8] w-fit pl-1 pr-3 py-1 rounded-sm opacity-70 hover:opacity-100">
                            <div>
                                <LiaStickyNote size="1.2rem" />
                            </div>
                            {projectBrief ? (<h1 className="font-medium text-sm" onClick={createProjectBrief}>Update project brief</h1>) : (<p className="font-medium text-sm" onClick={createProjectBrief}>Create project brief</p>)}
                        </div>
                    </div>
                </div>
            </div>
            {projectBrief && (
                <div className="mt-10 w-[70%] pb-10">
                    <h1 className="text-xl font-medium">Project brief</h1>
                    <p>{projectBrief}</p>
                </div>
            )}
            {toggleProjectBriefPopup && <ProjectBrief closeProjectBrief={closeProjectBrief} />}
            {toggleAddMemberPopup && <Addmember closeAddMember={closeAddMember} />}
        </section>
    );
};