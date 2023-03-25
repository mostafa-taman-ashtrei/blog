import React from "react"
import getPostMetadata from "@/app/utils/markdown/getPostMetaData"
import PostPreview from "@/app/components/post/PostPreview"
import Hero from "./components/main/Hero"

const Home: React.FC = () => {
  const postMetadata = getPostMetadata()

  return (
    <>
      <Hero />

      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                <h3 className="text-3xl font-semibold">Davinvi Blog</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Posts Timeline</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">

                {postMetadata.map((post) => <PostPreview key={post.slug} post={post} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home