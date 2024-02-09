"use client"

import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";
import { LimitWords } from "../../../../utils/limitWords";
import Link from "next/link";
import ok from "../../../../public/icons8-ok-16 (1).png";
import { useTasks } from "@/app/context/tasksContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";

export default function ListCompletedClient() {
    const [showCompletedList, setShowCompletedList] = useState(true);
    const { completedTasks, setCompletedTasks, loading, checkFilter, checkIncompleteFilter, filteredCompletedTasks } = useTasks();

    const handleTasks = checkFilter || checkIncompleteFilter ? filteredCompletedTasks : completedTasks;

    const handleCloseCompletedList = () => {
        setShowCompletedList(false);
    };

    const handleOpenCompletedList = () => {
        setShowCompletedList(true);
    };

    const handleMarkAsComplete = async (id: string) => {
        const docRef = doc(db, "tasks", id);
        const dataToUpdate = {
            "taskData.completed": true
        };

        await updateDoc(docRef, dataToUpdate);

    };

    const handleMarkAsIncomplete = async (id: string) => {
        const docRef = doc(db, "tasks", id);
        const dataToUpdate = {
            "taskData.completed": false
        };

        await updateDoc(docRef, dataToUpdate);
    };

    return (
        <section className="mt-6">
            <div className="flex items-center border-b">
                {showCompletedList ? (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleCloseCompletedList}>
                        <BiSolidDownArrow size=".7rem" />
                    </div>
                ) : (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleOpenCompletedList}>
                        <BiSolidRightArrow size=".7rem" />
                    </div>
                )}
                <h1 className="text-lg font-medium">Completed</h1>
            </div>
            {handleTasks.map((completedTask: any) => {
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
                    <section key={completedTask.id}>
                        <div className={`flex items-center ${showCompletedList ? "flex" : "hidden"}`}>
                            <div className="w-[50%] smallTablet:min-w-[50%] mobile:min-w-[50%] border-b flex items-center h-[42px] cursor-pointer">
                                <div className="mr-1 cursor-pointer w-fit pl-6">
                                    {completedTask.taskData.completed ? (
                                        <Image
                                            src={ok}
                                            alt="image"
                                            width={17}
                                            height={17}
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
                                <Link href={`/tasks/${completedTask.id}`} className="w-full h-full flex items-center hover:bg-[#F9F8F8] pl-1">
                                    <p className="text-sm">{LimitWords(completedTask.taskData.title, 4)}</p>
                                </Link>
                            </div>
                            <div className="flex items-center w-[50%] smallTablet:min-w-[80%] mobile:min-w-[120%] h-[42px]">
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center text-red-500 hover:border hover:border-gray-300">
                                    <p className={`${textColorClass}`}>
                                        {new Date(completedTask.taskData.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </p>
                                </div>
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex justify-center items-center hover:border hover:border-gray-300">
                                    <div className={`${completedTask.taskData.status === "On track" ? "bg-[#4ECBC4]" : completedTask.taskData.status === "At risk" ? "bg-[#F8DF72]" : completedTask.taskData.status === "Off track" ? "bg-[#F06A6A]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                        {completedTask.taskData.status}
                                    </div>
                                </div>
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                    <div className={`${completedTask.taskData.priority === "Low" ? "bg-[#9EE7E3]" : completedTask.taskData.priority === "Medium" ? "bg-[#F1BD6C]" : completedTask.taskData.priority === "High" ? "bg-[#CD95EA]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                        {completedTask.taskData.priority}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </section>
    )
};