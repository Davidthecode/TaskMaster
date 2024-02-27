'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import taskmasterImage from "../../../../public/taskmasterImage.png";
import Link from "next/link";

export default function Navbar() {
    const [sticky, setSticky] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDropdown = () => {
        setDropdown(!dropdown);
        document.body.classList.toggle("overflow-hidden", !dropdown);
    }

    useEffect(() => {
        const handleResize = () => {
            if (dropdown) {
                setDropdown(false);
                document.body.classList.remove("overflow-hidden");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dropdown]);

    return (
        <nav>
            <div className={`bg-[#f5f2f1] px-[8%] pb-4 flex items-center justify-between pt-2 w-full fixed top-0 ${sticky && "w-full border-b border-gray-300 shadow-sm transition-all duration-500 ease-in-out z-50"}`}>
                <div className="flex items-center">
                    <div className="mr-3 w-[1.9rem] h-[2.4rem]">
                        <Image src={taskmasterImage} alt="image" className="w-full h-full" />
                    </div>
                    <div className="mr-10">
                        <h1 className="text-2xl cursor-pointer mobile:text-md xxs:text-lg">TaskMaster</h1>
                    </div>
                    <div className="xs:hidden largeTablet:hidden">
                        <ul className="flex items-center space-x-10 largeScreen:space-x-5 text-s font-normal">
                            <Link href="">
                                <li className="hover:text-very-black cursor-pointer">FAQ</li>
                            </Link>
                            <Link href="">
                                <li className="hover:text-black cursor-pointer">Resources</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-10 mr-10 xs:hidden">
                        <Link href="/login">
                            <li className="cursor-pointer hover:border-b hover:border-black">Log in</li>
                        </Link>
                    </ul>
                    <Link href="/signup">
                        <button
                            className="text-white bg-black hover:outline-none text-md px-3 py-1 cursor-pointer rounded-sm hover:bg-[#EE6969] mobile:text-xs mobile:py-2"
                        >
                            Get started
                        </button>
                    </Link>
                    <div className="ml-4 hidden largeTablet:block xs:block cursor-pointer" onClick={handleDropdown}>
                        {dropdown ? <AiOutlineClose size="1.7rem" /> : <HiOutlineBars3 size="1.7rem" />}
                    </div>
                </div>
            </div>

            {/* mobile */}
            {dropdown && (
                <div className="fixed bg-white w-full h-full z-50 mt-16">
                    <div className="px-[4%] pt-4">
                        <ul className="text-lg font-semibold mt-4">
                            <Link href="">
                                <li className="border-b border-black border-opacity-20 cursor-pointer py-3">FAQ</li>
                            </Link>
                            <Link href="">
                                <li className="border-b border-black border-opacity-20 cursor-pointer py-3">Resources</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="mt-12 flex flex-col px-[4%]">
                        <Link href="/signup">
                            <button
                                className="w-full bg-black text-white h-12 rounded-sm text-md font-semibold hover:bg-[#F06A6A]"
                            >
                                Get started
                            </button>
                        </Link>
                        <Link href="/login">
                            <button
                                className="mt-4 border w-full border-black h-12 rounded-sm text-md font-semibold hover:bg-[#F06A6A] hover:border-none"
                            >
                                Log In
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}