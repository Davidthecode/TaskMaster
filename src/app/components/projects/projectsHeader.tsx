"use client";

import { db } from "@/app/firebase/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import projectImg from "../../../../public/project.png";
import { CiViewTable } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { PiTagThin } from "react-icons/pi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useProjectMembersContext } from "@/app/context/projectMembersContext";


export default function ProjectsHeader() {
    const { projectMembers, projectOwnerImageUrl } = useProjectMembersContext();
    const params = useParams();
    const paramsId = params.id;
    const currentPath = usePathname();
    const docRef = doc(db, "projects", paramsId as string);
    const [projectName, setProjectName] = useState("");

    useEffect(() => {
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                setProjectName(data.projectData.projectName);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <section className="px-6 pt-3 flex flex-col border-b h-[100%]">
            <div className="flex items-center">
                <div className="mr-2">
                    <Image src={projectImg} alt="image" width={40} height={40} />
                </div>
                {projectName.length ?
                    (<h1 className="text-xl font-medium">{projectName}</h1>
                    ) : (
                        <div className="bg-[#f0eded] w-24 h-3 rounded-md animate-pulse"></div>
                    )}
                <div className="absolute right-6 flex items-center">
                    <div>
                        <Image
                            src={projectOwnerImageUrl}
                            alt="image"
                            width={20}
                            height={20}
                            className="rounded-full"
                            loader={({ src }) => src}
                        />
                    </div>
                    <div className="flex items-center">
                        {projectMembers.length !== 0 && (
                            <>
                                {projectMembers.length > 2 ? (
                                    <>
                                        {projectMembers.slice(0, 2).map((projectMember, id) => (
                                            <div key={id}>
                                                <Image
                                                    src={projectMember.photoUrl}
                                                    alt="image"
                                                    width={20}
                                                    height={20}
                                                    className="rounded-full"
                                                    loader={({ src }) => src}
                                                />
                                            </div>
                                        ))}
                                        <div className="font-medium text-sm">+{projectMembers.length - 1}</div>
                                    </>
                                ) : (
                                    <>
                                        {projectMembers.map((projectMember, id) => (
                                            <div key={id} className="">
                                                <Image
                                                    src={projectMember.photoUrl}
                                                    alt="image"
                                                    width={20}
                                                    height={20}
                                                    className="rounded-full"
                                                    loader={({ src }) => src}
                                                />
                                            </div>
                                        ))}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center pb-2 mt-auto">
                <Link
                    href={`/project/${paramsId}/overview`}
                    className={`${currentPath == `/project/${paramsId}/overview` && "underline underline-offset-[12px]"}`}
                >
                    <div className={`flex items-center mr-6 cursor-pointer`}>
                        <div className="mr-1">
                            <PiTagThin size="1rem" />
                        </div>
                        <p className="text-sm font-medium">Overview</p>
                    </div>
                </Link>
                <Link
                    href={`/project/${paramsId}/list`}
                    className={`${currentPath == `/project/${paramsId}/list` && "underline underline-offset-[12px]"}`}
                >
                    <div className="flex items-center mr-6 cursor-pointer">
                        <div className="mr-1">
                            <CiViewTable size="1.2rem" />
                        </div>
                        <p className="text-sm font-medium">List</p>
                    </div>
                </Link>
                <Link
                    href={`/project/${paramsId}/board`}
                    className={`${currentPath == `/project/${paramsId}/board` && "underline underline-offset-[12px]"}`}
                >
                    <div className="flex items-center cursor-pointer">
                        <div className="mr-1">
                            <RxDashboard size="1rem" />
                        </div>
                        <p className="text-sm font-medium">Board</p>
                    </div>
                </Link>
            </div>
        </section>
    )
};