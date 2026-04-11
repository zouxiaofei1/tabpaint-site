---
layout: home
title: TabPaint - 轻量图片编辑
titleTemplate: false
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

<style>
:root {
  --tp-c-brand: var(--vp-c-brand-1);
  --tp-c-brand-hover: var(--vp-c-brand-2);
  --tp-shadow-light: 0 4px 12px rgba(0, 0, 0, 0.05);
  --tp-shadow-medium: 0 12px 24px rgba(0, 0, 0, 0.1);
  --tp-shadow-heavy: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.shortcuts-section {
  max-width: 900px;
  margin: 100px auto;
  padding: 0 24px;
}

.shortcuts-title {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 48px;
  letter-spacing: -1px;
}

/* 容器：由灰色背景包裹 */
.shortcuts-container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--tp-shadow-light);
  transition: box-shadow 0.3s ease;
}

.shortcuts-container:hover {
  box-shadow: var(--tp-shadow-medium);
}

/* 列表网格布局 */
.shortcut-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 20px;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.shortcut-grid:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* 键帽样式 (Keycap) */
.key-group {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.key {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-bottom: 3px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.1s;
  user-select: none;
}

.shortcut-grid:hover .key {
  transform: translateY(1px);
  border-bottom-width: 2px;
}

/* 描述文字样式 */
.desc {
  font-size: 16px;
  color: var(--vp-c-text-1);
  text-align: left;
  line-height: 1.6;
}

.desc strong {
  color: var(--tp-c-brand);
}

/* 底部提示 */
.more-tips {
  text-align: center;
  margin-top: 32px;
  font-size: 15px;
  color: var(--vp-c-text-3);
}

/* 简单的 CSS 来实现左右布局 */
.section-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 100px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.text-content h2 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.text-content p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* Hero 区域特定样式 */
.hero-title {
  font-size: 84px;
  font-weight: 900;
  line-height: 1;
  margin: 0 0 16px 0;
  color: var(--tp-c-brand);
  letter-spacing: -2px;
}

.hero-slogan {
  font-size: 28px;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin-bottom: 40px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  background-color: var(--tp-c-brand);
  color: #ffffff !important;
  border-radius: 16px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px var(--vp-c-brand-soft);
  border: 2px solid transparent;
}

.download-btn:hover {
  background-color: var(--tp-c-brand-hover);
  transform: translateY(-4px);
  box-shadow: 0 12px 28px var(--vp-c-brand-soft);
}

.download-btn:active {
  transform: translateY(-1px);
}

.image-content {
  flex: 1.3;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--tp-shadow-heavy);
  border: 1px solid var(--vp-c-divider);
}

.image-content img {
  width: 100%;
  height: auto;
  display: block;
}

/* 手机端适配 */
@media (max-width: 960px) {
  .section-container {
    flex-direction: column-reverse;
    text-align: center;
    padding: 60px 24px;
    gap: 40px;
  }
  
  .hero-title {
    font-size: 60px;
  }
  
  .text-content h2 {
    font-size: 32px;
  }

  .shortcut-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    text-align: center;
  }
  
  .key-group {
    justify-content: center;
  }
  
  .desc {
    text-align: center;
  }
}
</style>

<!-- 第一屏：主屏 -->
<div class="section-container" style="padding-top: 60px;">
  <div class="text-content">
    <h1 class="hero-title">TabPaint</h1>
    <p class="hero-slogan">更好用的轻量图片编辑器</p>
    <p class="hero-desc">专为效率设计：多标签页管理、Tab 键极速切换看图/修图模式。集成 AI 抠图与无缝剪贴板，让截图处理快如闪电。</p>
    <a href="https://github.com/zouxiaofei1/TabPaint/releases" class="download-btn">立即下载 Windows 版</a>
  </div>
  <div class="image-content">
    <img src="/screenshot-main.webp" alt="Tabpaint 主界面" />
  </div>
</div>

