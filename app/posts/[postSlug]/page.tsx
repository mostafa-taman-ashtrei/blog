import React from "react"
import { nextProps } from "@/app/types/params.type"
import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"

const getPostContent = (postSlug: string) => {
    const postFolder = "posts/"
    const filePath = `${postFolder}${postSlug}.md`
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const grayMatter = matter(fileContent)
    return grayMatter
}

const postPage = (props: nextProps) => {
    const postSlug = props.params.postSlug
    const post = getPostContent(postSlug)

    return (
        <>
            <h1>{post.data.date}</h1>
            <h2>This is the {props.params.postSlug} post</h2>
            <Markdown>{post.content}</Markdown>
        </>
    )
}
export default postPage