"use client";

import { useState } from "react";
import taskmasterImage from "../../../public/taskmasterImage.png";
import Image from "next/image";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import toast from "react-hot-toast";
import checked from "../../../public/checked.png";
import spinner from "../../../public/icons8-spinner.gif";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleForgotPassword = async () => {
        try {
            setLoading(true);
            await sendPasswordResetEmail(auth, email);
            setLoading(false);
            toast.success("Password reset email sent. Check your inbox");
            setCompleted(true);
        } catch (error) {
            toast.error('error reseting your email');
            setLoading(false);
        };
    };

    if (completed) {
        return (
            <section className="flex justify-center h-screen items-center">
                <div className="flex flex-col items-center">
                    <Image src={checked} alt="image" width={100} height={100} />
                    <p>An email has been sent to your inbox!</p>
                </div>
            </section>
        )
    } else {
        return (
            <section className="flex flex-col items-center">
                <div className="mt-[6rem] flex flex-col items-center">
                    <Image src={taskmasterImage} alt="image" width={30} height={30} />
                    <h1 className="text-2xl pt-6 opacity-50">Reset your password</h1>
                </div>

                <div className="bg-[#F5F2F1] h-fit w-[30%] rounded-md pt-6 pb-10 px-3 mt-8">
                    <p>Enter your user account&apos;s verified email address and we will send you a password reset link.</p>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full rounded-sm px-3 mt-8 h-8 outline-blue-500 border-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {loading ? (
                        <div className="mt-20 w-full text-center rounded-md bg-[#426DC6] flex justify-center text-white py-1 opacity-50">
                            <div>
                                <Image src={spinner} alt="image" width={20} height={20} />
                            </div>
                        </div>
                    ) : (
                        <button className="mt-20 w-full text-center rounded-md bg-[#426DC6] text-white py-1" onClick={handleForgotPassword}>send email</button>
                    )}
                </div>
            </section>
        );
    }
};