"use client"

import { useState } from "react"
import { AiOutlineClose } from 'react-icons/ai';
import { CiClock2 } from "react-icons/ci"
import { PiSpinnerThin } from "react-icons/pi"
import { IoAddSharp } from "react-icons/io5"
import { RiArrowDropUpLine } from 'react-icons/ri'

type AddtaskPopupProps = {
    onClose: () => void;
}

export default function Addtask({ onClose }: AddtaskPopupProps) {
    const [shownote, setShowNote] = useState(false);

    const handleShowNote = () => {
        setShowNote(true)
    }

    const closeNote = () => {
        setShowNote(false)
    }

    return (
        <section>
            <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-black w-[70%] h-[90%] largeTablet:w-[85%] mobile:w-[100%] mobile:h-[100%]">
                    <div className=' overflow-y-auto h-full bg-[#EFEFEF]'>
                        <div
                            onClick={onClose}
                            className='w-8 ml-auto hover:bg-[#5F6066] text-black hover:text-white mr-2 mt-2 flex justify-center items-center h-8 cursor-pointer'
                        >
                            <AiOutlineClose size='1.3rem' />
                        </div>
                        <div className='px-10 mobile:px-2'>
                            <div>
                                <input
                                    className='w-[60%] h-20 text-3xl borde outline-none px-4 bg-[#EFEFEF] fomt-bold'
                                    placeholder='Untitled'
                                    type="text"
                                />
                            </div>

                            <div className='flex items-center mt-6'>
                                <div className='px-4 flex flex-col mr-12 mobile:mr-6'>
                                    <div className='flex items-center opacity-60'>
                                        <div className='mr-1'>
                                            <CiClock2 />
                                        </div>
                                        <p>Date created</p>
                                    </div>
                                    <div className='flex items-center mt-6'>
                                        <div className='mr-1'>
                                            <PiSpinnerThin />
                                        </div>
                                        <p className='opacity-60'>Status</p>
                                    </div>
                                </div>

                                <div className='px-4 flex flex-col opacity-60'>
                                    <p>October 9, 2023 1:02 PM</p>
                                    <p className='mt-6'>Todo</p>
                                </div>
                            </div>

                            <div className='mt-6 px-4'>
                                <div className="flex items-center">
                                    <div className='flex items-center opacity-60 hover:bg-[#DDDDDC] w-fit hover:px-1 rounded-md cursor-pointer mr-3'>
                                        <div className='mr-1'>
                                            <IoAddSharp />
                                        </div>
                                        <p onClick={handleShowNote}>Add a note</p>
                                    </div>
                                    {shownote &&
                                        <div className="opacity-60 cursor-pointer" onClick={closeNote}>
                                            <RiArrowDropUpLine size="1.5rem" />
                                        </div>
                                    }
                                </div>

                                <div className={`mt-6 ${shownote ? "block" : "hidden"}`}>
                                    <textarea
                                        className='outline-none px-2 py-2 bg-[#EFEFEF] border border-gray-300 w-[90%] h-[15rem] mobile:w-[100%]'
                                        name="tasknote"
                                        placeholder='write a note'
                                        id=""
                                        cols={0}
                                        rows={0}
                                    >
                                    </textarea>
                                </div>

                                <div className="mt-4">
                                    <button className="border bg-[#DDDDDC] px-2 py-1 rounded-md opacity-60 hover:opacity-100">Create task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}