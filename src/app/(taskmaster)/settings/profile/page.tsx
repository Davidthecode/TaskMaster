"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { auth, db } from "@/app/firebase/firebase-config";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import spinner from "../../../../../public/icons8-spinner.gif";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import noUser from "../../../../../public/nouser.jpg";
import { StaticImageData } from "next/image";
import { storage } from "../../../firebase/firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Profile() {
    const [currentuser, setCurrentUser] = useState(auth.currentUser);
    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [about, setAbout] = useState("");
    const [disableButon, setDisableButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const profileCollectionRef = collection(db, "profile");
    const [photoUrl, setPhotoUrl] = useState<StaticImageData | string>(noUser);
    const [imageLoading, setImageLoading] = useState(false);
    const [photo, setPhoto] = useState<Blob | Uint8Array | ArrayBuffer | null>(null);

    useEffect(() => {
        if (currentuser?.photoURL) {
            setPhotoUrl(currentuser.photoURL.replace('/_next/', '/next/'));
        };
    }, [currentuser]);

    const handleImageChange = (e: any) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        };
    };

    const handlePhotoUpload = async () => {
        try {
            if (currentuser && photo) {
                const fileRef = ref(storage, currentuser.uid + ".png");
                setImageLoading(true);
                const snapshot = await uploadBytes(fileRef, photo);
                const photoURL = await getDownloadURL(fileRef);
                const profileData = {
                    pronouns,
                    jobTitle,
                    department,
                    about,
                    userId: currentuser?.uid,
                    photoUrl: photoURL,
                    username,
                    userEmail
                };
                updateProfile(currentuser, { photoURL });
                const userRef = doc(profileCollectionRef, currentuser?.uid);
                await updateDoc(userRef, { profileData });
                setPhotoUrl(photoURL);
                setImageLoading(false);
                toast.success("image updated successfully");
            };
        } catch (error) {
            toast.error("Error uploading image");
        };
    };

    useEffect(() => {
        if (currentuser && currentuser.displayName) {
            setUsername(currentuser?.displayName);
        };
        if (currentuser && currentuser.email) {
            setUserEmail(currentuser?.email);
        };
    }, [currentuser]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else setCurrentUser(null);
        });
        return () => unsubscribe();
    }, [currentuser]);

    useEffect(() => {
        if (currentuser && currentuser.uid) {
            try {
                const userRef = doc(profileCollectionRef, currentuser?.uid);
                const unsubscribe = onSnapshot(userRef, (snapshot) => {
                    if (snapshot.exists()) {
                        setAbout(snapshot.data().profileData.about);
                        setDepartment(snapshot.data().profileData.department);
                        setJobTitle(snapshot.data().profileData.jobTitle);
                        setPronouns(snapshot.data().profileData.pronouns);
                    };
                });
                return () => unsubscribe();
            } catch (error) {
                console.log(error);
            };
        };
    }, [currentuser]);

    const validateFields = () => {
        const fullNameValid = username.length > 0;
        return fullNameValid;
    };

    useEffect(() => {
        setDisableButton(!validateFields());
    }, [username]);

    console.log()

    const saveProfileChanges = async () => {
        try {
            setLoading(true);
            if (currentuser) {
                const userPhoto = `https://ui-avatars.com/api/?name=${username}&background=random`;
                await updateProfile(currentuser, { displayName: username, photoURL: userPhoto });
                const profileData = {
                    pronouns,
                    jobTitle,
                    department,
                    about,
                    userId: currentuser?.uid,
                    photoUrl: userPhoto,
                    username,
                    userEmail
                };
                const userRef = doc(profileCollectionRef, currentuser?.uid);
                await updateDoc(userRef, { profileData });
                toast.success("Profile updated successfully");
            };
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        };
    };

    return (
        <div className="bg-white h-full">
            <div className="flex items-center border-b pb-4 bg-white w-[95%] h-[15%] mobile:flex-col mobile:items-center mobile:h-[33%]">
                <div className="mr-5">
                    <Image
                        src={photoUrl}
                        alt="image"
                        height={50}
                        width={50}
                        className="rounded"
                        style={{ borderRadius: "100%" }}
                        loader={({ src }) => src}
                    />
                </div>
                <div className="mobile:mt-4">
                    <input type="file" className="text-sm" onChange={handleImageChange} accept="image/*" />
                </div>
                {imageLoading ? (
                    <div className="flex items-center">
                        <div className="mr-2">
                            <Image
                                src={spinner}
                                alt="spinner"
                                height={20}
                                width={20}
                                className="rounded-full"
                            />
                        </div>
                        <p>uploading image..</p>
                    </div>
                ) : (
                    <div className="mobile:mt-3 mobile:flex mobile:flex-col mobile:items-center">
                        <button
                            className={`text-blue-500 hover:underline w-fit ${!photo && 'hover:no-underline  opacity-50'}`}
                            disabled={imageLoading || !photo}
                            onClick={handlePhotoUpload}
                        >
                            Upload your photo
                        </button>
                        <p className="text-xs">Photos help your teammates recognize you in TaskMaster</p>
                    </div>
                )}
            </div>
            {/* second div */}
            <div className="h-[85%] pt-6 overflow-y-auto mobile:h-[66%]">
                <div className="flex items-center mobile:flex-col mobile:items-center">
                    <div className="mr-5 mobile:mr-0 w-[50%] mobile:w-[100%]">
                        <p className="mb-2 text-sm font-medium">Your full name</p>
                        <div className="w-[70%] h-[2.3rem] mobile:w-[80%]">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border rounded-md w-full h-full px-2 outline-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mobile:mt-4 w-[50%] mobile:w-[100%]">
                        <p className="mb-2 text-sm font-medium">Pronouns</p>
                        <div className="w-[70%] h-[2.3rem] mobile:w-[80%]">
                            <input
                                value={pronouns}
                                onChange={(e) => setPronouns(e.target.value)}
                                type="text"
                                placeholder="Third person pronouns (e.g. she/her/hers)"
                                className="border rounded-md w-full h-full px-2 outline-blue-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-10 mobile:flex-col mobile:items-center">
                    <div className="mr-5 mobile:mr-0 w-[50%] mobile:w-[100%]">
                        <p className="mb-2 text-sm font-medium">Job title</p>

                        <div className="w-[70%] h-[2.3rem] mobile:w-[80%]">
                            <input
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                type="text"
                                className="border rounded-md w-full h-full px-2 outline-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mobile:mt-4 w-[50%] mobile:w-[100%]">
                        <p className="mb-2 text-sm font-medium">Department or team</p>
                        <div className="w-[70%] h-[2.3rem] mobile:w-[80%]">
                            <input
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                type="text"
                                className="border rounded-md w-full h-full px-2 outline-blue-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="mb-2 text-sm font-medium">Email</p>
                    <div className="w-[35%] h-[2.3rem] mobile:min-w-[80%]">
                        <input
                            type="text"
                            value={userEmail}
                            readOnly
                            className="border rounded-md w-full h-full px-2 outline-none opacity-60"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <p className="mb-2 text-sm font-medium">About me</p>
                    <div className="w-[70%] h-[6rem] mobile:w-[90%]">
                        <textarea
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            placeholder="I usually work from 9am-5pm PST. Feel free to assign me a task with a due date anytime. Also, i love dogs!"
                            className="border rounded-md w-full h-full px-2 py-1 outline-blue-500"
                        />
                    </div>
                </div>
                <div className="my-5">
                    {loading ? (
                        <div className="border bg-[#DDDDDC] cursor-auto px-6 py-2 rounded-md opacity-60 hover:opacity-100 w-fit">
                            <Image src={spinner} alt="image" width={20} height={20} />
                        </div>
                    ) : (
                        <button
                            disabled={disableButon}
                            onClick={saveProfileChanges}
                            className={`border px-3 py-1 rounded-md bg-black text-white opacity-80 text-sm${disableButon && "opacity-25 text-opacity-25"}`}
                        >
                            Save changes
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};