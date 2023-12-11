"use client"

import { AiOutlineClose } from "react-icons/ai"
import emailjs from "@emailjs/browser"
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";
import toast from "react-hot-toast";
import Image from "next/image";
import spinner from "../../../public/icons8-spinner.gif"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { usePathname } from "next/navigation";

type AddMenberType = {
    closeAddMember: () => void;
}

export default function Addmember({ closeAddMember }: AddMenberType) {
    const currentuser = auth.currentUser
    const [userEmail, setUserEmail] = useState("")
    const [projectName, setProjectName] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const currentPath = usePathname()
    const [projects, setProjects] = useState<any[]>([])
    const collectionRef = collection(db, "projects")

    const serviceId = "service_o5h4dc6";
    const templateId = "template_uj2u74a";
    const publicApiKey = "NYPGjY00NVvlY0fKn";

    useEffect(() => {
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const tempArray: any[] = []
            snapshot.forEach((doc) => {
                if (`/project/${doc.id}/overview` == currentPath) {
                    tempArray.push({ ...doc.data(), id: doc.id })
                }
            })
            setProjects(tempArray)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const projectNames = projects.map((project) => project.projectData.projectName);
        setProjectName(projectNames);
    }, [projects])

    const templateParams = {
        from_name: currentuser?.displayName,
        from_email: currentuser?.email,
        ws_name: projectName[0],
        linkTo: currentPath, 
        to: userEmail 
    }

    const sendEmail = async () => {
        if (userEmail) {
            try {
                setLoading(true)
                const result = await emailjs.send(serviceId, templateId, templateParams, publicApiKey)
                console.log(result.text)
                toast.success("invite sent successfully");
                setUserEmail("");
                closeAddMember();
                setLoading(false)
            } catch (error) {
                console.log(error);
                toast.error("error sending invite");
                setLoading(false)
            }
        } else toast.error("write an email to send an invite")
    }

    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[40%] h-[35%] rounded-md mt-10 mobile:mt-0 largeTablet:w-[60%] mobile:w-[100%] mobile:h-[100%]">
                    <div className="overflow-y-auto h-full bg-white rounded-lg">
                        <div className="flex items-center mt-2 px-8">
                            <h1 className="font-semibold text-xl">Share project</h1>
                            <div
                                onClick={closeAddMember}
                                className="w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 mt-2 flex justify-center items-center h-8 cursor-pointer"
                                title="close this dialogue"
                            >
                                <AiOutlineClose size="1.1rem" />
                            </div>
                        </div>
                        <div className="mt-3 border-b h-0"></div>
                        <div className="px-8 mt-6">
                            <h2 className="font-semibold">Invite with email</h2>
                        </div>
                        <div className="mt-6 px-8 flex items-center">
                            <div className="w-[90%] h-[35px] mr-3">
                                <input
                                    className="border w-full h-full rounded-md border-gray-400 px-3 outline-[#4573D2] text-sm"
                                    type="email"
                                    placeholder="Add members by name or email..."
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                {loading ? (
                                    <div className="w-fit ml-auto flex items-center justify-center px-5 py-2 border border-gray-500 rounded-md cursor-default opacity-50">
                                        <div>
                                            <Image src={spinner} alt="image" width={20} height={20} />
                                        </div>
                                    </div>
                                ) : (<button className="border px-3 py-1 rounded-md bg-[#4573D2] text-white" onClick={sendEmail}>invite</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}