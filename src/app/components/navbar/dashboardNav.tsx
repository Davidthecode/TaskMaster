import dynamic from 'next/dynamic'
import { CiSearch } from 'react-icons/ci'
import Image from 'next/image'
import taskmasterImage from "../../../../public/taskmasterImage.png"
import { DashboardNavSkeleton } from '../skeleton/skeleton'


const DynmaicDashboardNavClient = dynamic(()=> import("@/app/client/dashboardNav/dashboardNavClient"), {
    ssr:false,
    loading: ()=> <DashboardNavSkeleton />
})

export default function DashboardNav() {
    return (
        <nav className="flex items-center w-full h-full py-4 px-5 mobile:px-3 bg-[#2E2E30] text-white">
            <div className="flex items-center pl-4 mobile:pl-2">
                <div className='mr-3'>
                    <Image src={taskmasterImage} alt='image' width={20} height={20} />
                </div>
                <h1 className="text-xl opacity-90">TaskMaster</h1>
            </div>
            <div className='ml-24 w-[40%] mobile:hidden'>
                <div className='flex items-center border border-gray-50 rounded-lg px-4 bg-[#3D3E40] border-opacity-25'>
                    <div className='mr-2 opacity-60'>
                        <CiSearch size="1.1rem" />
                    </div>
                    <input
                        className='h-8 w-full outline-none bg-[#3D3E40] opacity-90'
                        type="text"
                        placeholder='search for anything...'
                    />
                </div>
            </div>
           <DynmaicDashboardNavClient />
        </nav>
    )
}