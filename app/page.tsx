import React from "react"
import getPostMetadata from "@/app/utils/markdown/getPostMetaData"
import PostPreview from "@/app/components/post/PostPreview"
import Hero from "./components/main/Hero"

const Home: React.FC = () => {
  const postMetadata = getPostMetadata()

  return (
    <>
      <Hero />

      <section>
        <div className="container px-6 py-10 mx-auto">


          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {postMetadata.map((post) => <PostPreview key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home