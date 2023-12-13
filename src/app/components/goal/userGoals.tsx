"use client";

import { db } from "@/app/firebase/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import { StaticImageData } from "next/image";
import noUser from "../../../../public/nouser.jpg";
import Image from "next/image";

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

    return (
        <section>
            <div className="flex px-10 border-b py-2">
                <div className="text-xs w-[90%]">Name</div>
                <div className="text-xs w-[10%]">Owner</div>
            </div>
            <div className="">
                {goals.map((goal, id) => (
                    <div key={id} className="flex border-b h-10 items-center px-10">
                        <div className="w-[90%] font-medium">
                            {goal.goalData.formData.goalTitle}
                        </div>
                        <div className="w-[10%]">
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
    );
};