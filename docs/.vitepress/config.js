import { defineConfig } from "vitepress"
import { description, title } from "../../config/config"
import { fileTree } from "../../utils/autosidebar"

export default defineConfig({
	title,
	description,
	head: [[]],
	markdown: {
		config: (md) => {
			md.use(require("markdown-it-container"), "code", {
				render: function (tokens, idx) {
					let m = tokens[idx].info.trim().match(/^code\s+(.*)$/)

					if (tokens[idx].nesting === 1) {
						// opening tag
						console.log(m[1])
						return `<ue language='${m[1]}'>`
					} else {
						// closing tag
						return "</ue>\n"
					}
				},
			})
		},
	},
	themeConfig: {
		sidebar: fileTree,
	},
})
