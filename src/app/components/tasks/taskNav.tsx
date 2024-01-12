"use client";

import Image from "next/image";
import Link from "next/link";
import { CiViewTable } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { usePathname } from "next/navigation";
import CurrentUserHook from "../../hooks/currentUserHook";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import noUser from "../../../../public/nouser.jpg";

export default function TaskNav() {
    const { currentUser } = CurrentUserHook();
    const currentPath = usePathname();

    const [photo, setPhoto] = useState<string | StaticImageData>(noUser);

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL);
        }
    }, [currentUser]);

    return (
        <section className="px-6 pt-3 flex flex-col border-b h-[100%]">
            <div className="flex items-center">
                <div className="mr-2">
                    <Image src={photo} alt="image" height={40} width={40} className="rounded-full max-h-10" />
                </div>
                <div>
                    <h1 className="text-xl font-medium">My tasks</h1>
                </div>
            </div>
            <div className="flex items-center mt-auto">
                <div className="flex items-center pb-2">
                    <Link
                        href={`/tasks/list`}
                        className={`${currentPath == `/tasks/list` && "underline underline-offset-[12px]"}`}
                    >
                        <div className="flex items-center mr-6 cursor-pointer">
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
                        <div className="flex items-center cursor-pointer">
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
};