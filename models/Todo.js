import { models, model, Schema } from 'mongoose'

const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    desc: {
        type: String,
        required: [true, "desc is required"],
    },
})

const Todo = models.Todo || model("Todo", TodoSchema)
export default Todo