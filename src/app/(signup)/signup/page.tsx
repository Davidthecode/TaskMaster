"use client";

import { useState } from "react";
import Image from "next/image";
import googleIcon from "../../../../public/google-icon.png";
import taskmasterImage from "../../../../public/taskmasterImage.png";
import { auth, db, provider } from "@/app/firebase/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import spinner from "../../../../public/icons8-spinner.gif";
import taskImage from "../../../../public/task.png";
import taskOneImage from "../../../../public/task (1).png";
import projectPlanImage from "../../../../public/project-plan.png";
import checkListImage from "../../../../public/check-list.png";
import writingImage from "../../../../public/writing.png";
import writingTwoImage from "../../../../public/copy-writing.png";
import { collection, doc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const collectionRef = collection(db, "profile");

    const handleSignupWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            Cookies.set("token", JSON.stringify(result.user.uid));
            router.push("/home");
        } catch (error) {
            console.log(error);
        };
    };

    const handleSignup = async () => {
        const validate = username !== "" && email !== "" && password !== "";
        if (validate) {
            try {
                setLoading(true);
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
                Cookies.set("token", JSON.stringify(auth.currentUser?.uid));
                const user = userCredentials.user;
                await updateProfile(user, {
                    displayName: username,
                    photoURL: `https://ui-avatars.com/api/?name=${username}`
                });

                const profileData = {
                    username,
                    userEmail: email,
                    userId: user.uid,
                    photoUrl: `https://ui-avatars.com/api/?name=${username}`,
                    pronouns: "",
                    jobTitle: "",
                    department: "",
                    about: ""
                };
                const userRef = doc(collectionRef, user.uid);
                await setDoc(userRef, { profileData });
                toast.success("signed up successfully");
                setLoading(false);
                router.replace("/home");
            } catch (error: any) {
                if (error.code === "auth/weak-password") {
                    toast.error("Weak password!");
                } else if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already in use, Kindly log in");
                } else if (error.code == "auth/invalid-email") {
                    toast.error("Invalid email address");
                } else if (error.code == "auth/missing-password") {
                    toast.error("Input password");
                };
                setLoading(false);
            };
        } else toast.error("Complete all fields");
    };

    return (
        <div className="px-[10%] font-sans">
            <div className="pt-5 absolute flex items-center">
                <div className="mr-3">
                    <Image src={taskmasterImage} alt="image" width={30} height={30} />
                </div>
                <h1 className="text-3xl xs:text-xl">TaskMaster</h1>
            </div>

            <section>
                <div className="absolute top-60 left-80 xs:hidden largeTablet:left-10">
                    <Image src={taskImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute bottom-80 xs:hidden largeTablet:left-12">
                    <Image src={writingTwoImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute bottom-20 left-20 xs:bottom-10">
                    <Image src={taskOneImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute top-60 right-80 xs:hidden largeTablet:right-10">
                    <Image src={checkListImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute bottom-80 right-40 xs:hidden largeTablet:right-12">
                    <Image src={writingImage} alt="image" width={40} height={40} />
                </div>
                <div className="absolute bottom-20 right-20 xs:bottom-10">
                    <Image src={projectPlanImage} alt="image" width={40} height={40} />
                </div>
            </section>

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
                                type="password"
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

                    <div className="mt-6 flex justify-center">
                        <Link href="/login">
                            <button className="text-xs text-center">Already created an account? <span className="underline cursor-pointer font-semibold">Login</span></button>
                        </Link>
                    </div>

                    <div className="mt-3">
                        <p className="text-xs text-center">By signing up to agree to TaskMaster terms and policy</p>
                    </div>
                </div>
            </aside>
        </div>
    );
};