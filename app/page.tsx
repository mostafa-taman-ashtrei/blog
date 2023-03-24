import React from "react"
import getPostMetadata from "@/app/utils/markdown/getPostMetaData"
import PostPreview from "@/app/components/post/PostPreview"
import Hero from "./components/main/Hero"

const Home: React.FC = () => {
  const postMetadata = getPostMetadata()

  return (
    <>
      <Hero />
      {postMetadata.map((post) => <PostPreview key={post.slug} post={post} />)}
    </>
  )
}

export default Home