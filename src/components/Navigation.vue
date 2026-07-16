<template>
  <nav :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <h1>{{ name }}</h1>
      <div class="nav-content">
        <ul class="nav-links" :class="{ open: mobileMenuOpen }">
          <li><a href="#inicio" :class="{ active: activeSection === 'inicio' }" @click="mobileMenuOpen = false">Inicio</a></li>
          <li><a href="#experiencia" :class="{ active: activeSection === 'experiencia' }" @click="mobileMenuOpen = false">Experiencia</a></li>
          <li><a href="#habilidades" :class="{ active: activeSection === 'habilidades' }" @click="mobileMenuOpen = false">Habilidades</a></li>
          <li><a href="#about" :class="{ active: activeSection === 'about' }" @click="mobileMenuOpen = false">Sobre mí</a></li>
          <li><a href="#contacto" :class="{ active: activeSection === 'contacto' }" @click="mobileMenuOpen = false">Contacto</a></li>
        </ul>
        <!-- <button class="hamburger" @click="mobileMenuOpen = !mobileMenuOpen" :class="{ open: mobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button> -->
        <!-- <button class="theme-toggle" @click="toggleTheme" :title="isDarkMode ? 'Modo claro' : 'Modo oscuro'">
          <span v-if="isDarkMode" class="icon">☀️</span>
          <span v-else class="icon">🌙</span>
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      name: 'Mi Portfolio',
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
      const sections = ['inicio', 'about', 'experiencia', 'habilidades', 'contacto']
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
nav {
  background-color: transparent;
  padding: 1rem 0;
  box-shadow: none;
  position: relative;
  z-index: 100;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

nav.dark-mode {
  background-color: transparent;
  box-shadow: none;
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}

nav h1 {
  color: var(--nav-text);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: var(--nav-text);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease, border-bottom 0.3s ease;
  display: inline-block;
  position: relative;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
}

nav a:hover {
  color: rgba(255, 255, 255, 0.789);
  transform: translateY(-2px);
}

nav a.active {
  color: rgba(255, 255, 255, 0.789);
  border-bottom-color: rgba(255, 255, 255, 0.789);
}

.theme-toggle {
  background: none;
  border: 2px solid var(--nav-text);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.theme-toggle:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  transform: scale(1.1) rotate(20deg);
}

.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 0.4rem;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--nav-text);
  border-radius: 2px;
  transition: all 0.3s ease;
  display: block;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 768px) {
  nav {
    display: none;
  }

  nav .container {
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav h1 {
    order: 1;
    flex: 1;
    text-align: center;
  }

  .nav-content {
    gap: 0.5rem;
    order: 2;
    align-self: flex-start;
    width: 100%;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    top: 0;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-bottom: 1px solid rgba(96, 165, 250, 0.1);
    display: flex;
  }

  .nav-links.open {
    max-height: 500px;
    overflow-y: auto;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links li a {
    display: block;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    white-space: normal;
    word-break: break-word;
  }

  .nav-links li a:hover,
  .nav-links li a.active {
    background-color: rgba(96, 165, 250, 0.1);
  }

  nav ul {
    gap: 0;
  }

  .theme-toggle {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
}
</style>
