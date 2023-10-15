import dynamic from "next/dynamic";
import DashboardNav from "../components/dashboardNav";
import { SidebarSkeleton } from "../components/skeleton";

const DynamicSidebar = dynamic(() => import('@/app/components/sidebar'), {
    ssr: false,
    loading: () => <SidebarSkeleton />
})

export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="font-sans h-screen">
            <section className="h-[10%]">
                <DashboardNav />
            </section>

            <section className="flex h-[90%]">
                <section className="w-[15%] largeScreen:w-[20%] largeTablet:w-0 mobile:w-0">
                    <DynamicSidebar />
                </section>
                <section className="w-full">
                    {children}
                </section>
            </section>
        </section>
    );
};