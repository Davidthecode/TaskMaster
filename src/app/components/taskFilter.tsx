"use client"

import { AiOutlineClose } from "react-icons/ai";
import { useTasks } from "../context/tasksContext";

type CloseFilterType = {
    closeFilter: () => void;
};

export default function TaskFilter({ closeFilter }: CloseFilterType) {
    const { todoTasks, inprogressTasks, completedTasks, setTodoTasks, setInprogressTasks, setCompletedTasks, checkFilter, setCheckFilter, setFilteredTodoTasks, setFilteredInProgressTasks, setFilteredCompletedTasks, checkIncompleteFilter, setCheckIncompleteFilter } = useTasks();

    //function to handle filter for complete tasks
    const handleIncompleteFilter = () => {
        const filteredTodoTasks = todoTasks.filter((task: any) => task.taskData.completed === true);
        const filteredInProgressTasks = inprogressTasks.filter((task: any) => task.taskData.completed === true);
        const filteredCompletedTasks = completedTasks.filter((task: any) => task.taskData.completed === true);

        setFilteredTodoTasks(filteredTodoTasks);
        setFilteredInProgressTasks(filteredInProgressTasks);
        setFilteredCompletedTasks(filteredCompletedTasks);
    }

    const handleFilterCompleteTasks = () => {
        setCheckFilter(!checkFilter);
        setCheckIncompleteFilter(false);
        if (checkFilter == false && checkIncompleteFilter == false) {
            handleIncompleteFilter();
        } else if (checkFilter == false && checkIncompleteFilter) {
            handleIncompleteFilter();
        } else {
            setFilteredTodoTasks([]);
            setFilteredInProgressTasks([]);
            setFilteredCompletedTasks([]);
        };
    };

    //function to handle filter for complete tasks
    const handleCompleteFilter = () => {
        const filteredTodoTasks = todoTasks.filter((task: any) => task.taskData.completed === false);
        const filteredInProgressTasks = inprogressTasks.filter((task: any) => task.taskData.completed === false);
        const filteredCompletedTasks = completedTasks.filter((task: any) => task.taskData.completed === false);

        setFilteredTodoTasks(filteredTodoTasks);
        setFilteredInProgressTasks(filteredInProgressTasks);
        setFilteredCompletedTasks(filteredCompletedTasks);
    }

    const handleFilterInCompleteTasks = () => {
        setCheckIncompleteFilter(!checkIncompleteFilter);
        setCheckFilter(false);
        if (checkIncompleteFilter == false && checkFilter == false) {
            handleCompleteFilter();
        } else if (checkIncompleteFilter == false && checkFilter) {
            handleCompleteFilter();
        } else {
            setFilteredTodoTasks([]);
            setFilteredInProgressTasks([]);
            setFilteredCompletedTasks([]);
        }
    }


    return (
        <section className="w-full h-full flex flex-col">
            <div className="flex items-center">
                <h1 className="text-sm font-medium">Quick filter</h1>
                <div
                    onClick={closeFilter}
                    className='w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 flex justify-center items-center h-8 cursor-pointer rounded-md'
                >
                    <AiOutlineClose size='.9rem' />
                </div>
            </div>
            <div className="mt-4 flex items-center">
                <div className="mr-5">
                    <button className={`text-xs border border-gray-400 px-3 py-1 rounded-md hover:bg-[#F9F8F8] font-medium hover:border-none ${checkIncompleteFilter && "bg-[#c2c7f3] text-[#000000] hover:text-[#000000] hover:bg-[#c2c7f3]"}`} onClick={handleFilterInCompleteTasks}>Incomplete tasks</button>
                </div>
                <div>
                    <button className={`text-xs border border-gray-400 px-3 py-1 rounded-md hover:bg-[#F9F8F8] font-medium hover:border-none ${checkFilter && "bg-[#c2c7f3] text-[#000000] hover:text-[#000000] hover:bg-[#c2c7f3]"}`} onClick={handleFilterCompleteTasks}>complete tasks</button>
                </div>
            </div>
            <div className="mt-8 border"></div>
            <div className="flex">
                <div className="ml-auto mt-2">
                    <button className="text-xs border px-3 py-1 rounded-md hover:bg-[#F9F8F8]">Clear all</button>
                </div>
            </div>
        </section>
    )
}