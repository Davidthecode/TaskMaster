"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import loaderOne from "../../../public/loader (1).png"
import loaderTwo from "../../../public/loader (2).png"
import loaderThree from "../../../public/loader (3).png"
import TodoTasks from "./todoTasks"
import InProgressTasks from "./inProgressTasks"
import CompletedTasks from "./completedTasks"
import MobileTodo from "./mobileTodo"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase-config"
import toast from "react-hot-toast"

export default function Tasks() {
    const collectionRef = collection(db, "tasks")
    const [tasks, setTasks] = useState<any[]>([])
    const [todoTasks, setTodoTasks] = useState<any[]>([])
    const [inprogressTasks, setInprogressTasks] = useState<any[]>([])
    const [completedTasks, setCompletedTasks] = useState<any[]>([])
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

    useEffect(() => {
        if (tasks.length) {
            const filteredTodoTasks = tasks.filter((task) => task.taskData.status === "Todo")
            const filteredInProgressTasks = tasks.filter((task) => task.taskData.status === "In progress")
            const filteredCompletedTasks = tasks.filter((task) => task.taskData.status === "Completed")

            setTodoTasks(filteredTodoTasks)
            setInprogressTasks(filteredInProgressTasks)
            setCompletedTasks(filteredCompletedTasks)
        }

    }, [tasks])

    return (
        <div className="bg-[#F7F5F5] h-[92%] w-[100%] flex flex-col justify-between pb-4">
            <div className="flex justify-between h-[10%] mb-[1%] px-16 mobile:px-6 smallTablet:px-6 pt-3 mobile:hidden">
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">To Do</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">{todoTasks.length}</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderOne} alt="image" height={20} width={20} />
                    </div>
                </div>
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">In progress</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">{inprogressTasks.length}</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderTwo} alt="image" height={20} width={20} />
                    </div>
                </div>
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">Completed</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">{completedTasks.length}</span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderThree} alt="image" height={20} width={20} />
                    </div>
                </div>
            </div>

            <div className="flex justify-between h-[92%] overflow-y-auto px-16 mobile:px-6 smallTablet:px-6 py-4 mobile:hidden">
                <div className="h-[100%] w-[28%] largeTablet:w-[30%]">
                    <TodoTasks todoTasks={todoTasks} setTodoTasks={setTodoTasks} loading={loading} />
                </div>
                <div className="h-[100%] w-[28%] largeTablet:w-[30%]">
                    <InProgressTasks inprogressTasks={inprogressTasks} setInprogressTasks={setInprogressTasks} loading={loading} />
                </div>
                <div className="h-[100%] w-[28%] largeTablet:w-[30%]">
                    <CompletedTasks completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} loading={loading} />
                </div>
            </div>
            <div className="hidden mobile:block h-[100%] w-[100%]">
                <MobileTodo />
            </div>
        </div>
    )
}