"use client"

import { IoAddSharp } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { CiFilter } from "react-icons/ci"
import { RiArrowDropDownLine } from "react-icons/ri"
import star from "../../../public/star.png"
import Image from "next/image"
import Addtask from "./addTask"
import { useState } from "react"
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import {AiOutlineBars} from "react-icons/ai"
import { useSidebarContext } from "../state/sidebar/sidebarContext"

export default function HomeNav() {
    const {isOpen, setIsOpen} = useSidebarContext()
    const [isVisible, setIsvisible] = useState(false)

    const handleAddTask = () => {
        setIsvisible(true)
    }

    const onClose = () => {
        setIsvisible(false)
    }

    const handleToggle = () => {
        setIsOpen(true)
    }

    return (
        <section className="h-full flex items-center px-16 smallTablet:px-10 mobile:px-6">
            <div className="mr-4 cursor-pointer hidden largeTablet:block mobile:block" onClick={handleToggle}>
                <BsReverseLayoutTextSidebarReverse size="1.3rem" />
            </div>
            <div
                onClick={handleAddTask}
                className="flex items-center rounded-md cursor-pointer hover:bg-[#EBE9FE] border px-3 py-1 mobile:hidden"
            >
                <div>
                    <IoAddSharp />
                </div>
                <p>Add Task</p>
            </div>
            <div className="border ml-10 h-8 rounded-md flex items-center px-2 smallTablet:w-[60%]">
                <div>
                    <CiSearch />
                </div>
                <input
                    className="outline-none px-2"
                    type="text"
                    placeholder="search..."
                />
            </div>
            <div className="border ml-auto mr-4 px-3 py-1 cursor-pointer rounded-md flex items-center smallTablet:hidden mobile:hidden">
                <p className="mr-2">Upgrade to Pro</p>
                <div>
                    <Image src={star} alt="image" width={20} height={20} />
                </div>
            </div>
            <div className="flex items-center border px-3 py-1 rounded-md smallTablet:hidden mobile:hidden">
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
            <div className="ml-auto cursor-pointer hidden smallTablet:block mobile:block">
                <AiOutlineBars size="1.3rem"/>
            </div>
            {isVisible && <Addtask onClose={onClose} />}
        </section>
    )
}