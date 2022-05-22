import DefaultTheme from "vitepress/theme"
import RandomEmphasis from "@/RandomEmphasis.vue"
import "./custom.css"
import { autoComponents } from "../../utils/autocomponent"
const object = ["RandomEmphasis", RandomEmphasis]
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components
		autoComponents().forEach((vuecomponent) => {
			console.log(vuecomponent.module.default)
			app.component(vuecomponent.name, vuecomponent.module.default)
		})
	},
}
