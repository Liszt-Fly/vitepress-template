import { basic_config } from '../interfaces/basic_config'
import { home_structure } from '../interfaces/index_type'
import { fileTree } from "../utils/autosidebar"
export let basePath = process.cwd();
//TODO 配置HOMEOBJECT 用于index.md中使用
export let homeObject: home_structure = {
    heroText: "JavaScript学习日志",
    heroImage: "/马卡龙.png",
    heroAlt: "图片显示不出的代替文字",
    tagline: "对网站的描述",
    actionText: "Get Started",
    actionLink: "/base/01 数据库描述",
    features: [
        { title: "Simplicity First", details: "Minimal setup with markdown-centered project structure helps you focus on writing." },
        {
            title: "Vue-Powered",
            details: "Enjoy the dev experience of Vue + webpack, use Vue components in markdown,and develop custom themes with Vue."
        },
        {
            title: "Performant",
            details: "VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
        }
    ],
    home: true,
    footer: "五更钟动笙歌散，十里月明灯火稀。"
}

//TODO 配置ConcifgObject，用于.vitepress/config.ts中
export let basicConfigObject: basic_config = {
    navigation: [
        {
            text: `${fileTree![0].text}`,
            link: fileTree![0].children![0].link as string,
            activeMatch: '^/$|^/target/guide/'
        }
    ]
}
