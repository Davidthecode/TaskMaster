"use client";

import { BsJournals } from 'react-icons/bs'
import { GoTasklist } from 'react-icons/go'
import { CiCircleList } from 'react-icons/ci'
import { CiSettings } from 'react-icons/ci'
import { CiHome } from 'react-icons/ci'
import { DiGithubBadge } from 'react-icons/di'
import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className='border-r w-full h-full'>
            <div className='px-5 py-5 space-y-5'>
                <Link
                    href="/home"
                    className='flex items-center cursor-pointer px-4 py-1 hover:bg-gray-200'
                >
                    <div className='mr-2'>
                        <CiHome size="1.7rem" />
                    </div>
                    <p className='text-lg'>Home</p>
                </Link>
                <Link
                    href="/tasks"
                    className='flex items-center cursor-pointer px-4 py-1 hover:bg-gray-200'
                >
                    <div className='mr-2'>
                        <CiCircleList size="1.7rem" />
                    </div>
                    <p>Tasks</p>
                </Link>
                <Link
                    href="/tasklist"
                    className='flex items-center cursor-pointer px-4 py-1 hover:bg-gray-200'
                >
                    <div className='mr-2'>
                        <GoTasklist size="1.7rem" />
                    </div>
                    <p>Taskslist</p>
                </Link>
                <Link
                    href="journal"
                    className='flex items-center cursor-pointer px-4 py-1 hover:bg-gray-200'
                >
                    <div className='mr-2'>
                        <BsJournals size="1.5rem" />
                    </div>
                    <p>Journal</p>
                </Link>
                <Link
                    href="settings"
                    className='flex items-center cursor-pointer px-4 py-1 hover:bg-gray-200'
                >
                    <div className='mr-2'>
                        <CiSettings size="1.7rem" />
                    </div>
                    <p>Settings</p>
                </Link>
            </div>
            <div className='h-0 mx-5 border mb-4'></div>
            <div className='px-5'>
                <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet optio dicta omnis minima minus neque quos?.</p>
            </div>
            <div className='h-0 mx-5 border mt-6'></div>
            <Link href="https://github.com/Davidthecode" target='_blank'>
                <div className='flex mx-5 items-center justify-center mt-12 cursor-pointer hover:underline underline-offset-4'>
                    <p className='mr-1'>Github</p>
                    <div>
                        <DiGithubBadge />
                    </div>
                </div>
            </Link>
        </aside>
    )
}