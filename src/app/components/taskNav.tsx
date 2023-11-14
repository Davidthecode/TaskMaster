"use client"

import Image from "next/image"
import anime from "../../../public/anime.jpg"
import Link from "next/link"
import {CiViewTable} from "react-icons/ci"
import {RxDashboard} from "react-icons/rx"
import { usePathname } from "next/navigation"

export default function TaskNav() {
    const currentPath = usePathname();

    return (
        <section className="px-10 pt-2 flex border-b">
            <div className="mr-4 mt-1">
                <Image src={anime} alt="image" height={50} width={50} className="rounded-full" />
            </div>
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="text-xl font-medium">My tasks</h1>
                </div>
                <div className="mt-2 flex items-center pb-2">
                    <Link
                        href={`/tasks/list`}
                        className={`${currentPath == `/tasks/list` && "underline underline-offset-[12px]"}`}
                    >
                        <div className="flex items-center mr-6 cursor-pointer opacity-70">
                            <div className="mr-1">
                                <CiViewTable size="1.2rem" />
                            </div>
                            <p className="text-sm font-medium ">List</p>
                        </div>
                    </Link>
                    <Link
                        href={`/tasks/board`}
                        className={`${currentPath == `/tasks/board` && "underline underline-offset-[12px]"}`}
                    >
                        <div className="flex items-center cursor-pointer opacity-70">
                            <div className="mr-1">
                                <RxDashboard size="1rem" />
                            </div>
                            <p className="text-sm font-medium ">Board</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}