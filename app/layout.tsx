import React from "react"
import Header from "@/app/components/nav/Header"
import Footer from "@/app/components/nav/Footer"

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
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout