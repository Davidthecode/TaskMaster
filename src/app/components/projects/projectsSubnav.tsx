"use client";

import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GoFilter } from "react-icons/go";
import { TbArrowsSort } from "react-icons/tb";
import AddProjectTask from "./addTask";
import ProjectTaskFilter from "./projectTaskFilter";
import { useProjects } from "@/app/context/projectsContext";
import ProjectTaskSort from "./projectTaskSort";

export default function ProjectsSubnav() {
    const { checkFilter, checkIncompleteFilter, checkSort } = useProjects();
    const [isVisible, setIsvisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [sortVisible, setSortVisible] = useState(false);

    const handleAddTask = () => {
        setIsvisible(true);
    };

    const onClose = () => {
        setIsvisible(false);
    };

    const handleFilter = () => {
        setFilterVisible(true);
        setSortVisible(false);
    };

    const closeFilter = () => {
        setFilterVisible(false);
    };

    const handleSort = () => {
        setSortVisible(true);
        setFilterVisible(false);
    };

    const closeSort = () => {
        setSortVisible(false);
    };

    return (
        <section className="h-full flex items-center pb-3 border-b pt-2">
            <div className="border w-fit px-2 py-[2.5px] flex items-center bg-[#F9F8F8] hover:bg-[#EBEBEA] rounded-md border-gray-300 cursor-pointer mr-2" onClick={handleAddTask}>
                <div>
                    <IoIosAdd size="1.3rem" />
                </div>
                <p className="text-xs font-medium">Add Task</p>
            </div>
            <div>
                <div
                    className="flex items-center mr-1 hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md font-medium opacity-80" onClick={handleFilter}
                >
                    <div className="mr-1">
                        <GoFilter />
                    </div>
                    <p className="text-xs">Filter</p>
                    {(checkFilter || checkIncompleteFilter) && (
                        <div className="flex items-center">
                            <p className="text-xs mr-1">:</p>
                            <p className="text-xs pt-[1px]">1</p>
                        </div>
                    )}
                </div>
                {filterVisible && (
                    <div
                        className="absolute bg-white border rounded-md border-gray-300 py-2 px-4 shadow-lg w-[25%] largeTablet:w-[30%]  top-[11rem] h-[10rem] z-50 mobile:w-[55%]"
                    >
                        <ProjectTaskFilter closeFilter={closeFilter} />
                    </div>
                )}
            </div>
            <div>
                <div
                    className="flex items-center hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md font-medium opacity-80"
                    onClick={handleSort}
                >
                    <div className="mr-1">
                        <TbArrowsSort />
                    </div>
                    <p className="text-xs">Sort</p>
                    {checkSort && (
                        <div className="flex items-center">
                            <p className="text-xs mr-1">:</p>
                            <p className="text-xs pt-[1px]">1</p>
                        </div>
                    )}
                </div>
                {sortVisible && (
                    <div
                        className="absolute bg-white border rounded-md border-gray-300 py-2 shadow-lg w-[13%] top-[11rem] h-[10rem] z-50 smallTablet:w-[20%] mobile:w-[40%]"
                    >
                        <ProjectTaskSort closeSort={closeSort} />
                    </div>
                )}
            </div>
            {isVisible && <AddProjectTask onClose={onClose} />}
        </section>
    )
}