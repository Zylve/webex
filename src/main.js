import './assets/css/animation.css'
import './assets/css/font.css'

import App from './App.vue'
import { createApp } from 'vue'
import router from './router'

const app = createApp(App);
app.use(router).mount('#app');