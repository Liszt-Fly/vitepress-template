//根据fileTree的数量来进行引入

import { fileTree } from "./autosidebar";
import { DefaultTheme } from "../../types/default-theme"
export function autonavbar(): DefaultTheme.NavItem[] {
    //初始化navbar
    let navbar: DefaultTheme.NavItem[] = []

    fileTree.forEach((item, index) => {
        if (item.children) {
            navbar.push({
                text: fileTree[index].text,
                link: fileTree[index].children[0].link as string,
                activeMatch: `^/target/${fileTree[index].text}/`
            })

        }
    })
    console.log("-------------------------------------------------------------")
    console.log(navbar)
    return navbar
}
