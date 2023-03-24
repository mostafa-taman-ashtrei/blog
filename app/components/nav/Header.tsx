"use client"
import useThemeMode from "@/app/hooks/useThemeMode"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ThemeToggle from "./ThemeToggle"

const Header: React.FC = () => {
    const [colorMode, setColorMode] = useThemeMode()
    const changeTheme = () => setColorMode(colorMode === "light" ? "dark" : "light")


    return (
        <header className=" dark:bg-gray-900">
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


                <ThemeToggle />
            </nav>
        </header>
    )
}

export default Header