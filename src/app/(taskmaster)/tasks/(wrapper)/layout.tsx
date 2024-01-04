import dynamic from "next/dynamic";

const DynamicTaskNav = dynamic(() => import("@/app/components/tasks/taskNav"), {ssr: false});

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