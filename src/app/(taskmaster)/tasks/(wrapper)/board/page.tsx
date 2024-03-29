"use client"

import TaskSubNav from "@/app/components/tasks/taskSubNav";
import BoardTodoClient from "@/app/client/tasks/boardTodoClient";
import BoardInProgressClient from "@/app/client/tasks/boardInProgressClient";
import BoardCompletedClient from "@/app/client/tasks/boardCompletedClient";
import { useTasks } from "@/app/context/tasksContext";
import { TaskBoardSkeleton } from "@/app/components/skeleton/skeleton";

export default function Board() {
    const { loading } = useTasks();

    return (
        <section className="h-[100%]">
            <div className="pl-4 pr-2 h-[8%]">
                <TaskSubNav />
            </div>
            <div className="flex bg-[#f0eded] px-6 overflow-y-auto h-[92%]">
                {loading ? (
                    <TaskBoardSkeleton />
                ) : (
                    <div className="w-full flex">
                        <div className="w-[22%] largeScreen:w-[28%] largeTablet:w-[28%] smallTablet:min-w-[50%] mobile:min-w-[80%]">
                            <BoardTodoClient />
                        </div>
                        <div className="w-[22%] largeScreen:w-[28%] largeTablet:w-[28%] smallTablet:min-w-[50%] mobile:min-w-[80%]">
                            <BoardInProgressClient />
                        </div>
                        <div className="w-[22%] largeScreen:w-[28%] largeTablet:w-[28%] smallTablet:min-w-[50%] mobile:min-w-[80%]">
                            <BoardCompletedClient />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}