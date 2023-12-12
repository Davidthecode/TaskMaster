"use client";

import Image from "next/image";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/firebase-config";
import { useRouter } from "next/navigation";
import spinner from "../../../../public/icons8-spinner.gif";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import { StaticImageData } from "next/image";
import noUser from "../../../../public/nouser.jpg";

export default function DashboardNavClient() {
    const { currentUser } = CurrentUserHook();
    const router = useRouter();
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const [loading, setLoading] = useState(false);

    const [photo, setPhoto] = useState<string | StaticImageData>(noUser);

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL);
        };
    }, [currentUser]);

    const handleDropdown = () => {
        setDropdownVisibility(!dropdownVisibility);
    };

    const handleSignOut = async () => {
        setLoading(true);
        await signOut(auth);
        router.push("/");
        setLoading(false);
    };

    return (
        <div className='ml-auto flex items-center relative'>
            <div className='mr-2 mobile:hidden smallTablet:hidden'>
                <p className="text-xs text-[#E2E1E0]">{currentUser?.displayName}</p>
            </div>
            <div className=''>
                <Image
                    className='rounded-full'
                    src={photo}
                    alt='image'
                    width={22}
                    height={22}
                />
            </div>
            <div className='cursor-pointer' onClick={handleDropdown}>
                {dropdownVisibility ? <RiArrowDropUpLine size="1.6rem" /> : <RiArrowDropDownLine size="1.6rem" />}
            </div>
            <div className={`${dropdownVisibility ? "block" : "hidden"} absolute right-0 top-8 border-grey-00 border h-[4rem] w-[6rem] z-20 bg-white shadow-md`}>
                {loading ? (
                    <div className="flex justify-start items-center mt-2 px-2 py-2">
                        <p className="mr-2">Signing out</p>
                        <div>
                            <Image src={spinner} alt="image" width={20} height={20} />
                        </div>
                    </div>
                ) : (
                    <div className="cursor-pointer flex justify-start items-center mt-2 px-2 hover:bg-gray-200 text-black py-2">
                        <div className="mr-2">
                            <BsArrowRight />
                        </div>
                        <p onClick={handleSignOut} className="text-sm font-medium">Signout</p>
                    </div>
                )}
            </div>
        </div>
    );
};