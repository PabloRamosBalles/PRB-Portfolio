<template>
  <div id="app">
    <Loading :isLoading="isLoading" />
    <!-- <Navigation /> -->
    <Hero />
    <Experience />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
// import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Loading,
    // Navigation,
    Hero,
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
