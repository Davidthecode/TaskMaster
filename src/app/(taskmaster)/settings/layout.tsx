import dynamic from "next/dynamic";

const DynamicSettingsHeader = dynamic(() => import("@/app/components/settingsHeader"), {
    ssr: false
})

export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="pl-[5%] pt-[2%] h-full flex flex-col">
            <DynamicSettingsHeader />

            <div className="overflow-y-auto mt-6">
                {children}
            </div>
        </section>
    );
};