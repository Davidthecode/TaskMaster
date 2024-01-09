"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";
import toast from "react-hot-toast";
import spinner from "../../../../../../../public/icons8-spinner.gif";
import { CiCircleCheck } from "react-icons/ci";
import { TaskTitleSkeleton } from "@/app/components/skeleton/skeleton";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import { IoCheckmarkOutline } from "react-icons/io5";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ProjectTask() {
    const { currentUser } = CurrentUserHook();
    const params = useParams();
    const paramsId = params.taskId;
    const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    const [taskType, setTaskType] = useState("");
    const docRef = doc(db, "projectsTasks", paramsId as string);
    const [note, setNote] = useState("");
    const [title, setTitle] = useState("");
    const [dateCreated, setDateCreated] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPriority, setShowPriority] = useState(false);
    const [selectedPriorityOption, setSelectedPriorityOption] = useState("");
    const [showStatus, setShowStatus] = useState(false);
    const [selectedStatusOption, setSelectedStatusOption] = useState("On track");
    const [completed, setCompleted] = useState<boolean>();
    const [selectedDate, setSelectedDate] = useState('');

    const priorityOptions = [
        { label: "Low", bgColor: "#9EE7E3" },
        { label: "Medium", bgColor: "#F1BD6C" },
        { label: "High", bgColor: "#CD95EA" }
    ];

    const statusOptions = [
        { label: "On track", bgColor: "#4ECBC4" },
        { label: "At risk", bgColor: "#F8DF72" },
        { label: "Off track", bgColor: "#F06A6A" }
    ];

    useEffect(() => {
        const getTaskData = () => {
            try {
                setLoading(true);
                const unsubscribe = onSnapshot(docRef, (snapshot) => {
                    if (snapshot.exists()) {
                        setNote(snapshot.data().taskData.note);
                        setTitle(snapshot.data().taskData.title);
                        setDateCreated(snapshot.data().taskData.taskDateAdded);
                        setSelectedDate(snapshot.data().taskData.taskDueDate);
                        setTaskType(snapshot.data().taskData.taskType);
                        setSelectedPriorityOption(snapshot.data().taskData.taskPriority);
                        setSelectedStatusOption(snapshot.data().taskData.taskStatus);
                        setCompleted(snapshot.data().taskData.completed);
                    }
                    setLoading(false);
                });
                return () => unsubscribe();
            } catch (error) {
                console.log(error);
                setLoading(false);
            };
        }
        getTaskData();
    }, []);

    useEffect(() => {
        async function handleDueDate() {
            if (selectedDate !== "") {
                const dataToUpdate = {
                    "taskData.taskDueDate": selectedDate
                };
                await updateDoc(docRef, dataToUpdate);
            }
        };
        handleDueDate();
    }, [selectedDate]);

    const handleTaskTypeChange = async (e: any) => {
        const taskType = e.target.value;
        setTaskType(taskType);
        const dataToUpdate = {
            "taskData.taskType": taskType
        };
        await updateDoc(docRef, dataToUpdate);
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        const saveTitle = async () => {
            if (title.trim() !== '') {
                const dataToUpdate = {
                    "taskData.title": title
                };
                await updateDoc(docRef, dataToUpdate);
            };
        };
        saveTitle();
    }, [title]);

    const handleNoteChange = (e: any) => {
        setNote(e.target.value);
    };

    useEffect(() => {
        const saveNote = async () => {
            if (note.trim() !== '') {
                const dataToUpdate = {
                    "taskData.note": note
                };
                await updateDoc(docRef, dataToUpdate);
            };
        };
        saveNote();
    }, [note]);

    //function to delete task
    const handleDelete = async () => {
        await deleteDoc(docRef);
        router.back();
        toast.success("Task deleted successfully");
    };

    const handleNavigation = () => {
        router.back();
    };

    const handlePriorityChange = () => {
        setShowStatus(false);
        setShowPriority(!showPriority);
    };

    const handleStatusChange = () => {
        setShowPriority(false);
        setShowStatus(!showStatus);
    };

    const handleStatusOptionClick = async (statusOption: any) => {
        setSelectedStatusOption(statusOption.label);
        const dataToUpdate = {
            "taskData.taskStatus": statusOption.label
        };
        await updateDoc(docRef, dataToUpdate);
    };

    const handlePriorityOptionClick = async (priorityOption: any) => {
        setSelectedPriorityOption(priorityOption.label);
        const dataToUpdate = {
            "taskData.taskPriority": priorityOption.label
        };
        await updateDoc(docRef, dataToUpdate);
    };

    const handleMarkAsComplete = async () => {
        const dataToUpdate = {
            "taskData.completed": true
        };
        await updateDoc(docRef, dataToUpdate);
    };

    const handleMarkAsIncomplete = async () => {
        const dataToUpdate = {
            "taskData.completed": false
        };
        await updateDoc(docRef, dataToUpdate);
    };

    console.log(selectedDate)  //error with date

    return (
        <section className="bg-[#F9F8F8] px-20 mobile:px-0 py-3 flex flex-col items-center overflow-y-auto h-full">
            <div className="bg-white w-[75%] mobile:w-full h-full largeTablet:w-full flex flex-col rounded-md overflow-y-auto">
                <div className="flex items-center justify-between mb-3 w-[57.5%] border-b pl-11 py-2 fixed z-40 bg-white">
                    <div className="flex items-center">
                        <div
                            onClick={handleNavigation}
                            className="border rounded-full w-fit p-1 bg-gray-300 hover:bg-gray-400 cursor-pointer mr-2">
                            <AiOutlineArrowLeft size=".8rem" />
                        </div>
                        <p className="text-sm">Back</p>
                    </div>
                </div>

                <div className="pl-12 mt-14">
                    {completed ? (
                        <div className="flex items-center border rounded-md px-2 py-1 w-fit cursor-pointer bg-[#E0F4EC] border-[#3d9673] hover:border-[#2d6f55]" onClick={handleMarkAsIncomplete}>
                            <div className="mr-1">
                                <div>
                                    <IoCheckmarkOutline />
                                </div>
                            </div>
                            <p className="text-xs">Completed</p>
                        </div>
                    ) : (
                        <div className="flex items-center border rounded-md px-2 py-1 w-fit cursor-pointer hover:bg-[#E0F4EC] border-gray-300 hover:border-[#3d9673]" onClick={handleMarkAsComplete}>
                            <div className="mr-1">
                                <div>
                                    <IoCheckmarkOutline />
                                </div>
                            </div>
                            <p className="text-xs">Mark complete</p>
                        </div>
                    )}
                    {loading ? (
                        <TaskTitleSkeleton />
                    ) : (
                        <div
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className="mb-6 flex items-center w-[90%]">
                            <div className="mobile:w-[85%] w-full ">
                                <input
                                    className={`text-3xl bg-white font-medium w-full h-10 mt-4 mb-2 outline-none border-none${isHovering && "border-b border-gray-400 underline"}`}
                                    placeholder={title}
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </div>
                        </div>
                    )}

                    <div className="w-[95%] pl-2">
                        <div className="flex items-center">
                            <p className="mr-16 text-xs">Assignee</p>
                            <p className="text-xs">{currentUser?.displayName}</p>
                        </div>
                        <div className="mt-6 flex items-center">
                            <p className="mr-11 text-xs">Date created</p>
                            <p className="text-xs">{dateCreated}</p>
                        </div>
                        <div className="mt-6 flex items-center">
                            <p className="text-xs mr-16">Due date</p>
                            <div>
                                <input
                                    type="date"
                                    className="text-xs cursor-pointer"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-10 flex items-center">
                            <p className="text-xs mr-16">Task Type</p>
                            <div>
                                <select id="dropdown" value={taskType} onChange={handleTaskTypeChange} className="outline-none text-xs">
                                    <option value="Todo">Todo</option>
                                    <option value="In progress">In progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center w-[80%]">
                            <div className="flex items-center mr-14">
                                <div className="mr-1">
                                    <CiCircleCheck />
                                </div>
                                <p className="text-xs">Priority</p>
                            </div>
                            <div className="w-full relative">
                                {loading ? (
                                    <div className="bg-[#F3F4F8] w-24 h-5 animate-pulse rounded-md"></div>
                                ) : (
                                    <button className={`w-[30%] mobile:w-32 text-xs flex items-startitems-center px-3 py-1 rounded-md $`}
                                        onClick={handlePriorityChange}
                                        style={{ backgroundColor: priorityOptions.find((opt) => opt.label === selectedPriorityOption)?.bgColor }}
                                    >
                                        {selectedPriorityOption}
                                    </button>
                                )}
                                {showPriority && (
                                    <div className="absolute top-7 left-0 z-50 shadow-lg border-t w-[30%] mobile:w-32 bg-white">
                                        {priorityOptions.map((priorityOption, index) => (
                                            <div className="flex flex-col text-xs w-full" onClick={() => handlePriorityOptionClick(priorityOption)} key={index}>
                                                <div className="cursor-pointer hover:bg-[#F3F4F8] my-1 rounded-sm py-[1.8px]">
                                                    <div className={`bg-[${priorityOption.bgColor}] rounded-md pl-2 px-[3px] py-[2px] mx-3`}>
                                                        {priorityOption.label}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-6 flex items-center w-[80%]">
                            <div className="flex items-center mr-[62px]">
                                <div className="mr-1">
                                    <CiCircleCheck />
                                </div>
                                <p className="text-xs">Status</p>
                            </div>
                            <div className="w-full relative">
                                {loading ? (
                                    <div className="bg-[#F3F4F8] w-24 h-5 animate-pulse rounded-md"></div>
                                ) : (
                                    <button className={`w-[30%] mobile:w-32 text-xs flex items-startitems-center px-3 py-1 rounded-md $`}
                                        onClick={handleStatusChange}
                                        style={{ backgroundColor: statusOptions.find((opt) => opt.label === selectedStatusOption)?.bgColor }}
                                    >
                                        {selectedStatusOption}
                                    </button>
                                )}
                                {showStatus && (
                                    <div className="absolute top-7 left-0 z-50 shadow-lg border-t w-[30%] mobile:w-32 bg-white">
                                        {statusOptions.map((statusOption, index) => (
                                            <div className="flex flex-col text-xs w-full bg-white" onClick={() => handleStatusOptionClick(statusOption)} key={index}>
                                                <div className="cursor-pointer hover:bg-[#F3F4F8] my-1 rounded-sm py-[1.8px]">
                                                    <div className={`bg-[${statusOption.bgColor}] rounded-md pl-2 px-[3px] py-[2px] mx-3`}>
                                                        {statusOption.label}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-10 mb-3">
                            <p className="text-xs">Description</p>
                        </div>
                    </div>

                    <div className=" w-[95%] h-[15rem] flex justify-center">
                        <div className="bg-[#F3F4F8 w-full">
                            {loading ? (
                                <div className="flex items-center justify-center h-full">
                                    <Image src={spinner} alt="image" width={20} height={20} />
                                </div>
                            ) : (
                                <textarea
                                    className={`mb-10 bg-white outline-none py-2 pr-2 h-[15rem] w-[100%] overflow-y-auto hover:border hover:border-gray-400 pl-2 rounded-md`}
                                    name=""
                                    id=""
                                    cols={0}
                                    rows={0}
                                    value={note}
                                    onChange={handleNoteChange}
                                >

                                </textarea>
                            )}
                        </div>
                    </div>

                    <div className="flex">
                        <div
                            onClick={handleDelete}
                            className="flex items-center border rounded-md px-6 py-1 bg-[#D1D5DB] hover:bg-[#e5e5ec] cursor-pointer mr-5 text-red-500 ml-auto my-10"
                        >
                            <div className="mr-1">
                                <AiOutlineDelete />
                            </div>
                            <button className="text-sm">Delete task</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};