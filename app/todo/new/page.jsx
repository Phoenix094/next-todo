import Form from '@components/Form'
import React from 'react'

const AddTodo = () => {
    const data = {
        title: "",
        desc: ""
    }
    return (
        <main>
            <Form type={'create'} data={data} />
        </main>
    )
}

export default AddTodo