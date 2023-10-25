"use client";

import Image from "next/image"
import anime from "../../../../public/anime.jpg"
import { RiArrowDropDownLine } from 'react-icons/ri'
import {RiArrowDropUpLine} from 'react-icons/ri'
import {useState, useEffect} from "react"
import {BsArrowRight} from "react-icons/bs"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/app/firebase/firebase-config";
import { useRouter } from "next/navigation";

export default function DashboardNavClient() {
    const router = useRouter()
    const [currentuser, setCurrentuser] = useState(auth.currentUser)
    const [dropdownVisibility, setDropdownVisibility] = useState(false)

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            if(user){
                setCurrentuser(user)
            }else setCurrentuser(null)
        })

        return ()=> unsubscribe()
    },[])

    const handleDropdown = () => {
        setDropdownVisibility(!dropdownVisibility)
    }

    const handleSignOut = async() => {
        await signOut(auth)
        router.push("/")
    }

    return (
        <div className='ml-auto flex items-center relative'>
            <div className='mr-2 mobile:hidden smallTablet:hidden'>
                <p>{currentuser?.displayName}</p>
            </div>
            <div className=''>
                <Image
                    className='rounded-full'
                    src={anime}
                    alt='image'
                    width={25}
                    height={25}
                />
            </div>
            <div className='cursor-pointer' onClick={handleDropdown}>
               {dropdownVisibility ? <RiArrowDropUpLine size="1.6rem" /> : <RiArrowDropDownLine size="1.6rem" />} 
            </div>
            <div className={`${dropdownVisibility ? "block" : "hidden"} absolute right-0 top-8 border-grey-00 border h-[4rem] w-[10rem] z-20 bg-white shadow-md`}>
                <div className="cursor-pointer flex justify-start items-center mt-2 px-2 hover:bg-gray-200 py-2">
                    <div className="mr-2">
                        <BsArrowRight />
                    </div>
                    <p onClick={handleSignOut}>Signout</p>
                </div>
            </div>
        </div>
    )
}