"use client"

import ProjectsSubnav from "@/app/components/projects/projectsSubnav";
import ProjectListTodoClient from "@/app/client/projects/projectListTodoClient"
import ProjectListInprogressClient from "@/app/client/projects/projectListInprogressClient"
import ProjectListCompletedClient from "@/app/client/projects/projectListCompletedClient"
import { TaskListSkeleton } from "@/app/components/skeleton/skeleton"
import { useProjects } from "@/app/context/projectsContext"

export default function List() {
    const { loading } = useProjects();
    console.log(loading)

    return (
        <section className="px-6 h-[100%]">
            <div className="h-[8%]">
                <ProjectsSubnav />
            </div>

            <div className="flex items-center h-[8%]">
                <div className="w-[50%] border-b">
                    <p className="text-xs py-3 cursor-default">Task name</p>
                </div>
                <div className="flex items-center w-[50%]">
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Assignee</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Due date</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Collaborators</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Priority</div>
                    <div className="text-xs w-[20%] border border-t-0 border-r-0 py-3 text-center cursor-default">Status</div>
                </div>
            </div>

            {loading ? (
                <TaskListSkeleton />
            ) : (
                <div className="h-[84%] overflow-y-auto pb-4">
                    <ProjectListTodoClient />
                    <ProjectListInprogressClient />
                    <ProjectListCompletedClient />
                </div>
            )}
        </section>
    )
}