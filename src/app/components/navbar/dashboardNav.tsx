import dynamic from 'next/dynamic';
import Image from 'next/image';
import taskmasterImage from "../../../../public/taskmasterImage.png";
import { DashboardNavSkeleton } from '../skeleton/skeleton';
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';


const DynmaicDashboardNavClient = dynamic(() => import("@/app/client/dashboardNav/dashboardNavClient"), {
    ssr: false,
    loading: () => <DashboardNavSkeleton />
});

export default function DashboardNav() {
    return (
        <nav className="flex items-center w-full h-full py-4 px-5 mobile:px-3 bg-[#2E2E30] text-white">
            <div className="flex items-center pl-4 mobile:pl-2">
                <div className='mr-3'>
                    <Image src={taskmasterImage} alt='image' width={20} height={20} />
                </div>
                <h1 className="text-xl opacity-90">TaskMaster</h1>
            </div>
            <div className='ml-[25%] mobile:hidden flex items-center'>
                <p className='text-xs mr-1'>Taskmaster is in beta testing, if you find any bugs, contact us here {"->"}</p>
                <Link href="https://github.com/Davidthecode/TaskMaster" target='_blank'>
                    <div className='cursor-pointer'>
                        <IoLogoGithub />
                    </div>
                </Link>
            </div>
            <DynmaicDashboardNavClient />
        </nav>
    )
};