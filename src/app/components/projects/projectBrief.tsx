"use client"

import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { db } from "../../firebase/firebase-config";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import spinner from "../../../../public/icons8-spinner.gif"

type CreateOverviewBriefType = {
    closeProjectBrief: () => void;
}

export default function ProjectBrief({ closeProjectBrief }: CreateOverviewBriefType) {
    const collectionRef = collection(db, "projects");
    const [projectBrief, setProjectBrief] = useState("");
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const id = params.id as string
    const docRef = doc(db, "projects", id)

    useEffect(() => {
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if (snapshot.exists()) {
                setProjectBrief(snapshot.data().projectData.projectBrief)
            }
        })

        return () => unsubscribe()
    }, [])

    const addBrief = async () => {
        if (projectBrief !== "") {
            try {
                setLoading(true)
                const docRef = doc(collectionRef, id)
                const dataToUpdate = {
                    "projectData.projectBrief": projectBrief
                }
                await updateDoc(docRef, dataToUpdate)
                setLoading(false)
                toast.success("Project brief added successfully")
                closeProjectBrief()
            } catch (error) {
                toast.error("error adding brief")
            }
        } else toast.error("Project brief cannot be empty")
    }

    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[40%] h-[47%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[60%] mobile:w-[100%] mobile:h-[100%]">
                    <div className="overflow-y-auto h-full bg-white rounded-md px-2">
                        <div
                            onClick={closeProjectBrief}
                            className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mt-2 flex justify-center items-center h-8 cursor-pointer"
                        >
                            <AiOutlineClose size="1.1rem" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Project brief</h1>
                            <div className="w-[100%] h-[13rem] mt-2">
                                <textarea
                                    name=""
                                    value={projectBrief}
                                    onChange={(e) => setProjectBrief(e.target.value)}
                                    id=""
                                    cols={0}
                                    rows={0}
                                    className="rounded-md px-2 py-1 outline-none w-full h-full text-sm"
                                    placeholder="write a project brief..."
                                ></textarea>
                            </div>
                            {loading ? (
                                 <div className="w-fit ml-auto mt-4 flex items-center justify-center px-5 py-1 border border-gray-500 rounded-md cursor-default opacity-50">
                                 <div>
                                     <Image src={spinner} alt="image" width={20} height={20} />
                                 </div>
                             </div>
                            ): (
                                <button className="text-[13px] border border-gray-400 mt-4 px-2 py-1 rounded-md w-fit ml-auto hover:bg-[#F0EDED]" onClick={addBrief}>Add brief</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}