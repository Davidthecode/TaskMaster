export const SidebarSkeleton = ()=>  {
    return (
        <div className="h-[97%] border-r">
            <div className="space-y-5">
                <div className='flex items-center mx-4 my-4 h-10 bg-gray-200 animate-pulse'>
                    <div className='bg-gray-200'></div>
                </div>
                <div className='flex items-center mx-4 my-4 h-10 bg-gray-200 animate-pulse'>
                    <div className='bg-gray-200'></div>
                </div>
                <div className='flex items-center mx-4 my-4 h-10 bg-gray-200 animate-pulse'>
                    <div className='bg-gray-200'></div>
                </div>
                <div className='flex items-center mx-4 my-4 h-10 bg-gray-200 animate-pulse'>
                    <div className='bg-gray-200'></div>
                </div>
                <div className='flex items-center mx-4 my-4 h-10 bg-gray-200 animate-pulse'>
                    <div className='bg-gray-200'></div>
                </div>
            </div>
            <div className='h-0 mx-5 border mb-4 mt-6'></div>
            <div className='px-5'>
                <p className='h-36 bg-gray-200 animate-pulse'></p>
            </div>
            <div className='h-0 mx-5 border mb-4 mt-6'></div>
            <div className='flex items-center mx-8 my-6 h-8 bg-gray-200 animate-pulse'>
                <div className='bg-gray-200'></div>
            </div>
        </div>
    )
}

export const HeaderButtonSkeleton = ()=> {
    return (
        <section className="flex justify-center pt-10 xs:justify-start">
            <div className="mr-4">
                <button
                    className="bg-black text-white text-lg px-5 py-3 rounded-sm hover:bg-[#EE6969] hover:text-black xs:text-sm"
                >
                    Get started
                </button>
            </div>
            <div>
                <button
                    className="text-black border text-lg border-black px-5 py-3 rounded-sm hover:bg-[#EE6969] hover:border-[#EE6969] xs:text-sm"
                >
                    See how it works
                </button>
            </div>
        </section>
    )
}