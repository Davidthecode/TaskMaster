"use client";

import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import triangle from "../../../../../public/triangle.png";
import Image from "next/image";
import { CiLock } from "react-icons/ci";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import noUser from "../../../../../public/nouser.jpg";
import anime from "../../../../../public/anime.jpg";
import lighteningImage from "../../../../../public/lightening.png";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";
import { useParams } from "next/navigation";

export default function GoalsInfo() {
    const { currentUser } = CurrentUserHook();
    const params = useParams();
    const paramsId = params.id;
    const [photo, setPhoto] = useState<string | StaticImageData>(noUser);
    const [loadPercentage, setLoadPercentage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [goalTitle, setGoalTitle] = useState('');
    const docRef = doc(db, "goals", paramsId as string);

    useEffect(() => {
        try {
            setLoading(true);
            const unsubscribe = onSnapshot(docRef, (snapshot) => {
                if (snapshot.exists()) {
                    setGoalTitle(snapshot.data().goalData.formData.goalTitle);
                }
                setLoading(false);
            });

            return () => unsubscribe();

        } catch (error) {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL);
        };
    }, [currentUser]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadPercentage((prevPercentage) => {
                const newPercentage = prevPercentage + 5;
                return newPercentage <= 60 ? newPercentage : 60;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-full">
            <div className="flex items-center pt-4 border-b border-gray-200 pb-3 px-10 h-[10%]">
                <div className="flex items-center">
                    <div className="mr-2 bg-[#9ab9e1] px-3 py-3 rounded-md">
                        <Image src={triangle} alt="image" width={20} height={20} />
                    </div>
                    <h1>Fast</h1>
                </div>
                <div className="ml-auto mr-2">
                    <Image
                        className='rounded-full'
                        src={photo}
                        alt='image'
                        width={22}
                        height={22}
                    />
                </div>
                <div className="flex items-center bg-[#426DC6] text-white px-2 py-1 rounded-md cursor-pointer">
                    <div className="mr-[1px]">
                        <CiLock />
                    </div>
                    <p className="text-xs">share</p>
                </div>
            </div>
            <div className="flex h-[90%]">
                <div className="pl-[15%] w-[60%] mr-10 mt-20">
                    <h1 className="text-3xl font-medium mb-12 opacity-80">{goalTitle}</h1>
                    <div>
                        <div>
                            <h2 className="text-xl font-medium opacity-70">What&apos;s the status? </h2>
                        </div>
                        <div className="mt-3 flex items-center">
                            <div className="flex items-center border border-[#b8b6b6] rounded-md px-3 py-[5px] w-fit mr-3 hover:bg-[#F0EDED] cursor-pointer">
                                <p className="bg-green-600 mr-2 w-2 h-2 rounded-full"></p>
                                <p className="text-sm">On track</p>
                            </div>
                            <div className="flex items-center border border-[#b8b6b6] rounded-md px-3 py-[5px] w-fit mr-3 hover:bg-[#F0EDED] cursor-pointer">
                                <p className="bg-[#d8a846] mr-2 w-2 h-2 rounded-full"></p>
                                <p className="text-sm">In progress</p>
                            </div>
                            <div className="flex items-center border border-[#b8b6b6] rounded-md px-3 py-[5px] w-fit cursor-pointer hover:bg-[#F0EDED]">
                                <p className="bg-red-600 mr-2 w-2 h-2 rounded-full"></p>
                                <p className="text-sm">Off track</p>
                            </div>
                        </div>
                    </div>
                    <div className="border w-full h-40 px-6 py-4 mt-10 rounded-md">
                        <div className="flex items-center">
                            <h1 className="font-semibold text-xl mr-1">{loadPercentage}%</h1>
                            <div>
                                <Image src={lighteningImage} alt="image" width={18} height={18} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="h-3 border rounded-lg">
                                <div
                                    className="bg-blue-500 h-3 rounded-lg border"
                                    style={{
                                        width: `${loadPercentage}%`,
                                        transition: 'width .5s linear',
                                    }}
                                >

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="font-medium text-md">Description</h1>
                        <p className="text-sm mt-4 cursor-pointer">Click to add context to this goal</p>
                    </div>
                </div>
                {/* second div */}
                <div className="w-[20%] border-l pl-4 mt-40">
                    <h1 className="font-medium text-lg opacity-90">About this goal</h1>
                    <div className="border-b border-gray-200 mt-4 pb-6">
                        <p className="text-sm opacity-70">Goal owner</p>
                        <div className="flex items-center mt-4">
                            <div className="mr-1">
                                <Image src={anime} alt="image" width={20} height={20} className="rounded-full" />
                            </div>
                            <div>
                                <p className="text-sm">Dave</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 mt-6 pb-6">
                        <div>
                            <p className="text-xs font-medium">Time period</p>
                            <p className="text-xs mt-2 font-medium opacity-70">Q4FY23</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-xs font-medium cursor-pointer">Set a custom due date</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};