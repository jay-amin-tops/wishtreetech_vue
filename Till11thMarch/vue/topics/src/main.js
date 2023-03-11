import { createApp } from 'vue'
import App from './App.vue'
import HeaderComponent from './HeaderComponent.vue'
import router from './router'
import './index.css'

// createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')
// const app = createApp({})
// app.component('MyComponent', MyComponent).use(router).mount('#app')

const app = createApp(App)
// const app = createApp({}).use(router).mount('#app')
app.component('HeaderComponent', HeaderComponent).use(router)
app.mount('#app')