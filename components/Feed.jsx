'use client'

import { useState, useEffect } from 'react'

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

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {
                todo.length === 0 ? <div>
                    <p>No Data Found</p>
                </div> : <div>
                    {
                        todo?.map((ele) => (
                            <div key={ele._id}>
                                <p>
                                    {ele.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Feed