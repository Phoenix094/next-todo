import Image from "next/image"
import Link from "next/link"


const AppBar = () => {
    return (
        <header className="border-b-2 border-gray-400 bg-[#1D267D]">
            <nav className="w-11/12 lg:10/12 mx-auto py-2 flex justify-between  items-center">
                <Link href={"/"} >
                    <Image
                        src={"/assets/todo-logo.png"}
                        alt="todo-logo"
                        width={110}
                        height={50}
                    />
                </Link>

                <Link href={"/todo/new"}
                    className="bg-[#DA0C81] px-4 py-2 rounded-full font-semibold text-lg"
                >
                    Create Todo
                </Link>
            </nav>
        </header>
    )
}

export default AppBar