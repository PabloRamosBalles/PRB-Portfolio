<template>
  <section id="experiencia">
    <div class="container">
      <header class="section-head" data-aos="fade-up">
        <span class="eyebrow"><b>02</b> / Experiencia</span>
        <div>
          <h2 class="section-title">Algunos de mis logros</h2>
          <p class="section-lead">Proyectos reales en empresa. Abre una y pulsa en cualquier logro para ver el detalle.</p>
        </div>
      </header>

      <div class="companies">
        <article
          v-for="(company, companyIndex) in companies"
          :key="company.id"
          class="company"
          :class="{ expanded: expandedCompanyId === company.id }"
          :style="{ '--brand': company.brandColor }"
          data-aos="fade-up"
        >
          <button
            class="company-row"
            :aria-expanded="expandedCompanyId === company.id"
            @click="expandedCompanyId = expandedCompanyId === company.id ? null : company.id"
          >
            <span class="company-index">{{ pad(companyIndex + 1) }}</span>

            <span class="company-logo" :class="{ 'logo-light': company.id === 'live4life' }">
              <img :src="company.logo" :alt="company.name" />
            </span>

            <span class="company-info">
              <span class="company-header">
                <span class="company-name">{{ company.name }}</span>
                <span class="company-category">{{ company.category }}</span>
              </span>
              <span class="company-position">{{ company.position }}</span>
            </span>

            <span class="company-count">{{ company.milestones.length }} logros</span>

            <span class="company-toggle" aria-hidden="true">
              <i class="fas fa-plus"></i>
            </span>
          </button>

          <transition name="expand">
            <div v-if="expandedCompanyId === company.id" class="milestones">
              <button
                v-for="(milestone, index) in company.milestones"
                :key="milestone.id"
                class="milestone"
                @click="openMilestoneModal({ ...milestone, brandColor: company.brandColor, milestoneIndex: index + 1 })"
              >
                <span class="milestone-top">
                  <i class="fas milestone-icon" :class="milestoneIcons[milestone.title]"></i>
                  <span class="milestone-index">{{ pad(index + 1) }}</span>
                </span>
                <span class="milestone-title">{{ milestone.title }}</span>
                <span class="milestone-tech">
                  <span v-for="tech in milestone.technologies" :key="tech">{{ tech }}</span>
                </span>
                <span class="milestone-more">
                  Ver detalle <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </transition>
        </article>
      </div>
    </div>

    <!-- Modals with Teleport -->
    <teleport to="body">
      <transition name="modal-fade">
        <div v-if="showMilestoneModal" class="milestone-modal" @click="closeMilestoneModal">
          <div class="modal-content" :style="{ '--brand': selectedMilestone?.brandColor }" @click.stop>
            <button class="modal-close" @click="closeMilestoneModal" aria-label="Cerrar">
              <i class="fas fa-xmark"></i>
            </button>
            <div class="milestone-modal-header">
              <span class="modal-icon">
                <i class="fas" :class="milestoneIcons[selectedMilestone?.title]"></i>
              </span>
              <div>
                <span class="modal-kicker">Logro {{ pad(selectedMilestone?.milestoneIndex || 0) }}</span>
                <h3>{{ selectedMilestone?.title }}</h3>
              </div>
            </div>
            <p class="milestone-modal-description">{{ selectedMilestone?.description }}</p>

            <div v-if="selectedMilestone?.images && selectedMilestone.images.length > 0" class="milestone-modal-images">
              <img
                v-for="(image, imgIndex) in selectedMilestone.images"
                :key="imgIndex"
                :src="`/images/${image}`"
                :alt="`${selectedMilestone.title} - imagen ${imgIndex + 1}`"
                class="milestone-modal-img"
                @click.stop="openImageModal(`/images/${image}`, selectedMilestone.title)"
              />
            </div>

            <div class="technologies">
              <span v-for="tech in selectedMilestone?.technologies" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </transition>

      <transition name="modal-fade">
        <div v-if="showImageModal" class="image-modal" @click="closeImageModal">
          <div class="modal-content modal-content-image" @click.stop>
            <button class="modal-close" @click="closeImageModal" aria-label="Cerrar">
              <i class="fas fa-xmark"></i>
            </button>
            <img :src="selectedImage" :alt="selectedImageTitle" class="modal-image" />
            <p class="modal-title">{{ selectedImageTitle }}</p>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>

