import Link from "next/link";
import Image from "next/image";
import twitterImage from "../../../../public/twitterImg.png";
import linkedLnImage from "../../../../public/linkedlnImg.png";
import facebookImage from "../../../../public/facebookImage.png";
import instagramImage from "../../../../public/instagramImage.png";
import githubImage from "../../../../public/githubImage.png";


export default function Footer() {
    return (
        <div className="px-[8%] bg-[#2A2B2C] h-20 flex items-center text-white">
            <div className="w-[50%] flex items-center">
                <div>
                    <p className="text-sm mobile:text-xs">©2024 TaskMaster</p>
                </div>
                <div className="ml-auto">
                    <Link href="https://github.com/Davidthecode" target="_blank">
                        <div className="flex items-center">
                            <h1 className="text-sm mr-1 xxs:text-xs">Github</h1>
                            <Image src={githubImage} alt="image" width={20} height={20} className="" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex items-center ml-auto space-x-2">
                <Link href="https://twitter.com/DavidAjibola_" target="_blank">
                    <Image src={twitterImage} alt="twitterImage" width={20} height={20} className="cursor-pointer" />
                </Link>
                <Link href="">
                    <Image src={facebookImage} alt="twitterImage" width={20} height={20} className="cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/david-ajibola/" target="_blank">
                    <Image src={linkedLnImage} alt="twitterImage" width={22} height={22} className="cursor-pointer" />
                </Link>
                <Link href="">
                    <Image src={instagramImage} alt="twitterImage" width={22} height={22} className="cursor-pointer" />
                </Link>
            </div>
        </div >
    );
};