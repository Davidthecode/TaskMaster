"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import loaderOne from "../../../public/loader (1).png";
import loaderTwo from "../../../public/loader (2).png"
import loaderThree from "../../../public/loader (3).png";
import Link from "next/link";
import { SlCalender } from "react-icons/sl"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import toast from "react-hot-toast";
import { LimitWords } from "../../../utils/limitWords";
import { HomeSkeleton } from "./skeleton/skeleton";
import spinner from "../../../public/icons8-spinner.gif"

export default function MobileTodo() {
    const collectionRef = collection(db, "tasks")
    const [selectedOption, setSelectedOption] = useState("Todo");
    const [imgSrc, setImgSrc] = useState(loaderOne)
    const [tasks, setTasks] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    const showNetworkAlert = () => {
        if (!navigator.onLine) {
            toast.error("Network is bad. Please check your internet connection.");
        }
    };

    useEffect(() => {
        try {
            setLoading(true)
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
                let tempTasks: any[] = []
                snapshot.forEach((doc) => {
                    tempTasks.push({ ...doc.data(), id: doc.id })
                })
                setTasks(tempTasks)
                setLoading(false)
            });

            showNetworkAlert();

            window.addEventListener("online", showNetworkAlert);
            window.addEventListener("offline", showNetworkAlert);

            return () => {
                unsubscribe()
                window.removeEventListener("online", showNetworkAlert);
                window.removeEventListener("offline", showNetworkAlert);
            };
        } catch (error) {
            console.log("error")
            setLoading(false)
        }
    }, [])

    const filteredTasks = tasks.filter((task) => task.taskData.status === selectedOption)


    useEffect(() => {
        if (selectedOption == "Todo") {
            setImgSrc(loaderOne)
        } else if (selectedOption == "In progress") {
            setImgSrc(loaderTwo)
        } else if (selectedOption == "Completed") {
            setImgSrc(loaderThree)
        }
    }, [selectedOption])

    const handleSelectChange = (e: any) => {
        setSelectedOption(e.target.value)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Image src={spinner} alt="image" width={20} height={20} />
            </div>
        )
    }

    if (filteredTasks.length === 0) {
        return (
            <section className="bg-[#F7F5F5] py-3 h-full w-full">
                <div className="flex items-center h-[6%] px-6">
                    <div className="flex items-center mr-2">
                        <select value={selectedOption} onChange={handleSelectChange} className="outline-none">
                            <option value="Todo">Todo</option>
                            <option value="In progress">In progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="border h-full w-[70%] bg-white rounded-md flex items-center ml-auto">
                        <h1 className="px-4 font-semibold">{selectedOption}</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">{filteredTasks.length}</span>
                        <div className="ml-auto mr-4">
                            <Image src={imgSrc} alt="image" height={20} width={20} />
                        </div>
                    </div>
                </div>
                <div className="h-[94%] flex items-center justify-center">
                    <h1>You have no {selectedOption} task yet</h1>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-[#F7F5F5] py-3 h-full w-full">
            <div className="flex items-center h-[6%] px-6">
                <div className="flex items-center mr-2">
                    <select value={selectedOption} onChange={handleSelectChange} className="outline-none">
                        <option value="Todo">Todo</option>
                        <option value="In progress">In progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="border h-full w-[70%] bg-white rounded-md flex items-center ml-auto">
                    <h1 className="px-4 font-semibold">{selectedOption}</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">{filteredTasks.length}</span>
                    <div className="ml-auto mr-4">
                        <Image src={imgSrc} alt="image" height={20} width={20} />
                    </div>
                </div>
            </div>

            <div className="mt-10 h-[90%] px-6 overflow-y-auto">
                {filteredTasks.map((task) => (
                    <Link href={`/tasks/${task.id}`} key={task.id}>
                        <div className="border max-h-[50%] px-2 py-1 mb-6 bg-white cursor-pointer hover:bg-gray-300 flex flex-col">
                            <div className="flex justify-between items-center mb-1">
                                <h1 className="text-lg font-medium">{LimitWords(task.taskData.title, 4)}</h1>
                            </div>
                            <div className="mb-2">
                                <p className="opacity-70">{LimitWords(task.taskData.note, 50)}</p>
                            </div>
                            <div className="w-full mb-2 mt-auto ml-auto">
                                <div className="flex items-center justify-center bg-[#DDDDDC] py-1 rounded-sm">
                                    <div className="mr-1">
                                        <SlCalender size=".8rem" />
                                    </div>
                                    <p className="text-xs">{task.taskData.dataAndTimeAdded}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}