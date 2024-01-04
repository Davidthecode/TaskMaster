"use client"

import { Dispatch, SetStateAction } from "react"
import { useState } from "react"
import { BiSolidDownArrow } from "react-icons/bi"
import { BiSolidRightArrow } from "react-icons/bi"
import { CiCircleCheck } from "react-icons/ci"
import Image from "next/image"
import Link from "next/link"
import { LimitWords } from "../../../../utils/limitWords"
import ok from "../../../../public/icons8-ok-16 (1).png"
import { useTasks } from "@/app/context/tasksContext"

export default function ListInprogressClient() {
    const [showInprogressList, setShowInprogressList] = useState(true)
    const { inprogressTasks, setInprogressTasks, loading, checkFilter, checkIncompleteFilter, filteredInProgressTasks } = useTasks();

    const handleTasks = checkFilter || checkIncompleteFilter ? filteredInProgressTasks : inprogressTasks

    const handleCloseInprogressList = () => {
        setShowInprogressList(false)
    }

    const handleOpenInprogressList = () => {
        setShowInprogressList(true)
    }
    return (
        <section className="mt-6">
            <div className="flex items-center border-b">
                {showInprogressList ? (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleCloseInprogressList}>
                        <BiSolidDownArrow size=".7rem" />
                    </div>
                ) : (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleOpenInprogressList}>
                        <BiSolidRightArrow size=".7rem" />
                    </div>
                )}
                <h1 className="text-lg font-medium">In progress</h1>
            </div>
            {handleTasks.map((inprogressTask: any) => {
                return (
                    <section key={inprogressTask.id}>
                        <div className={`flex items-center ${showInprogressList ? "flex" : "hidden"}`}>
                            <div className="w-[50%] border-b flex items-center h-[42px] cursor-pointer">
                                <div className="mr-1 cursor-pointer w-fit pl-6">
                                    {inprogressTask.taskData.completed ? (
                                        <Image src={ok} alt="image" width={17} height={17} className="opacity-90 mt-1" />
                                    ) : (
                                        <CiCircleCheck size="1.2rem" />
                                    )}
                                </div>
                                <Link href={`/tasks/${inprogressTask.id}`} className="w-full h-full flex items-center hover:bg-[#F9F8F8] pl-1">
                                    <p className="text-sm">{LimitWords(inprogressTask.taskData.title, 4)}</p>
                                </Link>
                            </div>
                            <div className="flex items-center w-[50%] h-[42px]">
                                <div className={`text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center text-red-500 hover:border hover:border-gray-300`}>
                                    <p>{new Date(inprogressTask.taskData.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </p>
                                </div>
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex justify-center items-center hover:border hover:border-gray-300">
                                    <div className={`${inprogressTask.taskData.status === "On track" ? "bg-[#4ECBC4]" : inprogressTask.taskData.status === "At risk" ? "bg-[#F8DF72]" : inprogressTask.taskData.status === "Off track" ? "bg-[#F06A6A]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                        {inprogressTask.taskData.status}
                                    </div>
                                </div>
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center hover:border hover:border-gray-300">
                                    <div className={`${inprogressTask.taskData.priority === "Low" ? "bg-[#9EE7E3]" : inprogressTask.taskData.priority === "Medium" ? "bg-[#F1BD6C]" : inprogressTask.taskData.priority === "High" ? "bg-[#CD95EA]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                        {inprogressTask.taskData.priority}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </section>
    )
}