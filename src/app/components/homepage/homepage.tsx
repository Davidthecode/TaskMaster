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
                    <div className="w-[80%] h-[30rem] largeScreen:h-[24rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[22rem] smallTablet:h-[25rem] smallTablet:object-cover">
                        <Image src={taskmasterHomeImage} alt="image" className="w-full h-full rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full mt-16 py-2 border-gray-300">
                        <h1 className="font-semibold text-center text-5xl">Unlocking productivity</h1>
                        <p className="text-lg pt-5 text-center">Simple, flexible, and powerful. All it takes are boards and lists to get a clear view of who’s doing what and what needs to get done. </p>
                    </div>
                </div>
                <div className="pt-24">
                    {/* Lists */}
                    <div className="pb-[7rem] flex items-start largeTablet:flex-col smallTablet:flex-col mobile:flex-col largeTablet:space-y-6 smallTablet:space-y-6">
                        <div className="w-[60%] pr-4 mobile:w-[100%] mobile:pb-6">
                            <h2 className="font-semibold text-2xl">Lists</h2>
                            <p className="text-lg pt-3">The differeent stages of a task. Start as simple as To Do , In progress or Completed. There&apos;s no wrong way to Taskmaster</p>
                        </div>
                        <div className="mobile:hidden w-full h-[25rem] largeScreen:h-[20rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[22rem] smallTablet:h-[25rem] smallTablet:object-cover">
                            <Image src={tmList} alt="image" className="w-full h-full rounded-md object-fit" />
                        </div>
                        <div className="hidden mobile:block w-full h-[20rem]">
                            <Image src={mobileList} alt="image" className="w-full h-full object-contain" />
                        </div>
                    </div>
                    {/* Boards */}
                    <div className="flex items-start largeTablet:flex-col-reverse smallTablet:flex-col-reverse mobile:flex-col largeTablet:space-y-6 smallTablet:space-y-6">
                        <div className="mobile:hidden w-full h-[25rem] largeScreen:h-[22rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[24rem] smallTablet:h-[25rem] smallTablet:object-cover">
                            <Image src={tmBoard} alt="image" className="w-full h-full rounded-md" />
                        </div>
                        <div className="hidden mobile:block w-full h-[20rem]">
                            <Image src={mobileList} alt="image" className="w-full h-full object-contain" />
                        </div>
                        <div className="w-[60%] pl-4 mobile:w-[100%] largeTablet:pb-6 largeTablet:pl-0 smallTablet:pb-6 smallTablet:pl-0">
                            <h2 className="font-semibold text-2xl">Boards</h2>
                            <p className="text-lg pt-3">Taskmaster boards keep tasks organized and work moving foward. In a glance, see everything from &quot;things to do&quot; to &quot;aww yeah, we did it!&quot; </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16 px-[8%]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col largeTablet:">
                        <h1 className="text-4xl text-center font-semibold">Set Goals</h1>
                        <div className="pt-4 flex justify-center">
                            <p className="text-center text-lg w-[70%]">Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
                        </div>
                    </div>
                    <div className="w-[75%] h-[25rem] largeScreen:h-[22rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[24rem] smallTablet:h-[25rem] smallTablet:object-cover  pt-12">
                        <Image src={goals} alt="image" className="w-full h-full rounded-md" />
                    </div>
                </div>
            </div>

            <div className="py-16 px-[8%]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl font-semibold">Collaborate effectively</h1>
                        <div className="w-[60%] pt-4">
                            <p className="text-center text-lg">Enhance collaboration with teammates through seamless communication, real-time updates, and a centralized hub for all your tasks.</p>
                        </div>
                    </div>
                    <div className="w-[75%] h-[25rem] largeScreen:h-[22rem] largeTablet:w-[85%] smallTablet:min-w-[100%] largeTablet:h-[24rem] smallTablet:h-[25rem] smallTablet:object-cover pt-12">
                        <Image src={tmCollab} alt="image" className="w-full h-full rounded-md" />
                    </div>
                </div>
            </div>

            <div className="bg-white px-[8%] py-[6rem]">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">Get Started for free</h1>
                    <p className="pt-3 text-lg">Play around with TaskMaster and watch your productivity increase</p>
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