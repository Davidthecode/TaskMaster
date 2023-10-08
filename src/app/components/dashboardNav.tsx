import { CiSearch } from 'react-icons/ci'
import dynamic from 'next/dynamic'

// const DynmaicDashboardNavClient = dynamic(() => import('@/app/client/dashboardNav/dashboardNavClient'), {
//     ssr: false,
//     loading: () => <h1>loading</h1>
// })

export default function DashboardNav() {
    return (
        <nav className="flex w-full h-full border-b py-4 px-5">
            <div className="w-[10%]">
                <h1 className="text-2xl">TaskMaster</h1>
            </div>
            <div className='ml-24 w-[40%]'>
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
           {/* <DynmaicDashboardNavClient /> */}
        </nav>
    )
}