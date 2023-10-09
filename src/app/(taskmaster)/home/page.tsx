import checked from "../../../../public/checked.png"
import Image from "next/image"
import {TfiHelpAlt} from "react-icons/tfi"
import loader1 from "../../../../public/loader (1).png"
import loader2 from "../../../../public/loader (2).png"
import loader3 from "../../../../public/loader (3).png"

export default function Home() {
    return (
        <section className="h-full bg-[#F3F4F8] px-16">
            <div className="pt-4">
                <h1 className="text-3xl">Welcome, David</h1>
            </div>
            <div className="mt-8">
                <h1 className="text-xl font-semibold mb-4">Project Status</h1>
                <div className="flex space-x-4">
                    <div className="border border-blxck px-8 py-3 bg-red-200 rounded-md">
                        <div className="flex justify-center">
                            <Image src={loader1} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Upcoming</p>
                        <p className="text-lg font-semibold">4 projects</p>
                    </div>

                    <div className="border border-blxck px-8 py-3 bg-orange-200">
                        <div className="flex justify-center">
                            <Image src={loader2} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">In Progress</p>
                        <p className="text-lg font-semibold">4 projects</p>
                    </div>

                    <div className="border border-blxck px-8 py-3 bg-green-200">
                        <div className="flex justify-center">
                            <Image src={loader3} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Completed</p>
                        <p className="text-lg font-semibold">4 projects</p>
                    </div>

                    <div className="border border-blxck px-8 py-3 bg-green-400">
                        <div className="flex justify-center">
                            <Image src={checked} alt="image" width={70} height={70} />
                        </div>
                        <p className="my-2 text-center">Total</p>
                        <p className="text-lg font-semibold">12 projects</p>
                    </div>
                </div>
            </div>
            <div className="border h-0 w-full my-10 border-gray-300"></div>
            <div>
                <h1 className="text-xl font-semibold">Analytics</h1>
            </div>
            <div className="absolute bottom-10 right-10 cursor-pointer">
                <TfiHelpAlt />
            </div>
        </section>
    )
}