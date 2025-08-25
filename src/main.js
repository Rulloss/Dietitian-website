import { createApp } from 'vue'
import App from './App.vue'
import Button from './assets/Button.vue'
import './style.css'
import router from './router'

const app = createApp(App)

// Global olarak kaydet
app.component('Button', Button)
// veya
app.component('AppButton', Button) // İsim çakışmasını önlemek için

app.use(router)
app.mount('#app')