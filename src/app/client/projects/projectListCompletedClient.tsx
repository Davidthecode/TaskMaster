"use client";

import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";
import { LimitWords } from "../../../../utils/limitWords";
import Link from "next/link";
import ok from "../../../../public/icons8-ok-16 (1).png";
import { useProjects } from "@/app/context/projectsContext";
import { useParams } from "next/navigation";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";
import { useProjectMembersContext } from "@/app/context/projectMembersContext";

export default function ProjectListCompletedClient() {
    const { projectOwnerImageUrl, projectMembers } = useProjectMembersContext();
    const params = useParams();
    const paramsId = params.id;
    const [showCompletedList, setShowCompletedList] = useState(true);
    const { completedProjects, setCompletedProjects, loading, checkFilter, checkIncompleteFilter, filteredCompletedProjects } = useProjects();

    const handleProjects = checkFilter || checkIncompleteFilter ? filteredCompletedProjects : completedProjects;

    const handleCloseTodoList = () => {
        setShowCompletedList(false);
    };

    const handleOpenTodoList = () => {
        setShowCompletedList(true);
    };

    const handleMarkAsComplete = async (id: string) => {
        const docRef = doc(db, "projectsTasks", id);
        const dataToUpdate = {
            "taskData.completed": true
        };
        await updateDoc(docRef, dataToUpdate);
    };

    const handleMarkAsIncomplete = async (id: string) => {
        const docRef = doc(db, "projectsTasks", id);
        const dataToUpdate = {
            "taskData.completed": false
        };
        await updateDoc(docRef, dataToUpdate);
    };

    return (
        <section className="mt-3">
            <div className="flex items-center border-b">
                {showCompletedList ? (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleCloseTodoList}>
                        <BiSolidDownArrow size=".7rem" />
                    </div>
                ) : (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleOpenTodoList}>
                        <BiSolidRightArrow size=".7rem" />
                    </div>
                )}
                <h1 className="text-lg font-medium">Completed</h1>
            </div>
            {handleProjects.map((data: any) => {
                const currentDate = new Date();
                const dueDateFromDB = data.taskData.taskDueDate;
                const taskDueDate = new Date(dueDateFromDB);
                let textColorClass = "";

                if (currentDate < taskDueDate) {
                    textColorClass = "text-green-500";
                } else if (currentDate.toDateString() === taskDueDate.toDateString()) {
                    textColorClass = "text-yellow-500";
                } else {
                    textColorClass = "text-red-500";
                }

                return (
                    <div className={`flex items-center ${showCompletedList ? "flex" : "hidden"}`} key={data.id}>
                        <div className="w-[50%] smallTablet:min-w-[50%] mobile:min-w-[50%] border-b flex items-center h-[42px] cursor-pointer">
                            <div className="cursor-pointer w-fit pl-6">
                                {data.taskData.completed ? (
                                    <Image
                                        src={ok}
                                        alt="image"
                                        width={17}
                                        height={17}
                                        className="opacity-90 mt-1"
                                        onClick={() => handleMarkAsIncomplete(data.id)}
                                    />
                                ) : (
                                    <CiCircleCheck
                                        size="1.2rem"
                                        onClick={() => handleMarkAsComplete(data.id)}
                                    />
                                )}
                            </div>
                            <Link href={`/project/${paramsId}/${data.id}`} className=" w-full h-full flex items-center hover:bg-[#F9F8F8] pl-1">
                                <p className="text-sm">{LimitWords(data.taskData.title, 4)}</p>
                            </Link>
                        </div>
                        <div className="flex items-center w-[50%] smallTablet:min-w-[80%] mobile:min-w-[120%] h-[42px]">
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                <p>David</p>
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center text-red-500 hover:border hover:border-gray-300">
                                <p
                                    className={`${textColorClass}`}>
                                    {new Date(data.taskData.taskDueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </p>
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                <div>
                                    <Image
                                        src={projectOwnerImageUrl}
                                        alt="image"
                                        width={18}
                                        height={18}
                                        className="rounded-full"
                                        loader={({src})=> src}
                                    />
                                </div>
                                {projectMembers.length > 2 ? (
                                    <>
                                        {projectMembers.slice(0, 2).map((projectMember, id) => (
                                            <div key={id}>
                                                <Image
                                                    src={projectMember.photoUrl}
                                                    alt="image"
                                                    width={18}
                                                    height={18}
                                                    className="rounded-full"
                                                    loader={({src})=> src}
                                                />
                                            </div>
                                        ))}
                                        <p className="text-sm font-medium">+{projectMembers.length - 2}</p>
                                    </>) : (
                                    <>
                                        {projectMembers.map((projectMember, id) => (
                                            <div key={id}>
                                                <Image
                                                    src={projectMember.photoUrl}
                                                    alt="image"
                                                    width={18}
                                                    height={18}
                                                    className="rounded-full"
                                                    loader={({src})=> src}
                                                />
                                            </div>
                                        ))}
                                    </>)
                                }
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                <div className={`${data.taskData.taskPriority === "Low" ? "bg-[#9EE7E3]" : data.taskData.taskPriority === "Medium" ? "bg-[#F1BD6C]" : data.taskData.taskPriority === "High" ? "bg-[#CD95EA]" : ""} rounded-3xl w-[95%] h-[65%] flex items-center pl-4`}>
                                    {data.taskData.taskPriority}
                                </div>
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex justify-center items-center hover:border hover:border-gray-300">
                                <div className={`${data.taskData.taskStatus === "On track" ? "bg-[#4ECBC4]" : data.taskData.taskStatus === "At risk" ? "bg-[#F8DF72]" : data.taskData.taskStatus === "Off track" ? "bg-[#F06A6A]" : ""} rounded-3xl w-[95%] h-[65%] flex items-center pl-4`}>
                                    {data.taskData.taskStatus}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}