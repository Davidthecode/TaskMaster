"use client"

import checked from "../../../../public/checked.png"
import Image from "next/image"
import { TfiHelpAlt } from "react-icons/tfi"
import loader1 from "../../../../public/loader (1).png"
import loader2 from "../../../../public/loader (2).png"
import loader3 from "../../../../public/loader (3).png"
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { useSidebarContext } from "@/app/state/sidebar/sidebarContext"

export default function HomeClient() {
    const { setIsOpen } = useSidebarContext();

    const closeSidebar = () => {
        setIsOpen(true)
    }

    return (
        <section className="h-full bg-[#F3F4F8] flex flex-col px-16 mobile:px-6 overflow-y-auto">
            <div className="flex items-center pt-4">
                <div
                    onClick={closeSidebar}
                    className="mr-4 cursor-pointer mobile:block smallTablet:block largeTablet:block hidden"
                >
                    <BsReverseLayoutTextSidebarReverse size="1.5rem" />
                </div>
                <div>
                    <h1 className="text-3xl">Welcome, David</h1>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-xl font-semibold mb-4">Project Status</h1>
                <div className="flex flex-wrap">
                    <div className="border px-8 py-3 bg-red-200 rounded-md mr-4 mobile:mr-0 min-w-[25%] smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 cursor-default">
                        <div className="flex justify-center">
                            <Image src={loader1} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Upcoming</p>
                        <p className="text-lg font-semibold text-center">4 projects</p>
                    </div>

                    <div className="border px-8 py-3 bg-orange-200 rounded-md mr-4 mobile:mr-0 min-w-[25%] smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 cursor-default">
                        <div className="flex justify-center">
                            <Image src={loader2} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">In Progress</p>
                        <p className="text-lg font-semibold text-center">4 projects</p>
                    </div>

                    <div className="border px-8 py-3 bg-green-200 rounded-md mr-4 mobile:mr-0 min-w-[25%] smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 smallTablet:mt-4 cursor-default">
                        <div className="flex justify-center">
                            <Image src={loader3} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Completed</p>
                        <p className="text-lg font-semibold text-center">4 projects</p>
                    </div>

                    <div className="border px-8 py-3 bg-green-400 rounded-md mr-4 mobile:mr-0 min-w-[25%] largeScreen:mt-4 largeTablet:mt-4 smallTablet:mt-4 smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 xl:mt-4 cursor-default">
                        <div className="flex justify-center">
                            <Image src={checked} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Total</p>
                        <p className="text-lg font-semibold text-center">12 projects</p>
                    </div>
                </div>
            </div>
            <div className="border h-0 w-full my-10 border-gray-300"></div>
            <div>
                <h1 className="text-xl font-semibold">Analytics</h1>
            </div>
            <div className="ml-auto mt-auto mb-3 cursor-pointer">
                <TfiHelpAlt />
            </div>
        </section>
    )
}