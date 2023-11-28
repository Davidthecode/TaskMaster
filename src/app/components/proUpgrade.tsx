"use client"

import { AiOutlineClose } from "react-icons/ai"

type ProUpgradeType = {
    onProClose: () => void;
}
export default function ProUpgrade({ onProClose }: ProUpgradeType) {
    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[40%] h-[20%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[85%] mobile:w-[100%] mobile:h-[100%]">
                    <div className="overflow-y-auto h-full bg-white rounded-md">
                        <div
                            onClick={onProClose}
                            className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mr-2 mt-2 flex justify-center items-center h-8 cursor-pointer"
                        >
                            <AiOutlineClose size="1.1rem" />
                        </div>

                        <div className="flex justify-center items-center mt-5">
                            <h1>Hiya, pro version is coming soon!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}