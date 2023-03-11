import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

//Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

//font awesome
// import "../node_modules/font-awesome/css/all.css";
import "../node_modules/fontawesome-free/css/all.css";

createApp(App).use(router).mount('#app')
