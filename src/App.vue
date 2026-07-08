<template>
  <div id="app">
    <Loading :isLoading="isLoading" />
    <Hero />
    <Experience />
    <Skills />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
// import Experience from './components/Experience.vue'  // Estilo original
// import ExperienceSelector from './components/ExperienceSelector.vue'  // Selector de estilos - Prueba los 5 diseños!
import Experience from './components/ExperienceStyle5.vue'  // ExperienceStyle5
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Loading,
    Hero,
    About,
    Experience,
    Skills,
    Contact,
    Footer
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    // Simular carga inicial - cambiar a false después de 4 segundos
    setTimeout(() => {
      this.isLoading = false
    }, 4000)
  }
}
</script>
