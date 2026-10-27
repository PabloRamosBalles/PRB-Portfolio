<template>
  <section id="contacto">
    <div class="container contact-layout">
      <div class="contact-intro" data-aos="fade-up">
        <span class="eyebrow"><b>05</b> / Contacto</span>
        <h2 class="contact-title">Hablemos<span>.</span></h2>
        <p class="contact-lead">¿Tienes un proyecto en mente o una oferta? Escríbeme y lo vemos juntos.</p>

        <a
          class="contact-link"
          href="https://www.linkedin.com/in/pablo-ramos-ballester-6424a0389/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-link-icon"><i class="fab fa-linkedin-in"></i></span>
          <span class="contact-link-text">
            <small>También en</small>
            LinkedIn
          </span>
          <i class="fas fa-arrow-right contact-link-arrow"></i>
        </a>
      </div>

      <div class="contact-form-wrapper" data-aos="fade-up" data-aos-delay="100">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-row">
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
              placeholder="Cuéntame un poco sobre el proyecto..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-submit" :disabled="submitting">
            {{ submitting ? 'Enviando...' : 'Enviar mensaje' }}
            <i v-if="!submitting" class="fas fa-arrow-right"></i>
          </button>

          <div v-if="successMessage" class="form-status success-message">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="form-status error-message">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

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
      errorMessage: ''
    }
  },
  mounted() {
    // Inicializar EmailJS con tu Public Key
    // Obtén tu Public Key en https://dashboard.emailjs.com/admin
    emailjs.init('aWbX8SKSlBae78XIk') // ← REEMPLAZA ESTO
  },
  methods: {
    async submitForm() {
      this.submitting = true
      this.successMessage = ''
      this.errorMessage = ''

      try {
        // Enviar email usando EmailJS
        await emailjs.send(
          'service_evu8bp5', // ← REEMPLAZA ESTO (Gmail, Outlook, etc.)
          'template_esxeajm', // ← REEMPLAZA ESTO
          {
            to_email: 'pablo.ramos.balles@gmail.com', // ← REEMPLAZA CON TU EMAIL
            from_name: this.form.name,
            from_email: this.form.email,
            subject: this.form.subject,
            message: this.form.message
          }
        )

        // Éxito
        this.successMessage = '✓ Mensaje enviado correctamente. ¡Gracias por contactarme!'
        this.form = { name: '', email: '', subject: '', message: '' }

        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          this.successMessage = ''
        }, 5000)
      } catch (error) {
        console.error('Error al enviar email:', error)
        this.errorMessage = '✗ Error al enviar el mensaje. Por favor intenta más tarde.'
      } finally {
        this.submitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* ---------- Columna izquierda ---------- */
.contact-title {
  margin-top: 20px;
  font-size: clamp(3.2rem, 8vw, 6.5rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.05em;
  color: var(--text);
}

.contact-title span {
  color: var(--accent);
}

.contact-lead {
  margin-top: 24px;
  max-width: 420px;
  font-size: 1.1rem;
  color: var(--text-muted);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 360px;
  margin-top: 48px;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-elev);
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.3s ease;
}

.contact-link:hover {
  border-color: var(--line-strong);
}

.contact-link-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #0a66c2;
  color: #fff;
}

.contact-link-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  font-weight: 500;
  line-height: 1.3;
}

.contact-link-text small {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 400;
  color: var(--text-muted);
}

.contact-link-arrow {
  color: var(--text-muted);
  transition: transform 0.3s var(--ease), color 0.3s ease;
}

.contact-link:hover .contact-link-arrow {
  color: var(--accent);
  transform: translateX(4px);
}

/* ---------- Formulario ---------- */
.contact-form-wrapper {
  padding: 32px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-elev);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group textarea {
  resize: vertical;
  min-height: 140px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-faint);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.btn-submit {
  align-self: flex-start;
  margin-top: 4px;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: wait;
}

.form-status {
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  border: 1px solid currentColor;
}

.success-message {
  color: var(--accent);
  background: var(--accent-soft);
}

.error-message {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.08);
}

/* ---------- Responsive ---------- */
@media (max-width: 960px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .contact-form-wrapper {
    padding: 22px 18px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .btn-submit {
    align-self: stretch;
  }

  .contact-link {
    margin-top: 32px;
  }
}
</style>
