"use client";

import { useState, useEffect } from "react";
import checked from "../../../../public/checked.png";
import Image from "next/image";
import { TfiHelpAlt } from "react-icons/tfi";
import loader1 from "../../../../public/loader (1).png";
import loader2 from "../../../../public/loader (2).png";
import loader3 from "../../../../public/loader (3).png";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useSidebarContext } from "@/app/context/sidebarContext";
import spinner from "../../../../public/icons8-spinner.gif";
import TasksHook from "@/app/hooks/tasksHook";
import CurrentUserHook from "@/app/hooks/currentUserHook";

function formatDate(date: any) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

export default function HomeClient() {
    const { tasks, todoTasks, inprogressTasks, completedTasks, loading } = TasksHook();
    const { currentUser } = CurrentUserHook();
    const { setIsOpen } = useSidebarContext();
    const [currentDate, setCurrentDate] = useState(new Date());

    //function to get current date
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = formatDate(currentDate);

    const closeSidebar = () => {
        setIsOpen(true);
    };

    return (
        <section className="h-full bg-white flex flex-col px-16 mobile:px-6 overflow-y-auto">
            <div className=" items-center pt-4">
                <div
                    onClick={closeSidebar}
                    className="mr-4 cursor-pointer mobile:block smallTablet:block largeTablet:block hidden"
                >
                    <BsReverseLayoutTextSidebarReverse size="1.5rem" />
                </div>
                <div className="my-2">
                    <p className="font-semibold">{formattedDate}</p>
                </div>
                <div>
                    <h1 className="text-2xl">Welcome, <span>{currentUser?.displayName}</span></h1>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-xl font-semibold mb-4">Project Status</h1>
                <div className="flex flex-wrap">
                    <div className="border px-8 py-3 border-gray-300 rounded-md mr-4 mobile:mr-0 min-w-[25%] smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 cursor-default">
                        <div className="flex justify-center">
                            <Image src={loader1} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Upcoming</p>
                        {loading ? (
                            <div className="flex justify-center">
                                <Image src={spinner} alt="image" width={20} height={20} />
                            </div>
                        ) : (
                            <p className="text-sm font-semibold text-center">{todoTasks.length} projects</p>
                        )}
                    </div>

                    <div className="border px-8 py-3 border-gray-300 rounded-md mr-4 mobile:mr-0 min-w-[25%] smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 cursor-default">
                        <div className="flex justify-center">
                            <Image src={loader2} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">In Progress</p>
                        {loading ? (
                            <div className="flex justify-center">
                                <Image src={spinner} alt="image" width={20} height={20} />
                            </div>
                        ) : (
                            <p className="text-sm font-semibold text-center">{inprogressTasks.length} projects</p>
                        )}
                    </div>

                    <div className="border px-8 py-3 border-gray-300 rounded-md mr-4 mobile:mr-0 min-w-[25%] smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 smallTablet:mt-4 cursor-default">
                        <div className="flex justify-center">
                            <Image src={loader3} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Completed</p>
                        {loading ? (
                            <div className="flex justify-center">
                                <Image src={spinner} alt="image" width={20} height={20} />
                            </div>
                        ) : (
                            <p className="text-sm font-semibold text-center">{completedTasks.length} projects</p>
                        )}
                    </div>

                    <div className="border px-8 py-3 border-gray-300 rounded-md mr-4 mobile:mr-0 min-w-[25%] largeScreen:mt-4 largeTablet:mt-4 smallTablet:mt-4 smallTablet:w-[35%] mobile:w-[100%] mobile:mb-5 xl:mt-4 cursor-default">
                        <div className="flex justify-center">
                            <Image src={checked} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Total</p>
                        {loading ? (
                            <div className="flex justify-center">
                                <Image src={spinner} alt="image" width={20} height={20} />
                            </div>
                        ) : (
                            <p className="text-sm font-semibold text-center">{tasks.length} projects</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="border h-0 w-full my-10 border-gray-300"></div>
            <div className="ml-auto mt-auto mb-3 cursor-pointer">
                <TfiHelpAlt />
            </div>
        </section>
    )
}