import React from "react"
import getPostMetadata from "@/app/utils/markdown/getPostMetaData"
import PostPreview from "./components/post/PostPreview"


const Home: React.FC = () => {
  const postMetadata = getPostMetadata()

  return (
    <>
      {postMetadata.map((post) => <PostPreview key={post.slug} post={post} />)}
    </>
  )
}

export default Home