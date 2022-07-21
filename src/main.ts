import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import './assets/styles/tailwind.scss'
const app = createApp(App)
app.use(router).mount('#app')
