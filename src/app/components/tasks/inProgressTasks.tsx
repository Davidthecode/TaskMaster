"use client"

import { Dispatch, SetStateAction } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { SlCalender } from "react-icons/sl"
import { BsPinAngle } from "react-icons/bs"
import Link from "next/link"
import { LimitWords } from "../../../../utils/limitWords"
import { HomeSkeleton } from "../skeleton"

type InprogressTaskType = {
    inprogressTasks: any[],
    setInprogressTasks: Dispatch<SetStateAction<any[]>>,
    loading: boolean
}
export default function InProgressTasks({ inprogressTasks, setInprogressTasks, loading }: InprogressTaskType) {
    if(loading){
        return (
            <HomeSkeleton />
        )
    }
    if(inprogressTasks.length == 0){
        return(
            <div className="flex justify-center">
                <h1>You have no In progress task yet..</h1>
            </div>
        )
    }
    return (
        <section className="h-full">
            {inprogressTasks.map((inprogressTask) => {
                return (
                    <Link href={`/tasks/${inprogressTask.id}`} key={inprogressTask.id}>
                        <div className="border max-h-[54%] px-2 py-1 mb-6 bg-white cursor-pointer hover:bg-gray-300 flex flex-col rounded-md">
                            <div className="flex justify-between items-center mb-1">
                                <h1 className="text-lg font-medium">{LimitWords(inprogressTask.taskData.title, 4)}</h1>
                            </div>
                            <div className="mb-2">
                                <p className="opacity-70">{LimitWords(inprogressTask.taskData.note, 20)}</p>
                            </div>
                            <div className="w-full lg:w-[70%] mb-2 mt-auto ml-auto largeScreen:w-[85%]">
                                <div className="flex items-center justify-center bg-[#DDDDDC] py-1 rounded-sm">
                                    <div className="mr-1">
                                        <SlCalender size=".8rem" />
                                    </div>
                                    <p className="text-xs">October 9, 2023 1:02 PM</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}