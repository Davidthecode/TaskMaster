"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import loaderOne from "../../../public/loader (1).png";
import loaderTwo from "../../../public/loader (2).png"
import loaderThree from "../../../public/loader (3).png";
import Link from "next/link";
import { SlCalender } from "react-icons/sl"

export default function MobileTodo() {
    const [selectedOption, setSelectedOption] = useState("Todo");
    const [imgSrc, setImgSrc] = useState(loaderOne)

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

    return (
        <section className="bg-[#F3F4F8] py-3 h-full w-full">
            <div className="flex items-center h-[6%] px-6">
                <div className="flex items-center mr-2">
                    <select value={selectedOption} onChange={handleSelectChange} className="outline-none">
                        <option value="Todo">Todo</option>
                        <option value="In progress">In progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="border h-full w-[70%] bg-white rounded-md flex items-center ml-auto">
                    <h1 className="px-4 font-semibold">{selectedOption}</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                    <div className="ml-auto mr-4">
                        <Image src={imgSrc} alt="image" height={20} width={20} />
                    </div>
                </div>
            </div>

            <div className="mt-10 h-[90%] px-6 overflow-y-auto">
                <Link href="/tasks/1">
                    <div className="border max-h-[50%] px-2 py-1 mb-6 bg-white cursor-pointer hover:bg-gray-300 flex flex-col">
                        <div className="flex justify-between items-center mb-1">
                            <h1 className="text-lg font-medium">TaskMaster</h1>
                        </div>
                        <div className="mb-2">
                            <p className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iste numquam atque, ipsam aperiam saepe, culpa itaque modi.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, llat magnam? !.</p>
                        </div>
                        <div className="w-full mb-2 mt-auto ml-auto">
                            <div className="flex items-center justify-center bg-[#DDDDDC] py-1 rounded-sm">
                                <div className="mr-1">
                                    <SlCalender size=".8rem" />
                                </div>
                                <p className="text-xs">October 9, 2023 1:02 PM</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="border max-h-[50%] px-2 py-1 mb-6 bg-white cursor-pointer hover:bg-gray-300 flex flex-col">
                        <div className="flex justify-between items-center mb-1">
                            <h1 className="text-lg font-medium">TaskMaster</h1>
                        </div>
                        <div className="mb-2">
                            <p className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iste numquam atque, ipsam aperiam saepe, culpa itaque modi.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, llat magnam? !.</p>
                        </div>
                        <div className="w-full mb-2 mt-auto ml-auto">
                            <div className="flex items-center justify-center bg-[#DDDDDC] py-1 rounded-sm">
                                <div className="mr-1">
                                    <SlCalender size=".8rem" />
                                </div>
                                <p className="text-xs">October 9, 2023 1:02 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="border max-h-[50%] px-2 py-1 mb-6 bg-white cursor-pointer hover:bg-gray-300 flex flex-col">
                        <div className="flex justify-between items-center mb-1">
                            <h1 className="text-lg font-medium">TaskMaster</h1>
                        </div>
                        <div className="mb-2">
                            <p className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iste numquam atque, ipsam aperiam saepe, culpa itaque modi.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, llat magnam? !.</p>
                        </div>
                        <div className="w-full mb-2 mt-auto ml-auto">
                            <div className="flex items-center justify-center bg-[#DDDDDC] py-1 rounded-sm">
                                <div className="mr-1">
                                    <SlCalender size=".8rem" />
                                </div>
                                <p className="text-xs">October 9, 2023 1:02 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="border max-h-[50%] px-2 py-1 mb-6 bg-white cursor-pointer hover:bg-gray-300 flex flex-col">
                        <div className="flex justify-between items-center mb-1">
                            <h1 className="text-lg font-medium">TaskMaster</h1>
                        </div>
                        <div className="mb-2">
                            <p className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iste numquam atque, ipsam aperiam saepe, culpa itaque modi.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, llat magnam? !.</p>
                        </div>
                        <div className="w-full mb-2 mt-auto ml-auto">
                            <div className="flex items-center justify-center bg-[#DDDDDC] py-1 rounded-sm">
                                <div className="mr-1">
                                    <SlCalender size=".8rem" />
                                </div>
                                <p className="text-xs">October 9, 2023 1:02 PM</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}