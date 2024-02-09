"use client";

import ProjectsSubnav from "@/app/components/projects/projectsSubnav";
import ProjectBoardTodoClient from "@/app/client/projects/projectBoardTodoClient";
import ProjectBoardInprogressClient from "@/app/client/projects/projectBoardInprogressClient";
import ProjectBoardCompletedClient from "@/app/client/projects/projectBoardCompletedClient";
import { TaskBoardSkeleton } from "@/app/components/skeleton/skeleton";
import { useProjects } from "@/app/context/projectsContext";

export default function Board() {
    const { loading } = useProjects();
    return (
        <section className="h-[100%]">
            <div className="h-[8%] px-6">
                <ProjectsSubnav />
            </div>
            <div className="flex bg-[#f0eded] px-6 overflow-y-auto h-[92%]">
                {loading ? (
                    <TaskBoardSkeleton />
                ) : (
                    <div className="w-full flex">
                        <div className="w-[22%] largeScreen:w-[28%] largeTablet:w-[28%] smallTablet:min-w-[50%] mobile:min-w-[80%]">
                            <ProjectBoardTodoClient />
                        </div>
                        <div className="w-[22%] largeScreen:w-[28%] largeTablet:w-[28%] smallTablet:min-w-[50%] mobile:min-w-[80%]">
                            <ProjectBoardInprogressClient />
                        </div>
                        <div className="w-[22%] largeScreen:w-[28%] largeTablet:w-[28%] smallTablet:min-w-[50%] mobile:min-w-[80%]">
                            <ProjectBoardCompletedClient />
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
};