import './assets/main.css'
import LuxDesignSystem from 'lux-design-system';
import 'lux-design-system/dist/style.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(LuxDesignSystem);

app.mount('#app')
