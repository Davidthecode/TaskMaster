import dynamic from "next/dynamic";
import DashboardNav from "../components/navbar/dashboardNav";
import { SidebarSkeleton } from "../components/skeleton/skeleton";
import type { Metadata } from 'next';

const DynamicSidebar = dynamic(() => import('@/app/components/sidebar/sidebar'), {
    ssr: false,
    loading: () => <SidebarSkeleton />
});


export const metadata: Metadata = {
    title: 'Taskmaster',
    description: 'A modern platform for cross-functional work',
};


export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="font-sans h-screen flex flex-col">
            <section className="h-[7%]">
                <DashboardNav />
            </section>

            <section className="flex h-[93%]">
                <section className="w-[15%] largeScreen:w-[20%] largeTablet:w-0 mobile:w-0 h-[100%]">
                    <DynamicSidebar />
                </section>
                <section className="w-[85%] largeTablet:w-full smallTablet:w-full mobile:w-full">
                    {children}
                </section>
            </section>
        </section>
    );
};