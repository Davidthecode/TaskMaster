"use client";

import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import AddGoal from "@/app/components/goal/addGoal";
import UserGoals from "@/app/components/goal/userGoals";

export default function Goals() {
    const [showGoal, setShowGoal] = useState(false);

    const openGoal = () => {
        setShowGoal(true);
    };

    const closeGoal = () => {
        setShowGoal(false);
    };
    return (
        <section className="h-full bg-white flex flex-col mobile:px-6 overflow-y-auto">
            <div className="pt-4 border-b pb-3 px-10">
                <h1 className="text-xl font-medium">My Goals</h1>
            </div>
            <div className="mt-4">
                <div className="border-b pb-4 px-10">
                    <div className="flex items-center bg-bl border w-fit rounded-md px-2 py-[.3rem] cursor-pointer bg-blue-600 hover:bg-blue-800 text-white" onClick={openGoal}>
                        <div className="font-bold">
                            <IoAdd size="1.1rem" />
                        </div>
                        <p className="text-xs">Add goal</p>
                    </div>
                </div>
            </div>
            <UserGoals />
            {showGoal && <AddGoal closeGoal={closeGoal} />}
        </section>
    );
};