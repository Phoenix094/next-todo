'use client'
import { useState } from 'react'

const initialData = {
    title: "",
    desc: '',
}

const Form = () => {
    const [formData, setFormData] = useState(initialData)

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className="lg:w-1/2 md:w-8/12 w-full">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-3 ">
                    <label
                        htmlFor="title"
                        className="text-xl "
                    >Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
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
                        value={formData.desc}
                        onChange={handleChange}
                        className="border-none bg-white text-black p-2 focus:outline-1 outline-[#1D267D] rounded-lg text-lg"
                    />
                </div>
                <div className='flex-center mt-5'>
                    <button
                        type="submit"
                        className='bg-[#5C469C] px-4 text-xl py-2 rounded-full'
                    >
                        Add todo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form