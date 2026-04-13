---
layout: home
title: TabPaint - Lightweight Image Editing
titleTemplate: false
---

<script setup>
import { VPButton } from 'vitepress/theme'
import { ref, onMounted } from 'vue'
import AIBeforeAfter from '../.vitepress/theme/components/AIBeforeAfter.vue'
import ImageCarousel from '../.vitepress/theme/components/ImageCarousel.vue'

const colors = [
  { name: 'Windows Blue', value: '#0078d4', hue: '0deg' },
  { name: 'Purple', value: '#646cff', hue: '31deg' },
  { name: 'Green', value: '#42b883', hue: '-53deg' },
  { name: 'Orange', value: '#ff8c00', hue: '-173deg' },
  { name: 'Red', value: '#e81123', hue: '149deg' },
  { name: 'Pink', value: '#ff69b4', hue: '124deg' }
]


const currentColor = ref('#0078d4')

const setThemeColor = (color, hue) => {
  currentColor.value = color
  const root = document.documentElement
  root.style.setProperty('--vp-c-brand-1', color)
  
  // Calculate variations
  root.style.setProperty('--vp-c-brand-2', lightenDarkenColor(color, 20))
  root.style.setProperty('--vp-c-brand-3', lightenDarkenColor(color, 40))
  root.style.setProperty('--vp-c-brand-soft', `${color}29`)
  root.style.setProperty('--tp-mica-hue', hue)
  
  localStorage.setItem('tabpaint-theme-color', color)
  localStorage.setItem('tabpaint-theme-hue', hue)
}

function lightenDarkenColor(col, amt) {
  let usePound = false
  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }
  let num = parseInt(col, 16)
  let r = (num >> 16) + amt
  if (r > 255) r = 255
  else if (r < 0) r = 0
  let b = ((num >> 8) & 0x00FF) + amt
  if (b > 255) b = 255
  else if (b < 0) b = 0
  let g = (num & 0x0000FF) + amt
  if (g > 255) g = 255
  else if (g < 0) g = 0
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')
}

onMounted(() => {
  const savedColor = localStorage.getItem('tabpaint-theme-color')
  const savedHue = localStorage.getItem('tabpaint-theme-hue')
  if (savedColor && savedHue) {
    setThemeColor(savedColor, savedHue)
  }
})
</script>

<style>
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

/* Container */
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

/* List grid layout */
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

/* Keycap style */
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

/* Description text style */
.desc {
  font-size: 16px;
  color: var(--vp-c-text-1);
  text-align: left;
  line-height: 1.6;
}

.desc strong {
  color: var(--tp-c-brand);
}

/* Bottom tips */
.more-tips {
  text-align: center;
  margin-top: 32px;
  font-size: 15px;
  color: var(--vp-c-text-3);
}

/* Left-right layout */
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

.hero-section {
  flex-direction: column !important;
  text-align: left;
  padding-top: 100px !important;
  padding-bottom: 0 !important;
  max-width: 1200px !important;
  gap: 60px !important;
  align-items: flex-start;
}

