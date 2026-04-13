<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang, frontmatter } = useData()

const isHome = computed(() => frontmatter.value.layout === 'home')

const t = computed(() => {
  if (lang.value === 'en-US') {
    return {
      title: 'Get Started with TabPaint Now',
      downloadBtn: 'Free Download for Windows',
      latest: 'Latest',
      portable: 'Portable',
      alternative: 'Alternative Link',
      solutions: 'Installation Solutions',
      follow: 'Follow us on GitHub →'
    }
  }
  return {
    title: '立即开始使用 TabPaint',
    downloadBtn: '免费下载 Windows 版',
    latest: '最新版',
    portable: '绿色版',
    alternative: '备用下载链接',
    solutions: '安装失败解决方案',
    follow: '在 GitHub 上关注我们 →'
  }
})
</script>

<template>
  <div v-if="isHome" class="home-footer-section">
    <h2 class="footer-title">{{ t.title }}</h2>
    <div class="download-group">
      <a href="https://github.com/zouxiaofei1/TabPaint/releases" class="download-btn">
        <img src="/ic_fluent_arrow_download_48_regular.svg" class="download-icon" alt="下载" />
        {{ t.downloadBtn }}
      </a>
      <div class="extra-links">
        <span class="version-tag">{{ t.latest }} v0.9.7</span>
        <a href="https://github.com/zouxiaofei1/TabPaint" target="_blank" class="github-link-icon" title="GitHub">
          <img src="/GitHub_Image.svg" alt="GitHub" />
        </a>
      </div>
    </div>
    <div class="download-sub-links">
      <a href="https://github.com/zouxiaofei1/TabPaint/releases">{{ t.portable }}</a>
      <span class="link-divider">|</span>
      <a href="https://wwauw.lanzouu.com/iyL203muc8ne">{{ t.alternative }}</a>
      <span class="link-divider">|</span>
      <a :href="lang === 'en-US' ? '/en/guide/start/installation' : '/guide/start/installation'">{{ t.solutions }}</a>
    </div>
    <p class="follow-us">
      <a href="https://github.com/zouxiaofei1/TabPaint" target="_blank">
        {{ t.follow }}
      </a>
    </p>
  </div>
</template>

<style scoped>
.home-footer-section {
  text-align: center;
  padding: 100px 24px;
  background-color: var(--vp-c-bg-soft-transparent);
  border-top: 1px solid var(--vp-c-divider);
}

.footer-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 32px;
  letter-spacing: -1px;
}

.follow-us {
  margin-top: 32px;
  font-size: 16px;
}

.follow-us a {
  color: var(--tp-c-brand);
  font-weight: 600;
  text-decoration: none;
}

.follow-us a:hover {
  text-decoration: underline;
}

/* 复用 index.md 中的样式 */
.download-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 8px;
  flex-wrap: wrap;
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

.version-tag {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.download-sub-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  font-size: 14px;
  color: var(--vp-c-text-2);
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

@media (max-width: 900px) {
  .footer-title {
    font-size: 28px;
  }
  
  .home-footer-section {
    padding: 60px 24px;
  }
}
</style>
