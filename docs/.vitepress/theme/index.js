import DefaultTheme from "vitepress/theme"
import "jsmind/style/jsmind.css"
import "./custom.css"
import "//at.alicdn.com/t/font_3421024_wfno2snskra.js"
import { autoComponents } from "../../utils/autocomponent"

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components

		autoComponents().forEach((vuecomponent) => {
		
			app.component(vuecomponent.name, vuecomponent.module.default)
		})
	},
}
