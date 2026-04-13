<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
const sliderPos = ref(0) // 0 to 100, 0 means full paint, 100 means full view (sliding from bottom)
const isDragging = ref(false)
const showHandle = ref(false)
const hasAnimated = ref(false)

const startAnimation = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true
  
  let start = 0
  const duration = 1500
  const startTime = performance.now()

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    sliderPos.value = easeProgress * 100

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      showHandle.value = true
    }
  }
  requestAnimationFrame(animate)
}

const onMouseDown = (e) => {
  isDragging.value = true
  onMouseMove(e)
}

const onTouchStart = (e) => {
  isDragging.value = true
  onMouseMove(e.touches[0])
}

const onMouseMove = (e) => {
  if (!isDragging.value || !container.value) return
  
  const rect = container.value.getBoundingClientRect()
  const y = e.clientY - rect.top
  let pos = 100 - (y / rect.height) * 100
  
  if (pos < 0) pos = 0
  if (pos > 100) pos = 100
  
  sliderPos.value = pos
}

const stopDragging = () => {
  isDragging.value = false
}

let observer = null

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', stopDragging)
    window.addEventListener('blur', stopDragging)
    window.addEventListener('touchmove', onMouseMove)
    window.addEventListener('touchend', stopDragging)
  
    observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startAnimation()
    }
  }, { threshold: 0.5 })

  if (container.value) {
    observer.observe(container.value)
  }
})

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', stopDragging)
    window.removeEventListener('blur', stopDragging)
    window.removeEventListener('touchmove', onMouseMove)
    window.removeEventListener('touchend', stopDragging)
    if (observer) observer.disconnect()
  })
</script>

<template>
  <div 
    ref="container" 
    class="comparison-wrapper"
    @mousedown="onMouseDown"
    @touchstart="onTouchStart"
  >
    <div class="image-stack">
      <!-- Base Image (Paint Mode) -->
      <img src="/tab_switch_paint.webp" alt="Paint Mode" class="base-img" draggable="false" />
      
      <!-- Overlay Image (View Mode) -->
      <div 
        class="overlay-container" 
        :style="{ height: sliderPos + '%' }"
      >
        <img src="/tab_switch_view.webp" alt="View Mode" class="overlay-img" draggable="false" />
      </div>

      <!-- Handle -->
      <div 
        v-if="showHandle"
        class="handle" 
        :style="{ bottom: sliderPos + '%' }"
      >
        <div class="handle-line"></div>
        <div class="handle-button">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 11 12 6 17 11"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comparison-wrapper {
  width: 100%;
  position: relative;
  cursor: row-resize;
  user-select: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.image-stack {
  position: relative;
  width: 100%;
  line-height: 0;
}

.base-img {
  width: 100%;
  height: auto;
  display: block;
}

.overlay-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
}

.overlay-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  /* We need to ensure the overlay image matches the size of the base image exactly */
  max-width: none;
}

/* To keep the overlay image size correct regardless of container height */
.comparison-wrapper .overlay-img {
  width: 100%;
}

.handle {
  position: absolute;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 10;
  transform: translateY(50%);
}

.handle-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: white;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
}

.handle-button {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  transition: transform 0.2s;
}

.comparison-wrapper:hover .handle-button {
  transform: translate(-50%, -50%) scale(1.1);
}

.overlay-img {
  /* This ensures the image doesn't squash when the height is small */
  height: auto !important;
  object-fit: cover;
  object-position: bottom;
}

/* Fix for overlay image positioning: it should be anchored to the bottom */
.overlay-container img {
  bottom: 0;
  display: block;
}
</style>
