import fsp from "fs-extra"
import matter from 'gray-matter'
import path from "path"

import request from "request"
import { homeObject, basePath } from "../config/config"
import { matter_home_structure } from '../interfaces/index_type'
//TODO 指定根目录
export const root = path.resolve(basePath, "docs", "target")
const index_file = path.resolve(basePath, "docs", "index.md")
export function foreach(folder: string) {
    const content = fsp.readFileSync(index_file)
    console.log(content)
    const object = matter(content) as unknown as matter_home_structure
    console.log(object)
    request("https://v1.jinrishici.com/all.txt", function (error, response, body) {
        object.data = homeObject
        object.data.footer = body
        fsp.writeFileSync(index_file, matter.stringify(object.content, object.data), { encoding: "utf-8" })
    })
}
