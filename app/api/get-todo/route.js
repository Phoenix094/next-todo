import { connectDB } from "@utils/database";
import Todo from "@models/Todo";

export const GET = async (req) => {
    try {
        await connectDB()
        const allTodo = await Todo.find({})

        if (allTodo.length > 0) {
            return new Response(JSON.stringify(allTodo), { status: 200 })
        } else {
            return new Response(JSON.stringify("No Data Found"), { status: 200 })
        }

    } catch (error) {
        return new Response(JSON.stringify("Failed to fetch Todo try again...."), { status: 502 })
    }
}