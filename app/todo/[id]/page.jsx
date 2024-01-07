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
            console.log(todo)
        } catch (error) {

        }
    }


    useEffect(() => async () => {
        await fetchData()
    }, [])
    return (
        <main>
            {
                data ?
                    <Form type={"edit"} data={data} /> : (
                        <div className='h-screen flex-center'>
                            <p className='text-3xl font-medium text-center'>
                                Loading....
                            </p>
                        </div>
                    )
            }
        </main>
    )
}

export default EditTodo