"use client";

import { auth, db, provider } from "@/app/firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import googleIcon from "../../../../public/google-icon.png";

export default function HandleGoogleSignIn() {
    const { replace } = useRouter();
    const searchParams = useSearchParams();

    const continueTo = searchParams.get('continueTo') || "/home";

    const handleSignupWithGoogle = async () => {
        try {
            const { user } = await signInWithPopup(auth, provider);
            const profileData = {
                username: user.displayName,
                userEmail: user.email,
                userId: user.uid,
                photoUrl: `https://ui-avatars.com/api/?name=${user.displayName}`,
                pronouns: "",
                jobTitle: "",
                department: "",
                about: ""
            };
            Cookies.set("token", JSON.stringify(user.uid));
            const userRef = doc(collection(db, "profile"), user.uid);
            await setDoc(userRef, { profileData });
            toast.success("Logged in successfully");
            replace(continueTo);
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <div className="flex justify-between items-center border-black rounded-md border-opacity-20 px-5 py-3 mt-8 border w-full hover:bg-[#F9F8F8] cursor-pointer">
            <div>
                <Image src={googleIcon} alt="image" width={20} height={20} />
            </div>
            <div className="pr-[30%] xs:pr-[10%]" onClick={handleSignupWithGoogle}>
                <p>Continue with Google</p>
            </div>
        </div>
    )
}