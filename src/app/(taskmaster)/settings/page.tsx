"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import anime from "../../../../public/anime.jpg"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/navigation"
import { auth } from "@/app/firebase/firebase-config"
import { onAuthStateChanged, updateProfile, updatePassword } from "firebase/auth"
import toast from "react-hot-toast"

export default function Settings() {
    const router = useRouter()
    const [currentuser, setCurrentUser] = useState(auth.currentUser)
    const [editState, setEditState] = useState(false)
    const [passwordState, setPasswordState] = useState(false)
    const [passwordValue, setPasswordValue] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        if (currentuser && currentuser.displayName) {
            setName(currentuser?.displayName)
        }
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else setCurrentUser(null)
        })
        return () => unsubscribe()
    }, [])

    const handleRoute = () => {
        router.back()
    }

    const handleEdit = () => {
        setEditState(true)
    }

    const handlePasswordChange = () => {
        setPasswordState(true)  
    }

    const updateDisplayName = async () => {
        try {
            if (currentuser) {
                if (name !== "") {
                    await updateProfile(currentuser, { displayName: name })
                    setEditState(false)
                } else toast.error("input cannot be empty")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateUserPassword = async() => {
        try {
            if(currentuser){
                await updatePassword(currentuser, passwordValue)
                setPasswordState(false)
                toast.success("password updated successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleAbortName = () => {
        setEditState(false)
    }

    const handleAbortPassword = () => {
        setPasswordState(false)
    }

    return (
        <div className="px-[25%] pt-[5%] bg-[#F7F5F5] h-full mobile:px-6 largeTablet:px-[10%] largeScreen:px-[15%]">
            <div className="flex items-center">
                <div
                    onClick={handleRoute}
                    className="mb-4 mr-2 bg-gray-300 w-fit p-3 cursor-pointer rounded-full hover:bg-gray-400"
                >
                    <AiOutlineArrowLeft />
                </div>
                <p className="mb-4">Back</p>
            </div>
            <div className="mb-10">
                <h1 className="text-3xl font-semibold">My Account</h1>
            </div>
            <div className="mt-4">
                {editState ? (
                    <div className="flex items-center space-x-3">
                        <div className="h-12 w-[60%] mobile:h-8 mr-1">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border h-full outline-none px-3"
                                type="text"
                            />
                        </div>
                        <div className="flex">
                            <button
                                onClick={updateDisplayName}
                                className="bg-[#D1D5DB] hover:bg-[#9f9fa0] px-4 py-1 rounded-md mr-3 mobile:text-xs"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleAbortName}
                                className="bg-[#D1D5DB] hover:bg-[#9f9fa0] px-4 py-1 rounded-md mobile:text-xs"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex -tems-center">
                        <div className="mr-8">
                            <Image src={anime} alt="image" height={80} width={80} className="rounded-full" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-3">{currentuser?.displayName}</h1>
                            <button
                                onClick={handleEdit}
                                className="border border-gray-400 px-4 py-1 rounded-md hover:bg-[#EFEFEF]">Edit</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-10 bg-white h-[40%] py-8 px-4 mobile:h-[30%]">
                <div>
                    <h1 className="text-xl">Email</h1>
                    <h2 className="font-semibold mt-2">{currentuser?.email}</h2>
                </div>
                {passwordState ? (
                    <div className="flex mt-6 items-center space-x-3">
                        <div className="h-12 w-[60%] mobile:h-8">
                            <input
                                value={passwordValue}
                                onChange={(e)=> setPasswordValue(e.target.value)}
                                className="border h-full w-full outline-none px-3"
                                type="password"

                            />
                        </div>
                        <div className="flex">
                            <button
                                onClick={updateUserPassword}
                                className="bg-[#D1D5DB] hover:bg-[#9f9fa0] px-4 py-1 rounded-md mr-3 mobile:text-xs"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleAbortPassword}
                                className="bg-[#D1D5DB] hover:bg-[#9f9fa0] px-4 py-1 rounded-md mobile:text-xs"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="mt-6 flex items-center">
                        <div className="">
                            <h1 className="text-xl">Password</h1>
                            <h2 className="mt-2">**********</h2>
                        </div>
                        <div className="ml-auto">
                            <button
                                onClick={handlePasswordChange}
                                className="border px-2 py-1 rounded-md border-gray-400 hover:bg-[#EFEFEF] mobile:text-xs"
                            >
                                Change password
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}