"use client";

import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import AddGoal from "@/app/components/goals/addGoal";
import UserGoals from "@/app/components/goals/userGoals";
import Image from "next/image";
import circle from "../../../../public/circle.png";

export default function Goals() {
    const [showGoal, setShowGoal] = useState(false);

    const openGoal = () => {
        setShowGoal(true);
    };

    const closeGoal = () => {
        setShowGoal(false);
    };
    return (
        <section className="h-full bg-white flex flex-col mobile:px-6">
            <div className="pt-4 border-b pb-3 px-10 flex items-center h-[10%]">
                <div className="mr-2 bg-purple-400 px-2 py-2 rounded-md">
                    <Image src={circle} alt="image" width={22} height={22} />
                </div>
                <h1 className="text-xl font-medium">My Goals</h1>
            </div>
            <div className="flex items-center h-[8%] px-10">
                <div className="flex items-center border w-fit rounded-md h-7 px-2 cursor-pointer bg-blue-600 hover:bg-blue-800 text-white" onClick={openGoal}>
                    <div className="font-bold">
                        <IoAdd size="1.1rem" />
                    </div>
                    <p className="text-xs">Add goal</p>
                </div>
            </div>
            <UserGoals />
            {showGoal && <AddGoal closeGoal={closeGoal} />}
        </section>
    );
};