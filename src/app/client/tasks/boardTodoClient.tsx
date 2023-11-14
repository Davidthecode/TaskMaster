"use client"

import { Dispatch, SetStateAction } from "react"
import { CiCircleCheck } from "react-icons/ci"
import Image from "next/image"
import anime from "../../../../public/anime.jpg"
import { LimitWords } from "../../../../utils/limitWords"
import Link from "next/link"

type TodTaskType = {
    todoTasks: any[],
    setTodoTasks: Dispatch<SetStateAction<any[]>>,
    loading: boolean
}
export default function BoardTodoClient({ todoTasks, setTodoTasks, loading }: TodTaskType) {
    return (
        <section className="w-[22%] mr-5 h-[100%]">
            <div className="h-[12%] flex items-center">
                <h1 className="font-medium">To do</h1>
            </div>

            <div className="overflow-y-auto h-[88%] pb-1 pr-3">
                {todoTasks.map((todoTask) => (
                    <Link href={`/tasks/${todoTask.id}`} key={todoTask.id}>
                        <div className="flex items-center w-full mb-5 bg-white rounded-md opacity-95">
                            <div className="w-full">
                                <div className="border h-[10rem] rounded-md p-4 cursor-pointer shadow-sm hover:border-black hover:border-opacity-50">
                                    <div className="flex items-center">
                                        <div className="mr-1">
                                            <CiCircleCheck size="1.2rem" />
                                        </div>
                                        <p>{LimitWords(todoTask.taskData.title, 4)}</p>
                                    </div>
                                    <div className="flex items-center mt-3">
                                        <p className={`${todoTask.taskData.priority === "Low" ? "bg-[#9EE7E3]" : todoTask.taskData.priority === "Medium" ? "bg-[#F1BD6C]" : todoTask.taskData.priority === "High" ? "bg-[#CD95EA]" : ""} text-xs mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                            {todoTask.taskData.priority}
                                        </p>
                                        <p className={`${todoTask.taskData.status === "On track" ? "bg-[#4ECBC4]" : todoTask.taskData.status === "At risk" ? "bg-[#F8DF72]" : todoTask.taskData.status === "Off track" ? "bg-[#F06A6A]" : ""} text-xs px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                            {todoTask.taskData.status}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <div className="mr-3">
                                            <Image src={anime} alt="image" width={22} height={22} className="rounded-full" />
                                        </div>
                                        <p className="text-xs opacity-80">Oct 15 - 17</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}