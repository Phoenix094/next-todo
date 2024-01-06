'use client'
import { useState } from 'react'

const Form = () => {
    return (
        <div className="lg:w-1/2 md:w-8/12 w-full">
            <form>
                <div className="flex flex-col gap-y-3 ">
                    <label
                        htmlFor="title"
                        className="text-xl "
                    >Title</label>
                    <input
                        type="text"
                        name="title"
                        className="border-none bg-white text-black p-2 focus:outline-1 outline-[#1D267D] rounded-lg text-lg"
                    />
                </div>
                <div className="flex flex-col gap-y-3 mt-5">
                    <label
                        htmlFor="desc"
                        className="text-xl "
                    >Description</label>
                    <input
                        type="text"
                        name="desc"
                        className="border-none bg-white text-black p-2 focus:outline-1 outline-[#1D267D] rounded-lg text-lg"
                    />
                </div>
            </form>
        </div>
    )
}

export default Form