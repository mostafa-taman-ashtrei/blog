import Link from "next/link"
import React from "react"

const Header: React.FC = () => <header>
    <div>
        <Link href="/">Home</Link>
        <h1>The Davinci Blog</h1>
        <p>Welcome to the Davinci Blog 💻</p>
    </div>
</header>

export default Header