import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TabPaint",
  description: "更好用的轻量图片编辑器",
  head: [['link', { rel: 'icon', href: '/logo.png' }]], // 记得放 logo.png 到 public 目录

  themeConfig: {
    // 顶部左侧 Logo
    logo: '/logo.png',
    
    // 顶部右侧导航
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/#download' }, // 可以加个锚点
      { text: '帮助文档', link: '/guide/' } // 如果以后要写详细文档
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zouxiaofei1/tabpaint' }
    ],
    
    // 底部版权（VitePress 自带 footer 也可以用，但我上面手写了更灵活）
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present TabPaint'
    }
  }
})
