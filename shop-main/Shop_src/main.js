import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes'



// font-awesome CSS
// import "../node_modules/font-awesome/css/all.css";
// import "../node_modules/fontawesome-free/css/all.css";

// // Bootstrap css, js
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(router).mount('#app')
