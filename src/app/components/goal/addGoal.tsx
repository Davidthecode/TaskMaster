"use client";

import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image";
import lighteningImage from "../../../../public/lightening.png"
import { PiPercentLight } from "react-icons/pi";

type closeGoalType = {
    closeGoal: () => void
}
export default function AddGoal({ closeGoal }: closeGoalType) {
    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[40%] h-[80%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[60%] mobile:w-[100%] mobile:h-[100%]">
                    <div className="overflow-y-auto h-full bg-white rounded-lg">
                        <div className="flex items-center mt-1 px-8 border-b pb-1">
                            <h1 className="font-semibold text-lg">Add goal</h1>
                            <div
                                onClick={closeGoal}
                                className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mt-2 flex justify-center items-center h-8 cursor-pointer"
                                title="close this dialogue"
                            >
                                <AiOutlineClose size="1rem" />
                            </div>
                        </div>
                        <div className="px-8 mt-5 flex flex-col">
                            <p className="text-sm font-semibold opacity-80">What is a goal or key result you want to accomplish?</p>
                            <div className="mt-3">
                                <div className="flex items-center">
                                    <p className="text-xs font-medium opacity-70 mr-1">Goal title</p>
                                    <p className="text-red-500 mt-1">*</p>
                                </div>
                                <div>
                                    <input
                                        className="border w-full rounded-md text-sm h-9 px-2 border-gray-400 outline-blue-800"
                                        placeholder="Enter goal name"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs font-medium opacity-70 mr-1">Goal Owner</p>
                                <div>
                                    <input
                                        className="border w-full rounded-md text-sm h-9 px-2 border-gray-400 outline-blue-800"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs font-medium opacity-70 mr-1">Members</p>
                                <div>
                                    <input
                                        className="border w-full rounded-md text-sm h-9 px-2 border-gray-400 outline-blue-800"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs font-medium opacity-70 mr-1">Parent goal</p>
                                <div>
                                    <input
                                        className="border w-full rounded-md text-sm h-9 px-2 border-gray-400 outline-blue-800"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mt-6">
                                <div className="mr-6 w-[30%]">
                                    <div className="flex items-center">
                                        <p className="text-xs font-medium opacity-70 mr-1">Update method</p>
                                    </div>
                                    <div className="flex items-center px-3 border w-full h-8 rounded-md border-gray-400 border-opacity-80">
                                        <div>
                                            <Image src={lighteningImage} alt="image" width={20} height={20}/>
                                        </div>
                                        <p className="text-sm">Automatic</p>
                                    </div>
                                </div>
                                <div className="w-[30%]">
                                    <div className="flex items-center">
                                        <p className="text-xs font-medium opacity-70 mr-1">Measurment</p>
                                    </div>
                                    <div className="flex items-center px-3 border w-full h-8 rounded-md border-gray-400 border-opacity-80">
                                        <div className="mr-1">
                                            <PiPercentLight />
                                        </div>
                                        <p className="text-sm">Percent</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 ml-auto">
                                <button className="mr-4 border rounded-md px-3 py-1 text-sm border-gray-400 hover:bg-[#F7F5F5]">Cancel</button>
                                <button className="border rounded-md px-3 py-1 text-sm border-gray-400 opacity-50 hover:bg-[#F7F5F5]">Save goal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}