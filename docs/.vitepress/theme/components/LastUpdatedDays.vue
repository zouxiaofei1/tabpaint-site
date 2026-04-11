<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page, lang } = useData()

const daysAgo = computed(() => {
  if (!page.value.lastUpdated) return null
  
  const lastUpdated = page.value.lastUpdated
  const now = Date.now()
  const diff = now - lastUpdated
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  return days >= 0 ? days : 0
})

const text = computed(() => {
  const isEn = lang.value === 'en-US'
  const days = daysAgo.value
  
  if (days === null) return ''
  
  if (isEn) {
    if (days === 0) return 'This page was updated today'
    return `This page was updated ${days} day${days > 1 ? 's' : ''} ago`
  } else {
    if (days === 0) return '本页面今天已更新'
    return `本页面更新于 ${days} 天前`
  }
})
</script>

<template>
  <div v-if="daysAgo !== null" class="last-updated-days">
    {{ text }}
  </div>
</template>

<style scoped>
.last-updated-days {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
