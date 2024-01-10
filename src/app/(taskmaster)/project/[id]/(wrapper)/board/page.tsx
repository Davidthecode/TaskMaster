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
                        <ProjectBoardTodoClient />
                        <ProjectBoardInprogressClient />
                        <ProjectBoardCompletedClient />
                    </div>
                )}

            </div>
        </section>
    )
};