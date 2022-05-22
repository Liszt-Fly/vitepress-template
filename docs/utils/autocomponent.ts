import { foreach } from "./foeach"
import path from "path"
import { vueComponent } from "interfaces/vueComponent"
let vueComponents: vueComponent[] = []
export function autoComponents() {

    const components = import.meta.globEager("../components/*.vue")
    Object.entries(components).forEach(([file, module], index) => {
        //获取对应的文件名称
        let name = path.basename(file, ".vue")
        vueComponents.push({
            name, module
        })

    })
    return vueComponents
}