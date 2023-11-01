"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import anime from "../../../../../public/anime.jpg"
import { auth, db } from "@/app/firebase/firebase-config"
import { onAuthStateChanged, updateProfile } from "firebase/auth"
import toast from "react-hot-toast"
import spinner from "../../../../../public/icons8-spinner.gif"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore"

export default function Profile() {
    const [currentuser, setCurrentUser] = useState(auth.currentUser)
    const [username, setUsername] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [pronouns, setPronouns] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [department, setDepartment] = useState("")
    const [about, setAbout] = useState("")
    const [disableButon, setDisableButton] = useState(true)
    const [loading, setLoading] = useState(false)
    const profileCollectionRef = collection(db, "profile")


    useEffect(() => {
        if (currentuser && currentuser.displayName) {
            setUsername(currentuser?.displayName)
        }
        if (currentuser && currentuser.email) {
            setUserEmail(currentuser?.email)
        }
    }, [currentuser])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else setCurrentUser(null)
        })
        return () => unsubscribe()
    }, [currentuser])

    useEffect(() => {
        if (currentuser && currentuser.uid) {
            try {
                const userRef = doc(profileCollectionRef, currentuser?.uid)
                const unsubscribe = onSnapshot(userRef, (snapshot) => {
                    if (snapshot.exists()) {
                        setAbout(snapshot.data().profileData.about)
                        setDepartment(snapshot.data().profileData.department)
                        setJobTitle(snapshot.data().profileData.jobTitle)
                        setPronouns(snapshot.data().profileData.pronouns)
                    }
                })
                return () => unsubscribe()
            } catch (error) {
                console.log(error)
            }
        }
    }, [currentuser])

    const validateFields = () => {
        const fullNameValid = username.length > 0
        return fullNameValid
    }

    useEffect(() => {
        setDisableButton(!validateFields())
    }, [username])

    const saveProfileChanges = async () => {
        try {
            setLoading(true)
            if (currentuser) {
                const profileData = {
                    pronouns,
                    jobTitle,
                    department,
                    about,
                    userId: currentuser?.uid
                }
                await updateProfile(currentuser, { displayName: username })
                const userRef = doc(profileCollectionRef, currentuser?.uid)
                await setDoc(userRef, { profileData })
                toast.success("Profile updated successfully")
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className="pt-[2%] bg-white h-full mobile:px-6 overflow-y-auto">
            <div className="flex items-center">
                <div className="mr-5">
                    <Image src={anime} alt="image" height={40} width={40} className="rounded-full" />
                </div>
                <div>
                    <h2 className="text-blue-500 hover:underline cursor-pointer w-fit">Upload your photo</h2>
                    <p className="text-xs">Photos help your teammates recognize you in TaskMaster</p>
                </div>
            </div>
            <div className="flex items-center mt-10">
                <div className="mr-5">
                    <p className="mb-2 text-sm font-medium">Your full name</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-blue-500"
                    />
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Pronouns</p>
                    <input
                        value={pronouns}
                        onChange={(e) => setPronouns(e.target.value)}
                        type="text"
                        placeholder="Third person pronouns (e.g. she/her/hers)"
                        className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-blue-500"
                    />
                </div>
            </div>
            <div className="flex items-center mt-10">
                <div className="mr-5">
                    <p className="mb-2 text-sm font-medium">Job title</p>
                    <input
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        type="text"
                        className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-blue-500"
                    />
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Department or team</p>
                    <input
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        type="text"
                        className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-blue-500"
                    />
                </div>
            </div>
            <div className="mt-10">
                <p className="mb-2 text-sm font-medium">Email</p>
                <input
                    type="text"
                    value={userEmail}
                    readOnly
                    className="border rounded-md w-[20rem] h-[2.3rem] px-2 outline-none opacity-60"
                />
            </div>
            <div className="mt-10">
                <p className="mb-2 text-sm font-medium">About me</p>
                <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="I usually work from 9am-5pm PST. Feel free to assign me a task with a due date anytime. Also, i love dogs!"
                    className="border rounded-md w-[45rem] h-[6rem] px-2 py-1 outline-blue-500"
                />
            </div>
            <div className="my-5">
                {loading ? (
                    <div className="border bg-[#DDDDDC] cursor-auto px-6 py-2 rounded-md opacity-60 hover:opacity-100 w-fit">
                        <Image src={spinner} alt="image" width={20} height={20} />
                    </div>
                ) : (
                    <button
                        disabled={disableButon}
                        onClick={saveProfileChanges}
                        className={`border px-3 py-1 rounded-md bg-black text-white opacity-80 text-sm${disableButon && "opacity-25 text-opacity-25"}`}
                    >
                        Save changes
                    </button>
                )}
            </div>
        </div>
    )
}