<template>
  <div class="carousel-container" @mouseenter="pauseTimer" @mouseleave="resumeTimer">
    <transition name="fade">
      <img 
        :key="currentImage.src" 
        :src="currentImage.src" 
        :alt="currentImage.alt"
        class="carousel-image"
      />
    </transition>

    <!-- 左右切换箭头 -->
    <button class="nav-btn prev" @click="prevImage" aria-label="Previous image">
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    </button>
    <button class="nav-btn next" @click="nextImage" aria-label="Next image">
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
    </button>

    <!-- 底部指示点 -->
    <div class="dots-container">
      <button 
        v-for="(img, index) in images" 
        :key="index"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="goToImage(index)"
        :aria-label="'Go to image ' + (index + 1)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [
      { src: '/screen_1_1.webp', alt: '主界面 1' },
      { src: '/screen_1_2.webp', alt: '主界面 2' },
      { src: '/screen_1_3.webp', alt: '主界面 3' }
    ]
  },
  interval: {
    type: Number,
    default: 7000
  }
})

const currentIndex = ref(0)
let timer = null
const isPaused = ref(false)

const currentImage = computed(() => props.images[currentIndex.value])

const startTimer = () => {
  stopTimer()
  if (isPaused.value) return
  timer = setInterval(() => {
    nextImage()
  }, props.interval)
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  if (!isPaused.value) resetTimer()
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  if (!isPaused.value) resetTimer()
}

const goToImage = (index) => {
  currentIndex.value = index
  if (!isPaused.value) resetTimer()
}

const resetTimer = () => {
  stopTimer()
  startTimer()
}

const pauseTimer = () => {
  isPaused.value = true
  stopTimer()
}

const resumeTimer = () => {
  isPaused.value = false
  startTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 导航按钮样式 */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.carousel-container:hover .nav-btn {
  opacity: 1;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.6);
  transform: translateY(-50%) scale(1.1);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* 指示点样式 */
.dots-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  width: 24px;
  border-radius: 4px;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}

@media (max-width: 640px) {
  .nav-btn {
    width: 32px;
    height: 32px;
  }
  
  .dot {
    width: 6px;
    height: 6px;
  }
  
  .dot.active {
    width: 16px;
  }
}
</style>
