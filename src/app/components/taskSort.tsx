"use client"

import {AiOutlineClose} from "react-icons/ai";

type CloseSortType = {
    closeSort: () => void
}
export default function TaskSort ({closeSort}:CloseSortType) {
    return (
        <section className="w-full h-full flex flex-col">
            <div className="flex items-center">
                <div
                    onClick={closeSort}
                    className='w-8 ml-auto hover:bg-[#F9F8F8] text-black opacity-60 hover:opacity-100 flex justify-center items-center h-8 cursor-pointer rounded-md'
                >
                    <AiOutlineClose size='.9rem' />
                </div>
            </div>
            <div className="flex flex-col text-sm space-y-4 mt-3">
                <p className="hover:bg-[#edecec] w-full px-5 py-1 rounded-sm">None</p>
                <p className="hover:bg-[#edecec] w-full px-5 py-1 rounded-sm">Created on</p>
            </div>
        </section>
    )
}