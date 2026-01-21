---
layout: home
title: TabPaint - 轻量图片编辑
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

<style>
  .shortcuts-section {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
}

.shortcuts-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  letter-spacing: -0.5px;
}

/* 容器：由灰色背景包裹 */
.shortcuts-container {
  background-color: var(--vp-c-bg-soft); /* 柔和的背景色 */
  border-radius: 16px;
  padding: 30px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
}

/* 列表网格布局 */
.shortcut-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* 左边按键占1份，右边描述占1.5份 */
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--vp-c-divider); /* 虚线分隔 */
}

.shortcut-grid:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* 键帽样式 (Keycap) */
.key-group {
  display: flex;
  justify-content: flex-end; /* 按键靠右对齐，靠近描述文字 */
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}

.key {
  display: inline-block;
  min-width: 28px;
  height: 28px;
  padding: 0 8px;
  line-height: 26px; /* 垂直居中 */
  text-align: center;
  font-family: var(--vp-font-family-mono); /* 等宽字体 */
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg); /* 按键背景色 */
  border: 1px solid var(--vp-c-divider);
  border-bottom-width: 2px; /* 模拟按键立体感 */
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* 描述文字样式 */
.desc {
  font-size: 15px;
  color: var(--vp-c-text-2);
  text-align: left; /* 描述文字靠左 */
  line-height: 1.5;
}

/* 底部提示 */
.more-tips {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--vp-c-text-3);
}

/* 手机端适配 */
@media (max-width: 640px) {
  .shortcut-grid {
    grid-template-columns: 1fr; /* 手机上一列显示 */
    gap: 8px;
    text-align: center;
  }
  .key-group {
    justify-content: center; /* 手机上按键居中 */
  }
  .desc {
    text-align: center;
  }
}


/* 简单的 CSS 来实现左右布局，你可以根据需要调整 */
.section-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 20px; /* 稍微增加一点上下留白 */
  max-width: 1152px;
  margin: 0 auto;
}

.section-reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

/* --- 新增：Logo和标题的组合容器 --- */
.brand-wrapper {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  gap: 20px; /* Logo和文字的间距 */
  margin-bottom: 20px;
}

/* --- 修改点4：Logo 样式 --- */
.hero-logo {
  width: 80px;   /* Logo 大小，可根据实际图片调整 */
  height: 80px; 
  object-fit: contain;
}

/* --- 修改点1 & 2：增大字体 & 修改颜色 --- */
.hero-title {
  font-size: 72px; /* 增大字体：原48px -> 72px */
  font-weight: 800;
  line-height: 1.1;
  margin: 0; /* 去掉默认边距，由父容器控制 */
  
  /* 颜色渐变方案 (类似 Win11 的蓝色系) */
  background: -webkit-linear-gradient(120deg, #3aa9f5, #ad6ef0);
  /* 如果想要纯色，就删掉上面这行，写 color: #3aa9f5; */
  
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-slogan {
  font-size: 24px;
  color: var(--vp-c-text-2); /* 使用 VitePress 默认副文本颜色 */
  margin-bottom: 24px;
  font-weight: 500;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 30px;
}

/* --- 修改点3：修复下载按钮显示 --- */
.download-btn {
  display: inline-flex; /* 换成 flex 更好居中 */
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background-color: #646cff; /* 按钮背景色 */
  color: #ffffff !important; /* 【关键】强制文字白色，避免被主题覆盖 */
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none !important; /* 去掉下划线 */
  transition: transform 0.2s, background-color 0.2s;
  box-shadow: 0 4px 14px rgba(100, 108, 255, 0.4); /* 加点阴影更立体 */
}

.download-btn:hover {
  background-color: #747bff;
  transform: translateY(-2px); /* 悬停轻微上浮 */
}

.image-content {
  flex: 1.2; /* 让图片区域稍微大一点 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2); /* 阴影加重一点 */
  border: 1px solid rgba(255,255,255,0.1); /* 稍微加点边框更有质感 */
}

.image-content img {
  width: 100%;
  height: auto;
  display: block;
}

/* 手机端适配 */
@media (max-width: 768px) {
  .section-container {
    flex-direction: column-reverse;
    text-align: center;
    padding: 40px 20px;
  }
  .brand-wrapper {
    justify-content: center; /* 手机端居中 */
  }
  .hero-title {
    font-size: 48px; /* 手机上字体稍微小点 */
  }
}
</style>

<!-- 第一屏：主屏 -->
<div class="section-container">
  <div class="text-content">
    <h1 class="hero-title">TabPaint,</h1>
    <p class="hero-slogan">更好用的轻量图片编辑器</p>
    <p>专为效率设计：多标签页管理、Tab 键极速切换看图/修图模式。<br>集成 AI 抠图与无缝剪贴板，让截图处理快如闪电。</p>
    <br>
    <a href="https://github.com/zouxiaofei1/TabPaint/releases" class="download-btn">立即下载 Windows 版</a>
  </div>
  <div class="image-content">
    <!-- 这里放你的主窗口截图 -->
    <img src="/screenshot-main.png" alt="Tabpaint 主界面" />
  </div>
</div>

<hr style="border-top: 1px solid var(--vp-c-divider); margin: 0 auto; max-width: 1152px;">

<!-- 第二屏：Tab画图看图切换 -->
<div class="section-container section-reverse">
  <div class="text-content">
    <h2>Tab 键极速切换</h2>
    <p>按下 Tab 键，瞬间在沉浸式看图和全功能绘图模式间切换。既是看图软件，也是你的轻量级修图工坊。</p>
  </div>
  <div class="image-content">
    <img src="/gif-tab-switch.gif" alt="Tab 切换演示" />
  </div>
</div>

<!-- 第三屏：多Tab 10s编辑 -->
<div class="section-container">
  <div class="text-content">
    <h2>多标签页高效工作</h2>
    <p>像编辑代码一样编辑图片。10秒内连续处理多张截图，标签页管理让工作井井有条。</p>
  </div>
  <div class="image-content">
    <img src="/gif-multi-tab.gif" alt="多标签演示" />
  </div>
</div>

<!-- 第四屏：剪切板 -> AI抠图 -> Word -->
<div class="section-container section-reverse">
  <div class="text-content">
    <h2>AI 赋能，打通最后一步</h2>
    <p>监听剪切板 -> AI 智能抠图 -> 直接拖拽进 Word/PPT。这一套连招，让你的文档配图效率提升十倍。</p>
  </div>
  <div class="image-content">
    <img src="/gif-ai-workflow.gif" alt="AI 工作流演示" />
  </div>
</div>

<!-- 第五屏：无需保存的极简画板 -->
<div class="section-container">
  <div class="text-content">
    <h2>无需手动保存的安心</h2>
    <p>拥有缓存目录机制，在一张图片上涂抹后关闭，再次打开改动依然存在。专注于创作，忘记“Ctrl+S”。</p>
  </div>
  <div class="image-content">
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
<div style="text-align: center; padding: 60px 0; background-color: var(--vp-c-bg-alt);">
  <h2 style="margin-bottom: 20px;">立即开始使用 TabPaint</h2>
  <a href="https://github.com/zouxiaofei1/TabPaint/releases" class="download-btn" style="margin-bottom: 20px;">下载最新版本</a>
  <p style="margin-top: 20px;">
    <a href="https://github.com/zouxiaofei1/TabPaint" target="_blank" style="color: var(--vp-c-brand);">
      Star us on GitHub!
    </a>
  </p>

</div>
