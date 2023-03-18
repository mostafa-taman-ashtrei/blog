import React from "react"
import { nextProps } from "@/app/types/params.type"
import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/app/utils/markdown/getPostMetaData"
import getPostContent from "@/app/utils/markdown/getPostContent"

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        postSlug: post.slug,
    }))
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