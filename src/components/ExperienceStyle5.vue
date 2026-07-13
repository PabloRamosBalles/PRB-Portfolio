<template>
  <section id="experiencia" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Algunos de mis logros</h2>
      <!-- <p class="subtitle">Grid Compacto Profesional</p> -->
      
      <!-- Compact Grid -->
      <div class="compact-grid-timeline">
        <div v-for="company in companies" :key="company.id" class="company-group" data-aos="fade-up">
          <!-- Company Banner -->
          <div class="company-banner" :style="{ borderLeftColor: company.brandColor }">
            <div class="banner-left">
              <div class="company-logo-compact" :style="{ background: company.id === 'live4life' ? 'white' : company.brandColor }">
                <img :src="company.logo" :alt="company.name" />
              </div>
              <div>
                <div class="company-header">
                  <h3 :style="{ color: company.brandColor }">{{ company.name }}</h3>
                  <span class="company-category" :style="{ backgroundColor: company.brandColor }">{{ company.category }}</span>
                </div>
                <p class="position-compact">{{ company.position }}</p>
              </div>
            </div>
            <div class="banner-right">
              <span class="milestone-count" :style="{ backgroundColor: company.brandColor }">
                {{ company.milestones.length }} proyectos
              </span>
            </div>
          </div>
          
          <!-- Milestones Grid -->
          <div class="milestones-grid">
            <div v-for="(milestone, index) in company.milestones" 
                 :key="milestone.id"
                 class="milestone-compact-card"
                 @click="openMilestoneModal({ ...milestone, brandColor: company.brandColor, milestoneIndex: index + 1 })"
                 data-aos="fade-up"
                 :data-aos-delay="index * 80">
              <div class="card-number" :style="{ backgroundColor: company.brandColor }">
                {{ index + 1 }}
              </div>
              <div class="card-icon">
                <i class="fas" :class="milestoneIcons[milestone.title]" :style="{ color: company.brandColor }"></i>
              </div>
              <h4>{{ milestone.title }}</h4>
              <div class="tech-list">
                <span v-for="tech in milestone.technologies" :key="tech" :style="{ color: company.brandColor }">
                  {{ tech }}
                </span>
              </div>
              <div class="card-border" :style="{ backgroundColor: company.brandColor }"></div>
            </div>
          </div>
        </div>
        
        <!-- End Banner -->
        <div class="end-banner" data-aos="fade-up">
          <div class="end-content">
            <i class="fas fa-infinity"></i>
            <div>
              <h4>Continuará...</h4>
              <p>El roadmap sigue creciendo</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <!-- Modals with Teleport -->
    <teleport to="body">
      <transition name="modal-fade">
        <div v-if="showMilestoneModal" class="milestone-modal" @click="closeMilestoneModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeMilestoneModal">×</button>
            <div class="milestone-modal-header">
              <i class="fas milestone-modal-icon" :class="milestoneIcons[selectedMilestone?.title]" :style="{ color: selectedMilestone?.brandColor }"></i>
              <h3>{{ selectedMilestone?.title }}</h3>
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
              <span v-for="tech in selectedMilestone?.technologies" :key="tech" class="tech-badge-modal" :style="{ backgroundColor: `${selectedMilestone?.brandColor}20`, color: selectedMilestone?.brandColor }">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </transition>
      
      <transition name="modal-fade">
        <div v-if="showImageModal" class="image-modal" @click="closeImageModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeImageModal">×</button>
            <div class="modal-image-container">
              <img :src="selectedImage" :alt="selectedImageTitle" class="modal-image" />
            </div>
            <p class="modal-title">{{ selectedImageTitle }}</p>
          </div>
        </div>
      </transition>
    </teleport>
    <!-- </div> -->
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
              description: 'Implementación de sistema automatizado de optimización de imágenes utilizando Pillow para procesar imágenes subidas por usuarios. Generación automática de múltiples formatos (JPG y WebP) y versiones responsive (small, large) para diferentes tamaños de pantalla. Utilizando Celery para procesamiento asincrónico de imágenes sin bloquear la aplicación. Resultados: Reducción del peso total de imágenes en un 20% y mejora en tiempos de carga de hasta 40% gracias a la optimización de formatos y tamaños responsivos.',
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
#experiencia {
  padding: 5rem 0;
  overflow-x: hidden;
  width: 100%;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #000000;
}

.subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 4rem;
}

.compact-grid-timeline {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.company-group {
  margin-bottom: 4rem;
}

.company-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.03);
  border-left: 6px solid;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.company-logo-compact {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.company-logo-compact img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.company-banner h3 {
  font-size: 1.8rem;
  margin: 0;
}

.position-compact {
  margin: 0.3rem 0 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.company-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.company-category {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.milestone-count {
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.milestone-compact-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.milestone-compact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.05);
}

.card-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.card-icon {
  margin-bottom: 1rem;
}

.card-icon i {
  font-size: 2.5rem;
}

.milestone-compact-card h4 {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1.3;
  min-height: 2.6rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-list span {
  padding: 0.3rem 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
}

.card-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 0 0 12px 12px;
}

.end-banner {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 2px dashed #667eea;
}

.end-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.end-content i {
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.end-content h4 {
  font-size: 1.8rem;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.end-content p {
  margin: 0.3rem 0 0;
  color: var(--text-secondary);
}

/* Modal styles */
.milestone-modal,
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

.modal-content {
  position: relative;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.milestone-modal-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.milestone-modal-icon {
  font-size: 3rem;
}

.milestone-modal-header h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin: 0;
}

.milestone-modal-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.milestone-modal-images {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.milestone-modal-img {
  width: 100%;
  max-height: 300px;
  border-radius: 12px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.milestone-modal-img:hover {
  transform: scale(1.03);
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge-modal {
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.modal-image-container {
  max-height: 75vh;
  margin-bottom: 1rem;
}

.modal-image {
  max-width: 100%;
  max-height: 75vh;
  border-radius: 12px;
  object-fit: contain;
}

.modal-title {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .compact-grid-timeline {
    padding: 0.5rem;
  }
  
  .company-banner {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .banner-left {
    flex-direction: column;
  }
  
  .milestones-grid {
    grid-template-columns: 1fr;
  }
  
  .end-content {
    flex-direction: column;
  }
}
</style>
