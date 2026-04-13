import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/', 
  head: [['link', { rel: 'icon', href: '/TabPaint.ico' }]],
  lastUpdated: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "TabPaint",
      description: "更好用的轻量图片编辑器",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '帮助文档', link: '/guide/start/installation', activeMatch: '/guide/' },
          { text: '下载', link: 'https://github.com/zouxiaofei1/TabPaint/releases' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '开始使用',
              collapsed: false,
              items: [
                { text: '安装与系统需求', link: '/guide/start/installation' },
                { text: '界面概览', link: '/guide/start/interface' },
              ]
            },
            {
              text: '高效工作',
              collapsed: false,
              items: [
                { text: '拖拽与剪切板', link: '/guide/efficiency/drag-drop' },
                { text: '多标签页管理', link: '/guide/efficiency/multi-tabs' },
                { text: 'AI 辅助功能', link: '/guide/efficiency/ai-features' },
                { text: '批量工具', link: '/guide/efficiency/batch-tools' }
              ]
            },
            {
              text: '绘图与编辑',
              collapsed: false,
              items: [
                { text: '画笔与小工具', link: '/guide/editing/basic-painting' },
              ]
            },
            {
              text: '高级设置',
              collapsed: false,
              items: [
                { text: '快捷键列表', link: '/guide/advanced/shortcuts' },
                { text: '个性化设置', link: '/guide/advanced/personalization' }
              ]
            },
            {
              text: '其他',
              items: [
                { text: '常见问题 (FAQ)', link: '/guide/faq' },
                { text: '版本历史', link: '/guide/version_history' },
                { text: '未来计划', link: '/guide/future' }
              ]
            }
          ]
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "TabPaint",
      description: "A lightweight image editor designed for efficiency",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/guide/start/installation', activeMatch: '/en/guide/' },
          { text: 'Download', link: 'https://github.com/zouxiaofei1/TabPaint/releases' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              collapsed: false,
              items: [
                { text: 'Installation', link: '/en/guide/start/installation' },
                { text: 'Interface Overview', link: '/en/guide/start/interface' },
                { text: 'Core Concepts', link: '/en/guide/start/concepts' }
              ]
            },
            {
              text: 'Efficiency',
              collapsed: false,
              items: [
                { text: 'Drag & Drop', link: '/en/guide/efficiency/drag-drop' },
                { text: 'Multi-tab Management', link: '/en/guide/efficiency/multi-tabs' },
                { text: 'AI Features', link: '/en/guide/efficiency/ai-features' },
                { text: 'Batch Tools', link: '/en/guide/efficiency/batch-tools' }
              ]
            },
            {
              text: 'Editing',
              collapsed: false,
              items: [
                { text: 'Painting Tools', link: '/en/guide/editing/basic-painting' },
              ]
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Keyboard Shortcuts', link: '/en/guide/advanced/shortcuts' },
                { text: 'Personalization', link: '/en/guide/advanced/personalization' }
              ]
            },
            {
              text: 'Others',
              items: [
                { text: 'FAQ', link: '/en/guide/faq' },
                { text: 'Version History', link: '/en/guide/version_history' },
                { text: 'Future Plans', link: '/en/guide/future' }
              ]
            }
          ]
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        }
      }
    }
  },

  themeConfig: {
    logo: '/TabPaint.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zouxiaofei1/tabpaint' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present TabPaint'
    }
  }
})
