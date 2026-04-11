import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import LastUpdatedDays from './components/LastUpdatedDays.vue'
import GiscusComment from './components/GiscusComment.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(LastUpdatedDays),
      'doc-after': () => h(GiscusComment)
    })
  }
}
