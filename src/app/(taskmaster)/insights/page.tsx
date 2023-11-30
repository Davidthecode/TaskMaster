"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { StaticImageData } from "next/image"
import noUser from "../../../../public/nouser.jpg"
import CurrentUserHook from "@/app/hooks/currentUserHook"
import { CiLock } from "react-icons/ci";
import insightsImage from "../../../../public/insights.png"

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
                    <div className="mr-2 bg-[#ada6ec] text-white p-2 rounded-md">
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
            <div className="mt-10 flex items-center justify-around mx-20">
                <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                    <h1 className="text-xl ">Completed tasks</h1>
                    <h1 className="mt-4 text-4xl">0</h1>
                </div>
                <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                    <h1 className="text-xl ">Incomplete tasks</h1>
                    <h1 className="mt-4 text-4xl">12</h1>
                </div>
                <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                    <h1 className="text-xl ">Overdue tasks</h1>
                    <h1 className="mt-4 text-4xl">9</h1>
                </div>
                <div className="border border-gray-300 w-[22%] h-[10rem] rounded-md flex flex-col items-center py-6 shadow-sm">
                    <h1 className="text-xl ">Total tasks</h1>
                    <h1 className="mt-4 text-4xl">12</h1>
                </div>
            </div>
        </section>
    )
}