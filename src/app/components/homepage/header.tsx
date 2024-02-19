import Link from "next/link";

export default function Header() {
    return (
        <section className="pt-28 flex justify-center px-[8%]">
            <div className="w-[40rem]">
                <div className="flex justify-center ">
                    <h1 className="text-6xl w-full text-center leading-tight xs:text-4xl xs:text-start">The best platform for cross-functional work</h1>
                </div>
                <div className="flex justify-center pt-10">
                    <p className="w-full text-xl text-center opacity-80 xs:text-start xs:text-2xl">Want more efficiency in your organization? TaskMaster is easy for all teams to use, so you can deliver quality work, faster.</p>
                </div>
                <section className="flex justify-center pt-10 xs:justify-start">
                    <Link href="/signup">
                        <div className="mr-4">
                            <button
                                className="bg-black text-white text-lg px-5 py-3 rounded-sm hover:bg-[#EE6969] hover:text-black xs:text-sm"
                            >
                                Get started
                            </button>
                        </div>
                    </Link>
                    <Link href="/login">
                        <div>
                            <button
                                className="text-black border text-lg border-black px-5 py-3 rounded-sm hover:bg-[#EE6969] hover:border-[#EE6969] xs:text-sm"
                            >
                                See how it works
                            </button>
                        </div>
                    </Link>
                </section>
            </div>
        </section>
    )
}