import dynamic from 'next/dynamic'
import { CiSearch } from 'react-icons/ci'
import Image from 'next/image'
import taskmasterImage from "../../../public/taskmasterImage.png"


const DynmaicDashboardNavClient = dynamic(()=> import("@/app/client/dashboardNav/dashboardNavClient"))

export default function DashboardNav() {
    return (
        <nav className="flex items-center w-full h-full border-b py-4 px-5 mobile:px-3">
            <div className="flex items-center pl-4 mobile:pl-2">
                <div className='mr-3'>
                    <Image src={taskmasterImage} alt='image' width={30} height={30} />
                </div>
                <h1 className="text-2xl">TaskMaster</h1>
            </div>
            <div className='ml-24 w-[40%] mobile:hidden'>
                <div className='flex items-center border rounded-md px-4 bg-gray-100'>
                    <div className='mr-2'>
                        <CiSearch size="1.3rem" />
                    </div>
                    <input
                        className='h-10 w-full outline-none bg-gray-100'
                        type="text"
                        placeholder='search for anything...'
                    />
                </div>
            </div>
           <DynmaicDashboardNavClient />
        </nav>
    )
}