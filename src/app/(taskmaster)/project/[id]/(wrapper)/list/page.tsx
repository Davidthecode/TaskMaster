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
import ProjectsSubnav from "@/app/components/projects/projectsSubnav";
import ProjectListTodoClient from "@/app/client/projects/projectListTodoClient"
import ProjectListInprogressClient from "@/app/client/projects/projectListInprogressClient"
import ProjectListCompletedClient from "@/app/client/projects/projectListCompletedClient"

export default function List() {
    const [showTodoList, setShowTodoList] = useState(true)


    const handleCloseTodoList = () => {
        setShowTodoList(false)
    }

    const handleOpenTodoList = () => {
        setShowTodoList(true)
    }
    return (
        <section className="px-10 h-[100%]">
            <div className="h-[8%]">
                <ProjectsSubnav />
            </div>

            <div className="flex items-center h-[8%]">
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

            <div className="h-[84%] overflow-y-auto pb-4">
                <ProjectListTodoClient />
                <ProjectListInprogressClient />
                <ProjectListCompletedClient />
            </div>

            {/* <div className="mt-6">
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
            </div> */}

        </section>
    )
}