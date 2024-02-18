"use client";

import taskmasterImage from "../../../public/taskmasterImage.png";
import Image from "next/image";

export default function ForgotPassword() {
    return (
        <section className="flex flex-col items-center">
            <div className="mt-[6rem] flex flex-col items-center">
                <Image src={taskmasterImage} alt="image" width={30} height={30} />
                <h1 className="text-2xl pt-6 opacity-50">Reset your password</h1>
            </div>

            <div className="bg-gray-200 h-fit w-[30%] rounded-md pt-6 pb-10 px-3 mt-8">
                <p>Enter your user account&apos;s verified email address and we will send you a password reset link.</p>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-sm px-3 mt-3 h-8 outline-blue-500 border-none"

                />
                <button className="mt-20 w-full text-center rounded-md bg-[#426DC6] text-white py-1">send email</button>
            </div>
        </section>
    );
};