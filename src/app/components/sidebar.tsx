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
        <aside className={`${isOpen ? "absolute w-[25%] smallTablet:w-[35%] h-[93%] mobile:w-[80%] z-50 bg-white" : "largeTablet:hidden mobile:hidden w-full"} border-r h-[100%] text-[#E2E1E0] bg-[#2E2E30] flex flex-col`}>
            <div className='px-5 py-5 space-y-5'>
                {isOpen && (
                    <div
                        onClick={closeSidebar}
                        className='bg-gray-200 text-black hover:bg-gray-300 cursor-pointer w-fit px-1 py-1 rounded-full absolute right-2 top-2'
                    >
                        <IoChevronBackOutline />
                    </div>
                )}
                <Link
                    href="/home"
                    className={`flex items-center rounded-md cursor-pointer px-4 py-1 hover:bg-[#505051] ${currentPath == "/home" && "bg-[#636366] text-[#F0EFEE]"}`}
                >
                    <div className='mr-2'>
                        <CiHome size="1.7rem" />
                    </div>
                    <p className='text-sm'>Home</p>
                </Link>
                <Link
                    href="/tasks"
                    className={`flex items-center cursor-pointer rounded-md px-4 py-1 hover:bg-[#454547] ${currentPath == "/tasks" && "bg-[#636366] text-[#F0EFEE]"}`}
                >
                    <div className='mr-2'>
                        <CiCircleList size="1.7rem" />
                    </div>
                    <p className="text-sm">Tasks</p>
                </Link>
                <Link
                    href="/settings"
                    className={`flex items-center cursor-pointer rounded-md px-4 py-1 hover:bg-[#505051] ${currentPath == "/settings" && "bg-[#636366] text-[#F0EFEE]"}`}
                >
                    <div className='mr-2'>
                        <CiSettings size="1.7rem" />
                    </div>
                    <p className="text-sm">Settings</p>
                </Link>
            </div>
            <Link href="https://github.com/Davidthecode" target='_blank'>
                <div className='flex mx-5 items-center justify-center absolute bottom-10 left-10 cursor-pointer hover:underline underline-offset-4'>
                    <p className='mr-1'>Github</p>
                    <div>
                        <DiGithubBadge />
                    </div>
                </div>
            </Link>
        </aside>
    )
}