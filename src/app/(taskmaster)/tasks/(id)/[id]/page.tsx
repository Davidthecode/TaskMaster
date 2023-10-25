'use client'

import { useEffect, useState } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { CiEdit } from "react-icons/ci"
import { CiSaveDown2 } from "react-icons/ci"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/navigation"
import Image from "next/image"
import loaderOne from "../../../../../../public/loader (1).png"
import loaderTwo from "../../../../../../public/loader (2).png"
import loaderThree from "../../../../../../public/loader (3).png"
import { useParams } from "next/navigation"
import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "@/app/firebase/firebase-config"
import toast from "react-hot-toast"

export default function Task() {
    const params = useParams()
    const paramsId = params.id
    const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    const [toggleDisableInput, setToggleDisableInput] = useState(true);
    const [toggleDisableTextarea, setToggleDisableTextarea] = useState(true);
    const [selectedOption, setSelectedOption] = useState("");
    const [imgSrc, setImgSrc] = useState(loaderOne);
    const docRef = doc(db, "tasks", paramsId as string)
    const [note, setNote] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        if (selectedOption == "Todo") {
            setImgSrc(loaderOne)
        } else if (selectedOption == "In progress") {
            setImgSrc(loaderTwo)
        } else if (selectedOption == "Completed") {
            setImgSrc(loaderThree)
        }
    }, [selectedOption])

    useEffect(() => {
        getTaskData()
    }, [])

    const getTaskData = () => {
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if (snapshot.exists()) {
                setNote(snapshot.data().taskData.note)
                setTitle(snapshot.data().taskData.title)
                setSelectedOption(snapshot.data().taskData.status)
            }
        })

        return () => unsubscribe()
    }

    const handleSelectChange = async (e: any) => {
        const selectedOption = e.target.value
        setSelectedOption(selectedOption);
        const dataToUpdate = {
            "taskData.status": selectedOption
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

    const saveTitle = async() => {
        setToggleDisableInput(true)
        const dataToUpdate = {
            "taskData.title": title
        }
        await updateDoc(docRef, dataToUpdate)
    }


    const saveNote = async() => {
        setToggleDisableTextarea(true)
        const dataToUpdate = {
            "taskData.note": note
        }
        await updateDoc(docRef, dataToUpdate)
    }

    const handleDelete = async() => {
        await deleteDoc(docRef)
        toast.success("Task deleted successfully")
        router.push("/tasks")
    }

    const handleNavigation = () => {
        router.back()
    }

    return (
        <section className="px-12 mobile:px-6 py-6 flex flex-col bg-[#F3F4F8] h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div
                        onClick={handleNavigation}
                        className="border rounded-full w-fit p-1 bg-gray-300 cursor-pointer mr-2">
                        <AiOutlineArrowLeft />
                    </div>
                    <p>Back</p>
                </div>
                <div>
                    <label htmlFor="dropdown">Select task type: </label>
                    <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="outline-none">
                        <option value="Todo">Todo</option>
                        <option value="In progress">In progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="mb-6 flex items-center w-fit">
                <div className="mobile:w-[85%]">
                    <input
                        className={`text-3xl font-medium w-full px-2 py-1 h-14 outline-none mr-4 bg-[#F3F4F8] ${!toggleDisableInput && "border border-black"}`}
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

            <div className="bg-[#F3F4F8]">
                <textarea
                    className={`mb-10 bg-[#F3F4F8] outline-none p-2 h-[26rem] w-[100%] overflow-y-auto ${toggleDisableTextarea == false && "border border-black border-opacity-20"}`}
                    name=""
                    id=""
                    cols={0}
                    rows={0}
                    disabled={toggleDisableTextarea}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                >

                </textarea>
            </div>

            <div className="flex items-center mobile:flex-col">
                <div className="flex items-center border px-4 py-1 bg-[#D1D5DB] hover:bg-[#9f9fa0] rounded-md mobile:mr-auto mobile:mb-8">
                    <p className="mr-2">{selectedOption}</p>
                    <div>
                        <Image src={imgSrc} alt="image" width={20} height={20} />
                    </div>
                </div>
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
                                <button>Edit</button>
                            </div>
                        ) : (
                            <div
                                onClick={saveNote}
                                className="flex items-center px-6 py-1"
                            >
                                <div className="mr-1">
                                    <CiSaveDown2 />
                                </div>
                                <button>Save</button>
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
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </section>
    )
}