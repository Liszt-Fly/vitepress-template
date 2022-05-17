import DefaultTheme from "vitepress/theme"
import ue from "../components/ue.vue"
import "./custom.css"
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components
		app.component("ue", ue)
	},
}
