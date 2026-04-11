<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark, lang } = useData()

// 计算 giscus 语言
const giscusLang = computed(() => {
  return lang.value === 'zh-CN' ? 'zh-CN' : 'en'
})

// 计算主题
const theme = computed(() => {
  return isDark.value ? 'dark' : 'light'
})
</script>

<template>
  <div class="giscus-container">
    <Giscus
      repo="zouxiaofei1/tabpaint-site"
      repoId="R_kgDOQL71JA"
      category="Announcements"
      categoryId="DIC_kwDOQL71JM4C6mQU"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      :theme="theme"
      :lang="giscusLang"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.giscus-container {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
