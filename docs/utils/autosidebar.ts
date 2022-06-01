import fsp from "fs-extra"
import path from "path"
import { DefaultTheme } from "vitepress"
import { file } from "../interfaces/file"

let workroot = path.resolve("docs", "target",)
let fileTree: file[] = []
function read(root: string, space: file[]) {
    const list = fsp.readdirSync(root)
    if (list.length == 0) return;
    list.forEach(item => {

        const r_path = path.resolve(root, item)
        const stat = fsp.statSync(r_path)

        let pathobject = path.parse(r_path)
        let name = pathobject.base
        let length = "/target/".concat(path.relative(workroot, r_path)).lastIndexOf(".")
        let noextName = path.basename(name, ".md")
        let folderLink = "/target/" + path.relative(workroot, r_path)
        let link = "/target/" + path.relative(workroot, r_path).substring(0, path.relative(workroot, r_path).lastIndexOf("."))
        if (stat.isDirectory()) {
            let container: file = {
                text: item,
                children: [],
                link: folderLink
            }
            space.push(container)
            read(r_path, container.children!)
        }
        else {
            space.push({ text: noextName, link })
        }
    })
}
read(workroot, fileTree)

function getChildren(fileTree: file[], tree: file[]): any {
    let map = new Map()
    for (let i = 0; i < fileTree.length; i++) {
        for (let m = 0; m < fileTree[i].children!.length; m++) {
            let concatedNav: string = `/target/${fileTree[i].text}/${fileTree[i].children![m].text}/`
            map.set(concatedNav, [fileTree[i].children![m]])
            tree.push(...fileTree[i].children!)
        }
    }
    return Object.fromEntries(map)
}
let tree: file[] = []
let spacer = getChildren(fileTree, tree)


export { fileTree, spacer, tree }