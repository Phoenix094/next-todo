'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import TodoCard from './TodoCard'

const Feed = () => {
    const [todo, setTodo] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()

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
        router.push(`todo/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/todo/${id}`, {
                method: 'DELETE',
            })

            const newArray = todo.filter((todo) => todo._id !== id)

            console.log(newArray)
            setTodo(newArray)

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => async () => {
        await fetchData()
    }, [])

    return (
        <div className='w-full '>
            <h1 className='text-center font-bold text-5xl'>
                Your Todo
            </h1>
            <div className='mt-10'>

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
        </div>
    )
}

export default Feed