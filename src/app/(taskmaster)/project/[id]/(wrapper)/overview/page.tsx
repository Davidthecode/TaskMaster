"use client";

import { IoIosAdd } from "react-icons/io";
import Image from "next/image";
import anime from "../../../../../../../public/anime.jpg";
import keyResourcesImg from "../../../../../../../public/key_resources.png";
import { LiaStickyNote } from "react-icons/lia";
import { useEffect, useState } from "react";
import ProjectBrief from "@/app/components/projects/projectBrief";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";
import { useParams } from "next/navigation";
import Addmember from "@/app/components/projects/addMember";

export default function Overview() {
    const params = useParams();
    const id = params.id as string;
    const docRef = doc(db, "projects", id);
    const [toggleProjectBriefPopup, setToggleProjectBriefPopup] = useState(false);
    const [toggleAddMemberPopup, setToggleAddMemberPopup] = useState(false);
    const [projectBrief, setProjectBrief] = useState("");

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
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if (snapshot.exists()) {
                setProjectBrief(snapshot.data().projectData.projectBrief);
            };
        });

        return () => unsubscribe();
    }, []);


    return (
        <section className="mx-5 mt-5">
            <div>
                <h1 className="font-medium text-xl">Project description</h1>
            </div>
            <div className="mt-10">
                <h1 className="font-medium text-xl">Project roles</h1>
                <div className="flex items-center">
                    <div className="mt-5 flex items-center hover:bg-[#F9F8F8] w-fit pl-2 pr-10 cursor-pointer py-3 rounded-md mr-4" onClick={openAddMember}>
                        <div className="border border-gray-500 border-dotted rounded-full w-fit p-1 mr-2">
                            <IoIosAdd size="1.5rem" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">Add member</p>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center">
                        <div className="mr-2">
                            <Image src={anime} alt="image" width={30} height={30} className="rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium">David Ajibola</p>
                            <p className="text-xs">Project owner</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-medium">Key Resources</h1>
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
                <div className="mt-10 w-[70%] mb-20">
                    <h1 className="text-xl font-medium">Project brief</h1>
                    <p>{projectBrief}</p>
                </div>
            )}
            {toggleProjectBriefPopup && <ProjectBrief closeProjectBrief={closeProjectBrief} />}
            {toggleAddMemberPopup && <Addmember closeAddMember={closeAddMember} />}
        </section>
    );
};