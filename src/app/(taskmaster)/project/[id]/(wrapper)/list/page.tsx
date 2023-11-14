"use client"
import { IoIosAdd } from "react-icons/io"
import { TbArrowsSort } from "react-icons/tb"
import { GoFilter } from "react-icons/go"
import { CiCircleCheck } from "react-icons/ci"
import { BiSolidDownArrow } from "react-icons/bi"
import { BiSolidRightArrow } from "react-icons/bi"
import { useState } from "react"
import Image from "next/image"
import anime from "../../../../../../../public/anime.jpg"

export default function List() {
    const [showTodoList, setShowTodoList] = useState(true)


    const handleCloseTodoList = () => {
        setShowTodoList(false)
    }

    const handleOpenTodoList = () => {
        setShowTodoList(true)
    }
    return (
        <section>
            <div className="flex items-center pb-3 border-b mr-[3%]">
                <div className="border w-fit px-2 py-1 flex items-center rounded-md border-gray-300 cursor-pointer hover:bg-[#F9F8F8] mr-2">
                    <div>
                        <IoIosAdd size="1.3rem" />
                    </div>
                    <p className="text-xs font-medium">Add Task</p>
                </div>
                <div className="flex items-center mr-1 hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md">
                    <div className="mr-1">
                        <GoFilter />
                    </div>
                    <p className="text-xs">Filter</p>
                </div>
                <div className="flex items-center hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md">
                    <div className="mr-1">
                        <TbArrowsSort />
                    </div>
                    <p className="text-xs">Sort</p>
                </div>
            </div>

            <div className="flex items-center pr-[3%]">
                <div className="w-[50%] border-b">
                    <p className="text-xs py-3 cursor-default">Task name</p>
                </div>
                <div className="flex items-center w-[50%]">
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Assignee</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Due date</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Collaborators</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Priority</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Status</div>
                </div>
            </div>

            <div className="mt-6">
                <div className="flex items-center">
                    {showTodoList ? (
                        <div className="mr-3 opacity-70 cursor-pointer" onClick={handleCloseTodoList}>
                            <BiSolidDownArrow size=".7rem" />
                        </div>
                    ) : (
                        <div className="mr-3 opacity-70 cursor-pointer" onClick={handleOpenTodoList}>
                            <BiSolidRightArrow size=".7rem" />
                        </div>
                    )}
                    <h1 className="text-lg font-medium">To do</h1>
                </div>
                <div className="flex items-center pr-[3%]">
                    <div className="w-[50%] border-y flex items-center h-[42px]">
                        <div className="mr-1 cursor-pointer">
                            <CiCircleCheck size="1.2rem" />
                        </div>
                        <p className="text-sm cursor-pointer">Draft Project</p>
                    </div>
                    <div className="flex items-center w-[50%] h-[42px]">
                        <div className="text-xs w-[20%] border border-r-0 h-full cursor-pointer flex items-center justify-center">
                            <div className="mr-1">
                                <Image src={anime} alt="image" width={23} height={23} className="rounded-full" />
                            </div>
                            <p>David Ajibola</p>
                        </div>
                        <div className="text-xs w-[20%] border border-r-0 h-full cursor-pointer flex items-center justify-center text-red-500">Oct 15 - 17</div>
                        <div className="text-xs w-[20%] border border-r-0 h-full cursor-pointer flex items-center justify-start px-2">
                            <Image src={anime} alt="image" width={23} height={23} className="rounded-full" /> 
                        </div>
                        <div className="text-xs w-[20%] border border-r-0 h-full cursor-pointer flex justify-center items-center">
                            <div className="bg-[#9EE7E3] rounded-3xl w-[95%] h-[80%] flex items-center pl-4">
                                Low
                            </div>
                        </div>
                        <div className="text-xs w-[20%] border border-r-0 h-full cursor-pointer flex items-center justify-center">
                            <div className="bg-[#4ECBC4] rounded-3xl w-[95%] h-[80%] flex items-center pl-4">
                                On track
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}