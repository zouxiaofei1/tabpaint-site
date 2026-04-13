import { h, nextTick, provide, defineComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import './custom.css'
import LastUpdatedDays from './components/LastUpdatedDays.vue'
import GiscusComment from './components/GiscusComment.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import MobileBanner from './components/MobileBanner.vue'

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      const { isDark } = useData()

      provide('toggle-appearance', async (event: MouseEvent) => {
        const isAppearanceTransition =
          // @ts-ignore
          document.startViewTransition &&
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (!isAppearanceTransition) {
          isDark.value = !isDark.value
          return
        }

        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        )

        // @ts-ignore
        const transition = document.startViewTransition(async () => {
          isDark.value = !isDark.value
          await nextTick()
        })

        transition.ready.then(() => {
          const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
          document.documentElement.animate(
            {
              clipPath: isDark.value ? [...clipPath].reverse() : clipPath
            },
            {
              duration: 100,
              easing: 'ease-in',
              pseudoElement: isDark.value
                ? '::view-transition-old(root)'
                : '::view-transition-new(root)'
          }
          )
        })
      })

      return () => h(DefaultTheme.Layout, null, {
        'layout-top': () => [h(MobileBanner), h(ScrollProgress)],
        'doc-footer-before': () => h(LastUpdatedDays),
        'doc-after': () => h(GiscusComment)
      })
    }
  })
}
