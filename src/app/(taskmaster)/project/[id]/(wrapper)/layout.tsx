import dynamic from "next/dynamic";
import { ProjectHeaderSkeleton } from "@/app/components/skeleton/skeleton";
import type { Metadata } from 'next';

const DynamicProjectsHeader = dynamic(() => import("@/app/components/projects/projectsHeader"), {
    ssr: false,
    loading: () => <ProjectHeaderSkeleton />
});

export const metadata: Metadata = {
    title: 'Project - Taskmaster',
    description: 'A modern platform for cross-functional work',
};

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-[100%]">
            <div className="h-[13%]">
                <DynamicProjectsHeader />
            </div>

            <div className="h-[87%] overflow-y-auto">
                {children}
            </div>
        </section>
    );
};