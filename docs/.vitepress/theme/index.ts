import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import LastUpdatedDays from './components/LastUpdatedDays.vue'
import GiscusComment from './components/GiscusComment.vue'
import ThemeColorPicker from './components/ThemeColorPicker.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(ThemeColorPicker),
      'doc-footer-before': () => h(LastUpdatedDays),
      'doc-after': () => h(GiscusComment)
    })
  }
}
