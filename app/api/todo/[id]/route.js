import { connectDB } from "@utils/database";
import Todo from "@models/Todo";

export const GET = async (req, { params }) => {
    try {
        await connectDB()
        const todo = await Todo.findById(params.id)

        if (todo) {
            return new Response(JSON.stringify(todo), { status: 200 })
        } else {
            return new Response(JSON.stringify("No Data Found"), { status: 400 })
        }

    } catch (error) {
        return new Response(JSON.stringify("Failed to fetch Todo try again...."), { status: 502 })
    }
}

export const PATCH = async (req, { params }) => {
    const { title, desc } = await req.json()
    try {
        await connectDB()

        const todo = await Todo.findById(params.id)

        if (!todo) return new Response(JSON.stringify("No Data Found"), { status: 400 })

        todo.title = title
        todo.desc = desc

        await todo.save()

        return new Response(JSON.stringify("Edit Success"), { status: 202 })

    } catch (error) {
        return new Response(JSON.stringify("Failed to edit Todo try again...."), { status: 502 })
    }
}