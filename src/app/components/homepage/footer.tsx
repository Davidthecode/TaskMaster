import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import Link from "next/link";


export default function Footer() {
    return (
        <div className="px-[8%] bg-[#2A2B2C] h-20 flex items-center text-white">
            <div className="pt-3">
                <p className="text-md">©2024 TaskMaster</p>
            </div>
            <div className="ml-[38%]">
                <h1 className="text-sm">Github</h1>
            </div>
            <div className="flex items-center ml-auto space-x-2">
                <Link href="https://twitter.com/DavidAjibola_" target="_blank">
                    <div className="border p-1 rounded-full bg-black">
                        <SlSocialTwitter size=".8rem" className="" />
                    </div>
                </Link>
                <div className="border p-1 rounded-full">
                    <SlSocialFacebook size=".8rem" className="" />
                </div>
                <Link href="https://www.linkedin.com/in/david-ajibola/" target="_blank">
                    <div className="border p-1 rounded-full">
                        <SlSocialLinkedin size=".8rem" className="" />
                    </div>
                </Link>
                <div className="border p-1 rounded-full">
                    <SlSocialInstagram size=".9rem" className="" />
                </div>
            </div>
        </div>
    );
};