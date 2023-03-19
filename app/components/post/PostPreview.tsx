import { PostMetaData } from "@/app/types/post.type"
import Link from "next/link"
import React from "react"

type PostPreviewProps = {
    post: PostMetaData
};

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => (
    <div
        className="border border-slate-600 p-4 rounded-md shadow-xl bg-white"
        key={post.title}
    >
        <p className="text-sm text-slate-400">{post.date}</p>
        <Link href={`/posts/${post.slug}`}>
            <h2 className=" text-violet-600 hover:underline mb-4">
                {post.title}
            </h2>
        </Link>
        <p className="text-slate-700">{post.subtitle}</p>
    </div >
)
export default PostPreview