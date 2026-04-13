<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const progress = ref(0)
const isVisible = ref(false)

const updateProgress = () => {
  if (!isVisible.value) return
  
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight
  const winHeight = window.innerHeight
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100
  progress.value = scrollPercent
}

onMounted(() => {
  // 检查是否为首页
  watch(() => frontmatter.value.layout, (layout) => {
    isVisible.value = layout === 'home'
    if (isVisible.value) {
      window.addEventListener('scroll', updateProgress)
      updateProgress()
    } else {
      window.removeEventListener('scroll', updateProgress)
    }
  }, { immediate: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div 
    v-if="isVisible" 
    class="scroll-progress-container"
  >
    <div 
      class="scroll-progress-bar" 
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<style scoped>
.scroll-progress-container {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 100;
  pointer-events: none;
  background-color: transparent;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(to right, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transition: width 0.1s ease-out;
  box-shadow: 0 1px 4px var(--vp-c-brand-soft);
}

@media (max-width: 960px) {
  .scroll-progress-container {
    /* 适配移动端导航栏高度可能变化的情况，或者如果移动端不需要也可以隐藏 */
  }
}
</style>
