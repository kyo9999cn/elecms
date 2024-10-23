import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import pinia from './store'
import router from './router'
import App from './App.vue'

import 'element-plus/dist/index.css'
import 'remixicon/fonts/remixicon.css'
import './assets/css/style.scss'

const app = createApp(App)
app.use(ElementPlus).use(router).use(pinia).mount('#app')
