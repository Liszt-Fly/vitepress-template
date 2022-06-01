//根据fileTree的数量来进行引入
import { fileTree } from "./autosidebar";
import { DefaultTheme } from "vitepress/types/default-theme"
import path from "path-browserify";
export function autonavbar(): DefaultTheme.NavItem[] {
    //初始化navbar
    let navbar: DefaultTheme.NavItem[] = []
    fileTree.forEach((item, index) => {
        if (item.children) {
            navbar.push({
                text: item.text,
                items: []
            });
            //将children配置进去
            for (let i = 0; i < item.children.length; i++) {
                (navbar[index] as (DefaultTheme.NavItemWithChildren)).items[i] = {
                    text: item.children[i].text,
                    link: `${item.children[i].children![0].link}`,
                    activeMatch: `/target/${navbar[index].text}/${item.text}`
                }
            }
        }

    })
    console.log("-------------------------------------------------------------")

    return navbar
}
