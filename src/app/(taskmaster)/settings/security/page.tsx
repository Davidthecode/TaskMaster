"use client"

import { useEffect, useState } from "react"
import { auth } from "@/app/firebase/firebase-config"
import { EmailAuthProvider, onAuthStateChanged, reauthenticateWithCredential, updatePassword } from "firebase/auth"
import toast from "react-hot-toast"
import spinner from "../../../../../public/icons8-spinner.gif"
import Image from "next/image"

export default function Security() {
    const [currentuser, setCurrentUser] = useState(auth.currentUser)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [disableButon, setDisableButton] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else setCurrentUser(null);
        });

        return () => unsubscribe();
    }, []);

    const validateFields = () => {
        const oldPasswordValid = oldPassword !== "";
        const newPasswordValid = newPassword.length >= 6;
        const confirmNewPasswordValid = newPassword === confirmNewPassword;
        return oldPasswordValid && newPasswordValid && confirmNewPasswordValid;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (currentuser && currentuser.email) {
                try {
                    setLoading(true)
                    const credentials = EmailAuthProvider.credential(currentuser?.email, oldPassword)
                    await reauthenticateWithCredential(currentuser, credentials)
                    if (newPassword === confirmNewPassword) {
                        await updatePassword(currentuser, newPassword);
                        toast.success("Password updated successfully!");
                        setOldPassword("");
                        setNewPassword("");
                        setConfirmNewPassword("");
                    } else {
                        toast.error("New password and confirm password do not match.");
                    };
                    setLoading(false);
                } catch (error) {
                    toast.error("invalid old password");
                    setLoading(false);
                };
            };
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        setDisableButton(!validateFields());
    }, [oldPassword, newPassword, confirmNewPassword]);

    return (
        <section>
            <h1 className="mb-5 text-xl font-medium">Change password</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="oldPassword">
                            <p className="mb-2 text-sm font-medium">Old password</p>
                            <input
                                id="oldPassword"
                                className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-blue-500"
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mt-5">
                        <label
                            htmlFor="newPassword"
                        >
                            <p className="mb-2 text-sm font-medium">New password</p>
                            <input
                                id="newPassword"
                                className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-blue-500"
                                type="password"
                                placeholder="password must be at least 6 characters long"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mt-5">
                        <label
                            htmlFor="confirmPassword"
                        >
                            <p className="mb-2 text-sm font-medium">Confirm password</p>
                            <input
                                id="confirmPassword"
                                className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-blue-500"
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                            />
                        </label>
                    </div>
                </fieldset>
                <div className="mt-6">
                    {loading ? (
                        <div className="border bg-[#DDDDDC] cursor-auto px-6 py-2 rounded-md opacity-60 hover:opacity-100 w-fit">
                            <Image src={spinner} alt="image" width={20} height={20} />
                        </div>
                    ) : (
                        <button
                            type="submit"
                            className={`border bg-black text-white opacity-80 px-3 py-1 rounded-md text-sm ${disableButon && "opacity-30 text-opacity-25"}`}
                            disabled={disableButon}
                        >
                            Update password
                        </button>
                    )}
                </div>
            </form>
        </section>
    )
}