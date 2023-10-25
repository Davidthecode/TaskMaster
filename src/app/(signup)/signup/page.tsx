"use client";

import { useState, useEffect } from "react"
import Image from "next/image"
import googleIcon from "../../../../public/google-icon.png"
import taskmasterImage from "../../../../public/taskmasterImage.png"
import { auth, provider } from "@/app/firebase/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";
import spinner from "../../../../public/icons8-spinner.gif"

export default function Login() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSignupWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            console.log(result)
            router.push("/home")
        } catch (error) {
            console.log(error)
        }
    }
   
    const handleSignup = async () => {
        const validate = username !== "" && email !== "" && password !== ""
        if (validate) {
            try {
                setLoading(true)
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
                await updateProfile(userCredentials.user, {
                    displayName: username
                })
                setUsername("")
                setEmail("")
                setPassword("")
                toast.success("signed up successfully")
                setLoading(false)
                router.push("/home")
            } catch (error: any) {
                if (error.code === "auth/weak-password") {
                    toast.error("Weak password!")
                }
                else if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already in use, Kindly log in")
                } else if (error.code == "auth/invalid-email") {
                    toast.error("Invalid email address")
                } else if (error.code == "auth/missing-password") {
                    toast.error("Input password")
                }
                setLoading(false)
            }
        } else toast.error("Complete all fields")
    }

    const redirectToLogin = () => {
        router.push("/login")
    }

    return (
        <div className="px-[10%] font-sans">
            <div className="pt-5 absolute flex items-center">
                <div className="mr-3">
                    <Image src={taskmasterImage} alt="image" width={30} height={30} />
                </div>
                <h1 className="text-3xl xs:text-xl">TaskMaster</h1>
            </div>

            <aside className="flex justify-center items-center h-screen">
                <div className="w-[30rem]">
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-4xl mb-2 text-center xs:text-2xl">You are one click away from organizing your work</h1>
                        </div>
                        <div
                            onClick={handleSignupWithGoogle}
                            className="flex justify-between items-center border-black rounded-md border-opacity-20 px-5 py-3 mt-8 border w-full hover:bg-[#F9F8F8] cursor-pointer text-black"
                        >
                            <div>
                                <Image src={googleIcon} alt="image" width={20} height={20} className="bg-[#F9F8F8]" />
                            </div>
                            <div className="pr-[30%] xs:pr-[10%]">
                                <p>Signup with google</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-8 w-full">
                        <div className="border w-[46%] h-0"></div>
                        <div className="px-2 text-sm">or</div>
                        <div className="border w-[46%] h-0"></div>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col mb-2">
                            <label htmlFor="username" className="text-xs font-semibold">User Name</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border-2 border-black border-opacity-20 h-10 rounded-md px-2 outline-[#426DC6]"
                                type="text"
                                id="username"
                            />
                        </div>
                        <div className="flex flex-col mb-2">
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
                                type="text"
                                id="password"
                                placeholder="Password must be at least 6 characters"
                            />
                        </div>
                        <div
                            className={`w-full mt-6 flex items-center justify-center bg-[#426DC6] hover:bg-[#375699] h-10 rounded-md cursor-pointer ${loading && "opacity-60"}`}
                            onClick={handleSignup}
                        >
                            {loading && <div className="mr-2" >
                                <Image src={spinner} alt="image" width={20} height={20} />
                            </div>}
                            <button
                                className=" text-white w-fit h-full"
                            >
                                Create new account
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-xs text-center">Already created an account? <span className="underline cursor-pointer font-semibold" onClick={redirectToLogin}>Login</span></p>
                    </div>

                    <div className="mt-3">
                        <p className="text-xs text-center">By signing up to agree to TaskMaster terms and policy</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}