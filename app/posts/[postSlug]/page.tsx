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
        <div>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
            </div>

            <div className="prose prose-slate mx-auto lg:prose-lg">
                <article>
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </div>
    )
}
export default postPage