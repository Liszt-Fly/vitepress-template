# ⚡️ Mike's Vitepress template

## ✈️ introduction

该项目基于 vitepress 进行二次开发，内置了一系列的组件，开箱即用。同时将平常使用 vitepress 进行的一些配置，进行了默认配置，并且都尽量集中在了一个文件中，方便进行配置修改。

## 💥 Fetures

- autosidebar 根据文件夹的内容，自动配置侧边栏
- autonavbar 根据文件夹的架构，自动配置导航栏
- autocomponents 如果需要在内置组件库的基础上添加更多的组件，只需要在 components 文件夹中新建对应的 vue 文件，就会自动注册到全局组件中
- components 丰富的内置组件库，已经默认全局注册，开箱即用
  - RandomEmphais 富有诗意的随机背景颜色强调 Block,非常方便的用于去强调重点
  - RandomStroke 提供随机颜色的笔触，作为强调，仅仅加粗和随机改变对应文字的颜色，不会形成具有底色的 block
  - Prompt 这是一个块级的组件，提供了一部分 ICON 进行语义化表示，在需要单独强调某些部分并且希望它以 Block 的样式呈现的时候可以使用
  - MindMap 这是一个思维导图的显示组件，并且支持多种多样的主题风格
  - WordPronun 根据输入的单词内容，自动匹配出对应的单词发音和单词音标
