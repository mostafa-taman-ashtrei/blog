import React from "react"
import fs from "fs"
import Link from "next/link"
import matter from "gray-matter"
import Image from "next/image"
import { PostMetaData } from "@/app/types/post.type"

const getPostMetadata = (): PostMetaData[] => {
  const postFolder = "posts/"
  const files = fs.readdirSync(postFolder)
  const markdownFiles = files.filter((file) => file.endsWith(".md"))

  // Read the metadata from each MD file
  const postMetaData = markdownFiles.map((fileName) => {
    const fileContent = fs.readFileSync(`${postFolder}${fileName}`, "utf-8")
    const grayMatter = matter(fileContent)

    return {
      title: grayMatter.data.title,
      date: grayMatter.data.date,
      subtitle: grayMatter.data.subtitle,
      image: grayMatter.data.image,
      slug: fileName.replace(".md", "")
    }
  })

  return postMetaData
}


const Home: React.FC = () => {
  const postMetadata = getPostMetadata()

  const postPreviwes = postMetadata.map((post) => <div key={post.title}>
    <Link href={`/posts/${post.slug}`}>
      <h2>{post.title}</h2>

    </Link>
    <h3>{post.subtitle}</h3>
    <h6>{post.date}</h6>
    <Image alt={`${post.title} image`} width={500} height={500} src={post.image} />
    <hr />
  </div >
  )


  return (
    <>
      {postPreviwes}
    </>
  )
}

export default Home