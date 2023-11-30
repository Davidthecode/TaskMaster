"use client"

import { IoAdd } from "react-icons/io5";
export default function Goals() {
    return (
        <section className="h-full bg-white flex flex-col mobile:px-6 overflow-y-auto">
            <div className="pt-4 border-b pb-3 px-10">
                <h1 className="text-xl font-medium">My Goals</h1>
            </div>
            <div className="mt-4">
                <div className="border-b pb-4 px-10">
                    <div className="flex items-center bg-bl border w-fit rounded-md px-2 py-[.3rem] cursor-pointer bg-blue-600 hover:bg-blue-800 text-white">
                        <div className="font-bold">
                            <IoAdd size="1.1rem" />
                        </div>
                        <p className="text-xs">Add goal</p>
                    </div>
                </div>
                <div className="flex px-10 border-b py-2">
                    <div className="text-xs w-[90%]">Name</div>
                    <div className="text-xs w-[10%]">Owner</div>
                </div>
            </div>
        </section>
    )
}