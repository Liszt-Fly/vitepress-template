<template>
	<div class="code-block" ref="codeBlock">
		<div class="appendix">
			<div class="pink"></div>
			<div class="yellow"></div>
			<div class="green"></div>
		</div>
		<div>
			<pre><code :class="'language-' + language">
<slot/>
</code>
</pre>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue"
import Prism from 'prismjs'
defineProps({
	language: String
})
onMounted(() => {
	console.log("hello,world")
	console.log(Prism.highlightAll())
})
</script>

<style >
.code-block {
	position: relative;
	color: #ddd;
	background-color: #131313;
	border-radius: 5px;
	margin-top: 20px;
	font-family: "Fira Code"
}

.appendix {
	display: flex;
	padding-top: 5px;
	padding-left: 5px;
	margin-bottom: 10px;

}

.appendix div {

	width: 0.7rem;
	height: 0.7rem;
	border-radius: 50%;
	margin-right: 10px;

}

.pink {
	background-color: #ec5e50;
}

.yellow {
	background-color: #f4b63d;
}

.green {
	background-color: #4ebd45;
}

.el-divider {
	margin-bottom: 0 !important;
}

.language {
	padding-left: 20px;
}

code[class*=language-],
pre[class*=language-] {
	color: #fff;
	font-family: "Fira Code";
	font-size: 1em;
	text-align: left;

	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none
}

:not(pre)>code[class*=language-],
pre[class*=language-] {
	background: transparent;
}

pre[class*=language-] {
	border-radius: .5em;
	margin: .5em 0;
	overflow: auto;
	padding: 1em
}

pre[class*=language-]::-moz-selection {
	background: #27292a
}

pre[class*=language-]::selection {
	background: #27292a
}

code[class*=language-] ::-moz-selection,
code[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection {
	text-shadow: none;
	background: hsla(0, 0%, 93%, .15)
}

code[class*=language-] ::selection,
code[class*=language-]::selection,
pre[class*=language-] ::selection,
pre[class*=language-]::selection {
	text-shadow: none;
	background: hsla(0, 0%, 93%, .15)
}

:not(pre)>code[class*=language-] {
	border-radius: .3em;
	border: .13em solid #545454;
	box-shadow: 1px 1px .3em -.1em #000 inset;
	padding: .15em .2em .05em;
	white-space: normal
}

.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
	color: #777
}

.token.punctuation {
	opacity: .7
}

.token.namespace {
	opacity: .7
}

.token.boolean,
.token.deleted,
.token.number,
.token.tag {
	color: #ce6849
}

.token.builtin,
.token.constant,
.token.keyword,
.token.property,
.token.selector,
.token.symbol {
	color: #f9ed99
}

.language-css .token.string,
.style .token.string,
.token.attr-name,
.token.attr-value,
.token.char,
.token.entity,
.token.inserted,
.token.operator,
.token.string,
.token.url,
.token.variable {
	color: #909e6a
}

.token.atrule {
	color: #7385a5
}

.token.important,
.token.regex {
	color: #e8c062
}

.token.bold,
.token.important {
	font-weight: 700
}

.token.italic {
	font-style: italic
}

.token.entity {
	cursor: help
}

.language-markup .token.attr-name,
.language-markup .token.punctuation,
.language-markup .token.tag {
	color: #ac885c
}

.token {
	position: relative;
	z-index: 1
}

.line-highlight.line-highlight {
	background: hsla(0, 0%, 33%, .25);
	background: linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0));
	border-bottom: 1px dashed #545454;
	border-top: 1px dashed #545454;
	margin-top: .75em;
	z-index: 0
}

.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
	background-color: #8693a6;
	color: #f4f1ef
}
</style>