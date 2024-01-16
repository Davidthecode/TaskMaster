"use client";

import { AiOutlineClose } from "react-icons/ai";
import { useProjects } from "@/app/context/projectsContext";

type CloseSortType = {
    closeSort: () => void
};

export default function ProjectTaskSort({ closeSort }: CloseSortType) {

    const { todoProjects, setTodoProjects, inprogressProjects, setInprogressProjects, completedProjects, setCompletedProjects, checkSort, setCheckSort } = useProjects();

    const handleSort = () => {
        setCheckSort(!checkSort);
        const sortedTodoTasks = [...todoProjects].sort((taskA, taskB) => {
            const dateA: any = new Date(taskA.taskData.taskDueDate);
            console.log(dateA)
            const dateB: any = new Date(taskB.taskData.taskDueDate);
            console.log(dateA)
            return dateA - dateB;
        });
        const sortedInProgressTasks = [...inprogressProjects].sort((taskA, taskB) => {
            const dateA: any = new Date(taskA.taskData.taskDueDate);
            const dateB: any = new Date(taskB.taskData.taskDueDate);
            return dateA - dateB;
        });
        const sortedCompletedTasks = [...completedProjects].sort((taskA, taskB) => {
            const dateA: any = new Date(taskA.taskData.taskDueDate);
            const dateB: any = new Date(taskB.taskData.taskDueDate);
            return dateA - dateB;
        });

        setTodoProjects(sortedTodoTasks);
        console.log(sortedTodoTasks);
        setInprogressProjects(sortedInProgressTasks);
        setCompletedProjects(sortedCompletedTasks);
    };

    const undoSort = () => {

    };

    return (
        <section className="w-full h-full flex flex-col">
            <div className="flex items-center">
                <div
                    onClick={closeSort}
                    className='w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 flex justify-center items-center h-8 cursor-pointer rounded-md'
                >
                    <AiOutlineClose size='.9rem' />
                </div>
            </div>
            <div className="flex flex-col text-sm space-y-4 mt-3">
                <p className="hover:bg-[#edecec] w-full px-5 py-1 rounded-sm cursor-pointer" onClick={undoSort}>None</p>
                <p className={`hover:bg-[#edecec] w-full px-5 py-1 rounded-sm cursor-pointer ${checkSort && 'bg-[#edecec]'}`} onClick={handleSort}>Due date</p>
            </div>
        </section>
    )
};