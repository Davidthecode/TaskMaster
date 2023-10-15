import { IoAddSharp } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { CiFilter } from "react-icons/ci"
import { RiArrowDropDownLine } from "react-icons/ri"
import star from "../../../public/star.png"
import Image from "next/image"
import loaderOne from "../../../public/loader (1).png"
import loaderTwo from "../../../public/loader (2).png"
import loaderThree from "../../../public/loader (3).png"
import { AiOutlineBars } from "react-icons/ai"
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"


export const SidebarSkeleton = () => {
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

export const HeaderButtonSkeleton = () => {
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
        <section className="h-full flex items-center px-16 mobile:px-6">
            <div className="mr-4 cursor-pointer hidden largeTablet:block mobile:block">
                <BsReverseLayoutTextSidebarReverse size="1.3rem" />
            </div>
            <div className="flex items-center rounded-md cursor-pointer hover:bg-[#EBE9FE] border px-3 py-1 mobile:hidden">
                <div>
                    <IoAddSharp />
                </div>
                <p>Add Task</p>
            </div>
            <div className="border ml-10 h-8 rounded-md flex items-center px-2 smallTablet:w-[60%]">
                <div>
                    <CiSearch />
                </div>
                <input
                    className="outline-none px-2"
                    type="text"
                    placeholder="search..."
                />
            </div>
            <div className="border ml-auto mr-4 px-3 py-1 cursor-pointer rounded-md flex items-center smallTablet:hidden mobile:hidden">
                <p className="mr-2">Upgrade to Pro</p>
                <div>
                    <Image src={star} alt="image" width={20} height={20} />
                </div>
            </div>
            <div className="flex items-center border px-3 py-1 rounded-md smallTablet:hidden mobile:hidden">
                <div className="flex items-center mr-2">
                    <div>
                        <CiFilter />
                    </div>
                    <p>Filter</p>
                </div>
                <div className="cursor-pointer">
                    <RiArrowDropDownLine size="1.5rem" />
                </div>
            </div>
            <div className="ml-auto cursor-pointer hidden smallTablet:block mobile:block">
                <AiOutlineBars size="1.3rem" />
            </div>
        </section>
    )
}

export const TasksSkeleton = () => {
    return (
        <div className="bg-[#F3F4F8] h-[92%] w-[100%] flex flex-col justify-between pb-4">
            <div className="flex justify-between h-[10%] mb-[1%] px-16 mobile:px-6 pt-3 mobile:hidden">
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">To Do</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] h-6 w-6 animate-pulse border-gray-300"></span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderOne} alt="image" height={20} width={20} />
                    </div>
                </div>
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">In progress</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] h-6 w-6 animate-pulse border-gray-300"></span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderOne} alt="image" height={20} width={20} />
                    </div>
                </div>
                <div className="border h-full w-[28%] largeTablet:w-[30%] bg-white rounded-md flex items-center">
                    <h1 className="px-4 font-semibold smallTablet:text-sm smallTablet:font-bold">Completed</h1> <span className="border px-2 rounded-full bg-[#F3F4F8] h-6 w-6 animate-pulse border-gray-300"></span>
                    <div className="ml-auto mr-4">
                        <Image src={loaderThree} alt="image" height={20} width={20} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-[92%] px-16 mobile:px-6 py-4 mobile:hidden">
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>

            </div>
        </div>
    )
}