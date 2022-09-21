import './bootstrap';
import { createApp } from 'vue';
import router from "./router";

import Index from  './components/Index.vue'
const app = createApp({Index});

app.component('Index', Index).use(router);


app.mount('#app');
