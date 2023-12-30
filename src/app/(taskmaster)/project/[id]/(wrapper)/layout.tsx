import dynamic from "next/dynamic";
import { ProjectHeaderSkeleton } from "@/app/components/skeleton/skeleton";

const DynamicProjectsHeader = dynamic(() => import("@/app/components/projects/projectsHeader"), {
    ssr: false,
    loading: () => <ProjectHeaderSkeleton />
})

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="pl-[3%] pt-[1.5%] h-full flex flex-col">
            <DynamicProjectsHeader />

            <div className="overflow-y-auto mt-3">
                {children}
            </div>
        </section>
    );
};