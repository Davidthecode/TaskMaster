import Image from "next/image"
import taskmasterImage from '../../../public/taskmaster.png'

export default function TaskmasterImg() {
    return (
        <div className="flex justify-center pt-20 pb-10 bg-[#EEEBEA]">
            <div className="shadow-md rounded-lg relative w-[60%] h-[30rem] xs:w-[85%] xs:h-[20rem]">
                <Image src={taskmasterImage} alt="image" fill={true}/>
            </div>
        </div>
    )
}