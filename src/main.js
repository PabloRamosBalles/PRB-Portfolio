import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')

// Inicializar AOS para animaciones de scroll
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
})
