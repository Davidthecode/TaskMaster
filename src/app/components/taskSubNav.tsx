"use client";

import { IoAddSharp } from "react-icons/io5";
import star from "../../../public/star.png";
import Image from "next/image";
import Addtask from "./addTask";
import { useState } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { useSidebarContext } from "../state/sidebar/sidebarContext";
import { GoFilter } from "react-icons/go";
import { TbArrowsSort } from "react-icons/tb";
import ProUpgrade from "./proUpgrade";
import TaskFilter from "./taskFilter";
import TaskSort from "./taskSort";

export default function TaskSubNav() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const [isVisible, setIsvisible] = useState(false);
  const [proVisible, setProVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  const handleAddTask = () => {
    setIsvisible(true);
  };

  const onClose = () => {
    setIsvisible(false);
  };

  const handleToggle = () => {
    setIsOpen(true);
  };

  const onProClose = () => {
    setProVisible(false);
  };

  const handleFilter = () => {
    setFilterVisible(!filterVisible);
    setSortVisible(false);
  };

  const closeFilter = () => {
    setFilterVisible(false);
  };

  const handleSort = () => {
    setSortVisible(!sortVisible);
    setFilterVisible(false);
  };

  const closeSort = () => {
    setSortVisible(false);
  };

  return (
    <section className="h-full flex items-center border-b py-2 smallTablet:px-10 mobile:px-6">
      <div
        className="mr-4 cursor-pointer hidden largeTablet:block mobile:block"
        onClick={handleToggle}
      >
        <BsReverseLayoutTextSidebarReverse size="1.3rem" />
      </div>
      <div
        onClick={handleAddTask}
        className="flex items-center rounded-md cursor-pointer bg-[#426DC6] text-white border px-3 py-1 mobile:hidden"
      >
        <div>
          <IoAddSharp />
        </div>
        <p className="text-xs font-medium">Add Task</p>
      </div>
      <div className="flex items-center ml-2 mr-1 hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md">
        <div
          className="flex items-center font-medium opacity-80"
          onClick={handleFilter}
        >
          <div className="mr-1">
            <GoFilter />
          </div>
          <p className="text-xs mr-[2px]">Filter</p>
          {/* <div className="flex items-center">
            <p className="text-xs mr-1">:</p>
            <p className="text-xs pt-[1px]">1</p>
          </div> */}
        </div>
        {filterVisible && (
          <div className="absolute bg-white border rounded-md border-gray-300 py-2 px-4 shadow-lg w-[25%] top-[11rem] h-[10rem] z-50">
            <TaskFilter closeFilter={closeFilter} />
          </div>
        )}
      </div>
      <div className="flex items-center hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md font-medium opacity-80">
        <div
          className="flex items-center font-medium opacity-80"
          onClick={handleSort}
        >
          <div className="mr-1">
            <TbArrowsSort />
          </div>
          <p className="text-xs">Sort</p>
        </div>
        {sortVisible && (
          <div className="absolute bg-white border rounded-md border-gray-300 py-2 shadow-lg w-[10%] top-[11rem] h-[10rem] z-50">
            <TaskSort closeSort={closeSort} />
          </div>
        )}
      </div>

      <div className="flex ml-auto items-center mr-1 hover:bg-[#F9F8F8] cursor-pointer py-2 px-3 rounded-md">
        <p
          className="mr-2 text-xs font-medium"
          onClick={() => setProVisible(true)}
        >
          Upgrade to Pro
        </p>
        <div>
          <Image src={star} alt="image" width={20} height={20} />
        </div>
      </div>
      <div className="ml-auto cursor-pointer hidden smallTablet:block mobile:block">
        <AiOutlineBars size="1.3rem" />
      </div>
      {isVisible && <Addtask onClose={onClose} />}
      {proVisible && <ProUpgrade onProClose={onProClose} />}
    </section>
  );
}
