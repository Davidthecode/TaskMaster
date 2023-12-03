"use client"

import { Dispatch, SetStateAction, useEffect } from "react"
import { useState } from "react"
import { BiSolidDownArrow } from "react-icons/bi"
import { BiSolidRightArrow } from "react-icons/bi"
import { CiCircleCheck } from "react-icons/ci"
import Image from "next/image"
import { LimitWords } from "../../../../utils/limitWords"
import Link from "next/link"
import ok from "../../../../public/icons8-ok-16 (1).png"
import { useTasks } from "@/app/context/tasksContext"

type TodTaskType = {
    todoTasks: any[],
    setTodoTasks: Dispatch<SetStateAction<any[]>>,
    loading: boolean
}
export default function ListTodoClient() {
    const [showTodoList, setShowTodoList] = useState(true)
    const {todoTasks, setTodoTasks, loading} = useTasks()

    const handleCloseTodoList = () => {
        setShowTodoList(false)
    }

    const handleOpenTodoList = () => {
        setShowTodoList(true)
    }
    return (
        <section className="mt-6">
            <div className="flex items-center border-b">
                {showTodoList ? (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleCloseTodoList}>
                        <BiSolidDownArrow size=".7rem" />
                    </div>
                ) : (
                    <div className="mr-3 opacity-70 cursor-pointer" onClick={handleOpenTodoList}>
                        <BiSolidRightArrow size=".7rem" />
                    </div>
                )}
                <h1 className="text-lg font-medium">To do</h1>
            </div>
            {todoTasks.map((todoTask:any) => {
                return (
                    <Link href={`/tasks/${todoTask.id}`} key={todoTask.id}>
                        <div className={`flex items-center hover:bg-[#F9F8F8] ${showTodoList ? "flex" : "hidden"}`}>
                            <div className="w-[50%] border-b flex items-center h-[42px] cursor-pointer">
                                <div className="mr-1 cursor-pointer">
                                    {todoTask.taskData.completed ? (
                                        <Image src={ok} alt="image" width={17} height={17} className="opacity-90 mt-1" />
                                    ) : (
                                        <CiCircleCheck size="1.2rem" />
                                    )}
                                </div>
                                <p className="text-sm">{LimitWords(todoTask.taskData.title, 4)}</p>
                            </div>
                            <div className="flex items-center w-[50%] h-[42px]">
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center text-red-500">
                                    <p>{new Date(todoTask.taskData.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                </div>
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex justify-center items-center">
                                    <div className={`${todoTask.taskData.status === "On track" ? "bg-[#4ECBC4]" : todoTask.taskData.status === "At risk" ? "bg-[#F8DF72]" : todoTask.taskData.status === "Off track" ? "bg-[#F06A6A]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                        {todoTask.taskData.status}
                                    </div>
                                </div>
                                <div className="text-xs w-[33.3%] border border-t-0 border-r-0 h-full cursor-pointer flex items-center justify-center">
                                    <div className={`${todoTask.taskData.priority === "Low" ? "bg-[#9EE7E3]" : todoTask.taskData.priority === "Medium" ? "bg-[#F1BD6C]" : todoTask.taskData.priority === "High" ? "bg-[#CD95EA]" : ""} rounded-3xl w-[95%] h-[80%] flex items-center pl-4`}>
                                        {todoTask.taskData.priority}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}