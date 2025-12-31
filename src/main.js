import './style.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL;

const app = createApp(App)
app.use(router)
app.mount('#app')
