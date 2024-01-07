'use client'

import { useState, useEffect } from 'react'
import TodoCard from './TodoCard'

const Feed = () => {
    const [todo, setTodo] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const data = await fetch("/api/get-todo")
            const res = await data.json()
            setTodo(res)
        } catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    const handleEdit = (id) => {
        console.log("edit", id)
    }

    const handleDelete = (id) => {
        console.log("delete", id)

    }

    useEffect(() => async () => {
        await fetchData()
    }, [])
    return (
        <div className='w-full mt-10'>
            {
                isLoading ? <div>
                    <p>Loading ....</p>
                </div> : <div className='grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4 '>
                    {
                        todo?.map((ele) => <TodoCard key={ele._id} {...ele} handleDelete={handleDelete} handleEdit={handleEdit} />
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Feed