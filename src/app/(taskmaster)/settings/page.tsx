"use client"

import Image from "next/image"
import anime from "../../../../public/anime.jpg"
export default function Settings() {
    return (
        <div className="px-[25%] pt-[5%] bg-[#F3F4F8] h-full">
            <div className="mb-10">
                <h1 className="text-3xl font-semibold">My Account</h1>
            </div>
            <div className="mt-4 flex -tems-center">
                <div className="mr-8">
                    <Image src={anime} alt="image" height={80} width={80} className="rounded-full" />
                </div>
                <div>
                    <h1 className="text-xl mb-3">Ajibola David</h1>
                    <button className="border border-gray-400 px-4 py-1 rounded-md hover:bg-[#EFEFEF]">Edit</button>
                </div>
            </div>
            <div className="mt-10 bg-white h-[40%] py-8 px-4">
                <div>
                    <h1 className="text-xl">Email</h1>
                    <h2 className="font-semibold mt-2">ajiboladavid0963@gmail.com</h2>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="">
                        <h1 className="text-xl">Password</h1>
                        <h2 className="mt-2">**********</h2>
                    </div>
                    <div className="ml-auto">
                        <button className="border px-2 py-1 rounded-md border-gray-400 hover:bg-[#EFEFEF]">Change password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}