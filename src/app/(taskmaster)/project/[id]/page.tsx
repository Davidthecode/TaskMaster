"use client"

import { db } from "@/app/firebase/firebase-config"
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import projectImg from "../../../../../public/project.png"
import { CiViewTable } from "react-icons/ci"
import {RxDashboard} from "react-icons/rx"
import {PiTagThin} from "react-icons/pi"
import {IoIosAdd} from "react-icons/io"


export default function Projects() {
    const currentPath = usePathname()
    const [projects, setProjects] = useState<any[]>([])
    const collectionRef = collection(db, "projects")

    useEffect(() => {
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const tempArray: any[] = []
            snapshot.forEach((doc) => {
                if (`/project/${doc.id}/overview` == currentPath) {
                    tempArray.push({ ...doc.data(), id: doc.id })
                }
            })
            setProjects(tempArray)
        })
        return () => unsubscribe()
    }, [])

    return (
        <section className="px-5 py-5">
            {projects.map((project, id) => (
                <div key={id}>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <Image src={projectImg} alt="image" width={40} height={40} />
                        </div>
                        <h1 className="text-xl font-medium">{project.projectData.projectName}</h1>
                    </div>
                    <div className="mt-5 flex items-center border-b pb-2">
                        <div className="flex items-center mr-6 cursor-pointer">
                            <div className="mr-1">
                                <PiTagThin size="1rem" />
                            </div>
                            <p className="text-sm font-medium">Overview</p>
                        </div>
                        <div className="flex items-center mr-6 cursor-pointer">
                            <div className="mr-1">
                                <CiViewTable size="1.2rem" />
                            </div>
                            <p className="text-sm font-medium">List</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <div className="mr-1">
                                <RxDashboard size="1rem" />
                            </div>
                            <p className="text-sm font-medium">Board</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="border w-fit px-2 py-1 flex items-center rounded-md border-gray-300 cursor-pointer hover:bg-[#F9F8F8]">
                            <div>
                                <IoIosAdd size="1.3rem" />
                            </div>
                            <p className="text-xs font-medium">Add Task</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}