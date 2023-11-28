"use client"

import { Dispatch, SetStateAction } from "react"
import { CiCircleCheck } from "react-icons/ci"
import Image from "next/image"
import anime from "../../../../public/anime.jpg"
import { LimitWords } from "../../../../utils/limitWords"
import Link from "next/link"
import ok from "../../../../public/icons8-ok-16 (1).png"

type InprogressTaskType = {
    inprogressTasks: any[],
    setInprogressTasks: Dispatch<SetStateAction<any[]>>,
    loading: boolean
}

export default function BoardInProgressClient({ inprogressTasks, setInprogressTasks, loading }: InprogressTaskType) {
    return (
        <section className="w-[22%] mr-5 h-[100%]">
            <div className="h-[12%] flex items-center">
                <h1 className="font-medium">In progress</h1>
            </div>

            <div className="overflow-y-auto h-[88%] pb-1 pr-3">
                {inprogressTasks.map((inprogressTask) => (
                    <Link href={`/tasks/${inprogressTask.id}`} key={inprogressTask.id}>
                        <div className=" flex items-center w-full mb-5 bg-white rounded-md opacity-95">
                            <div className="w-full">
                                <div className="border h-[10rem] rounded-md p-4 cursor-pointer shadow-sm hover:border-black hover:border-opacity-50">
                                    <div className="flex items-center">
                                        <div className="mr-1 cursor-pointer">
                                            {inprogressTask.taskData.completed ? (
                                                <Image src={ok} alt="image" width={17} height={17} className="opacity-90 mt-1" />
                                            ) : (
                                                <CiCircleCheck size="1.2rem" />
                                            )}
                                        </div>
                                        <p>{LimitWords(inprogressTask.taskData.title, 4)}</p>
                                    </div>
                                    <div className="flex items-center mt-3">
                                        <p className={`${inprogressTask.taskData.priority === "Low" ? "bg-[#9EE7E3]" : inprogressTask.taskData.priority === "Medium" ? "bg-[#F1BD6C]" : inprogressTask.taskData.priority === "High" ? "bg-[#CD95EA]" : ""} text-xs mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                            {inprogressTask.taskData.priority}
                                        </p>
                                        <p className={`${inprogressTask.taskData.status === "On track" ? "bg-[#4ECBC4]" : inprogressTask.taskData.status === "At risk" ? "bg-[#F8DF72]" : inprogressTask.taskData.status === "Off track" ? "bg-[#F06A6A]" : ""} text-xs mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90`}>
                                            {inprogressTask.taskData.status}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <div className="mr-3">
                                            <Image src={anime} alt="image" width={22} height={22} className="rounded-full" />
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-xs mr-2 font-semibold">Due</p>
                                            <p className="text-xs">{new Date(inprogressTask.taskData.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                        </div>
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