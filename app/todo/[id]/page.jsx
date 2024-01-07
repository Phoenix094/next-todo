'use client'

import { useEffect, useState } from 'react'
import Form from '@components/Form'


const EditTodo = ({ params }) => {
    const [data, setData] = useState("")

    const fetchData = async () => {
        try {
            const res = await fetch(`/api/todo/${params.id}`)
            const todo = await res.json()

            setData(todo)
        } catch (error) {

        }
    }


    useEffect(() => async () => {
        fetchData()
    }, [])
    return (
        <main>
            <Form type={"edit"} data={data} />
        </main>
    )
}

export default EditTodo