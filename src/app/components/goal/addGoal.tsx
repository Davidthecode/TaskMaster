"use client";

import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import lighteningImage from "../../../../public/lightening.png";
import { PiPercentLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import noUser from "../../../../public/nouser.jpg";
import CurrentUserHook from "@/app/hooks/currentUserHook";
import toast from "react-hot-toast";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase/firebase-config";
import { v4 as uuidv4 } from "uuid";
import spinner from "../../../../public/icons8-spinner.gif";

type closeGoalType = {
    closeGoal: () => void;
};

export default function AddGoal({ closeGoal }: closeGoalType) {
    const { currentUser } = CurrentUserHook();
    const [photo, setPhoto] = useState<string | StaticImageData>(noUser);
    const [loading, setLoading] = useState(false);

    const initialFormData = {
        goalTitle: "",
        goalSubtitle: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL);
        };
    }, [currentUser]);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const collectionRef = collection(db, "goals");
    const saveGoal = async () => {
        setLoading(true);
        if (currentUser && currentUser.uid) {
            const goalData = {
                formData,
                userId: currentUser?.uid
            };
            const docRef = doc(collectionRef, uuidv4());
            await setDoc(docRef, { goalData });
            setFormData({
                goalTitle: '',
                goalSubtitle: '',
            });
            toast.success("Goal added successfully");
            setLoading(false);
            closeGoal();
        } else console.log('error')
    };

    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[40%] h-[70%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[60%] mobile:w-[100%] mobile:h-[100%]">
                    <div className="overflow-y-auto h-full bg-white rounded-lg">
                        <div className="flex items-center mt-1 px-8 border-b pb-1">
                            <h1 className="font-semibold text-lg">Add goal</h1>
                            <div
                                onClick={closeGoal}
                                className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mt-2 flex justify-center items-center h-8 cursor-pointer"
                                title="close this dialogue"
                            >
                                <AiOutlineClose size="1rem" />
                            </div>
                        </div>
                        <div className="px-8 mt-5 flex flex-col">
                            <p className="text-sm font-semibold opacity-80">What is a goal or key result you want to accomplish?</p>
                            <div className="mt-3">
                                <div className="flex items-center">
                                    <p className="text-xs font-medium opacity-70 mr-1">Goal title</p>
                                    <p className="text-red-500 mt-1">*</p>
                                </div>
                                <div>
                                    <input
                                        className="border w-full rounded-md text-sm h-9 px-2 border-gray-400 outline-blue-800"
                                        placeholder="Enter goal name"
                                        name="goalTitle"
                                        value={formData.goalTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs font-medium opacity-70 mr-1">Goal subtitle</p>
                                <div>
                                    <input
                                        className="border w-full rounded-md text-sm h-9 px-2 border-gray-400 outline-blue-800"
                                        name="goalSubtitle"
                                        value={formData.goalSubtitle}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs font-medium opacity-70 mr-1">Goal owner</p>
                                <div className="border w-full rounded-md text-sm h-9 px-2 border-gray-400 outline-blue-800 flex items-center">
                                    <div className="mr-2">
                                        <Image src={photo} alt="image" width={23} height={23} className="rounded-full" />
                                    </div>
                                    <div>
                                        <p className="text-xs">{currentUser?.displayName}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-6">
                                <div className="mr-6 w-[30%]">
                                    <div className="flex items-center">
                                        <p className="text-xs font-medium opacity-70 mr-1">Update method</p>
                                    </div>
                                    <div className="flex items-center px-3 border w-full h-8 rounded-md border-gray-400 border-opacity-80">
                                        <div>
                                            <Image src={lighteningImage} alt="image" width={20} height={20} />
                                        </div>
                                        <p className="text-sm">Automatic</p>
                                    </div>
                                </div>
                                <div className="w-[30%]">
                                    <div className="flex items-center">
                                        <p className="text-xs font-medium opacity-70 mr-1">Measurment</p>
                                    </div>
                                    <div className="flex items-center px-3 border w-full h-8 rounded-md border-gray-400 border-opacity-80">
                                        <div className="mr-1">
                                            <PiPercentLight />
                                        </div>
                                        <p className="text-sm">Percent</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 ml-auto flex items-center">
                                <button
                                    className="mr-4 border rounded-md px-3 py-1 text-sm border-gray-400 hover:bg-[#F7F5F5]"
                                    onClick={closeGoal}
                                >
                                    Cancel
                                </button>
                                {loading ? (
                                    <div className="border-2 w-fit px-6 py-1 rounded-md">
                                        <Image src={spinner} alt="image" width={20} height={20} />
                                    </div>
                                ) : (
                                    <button
                                        className={`border rounded-md px-3 py-1 text-sm border-gray-400 hover:bg-[#F7F5F5] ${!formData.goalTitle && "opacity-50"}`}
                                        onClick={saveGoal}
                                        disabled={!formData.goalTitle}
                                    >
                                        Save goal
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};