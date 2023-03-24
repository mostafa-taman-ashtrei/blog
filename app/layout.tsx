import React from "react"
import Header from "@/app/components/nav/Header"
import Footer from "@/app/components/nav/Footer"
import "@/styles/globals.css"

export const metadata = {
  title: "The Davinci Blog",
  description: "A collection of all the blog posts about productivity, coding and time management",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <div className="dark:bg-gray-800  dark:text-gray-50">
        <Header />
        {children}
        <Footer />
      </div>
    </body>
  </html>
)

export default RootLayout