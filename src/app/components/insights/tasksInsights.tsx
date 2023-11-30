"use client"

export default function TasksInsights() {
    return (
        <div className="mt-10 flex items-center justify-around mx-20">
            <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Completed tasks</h1>
                <h1 className="mt-4 text-4xl">0</h1>
            </div>
            <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Incomplete tasks</h1>
                <h1 className="mt-4 text-4xl">12</h1>
            </div>
            <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Overdue tasks</h1>
                <h1 className="mt-4 text-4xl">9</h1>
            </div>
            <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                <h1 className="text-xl ">Total tasks</h1>
                <h1 className="mt-4 text-4xl">12</h1>
            </div>
        </div>
    )
}