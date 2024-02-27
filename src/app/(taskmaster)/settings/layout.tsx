import dynamic from "next/dynamic";
import type { Metadata } from 'next';

const DynamicSettingsHeader = dynamic(() => import("@/app/components/settings/settingsHeader"), {
    ssr: false
})

export const metadata: Metadata = {
    title: 'Settings - Taskmaster',
    description: 'A modern platform for cross-functional work',
};

export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="pl-[5%] pt-[2%] h-full flex flex-col largeTablet:w-full">
            <DynamicSettingsHeader />

            <div className="overflow-y-auto mt-6">
                {children}
            </div>
        </section>
    );
};