import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createPinia} from 'pinia';

// createApp(App).use(store).use(router).mount('#app')


createApp(App)
.use(store)
.use(createPinia())
.use(router)
.mount('#app')
