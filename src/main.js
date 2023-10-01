import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import '@/style.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import Vue3Mq from "vue3-mq";

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia);
app.use(Toast);
app.use(Vue3Mq);
app.mount('#app')
