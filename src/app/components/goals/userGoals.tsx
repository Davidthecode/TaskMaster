"use client";

import { db } from "@/app/firebase/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import Image from "next/image";
import lighteningImage from "../../../../public/lightening.png";
import Link from "next/link";
import FiscalYearHook from "@/app/hooks/fiscalYearHook";
import { UserGoalsSkeleton } from "../skeleton/skeleton";

export default function UserGoals() {
    const { fiscalQuarter, fiscalYear } = FiscalYearHook();
    const { currentUser, photo } = CurrentUserHook();
    const [goals, setGoals] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const collectionRef = collection(db, 'goals');

    useEffect(() => {
        try {
            setLoading(true);
            const queryGoals = query(
                collectionRef,
                where("goalData.userId", "==", currentUser?.uid)
            );
            const unsubscribe = onSnapshot(queryGoals, (snapshot) => {
                let tempTasks: any[] = [];
                snapshot.forEach((doc) => {
                    tempTasks.push({ ...doc.data(), id: doc.id });
                });
                setGoals(tempTasks);
                setLoading(false);
            });

            return () => unsubscribe();

        } catch (error) {
            console.log(error);
        }
    }, []);

    if (!goals.length) {
        return <UserGoalsSkeleton />
    } else {
        return (
            <section className="h-[76%]">
                <div className="h-[94%] overflow-y-auto pb-3">
                    {goals.map((goal) => (
                        <div className="flex border-b h-16 items-center cursor-pointer" key={goal.id}>
                            <div className="w-[50%] font-medium h-full flex items-center hover:bg-[#f5f4f4] pl-2">
                                <Link href={`/goals/${goal.id}`} className="w-full h-full flex items-center">
                                    {goal.goalData.formData.goalTitle}
                                </Link>
                            </div>
                            <div className="w-[20%] flex justify-center">
                                <p className="text-xs font-medium">{fiscalQuarter + fiscalYear}</p>
                            </div>
                            <div className="w-[20%] flex flex-col items-center">
                                <div className="flex items-center pl-10">
                                    <div className="flex items-center mr-2">
                                        <div className="h-[6.5px] border rounded-lg w-12 mr-2 bg-[#eee9e9]">
                                            <div
                                                className="bg-blue-400 h-[6.5px] border rounded-md"
                                                style={{
                                                    width: `${goal.goalData.formData.loadPercentage}%`,
                                                    transition: 'width .5s linear',
                                                }}
                                            ></div>
                                        </div>
                                        <div className="text-xs">{goal.goalData.formData.loadPercentage}</div>
                                    </div>
                                    <div>
                                        <Image src={lighteningImage} alt="image" height={17} width={17} />
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <p className="text-xs">{goal.goalData.formData.status ? goal.goalData.formData.status : "No status"}</p>
                                </div>
                            </div>
                            <div className="w-[10%] flex justify-center">
                                <Image
                                    className='rounded-full'
                                    src={photo}
                                    alt='image'
                                    width={22}
                                    height={22}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    };
};