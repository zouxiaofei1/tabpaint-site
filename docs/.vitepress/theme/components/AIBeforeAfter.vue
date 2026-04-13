<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
const containerWidth = ref(0)
const sliderPos = ref(50) // 0 to 100, horizontal position
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
    sliderPos.value = 100 - (easeProgress * 50) // Start from right and move to middle

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
  const x = e.clientX - rect.left
  let pos = (x / rect.width) * 100
  
  if (pos < 0) pos = 0
  if (pos > 100) pos = 100
  
  sliderPos.value = pos
}

const stopDragging = () => {
  isDragging.value = false
}

const updateWidth = () => {
  if (container.value) {
    containerWidth.value = container.value.offsetWidth
  }
}

let observer = null

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
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
  window.removeEventListener('resize', updateWidth)
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
      <!-- Base Image (Raw) -->
      <div class="checkerboard-bg">
         <img src="/RMBG_raw.webp" alt="Raw Image" class="base-img" draggable="false" />
      </div>
      
      <!-- Overlay Image (Transparent) -->
      <div 
        class="overlay-container" 
        :style="{ width: sliderPos + '%' }"
      >
        <div class="checkerboard-bg" :style="{ width: containerWidth + 'px' }">
          <img src="/RMBG_transparent.webp" alt="Transparent Image" class="overlay-img" draggable="false" :style="{ width: containerWidth + 'px' }" />
        </div>
      </div>

      <!-- Handle -->
      <div 
        v-if="showHandle"
        class="handle" 
        :style="{ left: sliderPos + '%' }"
      >
        <div class="handle-line"></div>
        <div class="handle-button">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="13 17 18 12 13 7"></polyline>
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
  cursor: col-resize;
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

.checkerboard-bg {
  background-image: 
    linear-gradient(45deg, #eee 25%, transparent 25%), 
    linear-gradient(-45deg, #eee 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, #eee 75%), 
    linear-gradient(-45deg, transparent 75%, #eee 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  background-color: white;
}

.dark .checkerboard-bg {
  background-image: 
    linear-gradient(45deg, #222 25%, transparent 25%), 
    linear-gradient(-45deg, #222 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, #222 75%), 
    linear-gradient(-45deg, transparent 75%, #222 75%);
  background-color: #1a1a1a;
}

.base-img {
  width: 100%;
  height: auto;
  display: block;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
  border-right: 1px solid rgba(255,255,255,0.2);
}

.overlay-img {
  width: 100%;
  height: auto;
  display: block;
}

/* Ensure overlay image width matches the container width at 100% */
.comparison-wrapper .overlay-img {
  width: 100%;
  height: auto;
}

.handle {
  position: absolute;
  top: 0;
  width: 0;
  height: 100%;
  z-index: 10;
  transform: translateX(-50%);
}

.handle-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background: white;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
}

.handle-button {
  position: absolute;
  top: 50%;
  left: 0;
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
  width: 100%;
  object-fit: cover;
  object-position: left;
}

.overlay-container .checkerboard-bg {
    height: 100%;
}
</style>
