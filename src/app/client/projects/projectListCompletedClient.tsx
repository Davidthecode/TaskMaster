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

export default function ProjectListCompletedClient() {
    const [showCompletedList, setShowCompletedList] = useState(true);
    const { completedProjects, setCompletedProjects, loading, checkFilter, checkIncompleteFilter, filteredCompletedProjects } = useProjects();

    const handleProjects = checkFilter || checkIncompleteFilter ? filteredCompletedProjects : completedProjects;

    const handleCloseTodoList = () => {
        setShowCompletedList(false);
    };

    const handleOpenTodoList = () => {
        setShowCompletedList(true);
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
                return (
                    <div className={`flex items-center ${showCompletedList ? "flex" : "hidden"}`} key={data.id}>
                        <div className="w-[50%] border-b flex items-center h-[42px] cursor-pointer">
                            <div className="cursor-pointer w-fit">
                                {data.taskData.completed ? (
                                    <Image src={ok} alt="image" width={17} height={17} className="opacity-90 mt-1" />
                                ) : (
                                    <CiCircleCheck size="1.2rem" />
                                )}
                            </div>
                            <Link href={`/tasks/${data.id}`} className=" w-full h-full flex items-center hover:bg-[#F9F8F8] pl-1">
                                <p className="text-sm">{LimitWords(data.taskData.title, 4)}</p>
                            </Link>
                        </div>
                        <div className="flex items-center w-[50%] h-[42px]">
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                <p>David</p>
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center text-red-500 hover:border hover:border-gray-300">
                                <p>{new Date(data.taskData.taskDueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                <p>David, Isioma</p>
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                <div className={`${data.taskData.taskPriority === "Low" ? "bg-[#9EE7E3]" : data.taskData.priority === "Medium" ? "bg-[#F1BD6C]" : data.taskData.priority === "High" ? "bg-[#CD95EA]" : ""} rounded-3xl w-[95%] h-[65%] flex items-center pl-4`}>
                                    {data.taskData.taskPriority}
                                </div>
                            </div>
                            <div className="text-xs w-[20%] border border-t-0 border-r-0 h-full cursor-pointer flex justify-center items-center hover:border hover:border-gray-300">
                                <div className={`${data.taskData.taskStatus === "On track" ? "bg-[#4ECBC4]" : data.taskData.status === "At risk" ? "bg-[#F8DF72]" : data.taskData.status === "Off track" ? "bg-[#F06A6A]" : ""} rounded-3xl w-[95%] h-[65%] flex items-center pl-4`}>
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