import Image from "next/image";
import circle from "../../../../public/circle.png";
import dynamic from "next/dynamic";
import { GoalSubNavSkeleton, UserGoalsSkeleton } from "@/app/components/skeleton/skeleton";
import UserGoalsHeader from "@/app/components/goals/userGoalsHeader";

const DynamicGoalSubNav = dynamic(() => import("@/app/components/goals/goalSubNav"), {
    ssr: false,
    loading: () => <GoalSubNavSkeleton />
});

const DynamicUserGoals = dynamic(() => import("@/app/components/goals/userGoals"), {
    ssr: false,
    loading: () => <UserGoalsSkeleton />
});

export default function Goals() {
    return (
        <section className="h-full bg-white flex flex-col mobile:px-6">
            <div className="pt-4 border-b pb-3 px-10 flex items-center h-[10%]">
                <div className="mr-2 bg-purple-400 px-2 py-2 rounded-md">
                    <Image src={circle} alt="image" width={22} height={22} />
                </div>
                <h1 className="text-xl font-medium">My Goals</h1>
            </div>
            <DynamicGoalSubNav />
            <UserGoalsHeader />
            <DynamicUserGoals />
        </section>
    );
};