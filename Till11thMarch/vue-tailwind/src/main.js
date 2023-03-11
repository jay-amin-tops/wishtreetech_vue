import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import HeaderComponent from './HeaderComponent.vue'

const app = createApp(App)
// const app = createApp({}).use(router).mount('#app')
app.component('HeaderComponent', HeaderComponent).use(router)
app.mount('#app')