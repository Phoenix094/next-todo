import Image from "next/image"


const AppBar = () => {
    return (
        <header className="border-b-2 border-gray-400 bg-[#1D267D]">
            <nav className="w-11/12 lg:10/12 mx-auto py-2 flex-center">
                <Image
                    src={"/assets/todo-logo.png"}
                    alt="todo-logo"
                    width={110}
                    height={50}
                />
            </nav>
        </header>
    )
}

export default AppBar