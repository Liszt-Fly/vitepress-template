import fsp from "fs-extra"
import matter from 'gray-matter'
import request from "request"
import { home_structure } from '../types/index_type'
//TODO 指定根目录
const root = "../docs/target/"
function foreach(folder: string) {
    const content = fsp.readFileSync("../docs/index.md")
    const object = matter(content) as unknown as home_structure
    request("https://v1.jinrishici.com/all.txt", function (error, response, body) {
        object.data.footer = body
        fsp.writeFileSync("../docs/index.md", matter.stringify(object.content, object.data), { encoding: "utf-8" })
    })

}
foreach(root)