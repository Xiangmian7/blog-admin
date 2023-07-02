import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'normalize.css'
// import '@/assets/css'
import 'element-plus/theme-chalk/el-message.css'

import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'

import Prism from 'prismjs'
VueMarkdownEditor.use(vuepressTheme, {
  Prism
})
VueMarkdownEditor.use(createLineNumbertPlugin())
VueMarkdownEditor.use(createEmojiPlugin())

const app = createApp(App)

app.use(VueMarkdownEditor)
app.use(createPinia())
app.use(router)

router.push('/main')

app.mount('#app')
