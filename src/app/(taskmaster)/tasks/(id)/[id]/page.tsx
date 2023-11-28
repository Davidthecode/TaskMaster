"use client"

import { useEffect, useState } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { CiEdit } from "react-icons/ci"
import { CiSaveDown2 } from "react-icons/ci"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useParams } from "next/navigation"
import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "@/app/firebase/firebase-config"
import toast from "react-hot-toast"
import spinner from "../../../../../../public/icons8-spinner.gif"
import { CiCircleCheck } from "react-icons/ci"
import { TaskTitleSkeleton } from "@/app/components/skeleton"
import CurrentUserHook from "@/app/hooks/currentUserHook"
import Calendar from "react-calendar"
import { IoCheckmarkOutline } from "react-icons/io5";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Task() {
    const [value, onChange] = useState<Value>();
    const { currentUser } = CurrentUserHook();
    const params = useParams();
    const paramsId = params.id;
    const router = useRouter();
    const [showCalender, setShowCalender] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [toggleDisableInput, setToggleDisableInput] = useState(true);
    const [toggleDisableTextarea, setToggleDisableTextarea] = useState(true);
    const [taskType, setTaskType] = useState("");
    const docRef = doc(db, "tasks", paramsId as string);
    const [note, setNote] = useState("");
    const [title, setTitle] = useState("");
    const [dateCreated, setDateCreated] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPriority, setShowPriority] = useState(false);
    const [selectedPriorityOption, setSelectedPriorityOption] = useState("");
    const [showStatus, setShowStatus] = useState(false);
    const [selectedStatusOption, setSelectedStatusOption] = useState("On track");
    const [completed, setCompleted] = useState<boolean>()


    const priorityOptions = [
        { label: "Low", bgColor: "#9EE7E3" },
        { label: "Medium", bgColor: "#F1BD6C" },
        { label: "High", bgColor: "#CD95EA" }
    ]

    const statusOptions = [
        { label: "On track", bgColor: "#4ECBC4" },
        { label: "At risk", bgColor: "#F8DF72" },
        { label: "Off track", bgColor: "#F06A6A" }
    ]

    useEffect(() => {
        const getTaskData = () => {
            try {
                setLoading(true)
                const unsubscribe = onSnapshot(docRef, (snapshot) => {
                    if (snapshot.exists()) {
                        setNote(snapshot.data().taskData.note)
                        setTitle(snapshot.data().taskData.title)
                        setDateCreated(snapshot.data().taskData.dateAdded)
                        setTaskType(snapshot.data().taskData.taskType)
                        setSelectedPriorityOption(snapshot.data().taskData.priority)
                        setSelectedStatusOption(snapshot.data().taskData.status)
                        setCompleted(snapshot.data().taskData.completed)
                        const dueDateTimestamp = snapshot.data().taskData.dueDate;
                        const dueDate = new Date(dueDateTimestamp);
                        onChange(dueDate);
                    }
                    setLoading(false)
                })
                return () => unsubscribe()
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getTaskData()
    }, [])

    useEffect(() => {
        async function handleCalenderChange() {
            if (value instanceof Date) {
                const formattedDate = value.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                const dataToUpdate = {
                    "taskData.dueDate": formattedDate
                }
                await updateDoc(docRef, dataToUpdate)
            }
        }
        handleCalenderChange()
    }, [value])

    const handleTaskTypeChange = async (e: any) => {
        const taskType = e.target.value
        setTaskType(taskType);
        const dataToUpdate = {
            "taskData.taskType": taskType
        }
        await updateDoc(docRef, dataToUpdate)
    };

    const handleMouseOver = () => {
        if (toggleDisableInput && window.innerWidth > 694) {
            setIsHovering(true)
        }
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    const handleTitleEdit = () => {
        setToggleDisableInput(false)
        setIsHovering(false)
    }

    const handleEdit = () => {
        setToggleDisableTextarea(false)
    }

    const saveTitle = async () => {
        setToggleDisableInput(true)
        const dataToUpdate = {
            "taskData.title": title
        }
        await updateDoc(docRef, dataToUpdate)
    }


    const saveNote = async () => {
        setToggleDisableTextarea(true)
        const dataToUpdate = {
            "taskData.note": note
        }
        await updateDoc(docRef, dataToUpdate)
    }

    const handleDelete = async () => {
        await deleteDoc(docRef);
        toast.success("Task deleted successfully");
        router.push("/tasks");
    }

    const handleNavigation = () => {
        router.back();
    }

    const handlePriorityChange = () => {
        setShowPriority(!showPriority);
    }

    const handleStatusChange = () => {
        setShowStatus(!showStatus);
    }

    const handleStatusOptionClick = async (statusOption: any) => {
        setSelectedStatusOption(statusOption.label);
        const dataToUpdate = {
            "taskData.status": statusOption.label
        }
        await updateDoc(docRef, dataToUpdate)
    }

    const handlePriorityOptionClick = async (priorityOption: any) => {
        setSelectedPriorityOption(priorityOption.label)
        const dataToUpdate = {
            "taskData.priority": priorityOption.label
        }
        await updateDoc(docRef, dataToUpdate)
    }

    const handleShowCalender = () => {
        setShowCalender(!showCalender)
    }

    const handleMarkAsComplete = async() => {
        const dataToUpdate = {
            "taskData.completed": true
        }
        await updateDoc(docRef, dataToUpdate)
    }

    const handleMarkAsIncomplete = async() => {
        const dataToUpdate = {
            "taskData.completed": false
        }
        await updateDoc(docRef, dataToUpdate)
    }

    return (
        <section className="bg-[#F9F8F8] px-20 mobile:px-6 py-3 flex flex-col items-center overflow-y-auto h-full">
            <div className="bg-white w-[75%] flex flex-col rounded-md overflow-y-auto">
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
                            className="mb-6 flex items-center w-[70%]">
                            <div className="mobile:w-[85%] mr-10 ">
                                <input
                                    className={`text-3xl bg-white font-medium w-full py-1 h-14 outline-none${!toggleDisableInput && "border border-black"}`}
                                    placeholder={title}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    disabled={toggleDisableInput}
                                />
                            </div>

                            <div className={`hidden mobile:block ${!toggleDisableInput && "mobile:hidden"}`} onClick={handleTitleEdit}>
                                <button className="border bg-[#D1D5DB] hover:bg-[#9f9fa0] px-4 rounded-md">Edit</button>
                            </div>

                            {isHovering && (
                                <div className=" mt-1">
                                    <button
                                        onClick={handleTitleEdit}
                                        className="border px-4 py-1 rounded-md bg-[#D1D5DB] hover:bg-[#9f9fa0]"
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}

                            {!toggleDisableInput && (
                                <div className="ml-4">
                                    <button
                                        onClick={saveTitle}
                                        className="border px-4 py-1 bg-[#D1D5DB] hover:bg-[#9f9fa0] rounded-md"
                                    >
                                        Save
                                    </button>
                                </div>
                            )}
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
                            <div className="flex items-center">
                                <div>
                                    {value instanceof Date && (
                                        <p onClick={handleShowCalender} className="text-xs mr-4 cursor-pointer hover:bg-gray-200 pl-1 pr-3 py-1 rounded-md">{value.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                    )}
                                </div>
                                {showCalender && (
                                    <div className="text-xs ml-auto">
                                        <Calendar onChange={onChange} value={value} />
                                    </div>
                                )}
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
                        <div className="mt-6 flex items-center relative w-[27%]">
                            <div className="flex items-center mr-14">
                                <div className="mr-1">
                                    <CiCircleCheck />
                                </div>
                                <p className="text-xs">Priority</p>
                            </div>
                            {loading ? (
                                <div className="bg-[#F3F4F8] w-24 h-5 animate-pulse rounded-md"></div>
                            ) : (
                                <button className={`w-[100%] text-xs flex items-startitems-center px-3 py-1 rounded-md $`}
                                    onClick={handlePriorityChange}
                                    style={{ backgroundColor: priorityOptions.find((opt) => opt.label === selectedPriorityOption)?.bgColor }}
                                >
                                    {selectedPriorityOption}
                                </button>
                            )}
                            {showPriority && (
                                <div className="absolute top-7 right-1 z-50 shadow-lg border-t">
                                    {priorityOptions.map((priorityOption, index) => (
                                        <div className="flex flex-col text-xs w-24 bg-white" onClick={() => handlePriorityOptionClick(priorityOption)} key={index}>
                                            <div className="cursor-pointer hover:bg-[#F3F4F8] my-1 rounded-sm py-[1.8px]">
                                                <div className={`bg-[${priorityOption.bgColor}] rounded-md px-[3px] py-[2px] mx-3`}>
                                                    {priorityOption.label}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="mt-6 flex items-center relative w-[27%]">
                            <div className="flex items-center mr-[62px]">
                                <div className="mr-1">
                                    <CiCircleCheck />
                                </div>
                                <p className="text-xs">Status</p>
                            </div>
                            {loading ? (
                                <div className="bg-[#F3F4F8] w-24 h-5 animate-pulse rounded-md"></div>
                            ) : (
                                <button className={`w-[100%] text-xs flex items-startitems-center px-3 py-1 rounded-md $`}
                                    onClick={handleStatusChange}
                                    style={{ backgroundColor: statusOptions.find((opt) => opt.label === selectedStatusOption)?.bgColor }}
                                >
                                    {selectedStatusOption}
                                </button>
                            )}
                            {showStatus && (
                                <div className="absolute top-7 right-1 z-50 shadow-lg border-t">
                                    {statusOptions.map((statusOption, index) => (
                                        <div className="flex flex-col text-xs w-24 bg-white" onClick={() => handleStatusOptionClick(statusOption)} key={index}>
                                            <div className="cursor-pointer hover:bg-[#F3F4F8] my-1 rounded-sm py-[1.8px]">
                                                <div className={`bg-[${statusOption.bgColor}] rounded-md px-[3px] py-[2px] mx-3`}>
                                                    {statusOption.label}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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
                                    className={`mb-10 bg-white outline-none py-2 pr-2 h-[15rem] w-[100%] overflow-y-auto hover:border hover:border-gray-300 pl-2 rounded-md ${toggleDisableTextarea == false && "border border-black border-opacity-20"}`}
                                    name=""
                                    id=""
                                    cols={0}
                                    rows={0}
                                    disabled={toggleDisableTextarea}
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                >

                                </textarea>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center mobile:flex-col w-[60%] mt-12 mb-10">
                        <div className="mb-1 ml-auto flex items-center">
                            <div className="flex items-center border rounded-md bg-[#D1D5DB] hover:bg-[#9f9fa0] cursor-pointer mr-5">
                                {toggleDisableTextarea ? (
                                    <div
                                        onClick={handleEdit}
                                        className="flex items-center px-6 py-1"
                                    >
                                        <div className="mr-1">
                                            <CiEdit />
                                        </div>
                                        <button className="text-sm">Edit</button>
                                    </div>
                                ) : (
                                    <div
                                        onClick={saveNote}
                                        className="flex items-center px-6 py-1"
                                    >
                                        <div className="mr-1">
                                            <CiSaveDown2 />
                                        </div>
                                        <button className="text-sm">Save</button>
                                    </div>
                                )}
                            </div>
                            <div
                                onClick={handleDelete}
                                className="flex items-center border rounded-md px-6 py-1 bg-[#D1D5DB] hover:bg-[#9f9fa0] cursor-pointer mr-5"
                            >
                                <div className="mr-1">
                                    <AiOutlineDelete />
                                </div>
                                <button className="text-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}