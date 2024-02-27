import dynamic from "next/dynamic";
import { TaskNavSkeleton } from "@/app/components/skeleton/skeleton";
import type { Metadata } from 'next';

const DynamicTaskNav = dynamic(() => import("@/app/components/tasks/taskNav"), {
    ssr: false,
    loading: ()=> <TaskNavSkeleton />
});

export const metadata: Metadata = {
    title: 'Tasks - TaskMaster',
    description: 'A modern platform for cross-functional work',
};

export default function TasksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-[100%]">
            <div className="h-[13%]">
                <DynamicTaskNav />
            </div>
            <div className="h-[87%]">
                {children}
            </div>
        </section>
    )
};