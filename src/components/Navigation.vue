<template>
  <nav :class="{ 'dark-mode': isDarkMode, 'menu-open': mobileMenuOpen }">
    <div class="container">
      <div class="nav-wrapper">
        <div class="nav-logo">
          <h1>{{ name }}</h1>
        </div>
        
        <div class="nav-content">
          <ul class="nav-links" :class="{ open: mobileMenuOpen }">
            <li><a href="#inicio" :class="{ active: activeSection === 'inicio' }" @click="mobileMenuOpen = false">Inicio</a></li>
            <li><a href="#servicios" :class="{ active: activeSection === 'servicios' }" @click="mobileMenuOpen = false">Servicios</a></li>
            <li><a href="#experiencia" :class="{ active: activeSection === 'experiencia' }" @click="mobileMenuOpen = false">Experiencia</a></li>
            <li><a href="#habilidades" :class="{ active: activeSection === 'habilidades' }" @click="mobileMenuOpen = false">Habilidades</a></li>
            <li><a href="#about" :class="{ active: activeSection === 'about' }" @click="mobileMenuOpen = false">Sobre mí</a></li>
            <li><a href="#contacto" :class="{ active: activeSection === 'contacto' }" @click="mobileMenuOpen = false">Contacto</a></li>
          </ul>
        </div>

        <button class="hamburger" @click="mobileMenuOpen = !mobileMenuOpen" :class="{ open: mobileMenuOpen }" aria-label="Menú">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      name: '',
      activeSection: 'inicio',
      isDarkMode: false,
      mobileMenuOpen: false
    }
  },
  mounted() {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light'
    this.isDarkMode = savedTheme === 'dark'
    this.applyTheme()

    // Escuchar scroll para activar sección
    window.addEventListener('scroll', this.handleScroll)

    // Escuchar cambios de tema desde otros componentes
    window.addEventListener('themeChange', this.handleThemeChange)
    
    // Cerrar menú móvil al hacer click afuera
    document.addEventListener('click', this.handleDocumentClick)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('themeChange', this.handleThemeChange)
    document.removeEventListener('click', this.handleDocumentClick)
  },
  methods: {
    handleScroll() {
      const sections = ['inicio', 'servicios', 'experiencia', 'habilidades', 'about', 'contacto']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            this.activeSection = section
            break
          }
        }
      }
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      this.applyTheme()
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
      
      // Emitir evento para otros componentes
      window.dispatchEvent(new CustomEvent('themeChange', { 
        detail: { isDarkMode: this.isDarkMode } 
      }))
    },
    applyTheme() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark-theme')
      } else {
        document.documentElement.classList.remove('dark-theme')
      }
    },
    handleThemeChange(event) {
      this.isDarkMode = event.detail.isDarkMode
    },
    handleDocumentClick(event) {
      const nav = this.$el
      if (nav && !nav.contains(event.target)) {
        this.mobileMenuOpen = false
      }
    }
  }
}
</script>

<style scoped>
/* Los estilos principales están en src/style.css */
/* Estilos scoped específicos del componente */

.nav-links {
  display: flex;
}

@media (max-width: 768px) {
  .nav-content {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
  }

  .nav-links {
    width: 100%;
  }
}
</style>
