import DefaultTheme from "vitepress/theme"
import RandomEmphasis from "@/RandomEmphasis.vue"
import "./custom.css"
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components
		app.component("RandomEmphasis", RandomEmphasis)
	},
}
