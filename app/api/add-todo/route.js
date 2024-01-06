import { connectDB } from "@utils/database";
import Todo from "@models/Todo";

export const POST = async (req) => {
    const { title, desc } = await req.json()
    try {
        await connectDB()

        const newTodo = new Todo({
            title, desc
        })

        await newTodo.save()

        return new Response(JSON.stringify(newTodo), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify("Failed to create new Todo"), { status: 500 })

    }
}