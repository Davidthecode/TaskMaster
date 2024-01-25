"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { db } from "@/app/firebase/firebase-config";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

type DeleteProjectTaskProps = {
    setDeleteTask: Dispatch<SetStateAction<boolean>>
};

export default function DeleteTask({ setDeleteTask }: DeleteProjectTaskProps) {
    const params = useParams();
    const paramsId = params.id;
    const router = useRouter();
    const docRef = doc(db, "tasks", paramsId as string);

    const cancelDelete = () => {
        setDeleteTask(false);
    };

    const handleDeleteTask = async () => {
        try {
            await deleteDoc(docRef);
            setDeleteTask(false);
            router.back();
            toast.success("Task deleted successfully");
        } catch (error) {
            console.error(error);
        };
    };
    return (
        <div>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 w-full max-w-lg bg-white rounded-md">
                    <div
                        onClick={cancelDelete}
                        className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mr-2 mt-2 flex justify-center items-center h-8 cursor-pointer"
                    >
                        <AiOutlineClose size="1.1rem" />
                    </div>
                    <div className="bg-white px-4 py-6 sm:flex">
                        <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-red-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="text-center sm:ml-4 sm:text-left">
                            <div className="text-lg font-medium text-gray-800">
                                {" "}
                                Are you sure you want to delete this task?
                            </div>
                            <div className="mt-2 text-sm leading-relaxed text-gray-500">
                                Once you delete this task, you cannot undo it
                            </div>
                            <div className="items-center gap-2 mt-3 text-sm sm:flex">
                                <div onClick={handleDeleteTask}>
                                    <button className="w-full mt-2 py-1 px-2 flex-1 text-white bg-red-600 rounded-md border hover:bg-red-700">
                                        Delete
                                    </button>
                                </div>
                                <div onClick={cancelDelete}>
                                    <button
                                        aria-label="Close"
                                        className="w-full mt-2 py-1 px-2 flex-1 text-gray-800 rounded-md border hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};