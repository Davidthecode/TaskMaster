"use client";

import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";
import { LimitWords } from "../../../../utils/limitWords";
import Link from "next/link";
import ok from "../../../../public/icons8-ok-16 (1).png";
import { useProjects } from "@/app/context/projectsContext";
import { useParams } from "next/navigation";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";

export default function ProjectBoardCompletedClient() {
    const params = useParams();
    const paramsId = params.id;
    const { completedProjects, setCompletedProjects, loading, checkFilter, checkIncompleteFilter, filteredCompletedProjects } = useProjects();

    const handleTask = checkFilter || checkIncompleteFilter ? filteredCompletedProjects : completedProjects;

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
        <section className="mr-5 h-[100%]">
            <div className="h-[12%] flex items-center">
                <h1 className="font-medium">Completed</h1>
            </div>

            <div className="overflow-y-auto h-[88%] pb-1 pr-3">
                {handleTask.map((completedTask: any) => {
                    const currentDate = new Date();
                    const dueDateFromDB = completedTask.taskData.taskDueDate;
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
                        <div className="flex items-center w-full mb-5 bg-white rounded-md opacity-95" key={completedTask.id}>
                            <div className="w-full">
                                <div className="border h-[10rem] rounded-md cursor-pointer shadow-sm hover:border-black hover:border-opacity-50 flex flex-col">
                                    <div className="flex items-center">
                                        <div className="mr-1 cursor-pointer pl-4 pt-4">
                                            {completedTask.taskData.completed ? (
                                                <Image
                                                    src={ok}
                                                    alt="image"
                                                    width={20}
                                                    height={20}
                                                    className="opacity-90 mt-1"
                                                    onClick={() => handleMarkAsIncomplete(completedTask.id)}
                                                />
                                            ) : (
                                                <CiCircleCheck
                                                    size="1.2rem"
                                                    onClick={() => handleMarkAsComplete(completedTask.id)}
                                                />
                                            )}
                                        </div>
                                        <Link href={`/project/${paramsId}/${completedTask.id}`} className="h-full w-full">
                                            <p className="w-full h-full pt-4">{LimitWords(completedTask.taskData.title, 4)}</p>
                                        </Link>
                                    </div>
                                    <Link href={`/project/${paramsId}/${completedTask.id}`} className="h-full">
                                        <div className="h-full px-4">
                                            <div className="flex items-center pt-3">
                                                <p className={`${completedTask.taskData.taskPriority === "Low" ? "bg-[#9EE7E3]" : completedTask.taskData.taskPriority === "Medium" ? "bg-[#F1BD6C]" : completedTask.taskData.taskPriority === "High" ? "bg-[#CD95EA]" : ""} text-xs mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                                    {completedTask.taskData.taskPriority}
                                                </p>
                                                <p className={`${completedTask.taskData.taskStatus === "On track" ? "bg-[#4ECBC4]" : completedTask.taskData.taskStatus === "At risk" ? "bg-[#F8DF72]" : completedTask.taskData.taskStatus === "Off track" ? "bg-[#F06A6A]" : ""} text-xs px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                                    {completedTask.taskData.taskStatus}
                                                </p>
                                            </div>
                                            <div className="pt-4 flex items-center">
                                                <div className="mr-3">
                                                    <Image src={completedTask.taskData.assigneeImageUrl} alt="image" width={22} height={22} className="rounded-full" />
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs mr-2 font-semibold">Due</p>
                                                    <p className={`text-xs opacity-80 ${textColorClass}`}>{new Date(completedTask.taskData.taskDueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};