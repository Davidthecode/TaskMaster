"use client"

import { IoAddSharp } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { CiFilter } from "react-icons/ci"
import { RiArrowDropDownLine } from "react-icons/ri"
import star from "../../../public/star.png"
import Image from "next/image"
import Addtask from "./addTask"
import { useState } from "react"

export default function HomeNav() {
    const [isVisible, setIsvisible] = useState(false)

    const handleAddTask = () => {
        setIsvisible(true)
    }
    
    const onClose = () => {
        setIsvisible(false)
    }

    return (
        <section className="h-full flex items-center px-16">
            <div
                onClick={handleAddTask}
                className="flex items-center rounded-md cursor-pointer hover:bg-[#EBE9FE] border px-3 py-1"
            >
                <div>
                    <IoAddSharp />
                </div>
                <p>Add Task</p>
            </div>
            <div className="border ml-10 h-8 rounded-md flex items-center px-2">
                <div>
                    <CiSearch />
                </div>
                <input
                    className="outline-none px-2"
                    type="text"
                    placeholder="search..."
                />
            </div>
            <div className="border ml-auto mr-4 px-3 py-1 cursor-pointer rounded-md flex items-center">
                <p className="mr-2">Upgrade to Pro</p>
                <div>
                    <Image src={star} alt="image" width={20} height={20} />
                </div>
            </div>
            <div className="flex items-center border px-3 py-1 rounded-md">
                <div className="flex items-center mr-2">
                    <div>
                        <CiFilter />
                    </div>
                    <p>Filter</p>
                </div>
                <div className="cursor-pointer">
                    <RiArrowDropDownLine size="1.5rem" />
                </div>
            </div>
            <div>
                
            </div>
            {isVisible && <Addtask onClose= {onClose} />}
        </section>
    )
}