"use client"

import {useEffect} from "react"
import TaskSubNav from "../../../../components/taskSubNav"
import ListTodoClient from "@/app/client/tasks/listTodoClient"
import ListInprogressClient from "@/app/client/tasks/listInProgressClient"
import ListCompletedClient from "@/app/client/tasks/listCompletedClient"
import TasksHook from "@/app/hooks/tasksHook"
import { TaskListSkeleton } from "@/app/components/skeleton"

export default function List() {
    const { tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading, filterTasks} = TasksHook();

    useEffect(()=> {
        console.log(filterTasks)
    },[filterTasks])

    // console.log("todo", todoTasks)
    // console.log("inprogress", inprogressTasks)
    // console.log("completed", completedTasks)

    
        if (filterTasks) {
            const filteredTodoTasks = todoTasks.filter((task) => task.taskData.completed === true)
            const filteredInProgressTasks = inprogressTasks.filter((task) => task.taskData.completed === true)
            const filteredCompletedTasks = completedTasks.filter((task) => task.taskData.completed === true)
    
            setTodoTasks(filteredTodoTasks);
            setInprogressTasks(filteredInProgressTasks);
            setCompletedTasks(filteredCompletedTasks);
        }
    

    return (
        <section className="px-10">
            <TaskSubNav />
            <div className="flex items-center">
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
                <div>
                    <ListTodoClient todoTasks={todoTasks} setTodoTasks={setTodoTasks} loading={loading} />
                    <ListInprogressClient inprogressTasks={inprogressTasks} setInprogressTasks={setInprogressTasks} loading={loading} />
                    <ListCompletedClient completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} loading={loading} />
                </div>
            )}
        </section>
    )
}