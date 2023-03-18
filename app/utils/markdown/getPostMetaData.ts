import { PostMetaData } from "@/app/types/post.type"
import matter from "gray-matter"
import fs from "fs"

const getPostMetadata = (): PostMetaData[] => {
    const postFolder = "posts/"
    const files = fs.readdirSync(postFolder)
    const markdownFiles = files.filter((file) => file.endsWith(".md"))

    // Read the metadata from each MD file
    const postMetaData = markdownFiles.map((fileName) => {
        const fileContent = fs.readFileSync(`${postFolder}${fileName}`, "utf-8")
        const grayMatter = matter(fileContent)

        return {
            title: grayMatter.data.title,
            date: grayMatter.data.date,
            subtitle: grayMatter.data.subtitle,
            image: grayMatter.data.image,
            slug: fileName.replace(".md", "")
        }
    })

    return postMetaData
}

export default getPostMetadata