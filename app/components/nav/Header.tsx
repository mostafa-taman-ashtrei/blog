import Image from "next/image"
import Link from "next/link"
import React from "react"

const Header: React.FC = () => <header className="bg-gray-900">

    <nav className="flex flex-col px-1 py-1 sm:flex-row sm:justify-between sm:items-center">

        <Link href="/">
            <Image
                src="/logo.png"
                width={40}
                height={40}
                className="rounded-xl w-auto h-6 sm:h-7"
                alt={"logo"}
            />
        </Link>
        <div className="flex items-center mt-2 -mx-2 sm:mt-0" />
    </nav>
</header>

export default Header