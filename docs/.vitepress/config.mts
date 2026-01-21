import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/tabpaint-site/', 
  title: "TabPaint",
  description: "更好用的轻量图片编辑器",
  head: [['link', { rel: 'icon', href: '/logo.png' }]], // 记得放 logo.png 到 public 目录

  themeConfig: {
    // 顶部左侧 Logo
    logo: '/logo.png',
    
    // 顶部右侧导航
    nav: [
      { text: '首页', link: '/' },
      { text: '帮助文档', link: '/guide/start/installation', activeMatch: '/guide/' }, // 点击直接跳到第一篇文档
      { text: '下载', link: 'https://github.com/zouxiaofei1/TabPaint/releases' }
    ],
 sidebar: {
      // 当路径包含 /guide/ 时，显示以下侧边栏
      '/guide/': [
        {
          text: '开始使用',
          collapsed: false, // 是否默认折叠，false为默认展开
          items: [
            { text: '安装与系统需求', link: '/guide/start/installation' },
            { text: '界面概览', link: '/guide/start/interface' },
            { text: '核心概念', link: '/guide/start/concepts' }
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
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zouxiaofei1/tabpaint' }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 底部版权（VitePress 自带 footer 也可以用，但我上面手写了更灵活）
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present TabPaint'
    }
  }
})
