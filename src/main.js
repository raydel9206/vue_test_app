import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import '@/style.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia);
app.use(Toast);
app.mount('#app')
