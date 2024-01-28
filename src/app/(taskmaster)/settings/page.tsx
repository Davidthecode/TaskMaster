"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Settings() {
    const { push } = useRouter();

    useEffect(() => {
        push("/settings/profile");
    }, []);
};