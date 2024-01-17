"use client";

import { useState } from "react";
import AddGoal from "./addGoal";
import { IoAdd } from "react-icons/io5";

export default function GoalSubnav() {
    const [showGoal, setShowGoal] = useState(false);

    const openGoal = () => {
        setShowGoal(true);
    };

    const closeGoal = () => {
        setShowGoal(false);
    };

    return (
        <div className="flex items-center h-[8%] px-10">
            <div className="flex items-center border w-fit rounded-md h-7 px-2 cursor-pointer bg-blue-600 hover:bg-blue-800 text-white" onClick={openGoal}>
                <div className="font-bold">
                    <IoAdd size="1.1rem" />
                </div>
                <p className="text-xs">Add goal</p>
            </div>
            {showGoal && <AddGoal closeGoal={closeGoal} />}
        </div>
    )
}