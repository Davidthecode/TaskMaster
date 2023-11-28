"use client"

import { AiOutlineClose } from "react-icons/ai"
import TasksHook from "../hooks/tasksHook"

type CloseFilterType = {
    closeFilter: () => void
}

const handleFilterCompleteTasks = async() => {
    const {todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks} = TasksHook()
    if (todoTasks.length && inprogressTasks.length && completedTasks.length) {
        const filteredTodoTasks = todoTasks.filter((task) => task.taskData.completed === true)
        const filteredInProgressTasks = inprogressTasks.filter((task) => task.taskData.completed === true)
        const filteredCompletedTasks = completedTasks.filter((task) => task.taskData.completed === true)

        setTodoTasks((prev) => [...prev, ...filteredTodoTasks]);
        setInprogressTasks((prev) => [...prev, ...filteredInProgressTasks]);
        setCompletedTasks((prev) => [...prev, ...filteredCompletedTasks]);
    }
}

export default function TaskFilter({closeFilter}:CloseFilterType) { 
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