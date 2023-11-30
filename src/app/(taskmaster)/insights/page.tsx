"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { StaticImageData } from "next/image"
import noUser from "../../../../public/nouser.jpg"
import CurrentUserHook from "@/app/hooks/currentUserHook"
import { CiLock } from "react-icons/ci";
import insightsImage from "../../../../public/insights.png"
import TasksInsights from "@/app/components/insights/tasksInsights"

export default function Insights() {
    const { currentUser } = CurrentUserHook()
    const [photo, setPhoto] = useState<string | StaticImageData>(noUser)

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL)
        }
    }, [currentUser])
    return (
        <section className="h-full bg-white flex flex-col mobile:px-6 overflow-y-auto">
            <div className="flex items-center pt-4 border-b border-gray-300 pb-3 px-10">
                <div className="flex items-center">
                    <div className="mr-2 bg-[#9ab9e1] text-white p-2 rounded-md">
                        <Image src={insightsImage} alt="image" width={35} height={35} />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-medium">Insights</h1>
                    </div>
                </div>
                <div className="ml-auto mr-2">
                    <Image
                        className='rounded-full'
                        src={photo}
                        alt='image'
                        width={22}
                        height={22}
                    />
                </div>
                <div className="flex items-center bg-[#426DC6] text-white px-2 py-1 rounded-md cursor-pointer">
                    <div className="mr-[1px]">
                        <CiLock />
                    </div>
                    <p className="text-xs">share</p>
                </div>
            </div>
            <TasksInsights />
        </section>
    )
}