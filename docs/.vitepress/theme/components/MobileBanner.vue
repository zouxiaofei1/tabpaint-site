<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isVisible = ref(false)
const STORAGE_KEY = 'tp-mobile-banner-closed'

onMounted(() => {
  const isClosed = localStorage.getItem(STORAGE_KEY)
  if (isClosed) return

  const ua = navigator.userAgent
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
  
  if (isMobile) {
    isVisible.value = true
  }
})

const closeBanner = () => {
  isVisible.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}
</script>

<template>
  <div v-if="isVisible" class="mobile-banner">
    <div class="banner-content">
   
      <span class="text">
        {{ lang === 'zh-CN' ? '软件暂不支持该平台' : 'The software does not support this platform yet. Please visit on a PC for the best experience.' }}
      </span>
    </div>
    <button class="close-btn" @click="closeBanner" aria-label="Close">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.mobile-banner {
  position: relative;
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
}

.banner-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.text {
  font-weight: 500;
}

.close-btn {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.close-btn:hover {
  opacity: 1;
}

@media (max-width: 640px) {
  .mobile-banner {
    padding: 10px 12px;
  }
  .icon {
    display: none;
  }
}
</style>
