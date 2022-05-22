import path from 'path'
import { foreach, root } from "./utils/foeach"
import { defineConfig } from 'vite'
console.log("应用配置生效")
foreach(root)
console.log(path.resolve(__dirname, "components"))
export default defineConfig({
    resolve: {
        alias: { "@": path.resolve(__dirname, "components") }
    }
})