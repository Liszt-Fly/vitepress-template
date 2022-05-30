import path from "path-browserify"
import { foreach, root } from "./utils/foeach"
import { defineConfig } from 'vite'
console.log("应用配置生效")
foreach(root)

export default defineConfig({
    resolve: {
        alias: { "@": path.resolve(__dirname, "components"), path: "path-browserify" }
    }
})