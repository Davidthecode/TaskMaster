"use client"

import { IoIosAdd } from "react-icons/io"
import { TbArrowsSort } from "react-icons/tb"
import { GoFilter } from "react-icons/go"
import { CiCircleCheck } from "react-icons/ci"
import Image from "next/image"
import anime from "../../../../../../../public/anime.jpg"

export default function Board() {
    return (
        <section>
            <div className="flex items-center pb-3 border-b">
                <div className="border w-fit px-2 py-1 flex items-center rounded-md border-gray-300 cursor-pointer hover:bg-[#F9F8F8] mr-5">
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
            <div className="mt-10 flex items-center">
                <div className="w-[20%] mr-5">
                    <div className="mb-3">
                        <h1 className="font-medium">To do</h1>
                    </div>
                    <div className="border h-[10rem] rounded-md p-4 cursor-pointer shadow-sm hover:border-black hover:border-opacity-50">
                        <div className="flex items-center">
                            <div className="mr-1">
                                <CiCircleCheck size="1.2rem" />
                            </div>
                            <p>Draft project</p>
                        </div>
                        <div className="flex items-center mt-3">
                            <p className="text-xs bg-[#9EE7E3] mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90">Low</p>
                            <p className="text-xs bg-[#4ECBC4] px-2 w-fit py-[2px] rounded-xl opacity-90">On track</p>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="mr-3">
                                <Image src={anime} alt="image" width={22} height={22} className="rounded-full" />
                            </div>
                            <p className="text-xs opacity-80">Oct 15 - 17</p>
                        </div>
                    </div>
                </div>
                <div className="w-[20%] mr-5">
                    <div className="mb-3">
                        <h1 className="font-medium">In progress</h1>
                    </div>
                    <div className="border h-[10rem] rounded-md p-4 cursor-pointer shadow-sm hover:border-black hover:border-opacity-50">
                        <div className="flex items-center">
                            <div className="mr-1">
                                <CiCircleCheck size="1.2rem" />
                            </div>
                            <p>Schedule meeting</p>
                        </div>
                        <div className="flex items-center mt-3">
                            <p className="text-xs bg-[#F1BD6C] mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90">Medium</p>
                            <p className="text-xs bg-[#F8DF72] px-2 w-fit py-[2px] rounded-xl opacity-90">At risk</p>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="mr-3">
                                <Image src={anime} alt="image" width={22} height={22} className="rounded-full" />
                            </div>
                            <p className="text-xs">Oct 15 - 17</p>
                        </div>
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className="mb-3">
                        <h1 className="font-medium">Completed</h1>
                    </div>
                    <div className="border h-[10rem] rounded-md p-4 cursor-pointer shadow-sm hover:border-black hover:border-opacity-50">
                        <div className="flex items-center">
                            <div className="mr-1">
                                <CiCircleCheck size="1.2rem" />
                            </div>
                            <p>Share timeline</p>
                        </div>
                        <div className="flex items-center mt-3">
                            <p className="text-xs bg-[#8F6BA2] mr-3 px-2 w-fit py-[2px] rounded-xl opacity-90">High</p>
                            <p className="text-xs bg-[#F06A6A] px-2 w-fit py-[2px] rounded-xl opacity-90">Off track</p>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="mr-3">
                                <Image src={anime} alt="image" width={22} height={22} className="rounded-full" />
                            </div>
                            <p className="text-xs">Oct 15 - 17</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}