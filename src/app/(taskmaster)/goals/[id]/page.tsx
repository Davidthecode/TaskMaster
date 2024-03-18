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
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-config";
import { useParams } from "next/navigation";
import FiscalYearHook from "@/app/hooks/fiscalYearHook";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import DeleteGoal from "@/app/components/goals/deleteGoal";

export default function GoalsInfo() {
    const { fiscalQuarter, fiscalYear } = FiscalYearHook();
    const { currentUser } = CurrentUserHook();
    const params = useParams();
    const paramsId = params.id;
    const [photo, setPhoto] = useState<string | StaticImageData>(noUser);
    const [loadPercentage, setLoadPercentage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [goalTitle, setGoalTitle] = useState('');
    const [goalSubtitle, setGoalSubtitle] = useState('');
    const docRef = doc(db, "goals", paramsId as string);
    const [customDateDiv, setCustomDateDiv] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | string>('');
    const [selectedStatusOption, setSelectedStatusOption] = useState('');
    const [goalDescription, setGoalDescription] = useState('');
    const [deletePopup, setDeletePopup] = useState(false);
    const { back } = useRouter();

    const statusOptions = [
        { label: "On track", bgColor: "#34D399" },
        { label: "In progress", bgColor: "#d8a846" },
        { label: "Off track", bgColor: "#EF4444" }
    ];

    useEffect(() => {
        try {
            setLoading(true);
            const unsubscribe = onSnapshot(docRef, (snapshot) => {
                if (snapshot.exists()) {
                    setGoalTitle(snapshot.data().goalData.formData?.goalTitle);
                    setGoalSubtitle(snapshot.data().goalData.formData?.goalSubtitle);
                    setSelectedDate(snapshot.data().goalData.formData?.dueDate);
                    setSelectedStatusOption(snapshot.data().goalData?.formData.status);
                    setGoalDescription(snapshot.data().goalData.formData?.goalDescription);
                }
                setLoading(false);
            });

            return () => unsubscribe();

        } catch (error) {
            setLoading(false);
        };
    }, []);

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL);
        };
    }, [currentUser]);

    useEffect(() => {
        const calculateProgress = () => {
            const currentDate = new Date();
            const convertedSelectedDate = new Date(selectedDate);
            const totalMilliseconds = convertedSelectedDate instanceof Date ? convertedSelectedDate.getTime() - currentDate.getTime() : 0;
            if (totalMilliseconds > 0) {
                const remainingMilliseconds = Math.max(totalMilliseconds, 0);
                const remainingDays = Math.ceil(remainingMilliseconds / (1000 * 60 * 60 * 24));
                const totalDays = Math.ceil(totalMilliseconds / (1000 * 60 * 60 * 24));
                const percentage = ((totalDays - remainingDays) / totalDays) * 100;
                setLoadPercentage(percentage);
            } else {
                setLoadPercentage(100);
            }
        };

        const interval = setInterval(calculateProgress, 3000);

        return () => clearInterval(interval);
    }, [selectedDate]);

    useEffect(() => {
        const handleDueDate = async () => {
            if (selectedDate !== "") {
                const dataToUpdate = {
                    "goalData.formData.dueDate": selectedDate
                };
                await updateDoc(docRef, dataToUpdate);
            };
        };

        handleDueDate();
    }, [selectedDate]);

    useEffect(() => {
        const handleSetGoalSubtitle = async () => {
            if (goalSubtitle !== "") {
                const dataToUpdate = {
                    "goalData.formData.goalSubtitle": goalSubtitle
                };
                await updateDoc(docRef, dataToUpdate);
            };
        };

        handleSetGoalSubtitle();
    }, [goalSubtitle]);

    useEffect(() => {
        const handleSetgoalDescription = async () => {
            if (goalDescription !== "") {
                const dataToUpdate = {
                    "goalData.formData.goalDescription": goalDescription
                };
                await updateDoc(docRef, dataToUpdate);
            };
        };

        handleSetgoalDescription();
    }, [goalDescription]);

    useEffect(() => {
        const handleLoadPercentage = async () => {
            const dataToUpdate = {
                "goalData.formData.loadPercentage": loadPercentage
            };
            await updateDoc(docRef, dataToUpdate);
        };
        handleLoadPercentage();
    }, [loadPercentage]);

    const openDate = () => {
        setCustomDateDiv(!customDateDiv);
    };

    const handleDateChange = (e: any) => {
        setSelectedDate(e.target.value);
    };

    const handleStatusOption = async (statusOption: any) => {
        setSelectedStatusOption(statusOption.label);
        const dataToUpdate = {
            "goalData.formData.status": statusOption.label
        };
        await updateDoc(docRef, dataToUpdate);
    };

    const openDeletePopup = () => {
        setDeletePopup(true);
    }

    return (
        <section className="h-full relative">
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
                        loader={({src})=>src}
                    />
                </div>
                <div className="flex items-center bg-[#426DC6] text-white px-2 py-1 rounded-md cursor-pointer">
                    <div className="mr-[1px]">
                        <CiLock />
                    </div>
                    <p className="text-xs">share</p>
                </div>
            </div>
            <div className="flex h-[90%] overflow-y-auto">
                <div className="absolute top-28 left-10">
                    <div
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                        title="back"
                        onClick={() => back()}
                    >
                        <IoIosArrowRoundBack size="1.3rem" />
                    </div>
                </div>
                <div className="pl-[15%] w-[60%] mr-10 mt-10">
                    <h1 className="text-3xl font-medium opacity-80 mb-2">{goalTitle}</h1>
                    <div className="w-[100%] h-[8%] mb-2">
                        <textarea
                            className="text-sm h-full w-full px-2 outline-none"
                            placeholder="Click to add a goal subtitle"
                            value={goalSubtitle}
                            onChange={(e) => setGoalSubtitle(e.target.value)}
                            name=""
                            id=""
                            cols={0}
                            rows={0}
                        ></textarea>
                    </div>
                    <div>
                        <div>
                            <h2 className="text-xl font-medium opacity-70">What&apos;s the status? </h2>
                        </div>
                        <div className="mt-3 flex items-center">
                            {
                                statusOptions.map((statusOption, index) => (
                                    <div
                                        className={`flex items-center border border-[#b8b6b6] rounded-md px-3 py-[5px] w-fit mr-3 hover:bg-[#F0EDED] cursor-pointer ${selectedStatusOption === statusOption.label && "bg-[#e1dddd]"}`}
                                        key={index}
                                        onClick={() => handleStatusOption(statusOption)}
                                    >
                                        <p
                                            style={{ backgroundColor: statusOption.bgColor }}
                                            className="mr-2 w-2 h-2 rounded-full"
                                        >

                                        </p>
                                        <p className="text-sm">{statusOption.label}</p>
                                    </div>
                                ))
                            }
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
                    <div className="mt-10 h-[10rem] rounded-md">
                        <h1 className="font-medium text-md px-2">Description</h1>
                        <div className="w-[100%] h-[80%]">
                            <textarea
                                className="text-sm h-full w-full px-2 py-1 outline-none"
                                placeholder="Click to add context to this goal"
                                value={goalDescription}
                                onChange={(e) => setGoalDescription(e.target.value)}
                                name=""
                                id=""
                                cols={0}
                                rows={0}
                            ></textarea>
                        </div>
                    </div>
                </div>
                {/* second div */}
                <div className="w-[20%] border-l pl-6 mt-32 flex flex-col">
                    <h1 className="font-medium text-lg opacity-90">About this goal</h1>
                    <div className="border-b border-gray-200 mt-4 pb-6">
                        <p className="text-sm opacity-70">Goal owner</p>
                        <div className="flex items-center mt-4">
                            <div className="mr-1">
                                <Image src={photo} alt="image" width={20} height={20} className="rounded-full" loader={({src})=>src} />
                            </div>
                            <div>
                                <p className="text-sm">{currentUser?.displayName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 mt-6 pb-6">
                        <div>
                            <p className="text-xs font-medium">Time period</p>
                            <p className="text-xs mt-2 font-medium opacity-70">{fiscalQuarter + fiscalYear}</p>
                        </div>
                        {(selectedDate !== "" && selectedDate !== undefined) && (
                            <div className="mt-3">
                                <p className="text-xs font-medium">Due Date</p>
                                <p className="text-xs mt-2 font-medium opacity-70">
                                    {selectedDate instanceof Date
                                        ? selectedDate.toLocaleDateString(undefined, {
                                            weekday: 'short',
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })
                                        : selectedDate}
                                </p>
                            </div>
                        )}
                        <div className="mt-2">
                            <p className="text-xs font-medium cursor-pointer" onClick={openDate}>
                                {customDateDiv ? "Select a custom due date" : "Set a custom due date"}
                            </p>
                        </div>
                        {customDateDiv && (
                            <div className="mt-4">
                                <input
                                    value={selectedDate.toString().split('T')[0]}
                                    onChange={handleDateChange}
                                    type="date"
                                    name=""
                                    id=""
                                    className="border border-gray-400 px-4 py-[2px] bg-[#F9F8F8] text-xs rounded-md"
                                />
                            </div>
                        )}
                    </div>
                    <div className="mt-auto mb-10">
                        <button
                            onClick={openDeletePopup}
                            className="border text-sm px-6 py-1 rounded-md bg-red-400 hover:bg-red-500 text-white"
                        >
                            Delete goal
                        </button>
                    </div>
                </div>
            </div>
            {deletePopup && <DeleteGoal setDeletePopup={setDeletePopup} />}
        </section>
    );
};