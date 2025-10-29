import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- agregar si existe router

createApp(App).use(router).mount('#app')
