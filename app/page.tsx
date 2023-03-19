import React from "react"
import getPostMetadata from "@/app/utils/markdown/getPostMetaData"
import PostPreview from "@/app/components/post/PostPreview"

const Home: React.FC = () => {
  const postMetadata = getPostMetadata()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2">
      {postMetadata.map((post) => <PostPreview key={post.slug} post={post} />)}
    </div>
  )
}

export default Home