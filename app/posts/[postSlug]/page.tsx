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
        <div className="max-w-screen-md mx-auto bg-gray-300 border-gray-700 rounded-xl dark:bg-gray-700 ">
            <div className="my-5 text-center text-slate-600 dark:text-white">
                <h1 className="text-2xl ">{post.data.title}</h1>
                <p>{post.data.date}</p>
            </div>

            <div className="prose prose-slate mx-auto dark:text-white lg:prose-lg">
                <article>
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </div>
    )
}
export default postPage