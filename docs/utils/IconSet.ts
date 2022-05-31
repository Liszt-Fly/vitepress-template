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
    {
        name: "樱桃",
        code: "icon-yingtao-01"
    },
    {
        name: "草稿",
        code: "icon-a-draftcaogaowendang"
    },
    {
        name: "垃圾邮件",
        code: "icon-a-Spamlajiyoujianhuo"
    },
    {
        name: "回复",
        code: "icon-a-replyhuifu"
    },
    {
        name: "垃圾箱",
        code: "icon-a-trashlajixiangdianziyoujian"
    },
    {
        name: "邮亭",
        code: "icon-a-postyouting"
    },
    {
        name: "附件",
        code: "icon-a-attachmentdianziyoujianfujian"
    },
    {
        name: "闭嘴",
        code: "icon-a-bizuigangabiaoqingxiaolian"
    },
    {
        name: "可爱",
        code: "icon-a-keaiyouqudeganxingqubiaoqingxiaolian"
    },
    {
        name: "流口水",
        code: "icon-a-aixihuanliukoushuisebiaoqingxiaolian"
    },
    {
        name: "奋斗",
        code: "icon-a-nulifendoujiayoubiaoqingxiaolian"
    },
    {
        name: "笑脸",
        code: "icon-a-xiaolianbiaoqing"
    },
    {
        name: "好心情",
        code: "icon-a-gaoxinghaoxinqingbiaoqingxihuanbiaoqingxiaolian"
    },
    {
        name: "装酷",
        code: "icon-a-kuzhuangkushuaiqishuashuaibiaoqingxiaolian"
    },
    {
        name: "装可爱",
        code: "icon-zhuangkeai"
    }

]

export function getCode(name: string): Icon {
    return IconSet.filter(item => item.name == name)[0]
}