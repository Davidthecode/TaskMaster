"use client"

import TaskSubNav from "@/app/components/tasks/taskSubNav";
import BoardTodoClient from "@/app/client/tasks/boardTodoClient";
import BoardInProgressClient from "@/app/client/tasks/boardInProgressClient";
import BoardCompletedClient from "@/app/client/tasks/boardCompletedClient";
import TasksHook from "@/app/hooks/tasksHook";
import { TaskBoardSkeleton } from "@/app/components/skeleton/skeleton";

export default function Board() {
    const { tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading } = TasksHook();

    return (
        <section className="h-[100%]">
            <div className="px-10 h-[8%]">
                <TaskSubNav />
            </div>
            <section className="flex bg-[#f0eded] px-10 overflow-y-auto h-[92%]">
                {loading ? (
                    <TaskBoardSkeleton />
                ) : (
                    <div className="w-full flex">
                        <BoardTodoClient />
                        <BoardInProgressClient />
                        <BoardCompletedClient />
                    </div>
                )}
            </section>
        </section>
    )
}