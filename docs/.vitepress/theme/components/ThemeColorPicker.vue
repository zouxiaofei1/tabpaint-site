<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const colors = [
  { name: 'Windows Blue', value: '#0078d4', hue: '0deg' },
  { name: 'Purple', value: '#646cff', hue: '250deg' },
  { name: 'Green', value: '#42b883', hue: '150deg' },
  { name: 'Orange', value: '#ff8c00', hue: '30deg' },
  { name: 'Red', value: '#e81123', hue: '350deg' },
  { name: 'Pink', value: '#ff69b4', hue: '320deg' }
]

const currentColor = ref('#0078d4')
const isOpen = ref(false)
const containerRef = ref(null)

const togglePicker = () => {
  isOpen.value = !isOpen.value
}

const setThemeColor = (color, hue) => {
  currentColor.value = color
  const root = document.documentElement
  root.style.setProperty('--vp-c-brand-1', color)
  
  // Calculate variations (simplified)
  root.style.setProperty('--vp-c-brand-2', lightenDarkenColor(color, 20))
  root.style.setProperty('--vp-c-brand-3', lightenDarkenColor(color, 40))
  root.style.setProperty('--vp-c-brand-soft', `${color}29`) // 16% opacity
  root.style.setProperty('--tp-mica-hue', hue)
  
  localStorage.setItem('tabpaint-theme-color', color)
  localStorage.setItem('tabpaint-theme-hue', hue)
  isOpen.value = false
}

// Simple color manipulator
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

const handleClickOutside = (event) => {
  if (containerRef.value && !containerRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  const savedColor = localStorage.getItem('tabpaint-theme-color')
  const savedHue = localStorage.getItem('tabpaint-theme-hue')
  if (savedColor && savedHue) {
    setThemeColor(savedColor, savedHue)
  }
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="theme-color-picker" ref="containerRef">
    <button 
      class="picker-trigger"
      :style="{ backgroundColor: currentColor }"
      title="切换主题颜色"
      @click.stop="togglePicker"
    ></button>

    <div v-if="isOpen" class="picker-flyout">
      <div class="picker-container">
        <button 
          v-for="color in colors" 
          :key="color.value"
          class="color-dot"
          :style="{ backgroundColor: color.value }"
          :title="color.name"
          :class="{ active: currentColor === color.value }"
          @click="setThemeColor(color.value, color.hue)"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-color-picker {
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
}

.picker-trigger {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid var(--vp-c-divider);
  transition: transform 0.2s, border-color 0.2s;
  padding: 0;
}

.picker-trigger:hover {
  transform: scale(1.1);
  border-color: var(--vp-c-brand-1);
}

.picker-flyout {
  position: absolute;
  top: 100%;
  right: 12px;
  margin-top: 8px;
  z-index: 100;
  background-color: var(--vp-c-bg-elv);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-3);
}

.picker-container {
  display: flex;
  gap: 8px;
}

.color-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.2s, border-color 0.2s;
  padding: 0;
}

.color-dot:hover {
  transform: scale(1.2);
}

.color-dot.active {
  border-color: var(--vp-c-text-1);
  transform: scale(1.1);
}

@media (max-width: 1000px) {
  .theme-color-picker {
    display: none;
  }
}
</style>
