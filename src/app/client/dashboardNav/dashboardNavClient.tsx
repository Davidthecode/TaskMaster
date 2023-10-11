"use client";

import Image from "next/image"
import anime from "../../../../public/anime.jpg"
import { RiArrowDropDownLine } from 'react-icons/ri'
import {RiArrowDropUpLine} from 'react-icons/ri'
import { GoSignOut } from "react-icons/go"
import {useState} from "react"

export default function DashboardNavClient() {

    const [dropdownVisibility, setDropdownVisibility] = useState(false)

    const handleDropdown = () => {
        setDropdownVisibility(!dropdownVisibility)
    }

    return (
        <div className='ml-auto flex items-center relative'>
            <div className='mr-2 mobile:hidden'>
                <p>Ajibola David</p>
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
            <div className={`${dropdownVisibility ? "block" : "hidden"} absolute right-0 top-8 border-grey-00 border h-20 z-20 bg-[#F3F4F8] shadow-md`}>
                <div className="cursor-pointer flex justify-start items-center mt-2 px-2 text-[#e4824d] hover:bg-gray-200 py-2">
                    <div className="mr-1">
                        <GoSignOut />
                    </div>
                    <p className="">Signout</p>
                </div>
            </div>
        </div>
    )
}