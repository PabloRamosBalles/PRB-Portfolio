<template>
  <nav class="nav" :class="{ scrolled }">
    <a href="#inicio" class="nav-logo" aria-label="Inicio">
      <span class="logo-mark">PR</span>
      <span class="logo-name">Pablo Ramos</span>
    </a>

    <ul class="nav-links">
      <li v-for="link in links" :key="link.id">
        <a :href="`#${link.id}`" :class="{ active: activeSection === link.id }">{{ link.label }}</a>
      </li>
    </ul>

    <a href="#contacto" class="nav-cta">Hablemos</a>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      activeSection: 'inicio',
      scrolled: false,
      links: [
        { id: 'servicios', label: 'Proceso' },
        { id: 'experiencia', label: 'Experiencia' },
        { id: 'habilidades', label: 'Stack' },
        { id: 'about', label: 'Sobre mí' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 24
      const sections = ['inicio', 'servicios', 'experiencia', 'habilidades', 'about', 'contacto']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            this.activeSection = section
            break
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: min(1100px, calc(100% - 32px));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 8px 8px 8px 14px;
  border: 1px solid transparent;
  border-radius: 999px;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
}

.nav.scrolled {
  background: rgba(17, 17, 19, 0.72);
  border-color: var(--line);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.nav-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text);
}

.logo-mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-ink);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
}

.logo-name {
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 4px;
}

.nav-links a {
  display: block;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.88rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a.active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.nav-cta {
  padding: 9px 18px;
  border-radius: 999px;
  background: var(--text);
  color: var(--bg);
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;
}

.nav-cta:hover {
  background: var(--accent);
}

@media (max-width: 960px) {
  .logo-name {
    display: none;
  }
}

/* Sin barra de navegación en móvil */
@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>
