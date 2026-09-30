<template>
  <div id="app">
    <Hero />
    <Services />
    <Experience />
    <Skills />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
#app {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
}
</style>

<script>
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Experience from './components/ExperienceStyle5.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Services,
    About,
    Experience,
    Skills,
    Contact,
    Footer
  }
}
</script>
