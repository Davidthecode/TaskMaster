import dynamic from "next/dynamic"
import { HomeNavSkeleton, TasksSkeleton } from "@/app/components/skeleton"

const DynamicHomeNav = dynamic(()=> import("@/app/components/homeNav"), {
    ssr: false,
    loading: ()=> <HomeNavSkeleton />
})

const DynamicTasks = dynamic(()=> import("@/app/components/tasks"), {
    ssr: false,
    loading: ()=> <TasksSkeleton />
})

export default function Tasks() {
    return (
        <section className="h-full">
            <div className="h-[8%]">
                <DynamicHomeNav />
            </div>
            <DynamicTasks />
        </section>
    )
}