"use client";

import { useState, useEffect } from "react";
import { CiCircleList } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';
import { CiHome } from 'react-icons/ci';
import { DiGithubBadge } from 'react-icons/di';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebarContext } from '../../context/sidebarContext';
import { MdOutlineInsights } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import CreateProject from "../projects/createProject";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import CurrentUserHook from "../../hooks/currentUserHook";
import { ProjectSideBarSkeleton } from "../skeleton/skeleton";

export default function Sidebar() {
    const { currentUser } = CurrentUserHook();
    const { isOpen, setIsOpen } = useSidebarContext();
    const currentPath = usePathname();
    const [isVisible, setIsvisible] = useState(false);
    const collectionRef = collection(db, "projects");
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleResise = () => {
            if (window.innerWidth > 1174) {
                setIsOpen(false);
            };
        };
        window.addEventListener("resize", handleResise);

        return () => {
            window.removeEventListener("resize", handleResise);
        };
    }, []);

    useEffect(() => {
        try {
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
                setLoading(true);
                const tempArray: any[] = [];
                snapshot.forEach((doc) => {
                    const projectData = doc.data().projectData;
                    if (projectData.members && projectData.members.includes(currentUser?.uid)) {
                        tempArray.push({ ...doc.data(), id: doc.id });
                    };
                });
                setProjects(tempArray);
                setLoading(false);
            });

            return () => unsubscribe();
        } catch (error) {
            console.log(error);
        };
    }, [currentUser]);

    const handleAddProject = () => {
        setIsvisible(true);
    };

    const onClose = () => {
        setIsvisible(false);
    };

    return (
        <div
            className={`bg-[#2E2E30] w-[14.3rem] text-white h-[100%] ${isOpen ? "fixed inset-0 z-40 largeTablet:block smallTablet:block mobile:block h-[93%] mt-auto border-t border-opacity-90" : "largeTablet:hidden smallTablet:hidden mobile:hidden"
                }`}
        >
            <div className='px-5 py-5 space-y-5'>
                <Link
                    href="/home"
                    className={`flex items-center rounded-md cursor-pointer px-4 py-1 hover:bg-[#505051] ${currentPath == "/home" && "bg-[#636366] text-[#F0EFEE]"}`}
                >
                    <div className='mr-1'>
                        <CiHome size="1.3rem" />
                    </div>
                    <p className='text-sm'>Home</p>
                </Link>
                <Link
                    href="/tasks/list"
                    className={`flex items-center cursor-pointer rounded-md px-4 py-1 hover:bg-[#454547] ${currentPath == "/tasks/list" || currentPath == "/tasks/board" ? "bg-[#636366] text-[#F0EFEE]" : ""}`}
                >
                    <div className='mr-1'>
                        <CiCircleList size="1.3rem" />
                    </div>
                    <p className="text-sm">Tasks</p>
                </Link>

                <Link href="/insights"
                    className={`flex items-center rounded-md cursor-pointer px-4 py-1 hover:bg-[#505051] ${currentPath == "/insights" && "bg-[#636366] text-[#F0EFEE]"}`}
                >
                    <div className="mr-1">
                        <MdOutlineInsights />
                    </div>
                    <p className="text-sm">Insights</p>
                </Link>
                <Link href="/goals"
                    className={`flex items-center rounded-md cursor-pointer px-4 py-1 hover:bg-[#505051] ${currentPath == "/goals" && "bg-[#636366] text-[#F0EFEE]"}`}
                >
                    <div className="mr-1">
                        <GoGoal />
                    </div>
                    <p className="text-sm">Goals</p>
                </Link>

                <div className="w-full border border-gray-200 border-opacity-10"></div>

                <div className="px-5 py-1 flex items-center">
                    <h1 className="font-semibold text-sm mr-1">Projects</h1>
                    <div className="cursor-pointer opacity-80 hover:opacity-100" onClick={handleAddProject} title="create project">
                        <IoIosAdd size="1.5rem" />
                    </div>
                </div>

                <div>
                    {loading ? (
                        <ProjectSideBarSkeleton />
                    ) : (
                        <div className="h-[15rem] overflow-y-auto">
                            {projects.map((project) => {
                                return (
                                    <div className="px-4 mt-2 text-sm flex items-center hover:bg-[#454547] rounded-md py-1" key={project.id}>
                                        <div className="bg-[#F06A6A] w-4 h-4 rounded-md"></div>
                                        <Link
                                            href={`/project/${project.id}/overview`}
                                            className="px-2"
                                        >
                                            {project.projectData.projectName}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="px-5 space-y-5 flex flex-col mt-auto">
                <Link
                    href="/settings/profile"
                    className={`flex items-center cursor-pointer rounded-md px-4 py-1 mb-12 hover:bg-[#505051] ${currentPath == "/settings" || currentPath == "/settings/profile" || currentPath == "/settings/security" && "bg-[#636366] text-[#F0EFEE]"}`}
                >
                    <div className='mr-2'>
                        <CiSettings size="1.3rem" />
                    </div>
                    <p className="text-sm">Settings</p>
                </Link>
                <Link href="https://github.com/Davidthecode" target='_blank'>
                    <div className='flex items-center px-6 mb-3 cursor-pointer hover:underline underline-offset-4'>
                        <p className='mr-1 text-xs'>Github</p>
                        <div>
                            <DiGithubBadge />
                        </div>
                    </div>
                </Link>
            </div>
            {isVisible && <CreateProject onClose={onClose} />}
        </div>
        // </aside>
    );
};


