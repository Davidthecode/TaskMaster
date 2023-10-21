import Image from "next/image"
import googleIcon from "../../../../public/google-icon.png"
import taskmasterImage from "../../../../public/taskmasterImage.png"

export default function Login() {
    return (
        <div className="px-[10%] font-sans">
            <div className="pt-5 absolute flex items-center">
                <div className="mr-3">
                    <Image src={taskmasterImage} alt="image" width={30} height={30}/>
                </div>
                <h1 className="text-3xl xs:text-xl">TaskMaster</h1>
            </div>

            <aside className="flex justify-center items-center h-screen">
                <div className="w-[30rem]">
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-4xl mb-2 text-center xs:text-2xl">You are one click away from organizing your work</h1>
                        </div>
                        <div className="flex justify-between items-center border-black rounded-md border-opacity-20 px-5 py-3 mt-8 border w-full hover:bg-[#375699] cursor-pointer bg-[#426DC6] text-white">
                            <div>
                                <Image src={googleIcon} alt="image" width={20} height={20} className="bg-[#F9F8F8]" />
                            </div>
                            <div className="pr-[30%] xs:pr-[10%]">
                                <p>Signup with google</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-8 w-full">
                        <div className="border w-[46%] h-0"></div>
                        <div className="px-2 text-sm">TM</div>
                        <div className="border w-[46%] h-0"></div>
                    </div>

                    <div className="mt-6">
                        <p className="text-xs text-center">By signing up to agree to TaskMaster terms and policy</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}