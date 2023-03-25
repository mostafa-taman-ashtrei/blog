"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ThemeToggle from "./ThemeToggle"

const Header: React.FC = () => (
    <nav className="bg-gray-200 p-1 border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/">
                <Image
                    src="/logo.png"
                    width={40}
                    height={40}
                    className="rounded-xl w-auto h-6 sm:h-7"
                    alt={"logo"}
                />
            </Link>

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
            </button>
            <div className=" hidden w-full md:block md:w-auto">
                <ThemeToggle />
            </div>
        </div>
    </nav>

)

export default Header