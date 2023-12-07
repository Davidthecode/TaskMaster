"use client";

import Image from "next/image";
import spinner from "../../../../public/icons8-spinner.gif";
import TasksHook from "@/app/hooks/tasksHook";

export default function TasksInsights() {
    const { tasks, loading } = TasksHook();
    const tasksMarkedAsCompleted = tasks.filter((task => task.taskData.completed));
    const tasksMarkedAsInComplete = tasks.filter((task => !task.taskData.completed));
    const overdueTasks = tasks.filter((task) => {
        const dueDate = new Date(task.taskData.dueDate);
        const currentDate = new Date();
        return dueDate < currentDate;
    });
    return (
        <div className="mt-10 flex items-center justify-between mx-20">
            <div className="border border-gray-300 w-[23%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Completed tasks</h1>
                {loading ? (
                    <div className="flex justify-center mt-8">
                        <Image src={spinner} alt="image" width={20} height={20} />
                    </div>
                ) : (
                    <p className="mt-4 text-4xl">{tasksMarkedAsCompleted.length}</p>
                )}
            </div>
            <div className="border border-gray-300 w-[23%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Incomplete tasks</h1>
                {loading ? (
                    <div className="flex justify-center mt-8">
                        <Image src={spinner} alt="image" width={20} height={20} />
                    </div>
                ) : (
                    <p className="mt-4 text-4xl">{tasksMarkedAsInComplete.length}</p>
                )}
            </div>
            <div className="border border-gray-300 w-[23%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Overdue tasks</h1>
                {loading ? (
                    <div className="flex justify-center mt-8">
                        <Image src={spinner} alt="image" width={20} height={20} />
                    </div>
                ) : (
                    <p className="mt-4 text-4xl">{overdueTasks.length}</p>
                )}
            </div>
            <div className="border border-gray-300 w-[23%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Total tasks</h1>
                {loading ? (
                    <div className="flex justify-center mt-8">
                        <Image src={spinner} alt="image" width={20} height={20} />
                    </div>
                ) : (
                    <p className="mt-4 text-4xl">{tasks.length}</p>
                )}
            </div>
        </div>
    )
}