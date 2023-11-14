"use client"

import { useEffect, useState } from "react"
import { auth } from "../firebase/firebase-config"
import { onAuthStateChanged } from "firebase/auth"

export default function CurrentUserHook () {
    const [currentUser, setCurrentUser] = useState(auth.currentUser)

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            if(user){
                setCurrentUser(user)
            }else setCurrentUser(null)
        })

        return ()=> unsubscribe();
    },[])

    return {currentUser};
}