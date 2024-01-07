import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

const TodoCard = ({ title, desc, _id, handleDelete, handleEdit }) => {
    return (
        <div className=" backdrop-blur-3xl border-4  border-[#1D267D] p-4 rounded-xl h-[200px] flex justify-between items-start flex-col">
            <div>
                <p className="text-2xl font-semibold capitalize">
                    {title}
                </p>
                <p className="text-lg mt-2">
                    {desc}
                </p>
            </div>
            <div className=" self-end flex justify-end items-center gap-x-5 mt-5">
                <span className="cursor-pointer" onClick={() => handleEdit(_id)}>
                    <TbEdit size={30} />
                </span>
                <span className="cursor-pointer" onClick={() => handleDelete(_id)}>
                    <FaTrash size={20} />
                </span>
            </div>
        </div>
    )
}

export default TodoCard