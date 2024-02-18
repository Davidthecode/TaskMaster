"use client";

import { useState } from "react";
import taskmasterImage from "../../../public/taskmasterImage.png";
import Image from "next/image";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import toast from "react-hot-toast";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async () => {
        try {
            setLoading(true);
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent. Check your inbox");
            setLoading(false);
            toast.success("Password reset email sent. Check your inbox");
        } catch (error) {
            console.error('error');
            setMessage("error reseting email");
        };
    };

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
                    className="w-full rounded-sm px-3 mt-3 h-8 outline-blue-500 border-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <button className="mt-20 w-full text-center rounded-md bg-[#426DC6] text-white py-1" onClick={handleForgotPassword}>send email</button>
                )}
                {message}
            </div>
        </section>
    );
};