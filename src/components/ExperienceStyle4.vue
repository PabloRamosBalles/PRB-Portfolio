<template>
  <section id="experiencia" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Mi Roadmap Profesional</h2>
      <p class="subtitle">Línea Horizontal Minimalista</p>
      
      <!-- Horizontal Minimal Timeline -->
      <div class="minimal-timeline">
        <div class="companies-section">
          <!-- Company Headers -->
          <div v-for="company in companies" :key="company.id" class="company-section" data-aos="fade-up">
            <div class="company-header-minimal">
              <div class="company-logo-wrapper" :style="{ borderColor: company.brandColor }">
                <img :src="company.logo" :alt="company.name" />
              </div>
              <div>
                <h3 :style="{ color: company.brandColor }">{{ company.name }}</h3>
                <p>{{ company.position }}</p>
              </div>
            </div>
            
            <!-- Milestones Line -->
            <div class="milestones-line">
              <div class="line" :style="{ backgroundColor: company.brandColor }"></div>
              <div class="dots-container">
                <div v-for="(milestone, index) in company.milestones" 
                     :key="milestone.id" 
                     class="dot-wrapper"
                     @click="openMilestoneModal({ ...milestone, brandColor: company.brandColor, milestoneIndex: index + 1 })"
                     data-aos="fade-up"
                     :data-aos-delay="index * 150">
                  <div class="dot" :style="{ backgroundColor: company.brandColor, borderColor: company.brandColor }">
                    <span>{{ index + 1 }}</span>
                  </div>
                  <div class="dot-label">
                    <i class="fas" :class="milestoneIcons[milestone.title]" :style="{ color: company.brandColor }"></i>
                    <p>{{ milestone.title }}</p>
                    <div class="tech-mini">
                      <small v-for="tech in milestone.technologies.slice(0, 2)" :key="tech">{{ tech }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- End Card -->
        <div class="end-card-minimal" data-aos="fade-up">
          <i class="fas fa-flag-checkered"></i>
          <h4>Continuará...</h4>
          <p>🚀 Más proyectos en camino</p>
        </div>
      </div>

      <!-- Modals -->
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceStyle4',
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
        'Integraciones Inmobiliarias': 'fa-building',
        'Embudo de Venta para Leads': 'fa-filter',
        'Formación de Personal': 'fa-chalkboard-user',
        'Optimización y Configuración Google Cloud': 'fa-cloud'
      },
      companies: [
        {
          id: 'visualnacert',
          name: 'VisualNacert',
          logo: '/images/visualnacert.jpg',
          position: 'Analista de Datos & Desarrollador',
          brandColor: '#fd801d',
          milestones: [
            { id: 1, title: 'Dashboards Power BI en Tiempo Real', description: 'Desarrollo de informes interactivos con Power BI utilizando DAX para análisis de datos en tiempo real.', technologies: ['Power BI', 'DAX', 'SQL'], images: ['informe-powerBi.png'] },
            { id: 2, title: 'Data Warehouse PostgreSQL', description: 'Diseño e implementación de un Data Warehouse con PostgreSQL.', technologies: ['PostgreSQL', 'Data Modeling'], images: [] },
            { id: 3, title: 'Sistema de Fichaje con Reconocimiento Facial', description: 'Desarrollo de aplicación en .NET para control de asistencia.', technologies: ['.NET', 'C#'], images: [] }
          ]
        },
        {
          id: 'live4life',
          name: 'Live4Life',
          logo: '/images/live4life.png',
          position: 'Full Stack Developer / CTO',
          brandColor: '#ff2773',
          milestones: [
            { id: 1, title: 'Circuito de Emails Automatizado', description: 'Implementación completa de un sistema de email marketing automatizado.', technologies: ['Brevo', 'Django', 'Celery'], images: ['brevo-portfolio.png'] },
            { id: 2, title: 'Optimización SEO y Posicionamiento', description: 'Mejora integral del SEO técnico y de contenido.', technologies: ['SEO', 'Google Analytics'], images: ['seo-portfolio.png'] },
            { id: 3, title: 'Integraciones Inmobiliarias', description: 'Desarrollo de conectores API.', technologies: ['Django', 'REST APIs'], images: ['portales-portfolio.png'] },
            { id: 4, title: 'Embudo de Venta para Leads', description: 'Diseño e implementación de un embudo de ventas automatizado.', technologies: ['Django', 'Vue.js'], images: ['embudo-portfolio.png'] },
            { id: 5, title: 'Formación de Personal', description: 'Creación de programa de formación técnica.', technologies: ['Postman', 'Documentation'], images: ['postman-portfolio.png'] },
            { id: 6, title: 'Optimización y Configuración Google Cloud', description: 'Arquitectura y optimización completa del entorno Google Cloud.', technologies: ['Google Cloud Run', 'Docker'], images: [] }
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
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 4rem;
}

.minimal-timeline {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.company-section {
  margin-bottom: 5rem;
}

.company-header-minimal {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.company-logo-wrapper {
  width: 80px;
  height: 80px;
  border: 4px solid;
  border-radius: 50%;
  padding: 5px;
  background: white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.company-logo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.company-header-minimal h3 {
  font-size: 2rem;
  margin: 0;
}

.company-header-minimal p {
  margin: 0.3rem 0 0;
  color: var(--text-secondary);
}

.milestones-line {
  position: relative;
  padding: 2rem 0;
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 10px;
  transform: translateY(-50%);
}

.dots-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.dot-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 200px;
}

.dot-wrapper:hover {
  transform: translateY(-10px);
}

.dot {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 5px solid;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}

.dot-wrapper:hover .dot {
  transform: scale(1.2);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
}

.dot-label {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.dot-wrapper:hover .dot-label {
  background: rgba(255, 255, 255, 0.08);
}

.dot-label i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.dot-label p {
  font-size: 0.95rem;
  color: var(--primary-color);
  margin: 0.5rem 0;
  line-height: 1.3;
}

.tech-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.tech-mini small {
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.7rem;
  color: var(--text-secondary);
}

.end-card-minimal {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 16px;
  border: 2px dashed #667eea;
  margin-top: 3rem;
}

.end-card-minimal i {
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.end-card-minimal h4 {
  font-size: 1.8rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.5rem 0;
}

/* Modal styles */
.milestone-modal,
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  padding: 2rem;
}

.modal-content {
  position: relative;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
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

@media (max-width: 1024px) {
  .dots-container {
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .dot-wrapper {
    max-width: calc(50% - 1rem);
  }
}

@media (max-width: 768px) {
  .company-header-minimal {
    flex-direction: column;
    text-align: center;
  }
  
  .dots-container {
    flex-direction: column;
    gap: 2rem;
  }
  
  .dot-wrapper {
    max-width: 100%;
  }
  
  .line {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    height: auto;
    transform: translateX(-50%);
  }
}
</style>
