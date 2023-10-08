import Image from "next/image"
import googleIcon from "../../../../public/google-icon.png"

export default function Login() {
    return (
        <div className="px-[10%] font-sans">
            <div className="pt-5 absolute">
                <h1 className="text-3xl xs:text-xl">TaskMaster</h1>
            </div>

            <aside className="flex justify-center items-center h-screen">
                <div className="w-[30rem]">
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-3xl xs:text-2xl mb-2">Welcome to TaskMaster</h1>
                            <p className="text-xl xs:text-lg text-center">To get started, please sign in</p>
                        </div>
                        <div className="flex justify-between items-center border-black rounded-md border-opacity-20 px-5 py-3 mt-8 border w-full hover:bg-[#F9F8F8] cursor-pointer">
                            <div>
                                <Image src={googleIcon} alt="image" width={20} height={20} />
                            </div>
                            <div className="pr-[30%] xs:pr-[10%]">
                                <p>Continue with Google</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-8 w-full">
                        <div className="border w-[46%] h-0"></div>
                        <div className="px-2">or</div>
                        <div className="border w-[46%] h-0"></div>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-xs font-semibold">Email address</label>
                            <input
                                className="border-2 border-black border-opacity-20 h-10 rounded-md px-2 outline-[#426DC6]"
                                type="text"
                                id="email"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="password" className="text-xs font-semibold">Password</label>
                            <input
                                className="border-2 border-black border-opacity-20 h-10 rounded-md px-2 outline-[#426DC6]"
                                type="text"
                                id="password"
                            />
                        </div>
                        <div className="w-full mt-2">
                            <button className="bg-[#426DC6] hover:bg-[#375699] text-white w-full mt-4 h-10 rounded-md">Continue</button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}