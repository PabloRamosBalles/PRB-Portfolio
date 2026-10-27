<template>
  <section id="servicios" class="services">
    <div class="container">
      <header class="section-head" data-aos="fade-up">
        <span class="eyebrow"><b>01</b> / Proceso</span>
        <div>
          <h2 class="section-title">Mi proceso de trabajo</h2>
          <p class="section-lead">De la idea a la solución perfecta, en cuatro pasos que repito en cada proyecto.</p>
        </div>
      </header>

      <ol class="steps" ref="carousel" @scroll="onCarouselScroll">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="step"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <div class="step-rail">
            <span class="step-node"></span>
          </div>
          <span class="step-number">0{{ index + 1 }}</span>
          <div class="step-icon"><i class="fas" :class="step.icon"></i></div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-text">{{ step.text }}</p>
        </li>
      </ol>

      <!-- Indicadores del carrusel (solo móvil) -->
      <div class="carousel-dots">
        <button
          v-for="n in steps.length"
          :key="n"
          @click="goToSlide(n - 1)"
          :class="['dot', { active: n - 1 === activeSlide }]"
          :aria-label="`Ir al paso ${n}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      activeSlide: 0,
      steps: [
        {
          title: 'Analizar',
          icon: 'fa-magnifying-glass',
          text: 'Entiendo profundamente tus necesidades, objetivo y desafíos. Realizo un análisis detallado para proponer la mejor solución.'
        },
        {
          title: 'Diseñar',
          icon: 'fa-pen-ruler',
          text: 'Creo un plan arquitectónico sólido. Diseño la interfaz, estructura de datos y flujo de la aplicación pensando en escalabilidad.'
        },
        {
          title: 'Codear',
          icon: 'fa-code',
          text: 'Desarrollo con las mejores prácticas. Código limpio, mantenible y siguiendo estándares de la industria con Python/Django y Vue.js.'
        },
        {
          title: 'Testear',
          icon: 'fa-vial-circle-check',
          text: 'Pruebas exhaustivas para garantizar calidad. Validación funcional, rendimiento y seguridad antes de la entrega final.'
        }
      ]
    }
  },
  methods: {
    onCarouselScroll() {
      const el = this.$refs.carousel
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 0) return
      this.activeSlide = Math.round((el.scrollLeft / maxScroll) * (this.steps.length - 1))
    },
    goToSlide(index) {
      const el = this.$refs.carousel
      const slide = el.children[index]
      el.scrollTo({ left: slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
}

.step {
  position: relative;
  padding: 0 28px 8px 0;
}

/* Raíl horizontal que une los pasos */
.step-rail {
  position: relative;
  height: 1px;
  margin-bottom: 32px;
  background: var(--line-strong);
}

.step-node {
  position: absolute;
  top: 50%;
  left: 0;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  transform: translate(0, -50%);
  background: var(--bg);
  border: 1px solid var(--text-muted);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.step:hover .step-node {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 0 6px var(--accent-soft);
}

.step-number {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-faint);
  margin-bottom: 20px;
}

.step-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid var(--line-strong);
  color: var(--text);
  font-size: 1rem;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.step:hover .step-icon {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}

.step-title {
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 10px;
}

.step-text {
  font-size: 0.93rem;
  line-height: 1.65;
  color: var(--text-muted);
}

/* Indicadores del carrusel (solo visibles en móvil) */
.carousel-dots {
  display: none;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: none;
  padding: 0;
  background: var(--line-strong);
  cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;
}

.dot.active {
  width: 24px;
  background: var(--accent);
}

@media (max-width: 1024px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 56px;
  }
}

/* Carrusel en móvil */
@media (max-width: 768px) {
  .steps {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding: 4px 24px 24px;
    margin: 0 -24px;
  }

  .steps::-webkit-scrollbar {
    display: none;
  }

  .step {
    flex: 0 0 84%;
    scroll-snap-align: center;
    padding: 24px 22px 26px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--bg-elev);
  }

  .step-rail {
    display: none;
  }

  .step-number {
    position: absolute;
    top: 26px;
    right: 22px;
    margin: 0;
  }

  .carousel-dots {
    display: flex;
  }
}
</style>
