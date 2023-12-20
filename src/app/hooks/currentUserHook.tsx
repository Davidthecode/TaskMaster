"use client";

import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { StaticImageData } from "next/image";
import noUser from "../../../public/nouser.jpg";

export default function CurrentUserHook () {
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
    const [photo, setPhoto] = useState<string | StaticImageData>(noUser);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            if(user){
                setCurrentUser(user);
            }else setCurrentUser(null);
        })

        return ()=> unsubscribe();
    },[])

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhoto(currentUser?.photoURL);
        };
    }, [currentUser]);

    return {currentUser, photo, setPhoto};
}