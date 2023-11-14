"use client"

import { AiOutlineClose } from "react-icons/ai"

type AddMenberType = {
    closeAddMember: () => void;
}

export default function Addmember({ closeAddMember }: AddMenberType) {
    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[40%] h-[35%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[60%] mobile:w-[100%] mobile:h-[100%]">
                    <div className="overflow-y-auto h-full bg-white rounded-lg">
                        <div className="flex items-center mt-2 px-8">
                            <h1 className="font-semibold text-xl">Share project</h1>
                            <div
                                onClick={closeAddMember}
                                className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mt-2 flex justify-center items-center h-8 cursor-pointer"
                                title="close this dialogue"
                            >
                                <AiOutlineClose size="1.1rem" />
                            </div>
                        </div>
                        <div className="mt-3 border-b h-0"></div>
                        <div className="px-8 mt-6">
                            <h2 className="font-semibold">Invite with email</h2>
                        </div>
                        <div className="mt-6 px-8 flex items-center">
                            <div className="w-[90%] h-[35px] mr-3">
                                <input 
                                className="border w-full h-full rounded-md border-gray-400 px-3 outline-[#4573D2] text-sm"
                                type="text" 
                                placeholder="Add members by name or email..."
                                />
                            </div>
                            <div>
                                <button className="border px-3 py-1 rounded-md bg-[#4573D2] text-white">invite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}