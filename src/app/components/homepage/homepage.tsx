import goals from "../../../../public/goals.png";
import Image from "next/image";
import taskmasterHomeImage from "../../../../public/taskmasterhomeImage.png";
import Link from "next/link";
import tmList from "../../../../public/tmlist.png";
import tmBoard from "../../../../public/tmboard.png";
import tmCollab from "../../../../public/tmcollab.png";
import mobileList from "../../../../public/mobileList.png";

export default function Homepage() {
    return (
        <section className="pt-20">
            <div className="px-[8%] mobile:px- pb-10">
                <div className="flex justify-center">
                    <div className="mobile:w-[100%] mobile:h-[18rem] xxs:max-h-[15rem] w-[80%] h-[30rem] largeScreen:h-[24rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[22rem] smallTablet:h-[25rem] smallTablet:object-cover">
                        <Image src={taskmasterHomeImage} alt="image" className="w-full h-full rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="xl:w-[60%] mt-16 py-2 border-gray-300">
                        <h1 className="font-semibold text-center text-5xl">Unlocking productivity</h1>
                        <p className="text-lg pt-5 text-center">Simple, flexible, and powerful, TaskMaster requires only lists and boards to provide a clear view of your tasks, guiding you toward increased productivity. </p>
                    </div>
                </div>
                <div className="pt-24">
                    {/* Lists */}
                    <div className="pb-[7rem] flex items-start largeTablet:flex-col smallTablet:flex-col mobile:flex-col largeTablet:space-y-6 smallTablet:space-y-6 largeTablet:items-center">
                        <div className="w-[60%] pr-4 mobile:w-[100%] mobile:pb-6">
                            <h2 className="font-semibold text-2xl largeTablet:text-center">Lists</h2>
                            <p className="text-lg pt-3 largeTablet:text-center">Manage your tasks effortlessly with TaskMaster`&apos;s lists. From start to finish, organize your workflow with stages like To-Do, In Progress, and Completed.</p>
                        </div>
                        <div className="mobile:w-[100%] mobile:h-[18rem] xxs:max-h-[15rem] w-full h-[25rem] largeScreen:h-[20rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[22rem] smallTablet:h-[25rem] smallTablet:object-cover">
                            <Image src={tmList} alt="image" className="w-full h-full rounded-md object-fill" />
                        </div>
                    </div>

                    {/* Boards */}
                    <div className="flex items-start largeTablet:flex-col-reverse smallTablet:flex-col-reverse mobile:flex-col-reverse largeTablet:space-y-6 smallTablet:space-y-6 largeTablet:items-center">
                        <div className="mobile:w-[100%] mobile:h-[18rem] xxs:max-h-[15rem] w-full h-[25rem] largeScreen:h-[22rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[24rem] smallTablet:h-[25rem] smallTablet:object-cover">
                            <Image src={tmBoard} alt="image" className="w-full h-full rounded-md object-fill" />
                        </div>
                        <div className="w-[60%] pl-4 mobile:pl-0 mobile:w-[100%] mobile:pb-6 largeTablet:pb-6 largeTablet:pl-0 smallTablet:pb-6 smallTablet:pl-0">
                            <h2 className="font-semibold text-2xl largeTablet:text-center">Boards</h2>
                            <p className="text-lg pt-3 largeTablet:text-center">Make tasks a breeze with TaskMaster boards. Stay on top of everything and get a clear picture of tasks from start to finish.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16 px-[8%]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col largeTablet:">
                        <h1 className="text-4xl text-center font-semibold">Set Goals</h1>
                        <div className="pt-4 flex justify-center">
                            <p className="text-center text-lg w-[70%] mobile:w-full">Empower your productivity with TaskMaster&apos;s goal-setting feature. Effortlessly track your goals, gain insights, and celebrate achievements. </p>
                        </div>
                    </div>
                    <div className="mobile:w-[100%] mobile:h-[18rem] xxs:max-h-[15rem] w-[75%] h-[25rem] largeScreen:h-[22rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[24rem] smallTablet:h-[25rem] smallTablet:object-cover  pt-12">
                        <Image src={goals} alt="image" className="w-full h-full rounded-md" />
                    </div>
                </div>
            </div>

            <div className="py-16 px-[8%]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl font-semibold text-center">Collaborate effectively</h1>
                        <div className="w-[60%] mobile:w-full pt-4">
                            <p className="text-center text-lg">Enhance collaboration with teammates through seamless communication, real-time updates, and a centralized hub for all your tasks.</p>
                        </div>
                    </div>
                    <div className="mobile:w-[100%] mobile:h-[18rem] xxs:max-h-[15rem] w-[75%] h-[25rem] largeScreen:h-[22rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[24rem] smallTablet:h-[25rem] smallTablet:object-cover pt-12">
                        <Image src={tmCollab} alt="image" className="w-full h-full rounded-md" />
                    </div>
                </div>
            </div>

            <div className="bg-white px-[8%] py-[6rem]">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">Get Started for free</h1>
                    <p className="pt-3 text-lg text-center">Try TaskMaster for free. Boost your productivity with easy task management.</p>
                    <div className="pt-4">
                        <Link href="/login">
                            <button className="border px-4 py-1 rounded-lg bg-black text-white">Get started now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};