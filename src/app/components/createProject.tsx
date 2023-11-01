"use client"

import { useState, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai";
import { BsCalendar2 } from "react-icons/bs"
import Image from "next/image";
import projectImage from "../../../public/projectImage.png"
import { auth, db } from "../firebase/firebase-config";
import { v4 as uuidv4 } from "uuid"
import { toast } from "react-hot-toast"
import spinner from "../../../public/icons8-spinner.gif"
import { collection, doc, setDoc } from "firebase/firestore";

type CreateProjectType = {
    onClose: () => void;
}
export default function CreateProject({ onClose }: CreateProjectType) {
    const [projectName, setProjectName] = useState("")
    const [currentDateTime, setCurrentDateTime] = useState("")
    const [loading, setLoading] = useState(false)
    const currentuser = auth.currentUser
    const collectionRef = collection(db, "projects")

    const updateDateTime = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }
        const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(now);
        setCurrentDateTime(formattedDateTime);
    }

    useEffect(() => {
        updateDateTime()
        const intervalId = setInterval(updateDateTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleCreateProject = async () => {
        if (projectName !== "") {
            try {
                setLoading(true)
                const projectData = {
                    projectName,
                    dataAndTimeAdded: currentDateTime,
                    userId: currentuser?.uid
                }

                const docRef = doc(collectionRef, uuidv4())
                await setDoc(docRef, { projectData })
                toast.success("Project added successfully")
                setLoading(false)
                onClose()
            } catch (error) {
                toast.error("Error adding Project")
                console.log(error)
                setLoading(false)
            }
        } else toast.error("write a project name to create a task")
    }

    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[40%] h-[90%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[85%] mobile:w-[100%] mobile:h-[100%]">
                    <div className="overflow-y-auto h-full bg-white rounded-md">
                        <div
                            onClick={onClose}
                            className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mr-2 mt-2 flex justify-center items-center h-8 cursor-pointer"
                        >
                            <AiOutlineClose size="1.1rem" />
                        </div>

                        <div className='px-6'>
                            <div>
                                <h1 className='text-xl font-medium mb-4'>Create Project</h1>
                                <div className='w-[20rem] h-10 rounnded-md'>
                                    <input
                                        className='border outline-gray-200 px-2 bg-gray-200 rounded-md w-full h-full'
                                        placeholder='project name'
                                        type="text"
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='mt-10 flex items-center'>
                                <p className='mr-2 opacity-60'>Project owner:</p>
                                <p>{currentuser?.displayName}</p>
                            </div>
                            <div className='mt-5 flex items-center'>
                                <p className="mr-3 opacity-60">Creation Date:</p>
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <BsCalendar2 />
                                    </div>
                                    <p>{currentDateTime}</p>
                                </div>
                            </div>
                            <div className="mt-5 w-[90%] h-20rem">
                                <Image
                                    className="w-full h-full"
                                    src={projectImage}
                                    alt="image"
                                    width={0}
                                    height={0}
                                />
                            </div>
                            {loading ? (
                                <div className="border-2 w-fit px-8 py-1 rounded-md">
                                    <Image src={spinner} alt="image" width={20} height={20} />
                                </div>
                            ):(
                                <div className="mt-3">
                                <button className="bg-[#2E2E30] text-white px-6 text-sm opacity-90 hover:opacity-100 py-1 rounded-md" onClick={handleCreateProject}>Create</button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}