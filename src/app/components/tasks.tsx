"use client"

import Image from "next/image"
import loaderOne from "../../../public/loader (1).png"
import loaderTwo from "../../../public/loader (2).png"
import loaderThree from "../../../public/loader (3).png"
import TodoTask from "./todoTask"
export default function Tasks() {
    return (
        <div className="bg-[#F3F4F8] h-[92%] w-full px-16 pt-4 flex justify-between">
            <div className="w-[25%] h-full">
                <div className="border h-[7%] w-full bg-white rounded-md flex items-center">
                    <h1 className="px-4">To Do</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderOne} alt="image" height={20} width={20} />
                    </div>
                </div>
                <div className="h-[88%] mt-[5%]">
                    <TodoTask />
                </div>
            </div>
            <div className="w-[25%]">
                <div className="border h-12 w-full bg-white rounded-md flex items-center">
                    <h1 className="px-4">In progress</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderTwo} alt="image" height={20} width={20} />
                    </div>
                </div>
            </div>
            <div className="w-[25%]">
                <div className="border h-12 w-full bg-white rounded-md flex items-center">
                    <h1 className="px-4">Completed</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderThree} alt="image" height={20} width={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}