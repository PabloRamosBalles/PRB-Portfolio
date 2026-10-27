<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <p class="footer-note">Full Stack Developer · Python, Django, Vue.js y Google Cloud</p>
        <a href="#inicio" class="footer-up">
          Volver arriba <i class="fas fa-arrow-up"></i>
        </a>
      </div>

      <p class="footer-wordmark" aria-hidden="true">Pablo Ramos</p>

      <div class="footer-bottom">
        <span>{{ message }}</span>
        <span>Hecho con Vue.js</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      message: `© ${new Date().getFullYear()} Pablo Ramos Ballester`
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 64px 0 28px;
  overflow: hidden;
}

.footer-top,
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-note {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.footer-up {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text);
  text-decoration: none;
}

.footer-up i {
  font-size: 0.8em;
  transition: transform 0.3s var(--ease);
}

.footer-up:hover i {
  transform: translateY(-3px);
}

/* Nombre a todo el ancho */
.footer-wordmark {
  margin: 48px 0 24px;
  font-size: clamp(3.5rem, 15vw, 12.5rem);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.06em;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(180deg, var(--text) 0%, rgba(237, 237, 237, 0.08) 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-bottom {
  padding-top: 20px;
  border-top: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-faint);
}
</style>
