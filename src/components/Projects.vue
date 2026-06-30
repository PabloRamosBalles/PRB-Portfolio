<template>
  <section id="proyectos">
    <div class="container">
      <h2>Mis Proyectos</h2>
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="project-card"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span 
              v-for="tech in project.technologies" 
              :key="tech" 
              class="tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Plataforma Inmobiliaria',
          description: 'Sistema completo de gestión inmobiliaria con integraciones a Fotocasa, Idealista y Pisoscom. Procesamiento de pagos con Stripe y Redsys.',
          technologies: ['Django', 'Nuxt.js', 'PostgreSQL', 'Redis', 'Celery']
        },
        {
          id: 2,
          title: 'API REST Escalable',
          description: 'Backend robusto con Django REST Framework, autenticación JWT, cache con Redis y almacenamiento en Google Cloud Storage.',
          technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker']
        },
        {
          id: 3,
          title: 'Sistema de Integraciones',
          description: 'Microservicios para integración con plataformas externas: Holded ERP, Statefox, Brevo y múltiples portales inmobiliarios.',
          technologies: ['Python', 'Celery', 'REST APIs', 'Docker', 'GCloud']
        },
        {
          id: 4,
          title: 'PWA Multiidioma',
          description: 'Progressive Web App con SSR usando Nuxt.js, soporte para ES/EN/FR, integración con GA4, GTM y Microsoft Clarity.',
          technologies: ['Nuxt.js', 'Vue.js', 'i18n', 'PWA', 'GTM']
        }
      ]
    }
  }
}
</script>
