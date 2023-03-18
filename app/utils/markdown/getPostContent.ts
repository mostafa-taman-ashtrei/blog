import matter from "gray-matter"
import fs from "fs"

const getPostContent = (postSlug: string) => {
    const postFolder = "posts/"
    const filePath = `${postFolder}${postSlug}.md`
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const grayMatter = matter(fileContent)
    return grayMatter
}

export default getPostContent