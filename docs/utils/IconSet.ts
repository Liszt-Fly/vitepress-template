import { Icon } from "interfaces/Icon";

let IconSet: Icon[] = [
    {
        name: "游乐场",
        code: "icon-youlechang"
    },
    {
        name: "沙滩",
        code: "icon-a-lvhanglvyoushatan"
    },
    {
        name: "收藏",
        code: "icon-a-shoucangwuxing"
    },
    {
        name: "标签",
        code: "icon-biaoji"
    },
    {
        name: "邮箱",
        code: "icon-a-youxiangdianziyouxiang"
    },
    {
        name: "联系录",
        code: "icon-a-Contactlianxiren"
    },

]

export function getCode(name: string): Icon {
    return IconSet.filter(item => item.name == name)[0]
}