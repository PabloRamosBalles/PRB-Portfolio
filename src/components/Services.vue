<template>
  <section id="servicios" class="services">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Mi Proceso de Trabajo</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">De la idea a la solución perfecta</p>
      
      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="100">
          <!-- <div class="service-number">01</div> -->
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <h3 class="service-title">Analizar</h3>
          <p class="service-description">Entiendo profundamente tus necesidades, objetivo y desafíos. Realizo un análisis detallado para proponer la mejor solución.</p>
        </div>

        <div class="service-card" data-aos="fade-up" data-aos-delay="150">
          <!-- <div class="service-number">02</div> -->
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M2 12h20"></path>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
          </div>
          <h3 class="service-title">Diseñar</h3>
          <p class="service-description">Creo un plan arquitectónico sólido. Diseño la interfaz, estructura de datos y flujo de la aplicación pensando en escalabilidad.</p>
        </div>

        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <!-- <div class="service-number">03</div> -->
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 class="service-title">Codear</h3>
          <p class="service-description">Desarrollo con las mejores prácticas. Código limpio, mantenible y siguiendo estándares de la industria con Python/Django y Vue.js.</p>
        </div>

        <div class="service-card" data-aos="fade-up" data-aos-delay="250">
          <!-- <div class="service-number">04</div> -->
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 class="service-title">Testear</h3>
          <p class="service-description">Pruebas exhaustivas para garantizar calidad. Validación funcional, rendimiento y seguridad antes de la entrega final.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  mounted() {
    // Agregar la sección a la lista de secciones para el scroll detection
  }
}
</script>

<style scoped>
.services {
  padding: 80px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.services::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(160, 174, 192, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  margin: 20px auto 0;
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 60px;
  font-weight: 400;
  position: relative;
  z-index: 1;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  position: relative;
  z-index: 2;
}

.service-card {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
}

.service-number {
  position: absolute;
  top: -15px;
  left: 20px;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
}

.service-card:hover {
  transform: translateY(-12px);
  border-color: var(--primary-color);
  box-shadow: 0 16px 40px rgba(102, 126, 234, 0.2);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.service-icon svg {
  width: 35px;
  height: 35px;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.service-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: 0.5px;
}

.service-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Dark Theme */
:global(.dark-theme) .services {
  background: linear-gradient(135deg, #141829 0%, #0d1626 100%);
}

:global(.dark-theme) .service-card {
  background: var(--card-bg);
  border-color: rgba(96, 165, 250, 0.2);
}

:global(.dark-theme) .service-card:hover {
  border-color: rgba(96, 165, 250, 0.6);
  background: linear-gradient(135deg, #1a1f3a 0%, #141829 100%);
  box-shadow: 0 16px 40px rgba(96, 165, 250, 0.2);
}

:global(.dark-theme) .service-title {
  color: var(--text-primary);
}

:global(.dark-theme) .service-description {
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .service-card {
    padding: 35px 25px;
  }

  .service-icon {
    width: 60px;
    height: 60px;
  }

  .service-icon svg {
    width: 30px;
    height: 30px;
  }

  .service-number {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .services {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .section-subtitle {
    margin-bottom: 40px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .service-card {
    padding: 30px 20px;
  }

  .service-number {
    font-size: 1.8rem;
    left: 15px;
  }
}

@media (max-width: 480px) {
  .services {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .service-card {
    padding: 25px 20px;
    gap: 15px;
  }

  .service-title {
    font-size: 1.1rem;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .service-icon {
    width: 50px;
    height: 50px;
  }

  .service-icon svg {
    width: 25px;
    height: 25px;
  }

  .service-number {
    font-size: 1.5rem;
    left: 12px;
  }
}
    /* width: 28px; */
    /* height: 28px; */
  /* } */
/* } */
</style>
