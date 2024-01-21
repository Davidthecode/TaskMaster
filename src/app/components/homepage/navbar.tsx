'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { HiOutlineBars3 } from "react-icons/hi2"
import { AiOutlineClose } from "react-icons/ai"
import taskmasterImage from "../../../../public/taskmasterImage.png"

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

    const handleLogin = () => {
        router.push('/login')
    }

    const handleSignUp = () => {
        router.push("/signup")
    }

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
                    <div className="mr-3">
                        <Image src={taskmasterImage} alt="image" height={30} width={30} />
                    </div>
                    <div className="mr-10">
                        <h1 className="text-2xl cursor-pointer mobile:text-md">TaskMaster</h1>
                    </div>
                    <div className="xs:hidden largeTablet:hidden">
                        <ul className="flex items-center space-x-10 largeScreen:space-x-5 text-s font-normal">
                            <li className="hover:text-very-black cursor-pointer">Features</li>
                            <li className="hover:text-black cursor-pointer">Solutions</li>
                            <li className="hover:text-black cursor-pointer">Resources</li>
                            <li className="hover:text-black cursor-pointer">Enterprise</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-10 mr-10 xs:hidden">
                        <li className="cursor-pointer">Contact Sales</li>
                        <li className="cursor-pointer hover:border-b hover:border-black" onClick={handleLogin}>Log in</li>
                    </ul>
                    <button
                        className="text-white bg-black hover:outline-none text-md px-3 py-1 cursor-pointer rounded-sm hover:bg-[#EE6969] mobile:text-xs mobile:py-2"
                        onClick={handleSignUp}
                    >
                        Get started
                    </button>
                    <div className="ml-4 hidden largeTablet:block xs:block cursor-pointer" onClick={handleDropdown}>
                        {dropdown ? <AiOutlineClose size="1.7rem" /> : <HiOutlineBars3 size="1.7rem" />}
                    </div>
                </div>
            </div>

            {/* mobile */}
            {dropdown && (
                <div className="fixed bg-white w-full h-full z-50 mt-16">
                    <div className="px-[4%] pt-4">
                        <ul className="text-lg font-semibold space-y-6 mt-4">
                            <li className="border"></li>
                            <li className="h-12 border-b border-black border-opacity-20 cursor-pointer">Features</li>
                            <li className="h-12 border-b border-black border-opacity-20 cursor-pointer">Solutions</li>
                            <li className="h-12 border-b border-black border-opacity-20 cursor-pointer">Resources</li>
                            <li className="h-12 border-b border-black border-opacity-20 cursor-pointer">Enterprise</li>
                            <li className="h-12 border-b border-black border-opacity-20 cursor-pointer">Pricing</li>
                        </ul>
                    </div>
                    <div className="mt-12 flex flex-col px-[4%]">
                        <button
                            className="w-full bg-black text-white h-12 rounded-sm text-md font-semibold hover:bg-[#F06A6A]"
                            onClick={handleSignUp}
                        >
                            Get started
                        </button>
                        <button
                            className="mt-4 border border-black h-12 rounded-sm text-md font-semibold hover:bg-[#F06A6A] hover:border-none"
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}