<template>
  <section id="habilidades">
    <div class="container">
      <header class="section-head" data-aos="fade-up">
        <span class="eyebrow"><b>03</b> / Stack</span>
        <div>
          <h2 class="section-title">Mis habilidades</h2>
          <p class="section-lead">Las herramientas con las que construyo, despliego y mantengo aplicaciones de principio a fin.</p>
        </div>
      </header>

      <div class="stack-grid">
        <article
          v-for="(group, index) in groups"
          :key="group.id"
          class="stack-panel"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <header class="panel-head">
            <span class="panel-path">~/{{ group.id }}</span>
            <span class="panel-count">{{ group.skills.length }}</span>
          </header>
          <h3 class="panel-title">{{ group.title }}</h3>
          <p class="panel-text">{{ group.text }}</p>

          <ul class="skill-list">
            <li
              v-for="skill in group.skills"
              :key="skill.name"
              class="skill-item"
              :style="{ '--skill-color': skill.color }"
            >
              <i :class="`fas ${skill.icon}`" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>

    <!-- Cinta con todo el stack -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span v-for="(name, i) in tickerItems" :key="i" class="ticker-item">{{ name }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillsGroup1: [
        { name: 'Python', icon: 'fa-code', color: '#3776ab' },
        { name: 'Django', icon: 'fa-leaf', color: '#ff9500' },
        { name: 'PostgreSQL', icon: 'fa-database', color: '#336791' },
        { name: 'Docker', icon: 'fa-cube', color: '#2496ed' },
        { name: 'Redis', icon: 'fa-server', color: '#dc382d' },
        { name: 'Celery', icon: 'fa-bolt', color: '#37b24d' }
      ],
      skillsGroup2: [
        { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#42b983' },
        { name: 'Redsys', icon: 'fa-credit-card', color: '#FE5B02' },
        { name: 'Nuxt.js', icon: 'fa-layer-group', color: '#00c58e' },
        { name: 'REST APIs', icon: 'fa-code', color: '#ff9500' },
        { name: 'Stripe', icon: 'fa-credit-card', color: '#635bff' },
        { name: 'Git', icon: 'fa-code-branch', color: '#f34f29' }
      ],
      skillsGroup3: [
        { name: 'Google Cloud', icon: 'fa-cloud', color: '#4285f4' },
        { name: 'CI/CD', icon: 'fa-code-branch', color: '#ff9500' },
        { name: 'Google Cloud Run', icon: 'fa-rocket', color: '#4285f4' },
        { name: 'Google Cloud Build', icon: 'fa-hammer', color: '#4285f4' },
        { name: 'Google Cloud Storage', icon: 'fa-floppy-disk', color: '#4285f4' },
        { name: 'i18n', icon: 'fa-globe', color: '#FE5B02' }
      ]
    }
  },
  computed: {
    groups() {
      return [
        { id: 'backend', title: 'Backend', text: 'APIs, modelos de datos y tareas asíncronas.', skills: this.skillsGroup1 },
        { id: 'frontend', title: 'Frontend e integraciones', text: 'Interfaces reactivas, pagos y servicios externos.', skills: this.skillsGroup2 },
        { id: 'cloud', title: 'Cloud y DevOps', text: 'Contenedores, despliegue continuo e infraestructura.', skills: this.skillsGroup3 }
      ]
    },
    // Se duplica la lista para que la cinta sea infinita
    tickerItems() {
      const names = [...this.skillsGroup1, ...this.skillsGroup2, ...this.skillsGroup3].map(s => s.name)
      return [...names, ...names]
    }
  }
}
</script>

<style scoped>
#habilidades {
  overflow: hidden;
}

/* ---------- Bento ---------- */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stack-panel {
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-elev);
  transition: border-color 0.3s ease;
}

.stack-panel:hover {
  border-color: var(--line-strong);
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.panel-path {
  color: var(--accent);
}

.panel-count {
  display: grid;
  place-items: center;
  min-width: 26px;
  height: 26px;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  color: var(--text-muted);
}

.panel-title {
  margin-top: 40px;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--text);
}

.panel-text {
  margin-top: 6px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.skill-list {
  list-style: none;
  margin-top: 28px;
  border-top: 1px solid var(--line);
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  transition: padding 0.3s var(--ease);
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-item:hover {
  padding-left: 6px;
}

.skill-icon {
  width: 18px;
  text-align: center;
  font-size: 0.95rem;
  color: var(--text-faint);
  transition: color 0.3s ease;
}

.skill-item:hover .skill-icon {
  color: var(--skill-color);
}

.skill-name {
  font-size: 0.95rem;
  color: var(--text);
}

/* ---------- Cinta ---------- */
.ticker {
  margin-top: 96px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.ticker-track {
  display: flex;
  width: max-content;
  animation: ticker 60s linear infinite;
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.18);
}

.ticker-item::after {
  content: '';
  width: 10px;
  height: 10px;
  margin: 0 36px;
  border-radius: 50%;
  background: var(--accent);
}

@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .stack-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stack-panel:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .stack-grid {
    grid-template-columns: 1fr;
  }

  .stack-panel {
    padding: 22px;
  }

  .panel-title {
    margin-top: 24px;
  }

  .ticker {
    margin-top: 64px;
  }

  .ticker-track {
    animation-duration: 40s;
  }
}
</style>
