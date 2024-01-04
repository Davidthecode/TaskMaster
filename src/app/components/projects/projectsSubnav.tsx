"use client";

import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GoFilter } from "react-icons/go";
import { TbArrowsSort } from "react-icons/tb";
import AddProjectTask from "./addTask";

export default function ProjectsSubnav() {
    const [isVisible, setIsvisible] = useState(false);

    const handleAddTask = () => {
        setIsvisible(true);
    };

    const onClose = () => {
        setIsvisible(false);
    };

    return (
        <section className="h-full flex items-center pb-3 border-b pt-2">
            <div className="border w-fit px-2 py-[2.5px] flex items-center bg-[#F9F8F8] hover:bg-[#EBEBEA] rounded-md border-gray-300 cursor-pointer mr-2" onClick={handleAddTask}>
                <div>
                    <IoIosAdd size="1.3rem" />
                </div>
                <p className="text-xs font-medium">Add Task</p>
            </div>
            <div className="flex items-center mr-1 hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md font-medium opacity-80">
                <div className="mr-1">
                    <GoFilter />
                </div>
                <p className="text-xs">Filter</p>
            </div>
            <div className="flex items-center hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md font-medium opacity-80">
                <div className="mr-1">
                    <TbArrowsSort />
                </div>
                <p className="text-xs">Sort</p>
            </div>
            {isVisible && <AddProjectTask onClose={onClose} />}
        </section>
    )
}