'use client'

import Image from "next/image"
import anime from "../../../public/anime.jpg"
import {RiArrowDropDownLine} from 'react-icons/ri'

export function DashboardNavClient () {
    return (
        <div>
             <div className='ml-auto flex items-center'>
                <div className='mr-2'>
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
                <div className='cursor-pointer'>
                    <RiArrowDropDownLine size="1.6rem"/>
                </div>
            </div>
        </div>
    )
}