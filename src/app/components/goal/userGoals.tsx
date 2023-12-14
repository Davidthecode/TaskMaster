"use client";

import { db } from "@/app/firebase/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import { StaticImageData } from "next/image";
import noUser from "../../../../public/nouser.jpg";
import Image from "next/image";
import lighteningImage from "../../../../public/lightening.png";
import Link from "next/link";

export default function UserGoals() {
    const { currentUser } = CurrentUserHook();
    const [goals, setGoals] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const collectionRef = collection(db, 'goals');
    const [photo, setPhoto] = useState<string | StaticImageData>(noUser);

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL);
        };
    }, [currentUser]);

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

    console.log(goals);

    return (
        <section>
            <div className="flex px-10 border-b py-2">
                <div className="text-xs w-[50%]">Name</div>
                <div className="text-xs w-[20%] text-center">Time period</div>
                <div className="text-xs w-[20%] text-center">Progress</div>
                <div className="text-xs w-[10%] text-center">Owner</div>
            </div>
            <div>
                {goals.map((goal) => (
                    <Link href={`/goals/${goal.id}`} key={goal.id}>
                        <div className="flex border-b h-16 items-center px-10 cursor-pointer">
                            <div className="w-[50%] font-medium">
                                {goal.goalData.formData.goalTitle}
                            </div>
                            <div className="w-[20%] flex justify-center">
                                <p className="text-xs font-medium">Q4 FY23</p>
                            </div>
                            <div className="w-[20%] flex flex-col items-center">
                                <div className="flex items-center pl-10">
                                    <div className="flex items-center mr-2">
                                        <div className="h-[6.5px] border rounded-lg w-12 mr-2 bg-[#eee9e9]"></div>
                                        <div className="text-xs">0%</div>
                                    </div>
                                    <div>
                                        <Image src={lighteningImage} alt="image" height={17} width={17} />
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <p className="text-xs">No status</p>
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
                    </Link>
                ))}
            </div>
        </section>
    );
};