<template>
  <section id="contacto" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Contacto</h2>
      <div style="text-align: center; max-width: 600px; margin: 0 auto;" data-aos="fade-up" data-aos-delay="200">
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">
          ¿Interesado en trabajar juntos? ¡Me encantaría saber de ti!
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;" data-aos="fade-up" data-aos-delay="400">
          <a 
            v-for="contact in contacts" 
            :key="contact.type"
            :href="contact.link" 
            class="btn"
            style="background-color: var(--primary-color); color: white; padding: 0.8rem 1.5rem; border-radius: 5px; text-decoration: none;"
          >
            {{ contact.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contacts: [
        { type: 'email', label: '📧 Email', link: 'mailto:tu-email@ejemplo.com' },
        { type: 'github', label: '💻 GitHub', link: 'https://github.com/tu-usuario' },
        { type: 'linkedin', label: '💼 LinkedIn', link: 'https://linkedin.com/in/tu-perfil' }
      ]
    }
  }
}
</script>
