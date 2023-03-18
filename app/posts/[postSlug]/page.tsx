import React from "react"
import { nextProps } from "@/app/types/params.type"
import fs from "fs"

const getPostContent = (postSlug: string) => {
    const postFolder = "posts/"
    const filePath = `${postFolder}${postSlug}.md`
    const fileContent = fs.readFileSync(filePath, "utf-8")
    return fileContent
}

const postPage = (props: nextProps) => {
    const postSlug = props.params.postSlug
    const postContent = getPostContent(postSlug)

    return (
        <>
            <h2>This is the {props.params.postSlug} post</h2>
            <p>{postContent}</p>
        </>
    )
}
export default postPage