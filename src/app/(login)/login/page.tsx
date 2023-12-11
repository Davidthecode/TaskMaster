"use client";

import { useState, useEffect } from "react"
import Image from "next/image"
import googleIcon from "../../../../public/google-icon.png"
import taskmasterImage from "../../../../public/taskmasterImage.png"
import { auth, provider } from "@/app/firebase/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import spinner from "../../../../public/icons8-spinner.gif"
import meetingOneImage from "../../../../public/meeting.png"
import meetingTwoImage from "../../../../public/meeting-room.png"
import meetingThreeImage from "../../../../public/round-table.png"
import writingImage from "../../../../public/writing.png";
import { useSearchParams } from "next/navigation";

export default function Login() {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const a = "project/15ea464c-67fd-4b93-9fae-be657c916259/overview"
    const continueTo = searchParams.get("continueTo") || a;

    const handleSignupWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            console.log(result)
            router.push("/home")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignin = async () => {
        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
            setEmail("")
            setPassword("")
            setLoading(false)
            router.replace(continueTo);
            toast.success("logged in Successfully")
        } catch (error: any) {
            if (error.code == "auth/invalid-login-credentials") {
                toast.error("Invalid login Credentials")
            } else if (error.code == "auth/invalid-email") {
                toast.error("Invalid email address")
            } else if (error.code == "auth/missing-password") {
                toast.error("Input password")
            }
            setLoading(false)
        }
    }

    const redirectToSignUp = () => {
        router.push("/signup")
    }

    return (
        <div className="px-[10%] font-sans">
            <div className="pt-5 absolute flex items-center">
                <div className="mr-3">
                    <Image src={taskmasterImage} alt="image" height={30} width={30} />
                </div>
                <h1 className="text-3xl xs:text-xl">TaskMaster</h1>
            </div>

            <section>
                <div className="absolute top-40 left-20 xs:left-10">
                    <Image src={meetingOneImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute bottom-40 left-40 largeTablet:bottom-20 xs:bottom-10 xs:left-10">
                    <Image src={meetingTwoImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute top-40 right-20 xs:right-10">
                    <Image src={writingImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute bottom-40 right-40 largeTablet:bottom-20 xs:bottom-10 xs:right-10">
                    <Image src={meetingThreeImage} alt="image" width={40} height={40} />
                </div>
            </section>


            <aside className="flex justify-center items-center h-screen">
                <div className="w-[30rem]">
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-3xl xs:text-2xl mb-2">Welcome to TaskMaster</h1>
                            <p className="text-xl xs:text-lg text-center">To get started, please sign in</p>
                        </div>
                        <div className="flex justify-between items-center border-black rounded-md border-opacity-20 px-5 py-3 mt-8 border w-full hover:bg-[#F9F8F8] cursor-pointer">
                            <div>
                                <Image src={googleIcon} alt="image" width={20} height={20} />
                            </div>
                            <div className="pr-[30%] xs:pr-[10%]" onClick={handleSignupWithGoogle}>
                                <p>Continue with Google</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-8 w-full">
                        <div className="border w-[46%] h-0"></div>
                        <div className="px-2">or</div>
                        <div className="border w-[46%] h-0"></div>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-xs font-semibold">Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-2 border-black border-opacity-20 h-10 rounded-md px-2 outline-[#426DC6]"
                                type="text"
                                id="email"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="password" className="text-xs font-semibold">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-2 border-black border-opacity-20 h-10 rounded-md px-2 outline-[#426DC6]"
                                type="password"
                                id="password"
                            />
                        </div>
                        {loading ? (
                            <div className="w-full mt-6 flex items-center justify-center bg-[#426DC6] h-10 rounded-md cursor-default opacity-50">
                                <div>
                                    <Image src={spinner} alt="image" width={20} height={20} />
                                </div>
                            </div>
                        ) : (
                            <div
                                onClick={handleSignin}
                                className="w-full mt-6 flex items-center justify-center bg-[#426DC6] hover:bg-[#375699] h-10 rounded-md cursor-pointer"
                            >
                                <button
                                    className="text-white w-fit h-10"
                                >
                                    Log In
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <p className="text-xs text-center">Don&apos;t have an account? <span className="underline cursor-pointer font-semibold" onClick={redirectToSignUp}>create account</span></p>
                    </div>
                </div>
            </aside>
        </div>
    )
}