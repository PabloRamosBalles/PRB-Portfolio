<template>
  <section id="contacto" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Contacto</h2>
      <!-- <div class="contact-content" data-aos="fade-up" data-aos-delay="200"> -->
        <!-- Formulario de contacto -->
        <div class="contact-form-wrapper">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Tu nombre"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="tu-email@ejemplo.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="subject">Asunto</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="Asunto del mensaje"
                required
              >
            </div>

            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Tu mensaje aquí..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-submit">
              {{ submitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>

            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
          </form>
          <p class="contact-alternative">
            O contacta conmigo vía 
            <a href="https://www.linkedin.com/in/pablo-ramos-ballester-6424a0389/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>

        <!-- Enlaces de contacto -->
        <!-- <div class="contact-links">
          <p style="font-size: 1.1rem; margin-bottom: 1.5rem; color: var(--text-primary);">
            O conecta conmigo en:
          </p>
          <div class="links-container">
            <a
              v-for="contact in contacts"
              :key="contact.type"
              :href="contact.link"
              :title="contact.label"
              class="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="contact.icon"></i>
              <span>{{ contact.label }}</span>
            </a>
          </div>
        </div> -->
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      successMessage: '',
      errorMessage: '',
      contacts: [
        {
          type: 'email',
          label: 'Email',
          link: 'mailto:tu-email@ejemplo.com',
          icon: 'fas fa-envelope'
        },
        {
          type: 'github',
          label: 'GitHub',
          link: 'https://github.com/tu-usuario',
          icon: 'fab fa-github'
        },
        {
          type: 'linkedin',
          label: 'LinkedIn',
          link: 'https://linkedin.com/in/tu-perfil',
          icon: 'fab fa-linkedin'
        },
        // {
        //   type: 'twitter',
        //   label: 'Twitter',
        //   link: 'https://twitter.com/tu-usuario',
        //   icon: 'fab fa-twitter'
        // }
      ]
    }
  },
  methods: {
    async submitForm() {
      this.submitting = true
      this.successMessage = ''
      this.errorMessage = ''

      try {
        // Aquí irá la lógica para enviar el formulario
        // Por ahora, simularemos el envío
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Simular éxito
        this.successMessage = '✓ Mensaje enviado correctamente. ¡Gracias por contactarme!'
        this.form = { name: '', email: '', subject: '', message: '' }

        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          this.successMessage = ''
        }, 5000)
      } catch (error) {
        this.errorMessage = '✗ Error al enviar el mensaje. Por favor intenta más tarde.'
      } finally {
        this.submitting = false
      }
    }
  }
}
</script>

<style scoped>
#contacto {
  padding: 80px 0;
  background: var(--bg-color);
  transition: background 0.3s ease;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form-wrapper {
  padding: 40px;
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-primary);
  background: var(--bg-color);
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-secondary);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  background: var(--card-bg);
}

.btn-submit {
  padding: 14px 28px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.btn-submit:active {
  transform: translateY(0);
}

.success-message {
  padding: 12px 16px;
  background: #d4edda;
  color: #155724;
  border-radius: 8px;
  font-size: 0.95rem;
  border: 1px solid #c3e6cb;
  animation: slideIn 0.3s ease;
}

.error-message {
  padding: 12px 16px;
  background: #f8d7da;
  color: #721c24;
  border-radius: 8px;
  font-size: 0.95rem;
  border: 1px solid #f5c6cb;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-alternative {
  text-align: center;
  margin-top: 20px;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.contact-alternative a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-alternative a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.contact-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  text-align: center;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color);
}

.contact-link:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.contact-link i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .contact-form-wrapper,
  .contact-links {
    padding: 25px;
  }

  .links-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .contact-link {
    flex: 1;
    justify-content: center;
    font-size: 0.9rem;
  }
}
</style>