<!-- 第二屏：Tab画图看图切换 -->
<div style="background-color: var(--vp-c-bg-soft);">
  <div class="section-container section-reverse">
    <div class="text-content">
      <h2>Tab 键极速切换</h2>
      <p>按下 Tab 键，瞬间在沉浸式看图和全功能绘图模式间切换。既是看图软件，也是你的轻量级修图工坊。</p>
    </div>
    <div class="image-content">
      <img src="/gif-tab-switch.gif" alt="Tab 切换演示" />
    </div>
  </div>
</div>

<!-- 第三屏：多Tab 10s编辑 -->
<div class="section-container">
  <div class="text-content">
    <h2>多标签页高效工作</h2>
    <p>像编辑代码一样编辑图片。10秒内连续处理多张截图，标签页管理让工作井井有条。</p>
  </div>
  <div class="image-content" style="box-shadow: var(--tp-shadow-medium);">
    <img src="/gif-multi-tab.gif" alt="多标签演示" />
  </div>
</div>

<!-- 第四屏：剪切板 -> AI抠图 -> Word -->
<div style="background-color: var(--vp-c-bg-soft);">
  <div class="section-container section-reverse">
    <div class="text-content">
      <h2>AI 赋能，打通最后一步</h2>
      <p>监听剪切板 -> AI 智能抠图 -> 直接拖拽进 Word/PPT。这一套连招，让你的文档配图效率提升十倍。</p>
    </div>
    <div class="image-content">
      <img src="/gif-ai-workflow.gif" alt="AI 工作流演示" />
    </div>
  </div>
</div>

<!-- 第五屏：无需保存的极简画板 -->
<div class="section-container">
  <div class="text-content">
    <h2>无需手动保存的安心</h2>
    <p>拥有缓存目录机制，在一张图片上涂抹后关闭，再次打开改动依然存在。专注于创作，忘记“Ctrl+S”。</p>
  </div>
  <div class="image-content" style="box-shadow: var(--tp-shadow-medium);">
    <img src="/gif-autosave.gif" alt="自动保存演示" />
  </div>
</div>

<div class="shortcuts-section">
  <h2 class="shortcuts-title">常用快捷键速查</h2>
  
<div class="shortcuts-container">
  
  <!-- Tab -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Tab</span>
    </div>
    <div class="desc">一键切换 <strong>看图 / 画图</strong> 模式</div>
  </div>

  <!-- 新建 -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">N</span>
    </div>
    <div class="desc">新建画布 / 从剪贴板新建</div>
  </div>

  <!-- 关闭 -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">W</span>
    </div>
    <div class="desc">关闭当前标签页</div>
  </div>

  <!-- 保存 -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">S</span>
    </div>
    <div class="desc">保存 (覆盖原图)</div>
  </div>

  <!-- 旋转 -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">L</span> <span style="font-size:12px;color:var(--vp-c-text-3)">/</span> <span class="key">R</span>
    </div>
    <div class="desc">向左 / 向右 旋转图片</div>
  </div>

  <!-- 抓手 -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key" style="width:auto">Space</span> <span>+</span> <span>拖动</span>
    </div>
    <div class="desc">抓手工具 (移动画布)</div>
  </div>

  <!-- 缩放 -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span>滚轮</span>
    </div>
    <div class="desc">缩放画布</div>
  </div>
  
  <!-- 删除 -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Del</span>
    </div>
    <div class="desc">删除文件至回收站 (可撤销)</div>
  </div>

  </div>
  
  <p class="more-tips">💡 更多快捷键可在 <strong>设置 - 快捷键设置</strong> 中查看和自定义</p>
</div>

<!-- 底部 -->
<div style="text-align: center; padding: 100px 24px; background-color: var(--vp-c-bg-soft); border-top: 1px solid var(--vp-c-divider);">
  <h2 style="font-size: 36px; font-weight: 800; margin-bottom: 32px; letter-spacing: -1px;">立即开始使用 TabPaint</h2>
  <a href="https://github.com/zouxiaofei1/TabPaint/releases" class="download-btn">免费下载 Windows 版</a>
  <p style="margin-top: 32px; font-size: 16px;">
    <a href="https://github.com/zouxiaofei1/TabPaint" target="_blank" style="color: var(--tp-c-brand); font-weight: 600; text-decoration: none;">
      在 GitHub 上关注我们 →
    </a>
  </p>
</div>
