"use client";

import dynamic from "next/dynamic";
import DashboardNav from "../components/dashboardNav";
import Sidebar from "@/app/components/sidebar";
import CurrentUserHook from "../hooks/currentUserHook";
import { useRouter } from "next/navigation";

export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const { currentUser } = CurrentUserHook();
    if (!currentUser) {
        router.push('/login')
    } else return (
        <section className="font-sans h-screen flex flex-col">
            <section className="h-[7%]">
                <DashboardNav />
            </section>

            <section className="flex h-[93%]">
                <section className="w-[15%] largeScreen:w-[20%] largeTablet:w-0 mobile:w-0 h-[100%]">
                    <Sidebar />
                </section>
                <section className="w-full">
                    {children}
                </section>
            </section>
        </section>
    );
};