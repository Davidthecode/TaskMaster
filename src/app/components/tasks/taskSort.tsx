"use client";

import { AiOutlineClose } from "react-icons/ai";
import { useTasks } from "../../context/tasksContext";

type CloseSortType = {
    closeSort: () => void
};

export default function TaskSort({ closeSort }: CloseSortType) {

    const { todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks } = useTasks();

    console.log(inprogressTasks);

    const handleSort = () => {
        const sortedTodoTasks = [...todoTasks].sort((taskA, taskB) => {
            const dateA: any = new Date(taskA.taskData.dateAdded);
            const dateB: any = new Date(taskB.taskData.dateAdded);
            return dateA - dateB;
        });
        const sortedInProgressTasks = [...inprogressTasks].sort((taskA, taskB) => {
            const dateA: any = new Date(taskA.taskData.dateAdded);
            const dateB: any = new Date(taskB.taskData.dateAdded);
            return dateA - dateB;
        });
        const sortedCompletedTasks = [...completedTasks].sort((taskA, taskB) => {
            const dateA: any = new Date(taskA.taskData.dateAdded);
            const dateB: any = new Date(taskB.taskData.dateAdded);
            return dateA - dateB;
        });

        setTodoTasks(sortedTodoTasks);
        setInprogressTasks(sortedInProgressTasks);
        setCompletedTasks(sortedCompletedTasks);
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
                <p className="hover:bg-[#edecec] w-full px-5 py-1 rounded-sm cursor-pointer" onClick={handleSort}>Created on</p>
            </div>
        </section>
    )
}