"use client"


import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function SettingsHeader () {
    const currentPath = usePathname()
    const router = useRouter()
    const handleRoute = () => {
        router.back()
    }
    return (
        <section>
            <div className="flex items-center">
                    <div
                        onClick={handleRoute}
                        className="mb-4 mr-2 bg-gray-300 w-fit p-1 cursor-pointer rounded-full hover:bg-gray-400"
                    >
                        <AiOutlineArrowLeft />
                    </div>
                    <p className="mb-4">Back</p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">Settings</h1>
                </div>
                <div className="my-5">
                    <Link href="/settings/profile" className={`text-md font-semibold mr-4 ${currentPath == "/settings" || currentPath == "/settings/profile" ? "opacity-100 underline underline-offset-8" : "opacity-50 text-sm"}`}>
                        Profile
                    </Link>
                    <Link href="/settings/security" className={`text-md font-semibold ${currentPath == "/settings/security" ? "opacity-100 underline underline-offset-8" : "opacity-50 text-sm"}`}>
                        security
                    </Link>
                </div>
                <div className="border-t mr-[5%]"></div>
        </section>
    )
}