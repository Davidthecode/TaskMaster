"use client"

import { Dispatch, SetStateAction } from "react"
import { useState } from "react"
import { BiSolidDownArrow } from "react-icons/bi"
import { BiSolidRightArrow } from "react-icons/bi"
import { CiCircleCheck } from "react-icons/ci"
import Image from "next/image"
import { LimitWords } from "../../../../utils/limitWords"
import Link from "next/link"
import ok from "../../../../public/icons8-ok-16 (1).png"
import { useTasks } from "@/app/context/tasksContext"

type CompletedTaskType = {
    completedTasks: any[],
    setCompletedTasks: Dispatch<SetStateAction<any[]>>,
    loading: boolean
}

export default function ListCompletedClient() {
    const [showCompletedList, setShowCompletedList] = useState(true);
    const { completedTasks, setCompletedTasks, loading, checkFilter, checkIncompleteFilter, filteredCompletedTasks } = useTasks();

    const handleTasks = checkFilter || checkIncompleteFilter ?  filteredCompletedTasks :  completedTasks

    const handleCloseCompletedList = () => {
        setShowCompletedList(false)
    }

    const handleOpenCompletedList = () => {
        setShowCompletedList(true)
    }
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
            {handleTasks.map((completedTask: any) => (
                <Link href={`/tasks/${completedTask.id}`} key={completedTask.id}>
                    <div className={`flex items-center hover:bg-[#F9F8F8] ${showCompletedList ? "flex" : "hidden"}`}>
                        <div className="w-[50%] border-b flex items-center h-[42px] cursor-pointer">
                            <div className="mr-1 cursor-pointer">
                                {completedTask.taskData.completed ? (
                                    <Image src={ok} alt="image" width={17} height={17} className="opacity-90 mt-1" />
                                ) : (
                                    <CiCircleCheck size="1.2rem" />
                                )}
                            </div>
                            <p className="text-sm">{LimitWords(completedTask.taskData.title, 4)}</p>
                        </div>
                        <div className="flex items-center w-[50%] h-[42px]">
                            <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center text-red-500"><p>{new Date(completedTask.taskData.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p></div>
                            <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex justify-center items-center">
                                <div className={`${completedTask.taskData.status === "On track" ? "bg-[#4ECBC4]" : completedTask.taskData.status === "At risk" ? "bg-[#F8DF72]" : completedTask.taskData.status === "Off track" ? "bg-[#F06A6A]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                    {completedTask.taskData.status}
                                </div>
                            </div>
                            <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center">
                                <div className={`${completedTask.taskData.priority === "Low" ? "bg-[#9EE7E3]" : completedTask.taskData.priority === "Medium" ? "bg-[#F1BD6C]" : completedTask.taskData.priority === "High" ? "bg-[#CD95EA]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                    {completedTask.taskData.priority}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    )
}