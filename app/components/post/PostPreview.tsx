import { PostMetaData } from "@/app/types/post.type"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type PostPreviewProps = {
    post: PostMetaData
};

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => (
    <Link href={`/posts/${post.slug}`}>
        {/* <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
            <Image
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={post.image}
                alt={`${post.title} image`}
                width={50}
                height={50}
            />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post.title}</h3>
                <span className="text-xs dark:text-gray-400">{post.date}</span>
                <p>{post.subtitle}</p>
            </div>
        </div> */}

        <div>


            <Image
                className="relative z-10 object-cover w-full rounded-md h-96"
                src={post.image}
                alt={`${post.title} image`}
                width={150}
                height={10}
            />


            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <h2 className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    {post.title}
                </h2>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {post.subtitle}
                </p>

                <p className="mt-3 text-sm text-blue-500">{post.date}</p>
            </div>
        </div>
    </Link>
)
export default PostPreview