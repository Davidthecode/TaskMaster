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

export default function ProjectBoardTodoClient() {
    const params = useParams();
    const paramsId = params.id
    const { todoProjects, setTodoProjects, loading, checkFilter, checkIncompleteFilter, filteredTodoProjects } = useProjects();

    const handleTask = checkFilter || checkIncompleteFilter ? filteredTodoProjects : todoProjects;

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
                <h1 className="font-medium">To do</h1>
            </div>

            <div className="overflow-y-auto h-[88%] pb-1 pr-3">
                {handleTask.map((todoTask: any) => {
                    const currentDate = new Date();
                    const dueDateFromDB = todoTask.taskData.taskDueDate;
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
                        <div className="flex items-center w-full mb-5 bg-white rounded-md opacity-95" key={todoTask.id}>
                            <div className="w-full">
                                <div className="border h-[10rem] rounded-md cursor-pointer shadow-sm hover:border-black hover:border-opacity-50 flex flex-col">
                                    <div className="flex items-center">
                                        <div className="mr-1 cursor-pointer pl-4 pt-4">
                                            {todoTask.taskData.completed ? (
                                                <Image
                                                    src={ok}
                                                    alt="image"
                                                    width={20}
                                                    height={20}
                                                    className="opacity-90 mt-1"
                                                    onClick={() => handleMarkAsIncomplete(todoTask.id)}
                                                />
                                            ) : (
                                                <CiCircleCheck
                                                    size="1.2rem"
                                                    onClick={() => handleMarkAsComplete(todoTask.id)}
                                                />
                                            )}
                                        </div>
                                        <Link href={`/project/${paramsId}/${todoTask.id}`} className="h-full w-full">
                                            <p className="w-full h-full pt-4">{LimitWords(todoTask.taskData.title, 4)}</p>
                                        </Link>
                                    </div>
                                    <Link href={`/project/${paramsId}/${todoTask.id}`} className="h-full">
                                        <div className="h-full px-4">
                                            <div className="flex items-center pt-3">
                                                <p className={`${todoTask.taskData.taskPriority === "Low" ? "bg-[#9EE7E3]" : todoTask.taskData.taskPriority === "Medium" ? "bg-[#F1BD6C]" : todoTask.taskData.taskPriority === "High" ? "bg-[#CD95EA]" : ""} text-xs mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                                    {todoTask.taskData.taskPriority}
                                                </p>
                                                <p className={`${todoTask.taskData.taskStatus === "On track" ? "bg-[#4ECBC4]" : todoTask.taskData.taskStatus === "At risk" ? "bg-[#F8DF72]" : todoTask.taskData.taskStatus === "Off track" ? "bg-[#F06A6A]" : ""} text-xs px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                                    {todoTask.taskData.taskStatus}
                                                </p>
                                            </div>
                                            <div className="pt-4 flex items-center">
                                                <div className="mr-3">
                                                    <Image
                                                        src={todoTask.taskData.assigneeImageUrl}
                                                        alt="image"
                                                        width={22}
                                                        height={22}
                                                        className="rounded-full"
                                                        loader={({ src }) => src}
                                                    />
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs mr-2 font-semibold">Due</p>
                                                    <p className={`text-xs opacity-80 ${textColorClass}`}>{new Date(todoTask.taskData.taskDueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
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