import Image from "next/image"
import Link from "next/link"
import React from "react"

const Header: React.FC = () => <header>
    <div className="text-center bg-gray-900 p-2 mb-2">
        <Image
            src="/logo.png"
            width={40}
            height={40}
            className="mx-auto"
            alt={"logo"}
        />

        <Link href="/">
            <h1 className="text-2xl text-white font-bold mt-4"> The Davinci Blog</h1>
        </Link>

        <p className="text-slate-300">🤟 Welcome to the Davinci Blog 💻</p>
    </div>
</header>

export default Header