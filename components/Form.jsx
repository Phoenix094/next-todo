'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'



const Form = ({ type, data }) => {
    const [formData, setFormData] = useState(data)
    const [response, setResponse] = useState("")

    const router = useRouter()


    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (type === 'create') {
                const data = await fetch("/api/add-todo", {
                    method: "POST",
                    body: JSON.stringify(
                        { ...formData }
                    )
                })
            } else if (type === 'edit') {

            }
        } catch (error) {
            console.log(error)
        } finally {
            setFormData({
                title: "",
                desc: ""
            })
        }

    }

    return (
        <div className='w-full flex-center flex-col mt-20'>
            <h2 className='text-5xl capitalize font-bold mb-10'>
                {type} todo
            </h2>
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
                            className='bg-[#DA0C81] px-4 text-xl py-2 rounded-full capitalize'
                        >
                            {type} todo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form