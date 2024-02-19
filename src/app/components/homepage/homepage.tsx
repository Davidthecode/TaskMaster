import goals from "../../../../public/goals.png";
import Image from "next/image";
import taskmasterHomeImage from "../../../../public/taskmasterhomeImage.png";
import Link from "next/link";
import tmList from "../../../../public/tmlist.png";
import tmBoard from "../../../../public/tmboard.png";
import tmCollab from "../../../../public/tmcollab.png";

export default function Homepage() {
    return (
        <section className="pt-20">
            <div className="px-[8%] pb-10">
                <div className="flex justify-center">
                    <div className="w-[80%] h-[30rem]">
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
                    <div className="pb-[7rem] flex items-start">
                        <div className="w-[60%] pr-4">
                            <h2 className="font-semibold text-2xl">Lists</h2>
                            <p className="text-lg pt-3">The differeent stages of a task. Start as simple as To Do , In progress or Completed. There&apos;s no wrong way to Taskmaster</p>
                        </div>
                        <div className="w-full h-[25rem]">
                            <Image src={tmList} alt="image" className="w-full h-full rounded-md" />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-full h-[25rem]">
                            <Image src={tmBoard} alt="image" className="w-full h-full rounded-md" />
                        </div>
                        <div className="w-[60%] pl-4">
                            <h2 className="font-semibold text-2xl">Boards</h2>
                            <p className="text-lg pt-3">Taskmaster boards keep tasks organized and work moving foward. In a glance, see everything from &quot;things to do&quot; to &quot;aww yeah, we did it!&quot; </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl font-semibold">Set Goals</h1>
                        <div className="w-[40%] pt-4">
                            <p className="text-center text-lg">Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
                        </div>
                    </div>
                    <div className="w-[55%] h-[25rem] pt-12">
                        <Image src={goals} alt="image" className="w-full h-full rounded-md" />
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl font-semibold">Collaborate effectively</h1>
                        <div className="w-[60%] pt-4">
                            <p className="text-center text-lg">Enhance collaboration with teammates through seamless communication, real-time updates, and a centralized hub for all your tasks.</p>
                        </div>
                    </div>
                    <div className="w-[55%] h-[25rem] pt-12">
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