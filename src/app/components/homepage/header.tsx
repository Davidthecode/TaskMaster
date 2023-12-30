import dynamic from "next/dynamic";
import { HeaderButtonSkeleton } from "../skeleton/skeleton";

const DynamicHeaderClient = dynamic(() => import("@/app/client/header/headerClient"), {
    ssr: false,
    loading: () => <HeaderButtonSkeleton />
})

export default function Header() {
    return (
        <section className="bg-[#EEEBEA] pt-10 flex justify-center px-[8%]">
            <div className="w-[40rem]">
                <div className="flex justify-center ">
                    <h1 className="text-6xl w-full text-center leading-tight xs:text-4xl xs:text-start">The best platform for cross-functional work</h1>
                </div>
                <div className="flex justify-center pt-10">
                    <p className="w-full text-xl text-center opacity-80 xs:text-start xs:text-2xl">Want more efficiency in your organization? TaskMaster is easy for all teams to use, so you can deliver quality work, faster.</p>
                </div>
                <DynamicHeaderClient />
            </div>
        </section>
    )
}