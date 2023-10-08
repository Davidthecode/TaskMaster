"use client";

import { useRouter } from "next/navigation";

export default function HeaderClient() {
    const router = useRouter();

    const handleSignUp = () => {
        router.push("/signup");
    };

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <section className="flex justify-center pt-10 xs:justify-start">
            <div className="mr-4">
                <button
                    className="bg-black text-white text-lg px-5 py-3 rounded-sm hover:bg-[#EE6969] hover:text-black xs:text-sm"
                    onClick={handleSignUp}
                >
                    Get started
                </button>
            </div>
            <div>
                <button
                    className="text-black border text-lg border-black px-5 py-3 rounded-sm hover:bg-[#EE6969] hover:border-[#EE6969] xs:text-sm"
                    onClick={handleLogin}
                >
                    See how it works
                </button>
            </div>
        </section>
    )
};