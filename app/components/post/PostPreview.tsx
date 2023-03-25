import { PostMetaData } from "@/app/types/post.type"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface PostPreviewProps {
    post: PostMetaData
};

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
        <div className="flex flex-row gap-2">

            <div>
                <Link href={`/posts/${post.slug}`}>
                    <Image
                        src={post.image}
                        className="w-10 h-10 rounded-full"
                        width={50}
                        height={50}
                        alt={`${post.title} image`}
                    />
                </Link>
            </div>
            <div className="flex flex-col">
                <Link href={`/posts/${post.slug}`}>
                    <h3 className="hover:underline cursor-pointer text-xl font-semibold tracking-wide">
                        {post.title}
                    </h3>

                </Link>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">{post.date}</time>
                <p className="text-sm">{post.subtitle}</p>
            </div>
        </div>
    </div>
)

export default PostPreview