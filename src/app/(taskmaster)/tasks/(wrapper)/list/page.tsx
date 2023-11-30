"use client"

import { useEffect } from "react"
import TaskSubNav from "../../../../components/taskSubNav"
import ListTodoClient from "@/app/client/tasks/listTodoClient"
import ListInprogressClient from "@/app/client/tasks/listInProgressClient"
import ListCompletedClient from "@/app/client/tasks/listCompletedClient"
import TasksHook from "@/app/hooks/tasksHook"
import { TaskListSkeleton } from "@/app/components/skeleton"

export default function List() {
    const { tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading } = TasksHook();

    console.log("inprogress", inprogressTasks)
    
    const handleChange = () => {

        const filteredTodoTasks = todoTasks.filter((task) => task.taskData.completed === true)
        const filteredInProgressTasks = inprogressTasks.filter((task) => task.taskData.completed === true)
        const filteredCompletedTasks = completedTasks.filter((task) => task.taskData.completed === true)

        setTodoTasks(filteredTodoTasks);
        setInprogressTasks(filteredInProgressTasks);
        setCompletedTasks(filteredCompletedTasks);
        console.log('done')

    }


    return (
        <section className="px-10">
            <TaskSubNav />
            <div className="flex items-center">
                <div className="w-[50%] border-b">
                    <p className="text-xs py-3 cursor-default" onClick={handleChange}>Task name</p>
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
                <div>
                    <ListTodoClient />
                    <ListInprogressClient />
                    <ListCompletedClient />
                </div>
            )}
        </section>
    )
}