import React from "react"

export const metadata = {
  title: "The Davinci Blog",
  description: "A collection of all the blog posts about productivity, coding and time management",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const header = (
    <header>
      <div>
        <h1>The Davinci Blog</h1>
        <p>Welcome to the Davinci Blog 💻</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Mostafa</h3>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}

export default RootLayout