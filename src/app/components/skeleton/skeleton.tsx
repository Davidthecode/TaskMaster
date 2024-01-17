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
        <div className="flex items-center px-10 border-y h-[6%] ">
            <div className="w-[50%] ">
                <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
            </div>
            <div className="w-[20%]">
                <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
            </div>
            <div className="w-[20%]">
                <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
            </div>
            <div className="w-[10%]">
                <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
            </div>
        </div>
        <div className="h-[94%] overflow-y-auto pb-3">
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
            <div className="flex items-center px-10 border-b h-16">
                <div className="w-[50%] ">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[20%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[30%]"></div>
                </div>
                <div className="w-[10%]">
                    <div className="animate-pulse rounded-md h-3 px-2 bg-[#f0eded] w-[50%]"></div>
                </div>
            </div>
        </div>
    </section>
)