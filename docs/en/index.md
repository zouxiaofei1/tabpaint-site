---
layout: home
title: TabPaint - Lightweight Image Editing
titleTemplate: false
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

/* Container: Wrapped in gray background */
.shortcuts-container {
  background-color: var(--vp-c-bg-soft); /* Soft background color */
  border-radius: 16px;
  padding: 30px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
}

/* Grid layout for list */
.shortcut-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* 1 unit for key, 1.5 units for description */
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--vp-c-divider); /* Dashed separator */
}

.shortcut-grid:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Keycap style */
.key-group {
  display: flex;
  justify-content: flex-end; /* Align keys to right, near description */
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}

.key {
  display: inline-block;
  min-width: 28px;
  height: 28px;
  padding: 0 8px;
  line-height: 26px; /* Vertical centering */
  text-align: center;
  font-family: var(--vp-font-family-mono); /* Monospace font */
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg); /* Key background color */
  border: 1px solid var(--vp-c-divider);
  border-bottom-width: 2px; /* Simulate key depth */
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* Description text style */
.desc {
  font-size: 15px;
  color: var(--vp-c-text-2);
  text-align: left; /* Description text to left */
  line-height: 1.5;
}

/* Bottom tips */
.more-tips {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--vp-c-text-3);
}

/* Mobile responsive */
@media (max-width: 640px) {
  .shortcut-grid {
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 8px;
    text-align: center;
  }
  .key-group {
    justify-content: center; /* Center keys on mobile */
  }
  .desc {
    text-align: center;
  }
}

/* CSS for left-right layout */
.section-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 20px;
  max-width: 1152px;
  margin: 0 auto;
}

.section-reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

/* Brand wrapper for Logo and Title */
.brand-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

/* Logo style */
.hero-logo {
  width: 80px;
  height: 80px; 
  object-fit: contain;
}

/* Font size & color changes */
.hero-title {
  font-size: 72px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  
  /* Gradient color (Win11-like blue) */
  background: -webkit-linear-gradient(120deg, #3aa9f5, #ad6ef0);
  
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-slogan {
  font-size: 24px;
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
  font-weight: 500;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 30px;
}

/* Download button */
.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background-color: #646cff;
  color: #ffffff !important;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none !important;
  transition: transform 0.2s, background-color 0.2s;
  box-shadow: 0 4px 14px rgba(100, 108, 255, 0.4);
}

.download-btn:hover {
  background-color: #747bff;
  transform: translateY(-2px);
}

.image-content {
  flex: 1.2;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.1);
}

.image-content img {
  width: 100%;
  height: auto;
  display: block;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .section-container {
    flex-direction: column-reverse;
    text-align: center;
    padding: 40px 20px;
  }
  .brand-wrapper {
    justify-content: center;
  }
  .hero-title {
    font-size: 48px;
  }
}
</style>

<!-- Hero Section -->
<div class="section-container">
  <div class="text-content">
    <h1 class="hero-title">TabPaint,</h1>
    <p class="hero-slogan">Efficiency-First Lightweight Image Editor</p>
    <p>Designed for workflow: Multi-tab management, Tab-key instant switching between view and edit modes.<br>Integrated AI background removal and seamless clipboard support for lightning-fast image processing.</p>
    <br>
    <a href="https://github.com/zouxiaofei1/TabPaint/releases" class="download-btn">Download for Windows</a>
  </div>
  <div class="image-content">
    <img src="/screenshot-main.webp" alt="TabPaint Main Interface" />
  </div>
</div>

<hr style="border-top: 1px solid var(--vp-c-divider); margin: 0 auto; max-width: 1152px;">

<!-- Tab Switching Section -->
<div class="section-container section-reverse">
  <div class="text-content">
    <h2>Switch with One Key</h2>
    <p>Press <kbd>Tab</kbd> to switch instantly between immersive viewing and full-featured drawing modes. It's both an image viewer and a lightweight editing workshop.</p>
  </div>
  <div class="image-content">
    <img src="/gif-tab-switch.gif" alt="Tab Switching Demo" />
  </div>
</div>

<!-- Multi-tab Section -->
<div class="section-container">
  <div class="text-content">
    <h2>Efficient Multi-tab Workflow</h2>
    <p>Edit images like you edit code. Process multiple screenshots in seconds; tab management keeps your work organized.</p>
  </div>
  <div class="image-content">
    <img src="/gif-multi-tab.gif" alt="Multi-tab Demo" />
  </div>
</div>

<!-- AI Section -->
<div class="section-container section-reverse">
  <div class="text-content">
    <h2>AI-Powered Workflow</h2>
    <p>Clipboard Listening -> AI Background Removal -> Drag & Drop into Word/PPT. This sequence boosts your documentation efficiency by 10x.</p>
  </div>
  <div class="image-content">
    <img src="/gif-ai-workflow.gif" alt="AI Workflow Demo" />
  </div>
</div>

<!-- Autosave Section -->
<div class="section-container">
  <div class="text-content">
    <h2>Peace of Mind with Autosave</h2>
    <p>Built-in cache mechanism: changes are preserved even if you close the image. Focus on creation and forget about "Ctrl+S".</p>
  </div>
  <div class="image-content">
    <img src="/gif-autosave.gif" alt="Autosave Demo" />
  </div>
</div>

<div class="shortcuts-section">
  <h2 class="shortcuts-title">Quick Shortcuts</h2>
  
<div class="shortcuts-container">
  
  <!-- Tab -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Tab</span>
    </div>
    <div class="desc">One-key switch between <strong>View / Edit</strong> modes</div>
  </div>

  <!-- New -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">N</span>
    </div>
    <div class="desc">New Canvas / New from Clipboard</div>
  </div>

  <!-- Close -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">W</span>
    </div>
    <div class="desc">Close Current Tab</div>
  </div>

  <!-- Save -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">S</span>
    </div>
    <div class="desc">Save (Overwrite Original)</div>
  </div>

  <!-- Rotate -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span class="key">L</span> <span style="font-size:12px;color:var(--vp-c-text-3)">/</span> <span class="key">R</span>
    </div>
    <div class="desc">Rotate Left / Right</div>
  </div>

  <!-- Hand -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key" style="width:auto">Space</span> <span>+</span> <span>Drag</span>
    </div>
    <div class="desc">Hand Tool (Move Canvas)</div>
  </div>

  <!-- Zoom -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Ctrl</span> <span>+</span> <span>Wheel</span>
    </div>
    <div class="desc">Zoom Canvas</div>
  </div>
  
  <!-- Delete -->
  <div class="shortcut-grid">
    <div class="key-group">
      <span class="key">Del</span>
    </div>
    <div class="desc">Delete File to Recycle Bin (Undoable)</div>
  </div>

  </div>
  
  <p class="more-tips">💡 More shortcuts can be found and customized in <strong>Settings - Shortcuts</strong></p>
</div>

<!-- Footer -->
<div style="text-align: center; padding: 60px 0; background-color: var(--vp-c-bg-alt);">
  <h2 style="margin-bottom: 20px;">Get Started with TabPaint</h2>
  <a href="https://github.com/zouxiaofei1/TabPaint/releases" class="download-btn" style="margin-bottom: 20px;">Download Latest Version</a>
  <p style="margin-top: 20px;">
    <a href="https://github.com/zouxiaofei1/TabPaint" target="_blank" style="color: var(--vp-c-brand);">
      Star us on GitHub!
    </a>
  </p>
</div>
