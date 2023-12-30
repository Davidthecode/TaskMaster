"use client";

import { Dispatch, SetStateAction } from "react";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
import { LimitWords } from "../../../../utils/limitWords";
import { HomeSkeleton } from "../skeleton/skeleton";

type TodTaskType = {
    todoTasks: any[],
    setTodoTasks: Dispatch<SetStateAction<any[]>>,
    loading: boolean
};

export default function TodoTasks({ todoTasks, setTodoTasks, loading }: TodTaskType) {
    if (loading) {
        return (
            <HomeSkeleton />
        )
    };
    if (todoTasks.length == 0) {
        return (
            <div className="flex justify-center">
                <h1>You have no Todo task yet..</h1>
            </div>
        )
    };
    return (
        <section className="h-full">
            {todoTasks.map((todoTask) => {
                return (
                    <Link href={`/tasks/${todoTask.id}`} key={todoTask.id}>
                        <div className="border max-h-[54%] px-2 py-1 mb-6 bg-white cursor-pointer hover:bg-gray-300 flex flex-col rounded-md">
                            <div className="flex justify-between items-center mb-1">
                                <h1 className="text-lg font-medium">{LimitWords(todoTask.taskData.title, 4)}</h1>
                            </div>
                            <div className="mb-2">
                                <p className="opacity-70">{LimitWords(todoTask.taskData.note, 20)}</p>
                            </div>
                            <div className="w-full lg:w-[70%] mb-2 mt-auto ml-auto largeScreen:w-[85%]">
                                <div className="flex items-center justify-center bg-[#DDDDDC] py-1 rounded-md">
                                    <div className="mr-1">
                                        <SlCalender size=".8rem" />
                                    </div>
                                    <p className="text-xs">{todoTask.taskData.dataAndTimeAdded}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
};