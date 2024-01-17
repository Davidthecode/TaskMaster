import Image from "next/image";
import tmImage from "../../../../public/tmImage.png";

export default function TaskmasterImg() {
    return (
        <div className="flex justify-center pt-20 pb-10 bg-[#EEEBEA] relative">
            <div className="shadow-md rounded-lg  w-[63%] h-[30rem] xs:w-[85%] xs:h-[20rem]">
                <Image src={tmImage} alt="image" className="rounded-lg w-full h-full z-50" />
            </div>
        </div>
    )
};