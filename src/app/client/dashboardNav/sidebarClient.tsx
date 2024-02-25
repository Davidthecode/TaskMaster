"use client";

import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useSidebarContext } from "@/app/context/sidebarContext";

export default function SidebarClient() {
    const { isOpen, setIsOpen } = useSidebarContext();
    return (
        <section>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" title="sidebar">
                <BsReverseLayoutTextSidebarReverse size="1.3em" className="opacity-80"/>
            </div>
        </section>
    )
}