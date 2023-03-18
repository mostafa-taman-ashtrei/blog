import { PostMetaData } from "@/app/types/post.type"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type PostPreviewProps = {
    post: PostMetaData
};

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => (
    <div key={post.title}>
        <Link href={`/posts/${post.slug}`}>
            <h2>{post.title}</h2>

        </Link>
        <h3>{post.subtitle}</h3>
        <h6>{post.date}</h6>
        <Image alt={`${post.title} image`} width={500} height={500} src={post.image} />
        <hr />
    </div >
)
export default PostPreview