import { color } from "../interfaces/color"
const color_array: color[] = [
    {
        name: "撫手",
        code: "#DC9FB4",
    },
    {
        name: "落紅",
        code: "#E16B8C"
    },
    {
        name: "退紅",
        code: "#F8C3CD"
    },
    {
        name: "一斥染",
        code: "#F4A7B9"
    },
    {
        name: "桑染",
        code: "#64363C"
    },
    {
        name: "桃",
        code: "#F596AA"
    },
    {
        name: "苺",
        code: "#B5495B"
    },
    {
        name: "薄紅",
        code: "#E87A90"
    },
    {
        name: "今樣",
        code: "#D05A6E"
    },
    {
        name: "中紅",
        code: "#DB4D6D"
    },
    {
        name: "桜",
        code: "#FEDFE1"
    },
    {
        name: "梅鼠",
        code: "#9E7A7A"
    },
    {
        name: "韓紅花",
        code: "#D0104C"
    },
    {
        name: "燕脂",
        code: "#9F353A"
    },
    {
        name: "紅",
        code: "#CB1B45"
    },
    {
        name: "鴇",
        code: "#EEA9A9"
    },
    {
        name: "長春",
        code: "#BF6766"
    },
    {
        name: "桜鼠",
        code: "#B19693"
    },
    {
        name: "甚三紅",
        code: "#EB7A77"
    },
    {
        name: "小豆",
        code: "#954A45"
    },
    {
        name: "蘇芳香",
        code: "#A96360"
    },
    {
        name: "赤紅",
        code: "#CB4042"
    },
    {
        name: "真珠",
        code: "#AB3B3A"
    },
    {
        name: "灰桜",
        code: "#D7C4BB"
    },
    {
        name: "栗梅",
        code: "#904840"
    },
    {
        name: "海老茶",
        code: "#734338"
    },
    {
        name: "銀朱",
        code: "#C73E3A"
    },
    {
        name: "黑鳶",
        code: "#554236"
    },
    {
        name: "红鳶",
        code: "#994639"
    },
    {
        name: "曙",
        code: "#F19483"
    },
    {
        name: "红桦",
        code: "#B54434"
    },
    {
        name: "水がき",
        code: "#B9887D"
    },
    {
        name: "珊瑚朱",
        code: "#F17C67"
    },
    {
        name: "紅槍皮",
        code: "#884C3A"
    },
    {
        name: "猩猩緋",
        code: "#E83015"
    },
    {
        name: "鉛丹",
        code: "#D75455"
    },
    {
        name: "芝翫茶",
        code: "#B55D4C"
    },
    {
        name: "枪皮",
        code: "#854836"
    },
    {
        name: "柿渋",
        code: "#A35E47"
    },
    {
        name: "緋",
        code: "#CC543A"
    },
    {
        name: "鳶",
        code: "#724832"
    },
    {
        name: "紅緋",
        code: "#F75C2F"
    },
    {
        name: "栗皮茶",
        code: "#6A4028"
    },
    {
        name: "弁柄",
        code: '#9A5034'
    },
    {
        name: "照柿",
        code: "#C46243"
    },
    {
        name: "江戶茶",
        code: "#AF5F3C"
    },
    {
        name: "洗朱",
        code: "#FB966E"
    },
    {
        name: "百塩茶",
        code: "#724938"
    },
    {
        name: "唐茶",
        code: "#B47157"
    },
    {
        name: "ときがら茶",
        code: "#DB8E71"
    },
    {
        name: "黄丹",
        code: "#F05E1C"
    }
]

export function getColor() {
    return color_array[Math.floor(Math.random() * color_array.length)]
}