<script>
export default {
  name: 'ExperienceStyle5',
  data() {
    return {
      showImageModal: false,
      selectedImage: '',
      selectedImageTitle: '',
      showMilestoneModal: false,
      selectedMilestone: null,
      expandedCompanyId: null, // Todas las secciones cerradas por defecto
      milestoneIcons: {
        'Dashboards Power BI en Tiempo Real': 'fa-chart-line',
        'Data Warehouse PostgreSQL': 'fa-database',
        'Sistema de Fichaje con Reconocimiento Facial': 'fa-robot',
        'Circuito de Emails Automatizado': 'fa-envelope',
        'Optimización SEO y Posicionamiento': 'fa-magnifying-glass-chart',
        'Optimización de Consultas N+1 con Django ORM': 'fa-bolt',
        'Integraciones Inmobiliarias': 'fa-building',
        'Embudo de Venta para Leads': 'fa-filter',
        'Optimización de Imágenes con Pillow y Celery': 'fa-image',
        'Optimización y Configuración Google Cloud': 'fa-cloud',
        'Formación de Personal': 'fa-chalkboard-user',
      },
      companies: [
        {
          id: 'visualnacert',
          name: 'VisualNacert',
          category: 'AgroTech',
          logo: '/images/visualnacert.jpg',
          position: 'Analista de Datos & Desarrollador',
          brandColor: '#fd801d',
          milestones: [
            { id: 1, title: 'Dashboards Power BI en Tiempo Real', description: 'Desarrollo de informes interactivos con Power BI utilizando DAX para análisis de datos en tiempo real. Creación de visualizaciones para seguimiento de maquinaria, personal, suministros y costes operativos. Embedido de dashboards en la aplicación web principal.', technologies: ['Power BI', 'DAX', 'SQL', 'Data Analysis'], images: ['informe-powerBi.png'] },
            { id: 2, title: 'Data Warehouse PostgreSQL', description: 'Diseño e implementación de un Data Warehouse con PostgreSQL para optimizar consultas analíticas sin sobrecargar la base de datos principal. ETL automatizado para sincronización de datos, mejorando el rendimiento de reportes en un 70%.', technologies: ['PostgreSQL', 'Data Modeling'], images: [] },
            { id: 3, title: 'Sistema de Fichaje con Reconocimiento Facial', description: 'Desarrollo de aplicación en .NET para control de asistencia con reconocimiento facial. Implementación de algoritmos de detección facial para registro automático de entrada/salida de trabajadores en el campo.', technologies: ['.NET', 'C#'], images: [] }
          ]
        },
        {
          id: 'live4life',
          name: 'Live4Life',
          category: 'PropTech',
          logo: '/images/live4life.png',
          position: 'Full Stack Developer / CTO',
          brandColor: '#ff2773',
          milestones: [
            { id: 1, title: 'Circuito de Emails Automatizado', description: 'Implementación completa de un sistema de email marketing automatizado con Brevo (anteriormente Sendinblue). Creación de flujos de trabajo personalizados para onboarding de usuarios, recordatorios de pago y comunicación con propietarios.', technologies: ['Brevo', 'Django', 'Celery'], images: ['brevo-portfolio.png'] },
            { id: 2, title: 'Optimización SEO y Posicionamiento', description: 'Mejora integral del SEO técnico y de contenido, Optimización de Core Web Vitals, generación automática de sitemaps, y estrategia de contenido que resultó en un aumento del tráfico orgánico.', technologies: ['SEO', 'Google Analytics', 'Vue.js'], images: ['seo-portfolio.png'] },
            {
              id: 3,
              title: 'Optimización de Consultas N+1 con Django ORM',
              description: 'Identificación y resolución del problema clásico N+1 en consultas a base de datos. Implementación de select_related() y prefetch_related() en las consultas principales de la aplicación, eliminando consultas redundantes. Refactorización de views y serializers para optimizar la carga de datos relacionados. Resultados: Mejora de 4x a 10x en tiempos de carga de vistas principales, eliminando llamadas innecesarias a la base de datos y optimizando el rendimiento general de la API.',
              technologies: ['Django', 'PostgreSQL'],
              images: []
            },
            { id: 4, title: 'Integraciones Inmobiliarias', description: 'Desarrollo de conectores API para sincronización automática de propiedades con los principales portales inmobiliarios: Fotocasa, Idealista, y Pisoscom. Sistema de sincronización bidireccional y gestión de inventario en tiempo real.', technologies: ['Django', 'Celery', 'REST APIs'], images: ['portales-portfolio.png'] },
            { id: 5, title: 'Embudo de Venta para Leads', description: 'Diseño e implementación de un embudo de ventas automatizado para leads calientes. Notificaciones en tiempo real, y dashboard de seguimiento para el equipo de ventas.', technologies: ['Django', 'Vue.js'], images: ['embudo-portfolio.png'] },
            {
              id: 6,
              title: 'Optimización de Imágenes con Pillow y Celery',
              description: 'Implementación de sistema automatizado de optimización de imágenes utilizando Pillow para procesar imágenes subidas por usuarios. Generación automática de múltiples formatos (JPG y WebP) y versiones responsive (small, large) para diferentes tamaños de pantalla. Utilizando Celery para procesamiento asincrónico de imágenes sin bloquear la aplicación. Resultados: Reducción del peso total de imágenes en un 30% y mejora en tiempos de carga de hasta 40% gracias a la optimización de formatos y tamaños responsivos.',
              technologies: ['Django', 'Pillow', 'Celery'],
              images: []
            },
            { id: 7, title: 'Optimización y Configuración Google Cloud', description: 'Arquitectura y optimización completa del entorno Google Cloud. Configuración de Cloud Run para orquestación de contenedores, implementación de Cloud Build para CI/CD automatizado, optimización de costes y recursos. Gestión de Cloud Storage para assets y backups.', technologies: ['Google Cloud Run', 'Cloud Build', 'Cloud Storage', 'Docker', 'CI/CD'], images: [] },
            { id: 8, title: 'Formación de Personal', description: 'Creación de programa de formación técnica para el equipo. Documentación de procesos, best practices y arquitectura del sistema.', technologies: ['Postman', 'Documentation'], images: ['postman-portfolio.png'] },

          ]
        }
      ]
    }
  },
  methods: {
    pad(n) {
      return String(n).padStart(2, '0')
    },
    openMilestoneModal(milestone) {
      this.selectedMilestone = milestone
      this.showMilestoneModal = true
      document.body.style.overflow = 'hidden'
    },
    closeMilestoneModal() {
      this.showMilestoneModal = false
      this.selectedMilestone = null
      document.body.style.overflow = 'auto'
    },
    openImageModal(imageSrc, title) {
      this.selectedImage = imageSrc
      this.selectedImageTitle = title
      this.showImageModal = true
      document.body.style.overflow = 'hidden'
    },
    closeImageModal() {
      this.showImageModal = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>
/* ---------- Filas de empresa ---------- */
.companies {
  border-top: 1px solid var(--line);
}

.company {
  border-bottom: 1px solid var(--line);
}

.company-row {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 48px 56px 1fr auto 40px;
  align-items: center;
  gap: 24px;
  padding: 28px 0;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

/* Línea de color de marca que crece al pasar por encima */
.company-row::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background: var(--brand);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s var(--ease);
}

.company-row:hover::before,
.company.expanded .company-row::before {
  transform: scaleX(1);
}

.company-index {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-faint);
}

.company-logo {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  padding: 8px;
  border-radius: 12px;
  background: var(--brand);
}

.company-logo.logo-light {
  background: #ffffff;
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 6px;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.company-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.company-name {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.1;
  color: var(--text);
  transition: color 0.3s ease;
}

.company-row:hover .company-name,
.company.expanded .company-name {
  color: var(--brand);
}

.company-category {
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid var(--brand);
  color: var(--brand);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.company-position {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.company-count {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.company-toggle {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  color: var(--text);
  transition: transform 0.4s var(--ease), background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.company.expanded .company-toggle {
  transform: rotate(45deg);
  background: var(--brand);
  border-color: var(--brand);
  color: #0a0a0b;
}

/* ---------- Rejilla de logros con líneas finas ---------- */
.milestones {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1px;
  margin: 0 0 32px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}

.milestone {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 220px;
  padding: 24px;
  background: var(--bg);
  border: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.3s ease;
}

.milestone:hover {
  background: var(--bg-elev);
}

.milestone-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.milestone-icon {
  font-size: 1.15rem;
  color: var(--brand);
}

.milestone-index {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-faint);
}

.milestone-title {
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: var(--text);
  flex: 1;
}

.milestone-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

.milestone-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--brand);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s ease, transform 0.3s var(--ease);
}

.milestone-more i {
  font-size: 0.75em;
}

.milestone:hover .milestone-more {
  opacity: 1;
  transform: translateY(0);
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.35s ease, transform 0.35s var(--ease);
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ---------- Modales ---------- */
.milestone-modal,
.image-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: rgba(5, 5, 6, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 720px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding: 36px;
  background: var(--bg-elev);
  border: 1px solid var(--line-strong);
  border-top: 3px solid var(--brand, var(--accent));
  border-radius: var(--radius);
  color: var(--text);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.modal-close:hover {
  background: var(--text);
  color: var(--bg);
}

.milestone-modal-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
  padding-right: 40px;
}

.modal-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--brand);
  color: #0a0a0b;
  font-size: 1.3rem;
}

.modal-kicker {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.milestone-modal-header h3 {
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.milestone-modal-description {
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 24px;
}

.milestone-modal-images {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.milestone-modal-img {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--line);
  cursor: zoom-in;
  transition: opacity 0.2s ease;
}

.milestone-modal-img:hover {
  opacity: 0.85;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-content-image {
  max-width: 1100px;
  border-top-width: 1px;
  padding: 20px;
}

.modal-image {
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 8px;
}

.modal-title {
  margin-top: 14px;
  font-size: 0.9rem;
  color: var(--text-muted);
  text-align: center;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* ---------- Responsive ---------- */
@media (max-width: 768px) {
  .company-row {
    grid-template-columns: 48px 1fr 36px;
    gap: 14px;
    padding: 22px 0;
  }

  .company-index,
  .company-count {
    display: none;
  }

  .company-logo {
    width: 48px;
    height: 48px;
  }

  /* El sector va debajo del nombre en móvil */
  .company-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .company-position {
    font-size: 0.85rem;
  }

  .company-toggle {
    width: 36px;
    height: 36px;
  }

  .milestones {
    grid-template-columns: 1fr;
    margin-bottom: 24px;
  }

  .milestone {
    min-height: 0;
    padding: 20px;
  }

  /* En táctil no hay hover: el enlace se ve siempre */
  .milestone-more {
    opacity: 1;
    transform: none;
  }

  .modal-content {
    padding: 28px 22px;
  }

  .milestone-modal-header h3 {
    font-size: 1.3rem;
  }
}
</style>
