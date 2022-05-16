import { defineConfig } from "vitepress"
import { description, title } from "../../config/config"
import { fileTree } from "../../utils/autosidebar"
export default defineConfig({
	title,
	description,
	themeConfig: {
		sidebar: fileTree,
	},
})
