"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function Tasks() {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === "/tasks"){
            router.push("/tasks/list")
        }
    }, [pathname])

    return (
        <div></div>
    )
}