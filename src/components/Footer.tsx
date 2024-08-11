import Link from 'next/link'

const Footer = () => {
    return (
        <header className="w-full flex flex-col absolute bg-transparent z-40 opacity-97 bg-gradient-to-b from-[#FF4] to-[#FF9] p-2">
            <nav className="flex items-center justify-center p-4 w-full">
                <Link href="https://wa.me/13234541422" className="flex items-center space-x-1">
                    <h1 className="text-xl font-semibold bg-[#854CE6] text-[#F2F5F7] py-2 px-4 rounded-md hover:bg-[#6a3eb5] transition-colors duration-300">
                        Made with ❤️ by Ronin
                    </h1>
                </Link>
            </nav>
        </header>
    )
}

export default Footer
