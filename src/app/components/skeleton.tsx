import { IoAddSharp } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { CiFilter } from "react-icons/ci"
import { RiArrowDropDownLine } from "react-icons/ri"
import star from "../../../public/star.png"
import Image from "next/image"
import loaderOne from "../../../public/loader (1).png"
import loaderTwo from "../../../public/loader (2).png"
import loaderThree from "../../../public/loader (3).png"


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

export const HomeNavSkeleton = () => {
    return (
        <section className="h-full flex items-center px-16">
        <div className="flex items-center rounded-md cursor-pointer hover:bg-[#EBE9FE] border px-3 py-1">
            <div>
                <IoAddSharp />
            </div>
            <p>Add Task</p>
        </div>
        <div className="border ml-10 h-8 rounded-md flex items-center px-2">
            <div>
                <CiSearch />
            </div>
            <input
                className="outline-none px-2"
                type="text"
                placeholder="search..."
            />
        </div>
        <div className="border ml-auto mr-4 px-3 py-1 cursor-pointer rounded-md flex items-center">
            <p className="mr-2">Upgrade to Pro</p>
            <div>
                <Image src={star} alt="image" width={20} height={20}/>
            </div>
        </div>
        <div className="flex items-center border px-3 py-1 rounded-md">
            <div className="flex items-center mr-2">
                <div>
                    <CiFilter />
                </div>
                <p>Filter</p>
            </div>
            <div className="cursor-pointer">
                <RiArrowDropDownLine size="1.5rem"/>
            </div>
        </div>
    </section>
    )
}

export const TasksSkeleton = () => {
    return(
        <div className="bg-[#F3F4F8] h-[92%] w-full px-16 pt-4 flex justify-between">
        <div className="w-[25%] h-full">
            <div className="border h-12 w-full bg-white rounded-md flex items-center">
                <h1 className="px-4">To Do</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                <div className="ml-auto mr-4">
                    <Image src={loaderOne} alt="image" height={20} width={20} />
                </div>
            </div>
        </div>
        <div className="w-[25%]">
            <div className="border h-12 w-full bg-white rounded-md flex items-center">
                <h1 className="px-4">In progress</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                <div className="ml-auto mr-4">
                    <Image src={loaderTwo} alt="image" height={20} width={20} />
                </div>
            </div>
        </div>
        <div className="w-[25%]">
            <div className="border h-12 w-full bg-white rounded-md flex items-center">
                <h1 className="px-4">Completed</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] text-sm">5</span>
                <div className="ml-auto mr-4">
                    <Image src={loaderThree} alt="image" height={20} width={20} />
                </div>
            </div>
        </div>
    </div>
    )
}