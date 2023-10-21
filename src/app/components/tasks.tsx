"use client"

import Image from "next/image"
import loaderOne from "../../../public/loader (1).png"
import loaderTwo from "../../../public/loader (2).png"
import loaderThree from "../../../public/loader (3).png"
import TodoTasks from "./todoTasks"
import InProgressTasks from "./inProgressTasks"
import CompletedTasks from "./completedTasks"
import MobileTodo from "./mobileTodo"

export default function Tasks() {
    return (
        <div className="bg-[#F3F4F8] h-[92%] w-[100%] flex flex-col justify-between pb-4">
            <div className="flex justify-between h-[10%] mb-[1%] px-16 mobile:px-6 smallTablet:px-6 pt-3 mobile:hidden">
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">To Do</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderOne} alt="image" height={20} width={20} />
                    </div>
                </div>
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">In progress</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderTwo} alt="image" height={20} width={20} />
                    </div>
                </div>
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">Completed</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderThree} alt="image" height={20} width={20} />
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between h-[92%] overflow-y-auto px-16 mobile:px-6 smallTablet:px-6 py-4 mobile:hidden">
                <div className="h-[100%] w-[28%] largeTablet:w-[30%]">
                    <TodoTasks />
                </div>
                <div className="h-[100%] w-[28%] largeTablet:w-[30%]">
                    <InProgressTasks />
                </div>
                <div className="h-[100%] w-[28%] largeTablet:w-[30%]">
                    <CompletedTasks />
                </div>
            </div>
            <div className="hidden mobile:block h-[100%] w-[100%]">
                <MobileTodo />
            </div>
        </div>
    )
}