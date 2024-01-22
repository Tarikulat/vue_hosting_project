import './assets/main.css'
import './assets/css/custom.css'
import './style.css'
import './template.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)  //Elementplus 
app.mount('#app')    //always below in this code line

