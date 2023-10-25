"use client";

import { useEffect } from "react";
import { BsJournals } from 'react-icons/bs';
import { GoTasklist } from 'react-icons/go';
import { CiCircleList } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';
import { CiHome } from 'react-icons/ci';
import { DiGithubBadge } from 'react-icons/di';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebarContext } from '../state/sidebar/sidebarContext';
import { IoChevronBackOutline } from "react-icons/io5";

export default function Sidebar() {
    const { isOpen, setIsOpen } = useSidebarContext()
    const currentPath = usePathname()

    useEffect(() => {
        const handleResise = () => {
            if (window.innerWidth > 1174) {
                setIsOpen(false)
            }
        }
        window.addEventListener("resize", handleResise)

        return () => {
            window.removeEventListener("resize", handleResise)
        }
    }, [])

    const closeSidebar = () => {
        setIsOpen(false)
    }
    return (
        <aside className={`${isOpen ? "absolute w-[25%] smallTablet:w-[35%] h-[89.9%] mobile:w-[80%] z-50 bg-white" : "largeTablet:hidden mobile:hidden w-full"} border-r h-full`}>
            <div className='px-5 py-5 space-y-5'>
                {isOpen && (
                    <div
                        onClick={closeSidebar}
                        className='bg-gray-200 hover:bg-gray-300 cursor-pointer w-fit px-1 py-1 rounded-full absolute right-2 top-2'
                    >
                        <IoChevronBackOutline />
                    </div>
                )}
                <Link
                    href="/home"
                    className={`flex items-center rounded-md cursor-pointer px-4 py-1 hover:bg-[#EBE9FE] ${currentPath == "/home" && "bg-[#EBE9FE] text-[#4d2e9a]"}`}
                >
                    <div className='mr-2'>
                        <CiHome size="1.7rem" />
                    </div>
                    <p className='text-lg'>Home</p>
                </Link>
                <Link
                    href="/tasks"
                    className={`flex items-center cursor-pointer rounded-md px-4 py-1 hover:bg-[#EBE9FE] ${currentPath == "/tasks" && "bg-[#EBE9FE] text-[#4d2e9a]"}`}
                >
                    <div className='mr-2'>
                        <CiCircleList size="1.7rem" />
                    </div>
                    <p>Tasks</p>
                </Link>
                <Link
                    href="/settings"
                    className={`flex items-center cursor-pointer rounded-md px-4 py-1 hover:bg-[#EBE9FE] ${currentPath == "/settings" && "bg-[#EBE9FE] text-[#4d2e9a]"}`}
                >
                    <div className='mr-2'>
                        <CiSettings size="1.7rem" />
                    </div>
                    <p>Settings</p>
                </Link>
            </div>

            <div className='h-0 mx-5 border mb-4'></div>
            <div className='px-5'>
                <p className='px-4'>TaskMaster, the best platform for cross-functional work Lorem ipsum dolor, sit amet consectetur adipisicing elit.s odit veritatis et incidunt ab ipsa suscipit aperiam, quos ad fugiat dolorem odio aspernatur, nisi sunt enim.</p>
            </div>
            <div className='h-0 mx-5 border mt-6 mobile:mt-2'></div>
            <Link href="https://github.com/Davidthecode" target='_blank'>
                <div className='flex mx-5 items-center justify-center mt-12 cursor-pointer hover:underline underline-offset-4'>
                    <p className='mr-1'>Github</p>
                    <div>
                        <DiGithubBadge />
                    </div>
                </div>
            </Link>
        </aside>
    )
}