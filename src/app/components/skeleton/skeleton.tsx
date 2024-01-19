export const HomeSkeleton = () => {
    return (
        <div className="flex justify-center items-center h-[92%] px-16 mobile:px-6 py-4 mobile:hidden">
            <div role="status">
                <svg aria-hidden="true" className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}


export const SidebarSkeleton = () => {
    return (
        <div className="h-full border-r bg-[#2E2E30] flex flex-col">
            <div className="ml-8 mt-10 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="w-full border border-gray-200 border-opacity-25 mt-6"></div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="ml-8 mt-6 flex items-center">
                <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
            </div>
            <div className="mt-auto ml-8">
                <div className="mt-6 flex items-center mb-12">
                    <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
                    <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
                </div>
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

export const DashboardNavSkeleton = () => {
    return (
        <div className="w-6 h-6 rounded-full animate-pulse bg-[#4A4A4B] ml-auto"></div>
    )
}

export const ProjectHeaderSkeleton = () => (
    <section className="px-6 pt-3 flex flex-col border-b h-[100%]">
        <div className="flex items-center">
            <div className="mr-2">
                <div className="rounded-full h-12 w-12 bg-[#f0eded] animate-pulse"></div>
            </div>
            <div>
                <h1 className="h-3 w-36 rounded-md bg-[#f0eded] animate-pulse"></h1>
            </div>
        </div>
        <div className="flex items-center mt-auto">
            <div className="flex items-center pb-2">
                <div className="flex items-center mr-3 cursor-pointer">
                    <div className="w-12 h-2 rounded-md bg-[#f0eded] animate-pulse"></div>
                </div>

                <div className="flex items-center cursor-pointer">
                    <div className="w-12 h-2 rounded-md bg-[#f0eded] animate-pulse"></div>
                </div>
            </div>
        </div>
    </section>
)

export const TaskNavSkeleton = () => (
    <section className="px-6 pt-3 flex flex-col border-b h-[100%]">
        <div className="flex items-center">
            <div className="mr-2">
                <div className="rounded-full h-12 w-12 bg-[#f0eded] animate-pulse"></div>
            </div>
            <div>
                <h1 className="h-3 w-36 rounded-md bg-[#f0eded] animate-pulse"></h1>
            </div>
        </div>
        <div className="flex items-center mt-auto">
            <div className="flex items-center pb-2">
                <div className="flex items-center mr-3 cursor-pointer">
                    <div className="w-12 h-2 rounded-md bg-[#f0eded] animate-pulse"></div>
                </div>

                <div className="flex items-center cursor-pointer">
                    <div className="w-12 h-2 rounded-md bg-[#f0eded] animate-pulse"></div>
                </div>
            </div>
        </div>
    </section>
)

export const TaskSubNavSkeleton = () => (
    <section className="h-full flex items-center border-b smallTablet:px-10 mobile:px-6">
        <div className="flex items-center bg-[#f0eded] animate-pulse rounded-md px-3 mobile:hidden w-20 h-3"></div>
        <div>
            <div className="flex items-center ml-2 mr-1 bg-[#f0eded] animate-pulse px-3 rounded-md w-20 h-3"></div>
        </div>
        <div>
            <div className="flex items-center bg-[#f0eded] animate-pulse px-3 rounded-md font-medium w-20 h-3"></div>
        </div>
        <div className="flex ml-auto items-center mr-1 px-3 rounded-md">
            <p className="w-20 h-3 bg-[#f0eded] rounded-md mr-2 animate-pulse"></p>
            <div className="w-4 h-4 rounded-full bg-[#f0eded] animate-pulse"></div>
        </div>
    </section>
)

export const ProjectSideBarSkeleton = () => (
    <div className="h-full bg-[#2E2E30] flex flex-col">
        <div className="ml-3 mt-6 flex items-center">
            <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
            <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
        </div>
        <div className="ml-3 mt-6 flex items-center">
            <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
            <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
        </div>
        <div className="ml-3 mt-6 flex items-center">
            <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
            <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
        </div>
        <div className="ml-3 mt-6 flex items-center">
            <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
            <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
        </div>
        <div className="ml-3 mt-6 flex items-center">
            <div className="bg-[#4A4A4B] w-5 h-5 animate-pulse rounded-md mr-4"></div>
            <div className="bg-[#4A4A4B] w-28 h-3 rounded-md animate-pulse"></div>
        </div>
    </div>
)

export const TaskListSkeleton = () => (
    <div className="mt-10">
        <div className="flex items-center border-b pb-2">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[30%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[35%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[40%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[30%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[35%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[40%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[30%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[35%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
        <div className="flex items-center border-b pb-2 mt-4">
            <div className="bg-[#f0eded] w-5 h-5 rounded-full mr-2 animate-pulse"></div>
            <div className="bg-[#f0eded] w-[40%] h-3 rounded-md mr-2 animate-pulse"></div>
        </div>
    </div>
)

export const TaskTitleSkeleton = () => (
    <div className="bg-[#f0eded] mt-8 mb-8 w-36 h-6 rounded-md mr-2 animate-pulse"></div>
)

export const TaskBoardSkeleton = () => (
    <div className="flex mt-12 w-[100%]">
        <div className="mr-12 w-[25%]">
            <div className="bg-[#908e8e] w-[30%] rounded-md h-3 mr-2 animate-pulse"></div>
            <div className="bg-white w-full h-28 mt-3 rounded-md opacity-60 animate-pulse"></div>
            <div className="bg-white w-full h-28 mt-3 rounded-md opacity-60 animate-pulse"></div>
        </div>
        <div className="mr-12 w-[25%]">
            <div className="bg-[#908e8e] w-[30%] rounded-md h-3 mr-2 animate-pulse"></div>
            <div className="bg-white w-full h-28 mt-3 rounded-md opacity-60 animate-pulse"></div>
            <div className="bg-white w-full h-28 mt-3 rounded-md opacity-60 animate-pulse"></div>
        </div>
        <div className="w-[25%]">
            <div className="bg-[#908e8e] w-[30%] rounded-md h-3 mr-2 animate-pulse"></div>
            <div className="bg-white w-full h-28 mt-3 rounded-md opacity-60 animate-pulse"></div>
            <div className="bg-white w-full h-28 mt-3 rounded-md opacity-60 animate-pulse"></div>
        </div>
    </div>
)

export const GoalSubNavSkeleton = () => (
    <div className="flex items-center h-[8%] px-10">
        <div className="flex items-center border w-20 animate-pulse rounded-md h-3 px-2 bg-[#f0eded]"></div>
    </div>
)

export const UserGoalsSkeleton = () => (
    <section className="h-[82%]">
        <div className="h-[94%] overflow-y-auto pb-3">
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
        </div>
    </section>
)