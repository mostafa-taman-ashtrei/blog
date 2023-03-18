import React from "react"
import fs from "fs"
import Link from "next/link"

const getPostMetadata = () => {
  const postFolder = "posts/"
  const files = fs.readdirSync(postFolder)
  const markdownFiles = files.filter((file) => file.endsWith(".md"))
  const fileSlugs = markdownFiles.map((file) => file.replace(".md", " "))

  return fileSlugs
}


const Home: React.FC = () => {
  const postMetadata = getPostMetadata()

  const postPreviwes = postMetadata.map((postSlug) => <div key={postSlug}>
    <Link href={`/posts/${postSlug}`}>
      <h2>{postSlug}</h2>
    </Link>
  </div >
  )


  return (
    <>
      {postPreviwes}
    </>
  )
}

export default Home