"use client";

import { useState, useEffect } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { IoAddSharp } from "react-icons/io5";
import { RiArrowDropUpLine } from 'react-icons/ri';
import { db } from "../../firebase/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import spinner from "../../../../public/icons8-spinner.gif";
import Image from "next/image";
import calender from "../../../../public/icons8-calendar-16.png";
import user from "../../../../public/icons8-user-16.png";
import taskIcon from "../../../../public/icons8-task-48.png";
import priorityIcon from "../../../../public/icons8-priority-48.png";
import statusIcon from "../../../../public/icons8-status-48.png";
import CurrentUserHook from "@/app/hooks/currentUserHook";

type AddtaskPopupProps = {
    onClose: () => void;
};

export default function Addtask({ onClose }: AddtaskPopupProps) {
    const { currentUser } = CurrentUserHook();
    const [shownote, setShowNote] = useState(false);
    const [title, setTitle] = useState("");
    const [taskType, setTaskType] = useState("Todo");
    const [priority, setPriority] = useState("Low");
    const [status, setStatus] = useState("On track");
    const [currentDate, setCurrentDate] = useState("");
    const [note, setNote] = useState("");
    const collectionRef = collection(db, "tasks");
    const [loading, setLoading] = useState(false);

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(now);

    const updateDateTime = () => {
        setCurrentDate(formattedDateTime);
    };

    useEffect(() => {
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleShowNote = () => {
        setShowNote(true);
    };

    const closeNote = () => {
        setShowNote(false);
    };

    const handleTaskTypeStatusChange = (e: any) => {
        setTaskType(e.target.value);
    };

    const handlePriorityStatusChange = (e: any) => {
        setPriority(e.target.value);
    };

    const handleStatusStatusChange = (e: any) => {
        setStatus(e.target.value);
    };

    const createTask = async () => {
        if (title !== "") {
            try {
                setLoading(true);
                const taskData = {
                    title,
                    dateAdded: currentDate,
                    dueDate: formattedDateTime,
                    taskType,
                    priority,
                    status,
                    note,
                    userId: currentUser?.uid,
                    completed: false
                };

                const userRef = doc(collectionRef, uuidv4());
                await setDoc(userRef, {
                    taskData
                });
                toast.success("task added successfully");
                setLoading(false);
                onClose();
            } catch (error) {
                toast.error("error adding task");
                console.log(error);
                setLoading(false);
            }
        } else toast.error("Write a title before creating a task");
    }

    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[70%] h-[90%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[85%] mobile:w-[100%] mobile:h-[100%]">
                    <div className=' overflow-y-auto h-full bg-white rounded-md pb-10'>
                        <div
                            onClick={onClose}
                            className='w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mr-2 mt-2 flex justify-center items-center h-8 cursor-pointer'
                        >
                            <AiOutlineClose size='1.1rem' />
                        </div>
                        <div className='px-10 mobile:px-2'>
                            <div>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className='w-[60%] h-20 text-3xl border-b border-gray-300 hover:border-gray-400 outline-none px-4 bg-white fomt-bold'
                                    placeholder='Untitled'
                                    type="text"
                                />
                            </div>

                            <div className='flex items-center mt-6'>
                                <div className='px-4 flex flex-col mr-12 mobile:mr-6'>
                                    <div className='flex items-center'>
                                        <div className='mr-1'>
                                            <Image src={user} alt="image" width={15} height={15} />
                                        </div>
                                        <p className='opacity-60'>Owner</p>
                                    </div>
                                    <div className='flex items-center opacity-60 mt-6'>
                                        <div className='mr-1'>
                                            <Image src={calender} alt="image" width={15} height={15} />
                                        </div>
                                        <p>Date created</p>
                                    </div>
                                    <div className='flex items-center mt-6'>
                                        <div className='mr-[.5px]'>
                                            <Image src={taskIcon} alt="image" width={20} height={20} />
                                        </div>
                                        <p className='opacity-60'>Task type</p>
                                    </div>
                                    <div className='flex items-center mt-6'>
                                        <div className='mr-1'>
                                            <Image src={priorityIcon} alt="image" width={15} height={15} />
                                        </div>
                                        <p className='opacity-60'>Priority</p>
                                    </div>
                                    <div className='flex items-center mt-6'>
                                        <div className='mr-1'>
                                            <Image src={statusIcon} alt="image" width={15} height={15} />
                                        </div>
                                        <p className='opacity-60'>Status</p>
                                    </div>
                                </div>

                                <div className='px-4 flex flex-col opacity-60'>
                                    <p>{currentUser?.displayName}</p>
                                    <p className="mt-6">{currentDate}</p>
                                    <select className="mt-6 outline-none" value={taskType} onChange={handleTaskTypeStatusChange}>
                                        <option value="Todo">Todo</option>
                                        <option value="In progress">In progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                    <select className="mt-6 outline-none" value={priority} onChange={handlePriorityStatusChange}>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                    <select className="mt-6 outline-none" value={status} onChange={handleStatusStatusChange}>
                                        <option value="On track">On track</option>
                                        <option value="At risk">At risk</option>
                                        <option value="Off track">Off track</option>
                                    </select>
                                </div>
                            </div>

                            <div className='mt-6 px-4'>
                                <div className="flex items-center">
                                    <div className='flex items-center opacity-60 hover:bg-[#DDDDDC] w-fit hover:px-1 rounded-md cursor-pointer mr-3'>
                                        <div className='mr-1'>
                                            <IoAddSharp />
                                        </div>
                                        <p onClick={handleShowNote}>Description</p>
                                    </div>
                                    {shownote &&
                                        <div className="opacity-60 cursor-pointer" onClick={closeNote}>
                                            <RiArrowDropUpLine size="1.5rem" />
                                        </div>
                                    }
                                </div>

                                <div className={`mt-6 ${shownote ? "block" : "hidden"}`}>
                                    <textarea
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        className='outline-none px-2 py-2 rounded-md border border-gray-300 w-[90%] h-[15rem] mobile:w-[100%]'
                                        name="tasknote"
                                        placeholder='write a description'
                                        id=""
                                        cols={0}
                                        rows={0}
                                    >
                                    </textarea>
                                </div>

                                <div className="mt-4">
                                    {loading ? (
                                        <div
                                            className="border bg-[#DDDDDC] cursor-auto px-6 py-2 rounded-md opacity-60 hover:opacity-100 w-fit"
                                        >
                                            <Image src={spinner} alt="image" width={20} height={20} />
                                        </div>
                                    ) : (
                                        <button
                                            onClick={createTask}
                                            className="border bg-black text-white text-sm px-2 py-1 rounded-md opacity-80 hover:opacity-100"
                                        >
                                            Create task
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};