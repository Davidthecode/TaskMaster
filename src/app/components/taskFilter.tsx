"use client"

import {useEffect} from "react"
import { AiOutlineClose } from "react-icons/ai"
import TasksHook from "../hooks/tasksHook"
import { useTasks } from "../context/tasksContext"

type CloseFilterType = {
    closeFilter: () => void
}

export default function TaskFilter({closeFilter}:CloseFilterType) {
    const {todoTasks, inprogressTasks, completedTasks, setTodoTasks, setInprogressTasks, setCompletedTasks} = useTasks()
    // const {todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks} = TasksHook();
    // console.log("inprogressTasks", inprogressTasks)

    const handleFilterCompleteTasks = () => {
        if (todoTasks.length || inprogressTasks.length || completedTasks.length) {
            const filteredTodoTasks = todoTasks.filter((task:any) => task.taskData.completed === true)
            const filteredInProgressTasks = inprogressTasks.filter((task:any) => task.taskData.completed === true)
            const filteredCompletedTasks = completedTasks.filter((task:any) => task.taskData.completed === true)
    
            setTodoTasks(filteredTodoTasks);
            setInprogressTasks(filteredInProgressTasks);
            setCompletedTasks(filteredCompletedTasks);
        }
    } 

    
    return (
        <section className="w-full h-full flex flex-col">
            <div className="flex items-center">
                <h1 className="text-sm font-medium">Quick filter</h1>
                <div
                    onClick={closeFilter}
                    className='w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 flex justify-center items-center h-8 cursor-pointer rounded-md'
                >
                    <AiOutlineClose size='.9rem' />
                </div>
            </div>
            <div className="mt-4 flex items-center">
                <div className="mr-5">
                    <button className="text-xs border border-gray-400 px-3 py-1 rounded-md hover:bg-[#F9F8F8] hover:font-medium hover:border-none">Incomplete tasks</button>
                </div>
                <div>
                    <button className="text-xs border border-gray-400 px-3 py-1 rounded-md hover:bg-[#F9F8F8] hover:font-medium hover:border-none" onClick={handleFilterCompleteTasks}>complete tasks</button>
                </div>
            </div>
            <div className="mt-8 border"></div>
            <div className="flex">
                <div className="ml-auto mt-2">
                    <button className="text-xs border px-3 py-1 rounded-md hover:bg-[#F9F8F8]">Clear all</button>
                </div>
            </div>
        </section>
    )
}