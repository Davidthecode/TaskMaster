"use client"

import { db } from "@/app/firebase/firebase-config"
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import projectImg from "../../../../public/project.png"
import { CiViewTable } from "react-icons/ci"
import { RxDashboard } from "react-icons/rx"
import { PiTagThin } from "react-icons/pi"
import Link from "next/link"
import { useParams } from "next/navigation"


export default function ProjectsHeader() {
    const params = useParams()
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
        <section className="">
            <div>
                <div className="flex items-center">
                    <div className="mr-2">
                        <Image src={projectImg} alt="image" width={40} height={40} />
                    </div>
                    {projects.length
                        ? projects.map((project, id) => (
                            <h1 key={id} className="text-xl font-medium">{project.projectData.projectName}</h1>
                        )) : (
                            <div className="bg-[#f0eded] w-24 h-3 rounded-md animate-pulse"></div>
                        )}
                </div>
                <div className="mt-5 flex items-center border-b pb-2">
                    <Link
                        href={`/project/${params.id}/overview`}
                        className={`${currentPath == `/project/${params.id}/overview` && "underline underline-offset-[12px]"}`}
                    >
                        <div className={`flex items-center mr-6 cursor-pointer`}>
                            <div className="mr-1">
                                <PiTagThin size="1rem" />
                            </div>
                            <p className="text-sm font-medium">Overview</p>
                        </div>
                    </Link>
                    <Link
                        href={`/project/${params.id}/list`}
                        className={`${currentPath == `/project/${params.id}/list` && "underline underline-offset-[12px]"}`}
                    >
                        <div className="flex items-center mr-6 cursor-pointer">
                            <div className="mr-1">
                                <CiViewTable size="1.2rem" />
                            </div>
                            <p className="text-sm font-medium">List</p>
                        </div>
                    </Link>
                    <Link
                        href={`/project/${params.id}/board`}
                        className={`${currentPath == `/project/${params.id}/board` && "underline underline-offset-[12px]"}`}
                    >
                        <div className="flex items-center cursor-pointer">
                            <div className="mr-1">
                                <RxDashboard size="1rem" />
                            </div>
                            <p className="text-sm font-medium">Board</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}