import { createApp } from 'vue'
import App from './App.vue'
import { VuelidatePlugin } from '@vuelidate/core'
import './bootstrap'
import router from './router';


createApp(App)
.use(router)
.use(VuelidatePlugin)
.mount('#app')