.hero-section .text-content {
  max-width: 70%;
  margin: 0;
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.hero-section .image-content {
  width: 100%;
  max-width: 100%;
  margin: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  /* Animation */
  opacity: 0;
  animation: fade-up-blur 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.3s;
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
  font-size: 18px !important ;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* Hero specific styles */
.hero-title {
  font-size: 46px !important;
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 24px 0;
  color: var(--tp-c-brand);
  letter-spacing: -2px;
  /* Animation */
  opacity: 0;
  animation: fade-up-blur 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.03s;
}

.hero-slogan {
  font-size: 28px;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  /* Animation */
  opacity: 0;
  animation: fade-up-blur 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.1s;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin-bottom: 40px;
  /* Animation */
  opacity: 0;
  animation: fade-up-blur 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.15s;
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

/* Download button group */
.download-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  margin-top: 8px;
  flex-wrap: wrap;
  /* Animation */
  opacity: 0;
  animation: fade-up-blur 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.3s;
}

.download-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  filter: brightness(0) invert(1);
}

.extra-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.github-link-icon {
  width: 32px;
  height: 32px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
}

.github-link-icon:hover {
  opacity: 0.8;
}

.github-link-icon img {
  width: 100%;
  height: 100%;
}

.backup-link {
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.backup-link:hover {
  color: var(--tp-c-brand);
}

.version-tag {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.download-sub-links {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  /* Animation */
  opacity: 0;
  animation: fade-up-blur 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.35s;
}

.download-sub-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.download-sub-links a:hover {
  color: var(--tp-c-brand);
}

.link-divider {
  color: var(--vp-c-divider);
}

.image-content {
  flex: 1.3;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.image-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('/mica-background.webp');
  background-size: cover;
  background-position: center;
  filter: blur(5px) brightness(1.0) hue-rotate(var(--tp-mica-hue, 0deg));
  z-index: -1;
  opacity: 0.9;
  transition: filter 0.5s ease;
}

.dark .image-content::after {
  background: rgba(30, 30, 30, 0.4);
}

.image-content img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.color-picker-container {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.color-rect {
  width: 48px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid var(--vp-c-divider);
  transition: all 0.2s ease;
  padding: 0;
}

.color-rect:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px var(--vp-c-brand-soft);
}

.color-rect.active {
  border-color: var(--vp-c-text-1);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Mobile responsive */
@media (max-width: 900px) {
  .hero-section .text-content {
    max-width: 100%;
  }

  .section-container {
    flex-direction: column-reverse;
    text-align: center;
    padding: 60px 24px;
    gap: 40px;
  }

  .hero-section {
    flex-direction: column !important;
    align-items: center;
    text-align: center;
    height: auto !important;
    min-height: auto !important;
    padding-top: 40px !important;
    overflow: visible !important;
  }

  .hero-section .download-group,
  .download-sub-links {
    justify-content: center;
  }

  .hero-section .image-content {
    border-radius: 12px !important;
  }
  
  .hero-title {
    font-size: 40px !important;
    margin-top: 0;
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

<!-- Hero Section -->
<div class="section-container hero-section">
  <div class="text-content">
    <h1 class="hero-title">Better Lightweight Image Editor</h1>
    <p class="hero-slogan"></p>
    <p class="hero-desc">Designed for workflow: Multi-tab management, Tab-key instant switching between view and edit modes. Integrated AI background removal and seamless clipboard support for lightning-fast image processing.</p>
    <div class="download-group">
      <a href="https://github.com/zouxiaofei1/TabPaint/releases/download/v0.9.7.0/TabPaint_Setup_v0.9.7.0_Full.exe" class="download-btn">
        <img src="/ic_fluent_arrow_download_48_regular.svg" class="download-icon" alt="Download" />
        Download Now
      </a>
      <div class="extra-links">
        <a href="https://github.com/zouxiaofei1/TabPaint" target="_blank" class="github-link-icon" title="GitHub">
          <img src="/GitHub_Image.svg" alt="GitHub" />
        </a>
           <span class="version-tag">Latest v0.9.7</span>
      </div>
    </div>
    <div class="download-sub-links">
      <a href="https://github.com/zouxiaofei1/TabPaint/releases/download/v0.9.7.0/TabPaint_v0.9.7.0_Portable.zip">Portable</a>
      <span class="link-divider">|</span>
      <a href="https://wwauw.lanzouu.com/iyL203muc8ne">Alternative Link</a>
      <span class="link-divider">|</span>
      <a href="/en/guide/start/installation">Installation Solutions</a>
    </div>
  </div>
  <div class="image-content">
    <ImageCarousel />
  </div>
</div>

<!-- Tab Switching Section -->
<div style="background-color: var(--vp-c-bg-soft-transparent);">
  <div class="section-container section-reverse">
    <div class="text-content">
      <h2>Switch with One Key</h2>
      <p>Press <kbd>Tab</kbd> to switch instantly between immersive viewing and full-featured drawing modes. It's both an image viewer and a lightweight editing workshop.</p>
    </div>
    <div class="image-content">
      <img src="/gif-tab-switch.gif" alt="Tab Switching Demo" />
    </div>
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
<div style="background-color: var(--vp-c-bg-soft-transparent);">
  <div class="section-container section-reverse">
    <div class="text-content">
      <h2>AI-Powered, The Last Mile</h2>
      <p>Clipboard Listening -> AI Background Removal -> Drag & Drop into Word/PPT. This sequence boosts your documentation efficiency by 10x.</p>
    </div>
    <div class="image-content">
      <AIBeforeAfter />
    </div>
  </div>
</div>

<!-- Autosave Section -->
<div class="section-container">
  <div class="text-content">
    <h2>No Manual Save Required</h2>
    <p>Built-in cache mechanism: changes are preserved even if you close the image. Focus on creation and forget about "Ctrl+S".</p>
  </div>
  <div class="image-content">
    <img src="/gif-autosave.gif" alt="Autosave Demo" />
  </div>
</div>

<!-- Customization Section -->
<div style="background-color: var(--vp-c-bg-soft-transparent);">
  <div class="section-container section-reverse">
    <div class="text-content">
      <h2>Highly Customizable Style</h2>
      <p>Multiple theme colors available, switch as you like. Text color and Mica background tone are synchronized to create your personalized workspace.</p>
      <div class="color-picker-container">
        <button 
          v-for="color in colors" 
          :key="color.value"
          class="color-rect"
          :style="{ backgroundColor: color.value }"
          :class="{ active: currentColor === color.value }"
          @click="setThemeColor(color.value, color.hue)"
          :title="color.name"
        ></button>
      </div>
    </div>
    <div class="image-content">
      <img src="/screenshot-main.webp" alt="Customization Demo" />
    </div>
  </div>
</div>

<div class="shortcuts-section">
  <h2 class="shortcuts-title">Common Shortcuts Quick Reference</h2>
  
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
  
  <p class="more-tips"> More shortcuts can be found and customized in <strong>Settings - Shortcuts</strong></p>
</div>

