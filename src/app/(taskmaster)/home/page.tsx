import dynamic from "next/dynamic";
import { HomeSkeleton } from "@/app/components/skeleton/skeleton";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home - Taskmaster',
    description: 'A modern platform for cross-functional work',
};

const DynamicHomeClient = dynamic(()=> import("@/app/client/home/homeClient"), {
    ssr: false,
    loading: ()=> <HomeSkeleton />
});

export default function Home() {
    return (
        <DynamicHomeClient />
    );
};