import dynamic from "next/dynamic";

const DynamicTaskNav = dynamic(() => import("@/app/components/tasks/taskNav"));

export default function TasksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-[100%]">
            <div className="h-[10%]">
                <DynamicTaskNav />
            </div>
            <div className="h-[90%]">
                {children}
            </div>
        </section>
    )
};