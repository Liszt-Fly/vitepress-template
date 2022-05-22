import fsp from "fs-extra"
import path from "path"
import { file } from "../interfaces/file"

let workroot = path.resolve("docs", "target",)
let fileTree: file[] = []
function read(root: string, space: file[]) {
    console.log(process.cwd())
    const list = fsp.readdirSync(root)
    if (list.length == 0) return;
    list.forEach(item => {
        const r_path = path.resolve(root, item)
        const stat = fsp.statSync(r_path)

        if (stat.isDirectory()) {
            let container: file = {
                text: item,
                children: [],
            }
            space.push(container)
            read(r_path, container.children!)
        }
        else {
            let pathobject = path.parse(r_path)
            let name = pathobject.base
            let noextName = path.basename(name, ".md")
            let link = "/target/" + path.relative(workroot, r_path).substring(0, path.relative(workroot, r_path).lastIndexOf("."))



            space.push({ text: noextName, link })
        }
    })
}
read(workroot, fileTree)
console.log(JSON.stringify(fileTree, null, 2))
export { fileTree }