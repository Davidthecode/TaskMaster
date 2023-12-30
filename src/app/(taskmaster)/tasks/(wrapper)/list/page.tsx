"use client";

import TaskSubNav from "../../../../components/tasks/taskSubNav";
import ListTodoClient from "@/app/client/tasks/listTodoClient";
import ListInprogressClient from "@/app/client/tasks/listInProgressClient";
import ListCompletedClient from "@/app/client/tasks/listCompletedClient";
import { TaskListSkeleton } from "@/app/components/skeleton/skeleton";
import { useTasks } from "@/app/context/tasksContext";

export default function List() {
    const { loading } = useTasks();

    return (
        <section className="px-10 h-[100%]">
            <div className="h-[8%]">
                <TaskSubNav />
            </div>
            <div className="flex items-center h-[8%]">
                <div className="w-[50%] border-b">
                    <p className="text-xs py-3 cursor-default">Task name</p>
                </div>
                <div className="flex items-center w-[50%]">
                    <div className="text-xs w-[33.3%] border border-t-0 border-r-0 py-3 text-center cursor-default">Due date</div>
                    <div className="text-xs w-[33.3%] border border-t-0 border-r-0 py-3 text-center cursor-default">Status</div>
                    <div className="text-xs w-[33.3%] border border-t-0 border-r-0 py-3 text-center cursor-default">Priority</div>
                </div>
            </div>
            {loading ? (
                <TaskListSkeleton />
            ) : (
                <div className="h-[84%] overflow-y-auto pb-4">
                    <ListTodoClient />
                    <ListInprogressClient />
                    <ListCompletedClient />
                </div>
            )}
        </section>
    )
}