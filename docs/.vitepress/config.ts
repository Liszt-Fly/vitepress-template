import { defineConfig } from 'vitepress'
import { spacer, tree, fileTree } from '../utils/autosidebar'
import { homeObject } from '../config/config'
import { autonavbar } from '../utils/autonavbar'

export default defineConfig({
    lang: 'en-US',
    title: homeObject.heroText,
    description: homeObject.tagline,
    lastUpdated: true,
    themeConfig: {
        repo: 'vuejs/vitepress',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',

        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },
        nav: autonavbar(),
        sidebar: spacer as unknown as any


    }
})

function getGuideSidebar() {
    return [
        {
            text: 'Introduction',
            children: [
                { text: 'What is VitePress?', link: '/' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Configuration', link: '/guide/configuration' },
                { text: 'Asset Handling', link: '/guide/assets' },
                { text: 'Markdown Extensions', link: '/guide/markdown' },
                { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
                { text: 'Deploying', link: '/guide/deploy' }
            ]
        },
        {
            text: 'Advanced',
            children: [
                { text: 'Frontmatter', link: '/guide/frontmatter' },
                { text: 'Theming', link: '/guide/theming' },
                { text: 'API Reference', link: '/guide/api' },
                {
                    text: 'Differences from Vuepress',
                    link: '/guide/differences-from-vuepress'
                }
            ]
        }
    ]
}

function getConfigSidebar() {
    return [
        {
            text: 'App Config',
            children: [{ text: 'Basics', link: '/config/basics' }]
        },
        {
            text: 'Theme Config',
            children: [
                { text: 'Homepage', link: '/config/homepage' },
                { text: 'Algolia Search', link: '/config/algolia-search' },
                { text: 'Carbon Ads', link: '/config/carbon-ads' }
            ]
        }
    ]
}
