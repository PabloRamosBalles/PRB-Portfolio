<template>
  <section id="inicio" class="hero">
    <Navigation />

    <div class="hero-bg" aria-hidden="true">
      <div class="hero-grid"></div>
      <div class="hero-glow"></div>
    </div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <span class="hero-status">
          <span class="status-dot"></span>
          Full Stack Developer · Python &amp; Vue
        </span>

        <h1 class="hero-title">
          Pablo Ramos
          <span class="hero-title-sub">construyo producto web <em>de punta a punta.</em></span>
        </h1>

        <p class="hero-lead">{{ subtitle }}. Del modelo de datos a la interfaz, pasando por el despliegue en la nube.</p>

        <div class="hero-cta">
          <a href="#experiencia" class="btn btn-primary">
            Ver mi experiencia
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#contacto" class="btn btn-ghost">Contactar</a>
        </div>
      </div>

      <!-- Ventana de código con el rol escribiéndose -->
      <div class="code-window" aria-label="Resumen en forma de código">
        <div class="code-bar">
          <span class="code-dots"><i></i><i></i><i></i></span>
          <span class="code-file">pablo.py</span>
        </div>
<pre class="code"><code><span class="k">class</span> <span class="c">Pablo</span>(<span class="c">FullStackDeveloper</span>):
    backend  = [<span class="s">"Python"</span>, <span class="s">"Django"</span>, <span class="s">"Celery"</span>]
    frontend = [<span class="s">"Vue.js"</span>, <span class="s">"Nuxt"</span>]
    cloud    = [<span class="s">"Cloud Run"</span>, <span class="s">"Docker"</span>]

    <span class="k">def</span> <span class="f">rol_actual</span>(self):
        <span class="k">return</span> <span class="s">"{{ displayedText }}<span class="cursor"></span>"</span></code></pre>
      </div>
    </div>

    <div class="container">
      <dl class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <dt>{{ stat.value }}</dt>
          <dd>{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Hero',
  components: {
    Navigation
  },
  data() {
    return {
      roles: [
        'Full Stack Developer',
        'Dev Team Lead / CTO',
        'Junior Cloud DevOps'
      ],
      subtitle: 'Construyendo soluciones escalables con Python/Django y Vue.js/Nuxt',
      stats: [
        { value: '2', label: 'empresas: AgroTech y PropTech' },
        { value: '11', label: 'logros destacados' },
        { value: 'CTO', label: 'liderando el equipo en Live4Life' }
      ],
      displayedText: '',
      currentRoleIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      typeSpeed: 50,
      deleteSpeed: 30,
      pauseTime: 2000
    }
  },
  mounted() {
    setTimeout(() => {
      this.typeWriter()
    }, 500)
  },
  methods: {
    typeWriter() {
      const currentRole = this.roles[this.currentRoleIndex]

      if (!this.isDeleting) {
        // Typing
        if (this.currentCharIndex < currentRole.length) {
          this.displayedText += currentRole.charAt(this.currentCharIndex)
          this.currentCharIndex++
          setTimeout(() => this.typeWriter(), this.typeSpeed)
        } else {
          // Pause before deleting
          this.isDeleting = true
          setTimeout(() => this.typeWriter(), this.pauseTime)
        }
      } else {
        // Deleting
        if (this.currentCharIndex > 0) {
          this.displayedText = currentRole.substring(0, this.currentCharIndex - 1)
          this.currentCharIndex--
          setTimeout(() => this.typeWriter(), this.deleteSpeed)
        } else {
          // Move to next role
          this.isDeleting = false
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length
          setTimeout(() => this.typeWriter(), 200)
        }
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 0 64px;
  overflow: hidden;
  border-top: none;
}

/* ---------- Fondo: retícula que se desvanece + un único brillo ---------- */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 70% 40%, #000 20%, transparent 75%);
  mask-image: radial-gradient(ellipse 80% 70% at 70% 40%, #000 20%, transparent 75%);
}

.hero-glow {
  position: absolute;
  width: 640px;
  height: 640px;
  top: -200px;
  right: -120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(198, 242, 78, 0.14), transparent 65%);
}

/* ---------- Layout ---------- */
.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: 64px;
}

.hero-status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 10px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  animation: rise 0.8s var(--ease) both;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(198, 242, 78, 0.6);
  animation: pulse 2.4s ease-out infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(198, 242, 78, 0.55); }
  70% { box-shadow: 0 0 0 9px rgba(198, 242, 78, 0); }
  100% { box-shadow: 0 0 0 0 rgba(198, 242, 78, 0); }
}

.hero-title {
  margin-top: 28px;
  font-size: clamp(3rem, 7.5vw, 6rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.045em;
  color: var(--text);
  animation: rise 0.8s var(--ease) 0.08s both;
}

.hero-title-sub {
  display: block;
  margin-top: 14px;
  font-size: clamp(1.5rem, 3.2vw, 2.4rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-muted);
}

.hero-title-sub em {
  font-style: normal;
  color: var(--accent);
}

.hero-lead {
  margin-top: 28px;
  max-width: 520px;
  font-size: 1.05rem;
  color: var(--text-muted);
  animation: rise 0.8s var(--ease) 0.16s both;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
  animation: rise 0.8s var(--ease) 0.24s both;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------- Ventana de código ---------- */
.code-window {
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: rgba(17, 17, 19, 0.85);
  backdrop-filter: blur(8px);
  overflow: hidden;
  box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.8);
  animation: rise 0.9s var(--ease) 0.3s both;
}

.code-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
}

.code-dots {
  display: inline-flex;
  gap: 6px;
}

.code-dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2b2b30;
}

.code-file {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.code {
  margin: 0;
  padding: 22px 22px 26px;
  font-family: var(--font-mono);
  font-size: 0.86rem;
  line-height: 1.85;
  color: #c9c9cf;
  overflow-x: auto;
}

.code .k { color: #ff7ab2; }
.code .c { color: #8fd3ff; }
.code .f { color: #ffd479; }
.code .s { color: var(--accent); }

.cursor {
  display: inline-block;
  width: 8px;
  height: 1.05em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: var(--accent);
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* ---------- Cifras ---------- */
.hero-stats {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 96px;
  border-top: 1px solid var(--line);
}

.stat {
  padding: 24px 24px 0 0;
}

.stat + .stat {
  padding-left: 24px;
  border-left: 1px solid var(--line);
}

.stat dt {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--text);
}

.stat dd {
  margin-top: 8px;
  font-size: 0.88rem;
  color: var(--text-muted);
}

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .code-window {
    max-width: 560px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 72px 0 48px;
    min-height: auto;
  }

  .hero-cta .btn {
    flex: 1 1 auto;
  }

  .code {
    font-size: 0.74rem;
    padding: 18px 16px 20px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    margin-top: 56px;
  }

  .stat,
  .stat + .stat {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 16px 0;
    border-left: none;
    border-bottom: 1px solid var(--line);
  }

  .stat dt {
    min-width: 72px;
    font-size: 1.8rem;
  }

  .stat dd {
    margin-top: 0;
  }
}
</style>
