<template>
  <section id="experiencia" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Mi Roadmap Profesional</h2>
      <p class="subtitle">Timeline Vertical con Degradado</p>
      
      <!-- Vertical Timeline -->
      <div class="vertical-timeline">
        <div class="timeline-line"></div>
        
        <div v-for="(item, index) in roadmapItems" :key="`${item.companyId}-${item.type}-${item.id}`" 
             class="timeline-item" 
             :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
             data-aos="fade-up" 
             :data-aos-delay="index * 100">
          
          <div class="timeline-dot" :style="{ backgroundColor: item.brandColor, borderColor: item.brandColor }">
            <img v-if="item.type === 'company'" :src="item.logo" :alt="item.name" class="dot-logo" />
            <span v-else-if="item.type === 'milestone'" class="dot-number">{{ item.milestoneIndex }}</span>
            <i v-else class="fas fa-ellipsis-h"></i>
          </div>
          
          <div class="timeline-card" 
               :style="{ borderColor: item.brandColor, backgroundColor: item.type === 'company' ? item.brandColor : 'var(--card-bg)' }"
               :class="{ 'company-card': item.type === 'company' }"
               @click="item.type === 'milestone' ? openMilestoneModal(item) : null">
            
            <!-- Company -->
            <div v-if="item.type === 'company'">
              <h3>{{ item.name }}</h3>
              <p class="position">{{ item.position }}</p>
              <p class="description">{{ item.description }}</p>
            </div>
            
            <!-- Milestone -->
            <div v-else-if="item.type === 'milestone'" class="milestone-content">
              <i class="fas" :class="milestoneIcons[item.title]" :style="{ color: item.brandColor }"></i>
              <h4>{{ item.title }}</h4>
              <div class="tech-badges">
                <span v-for="tech in item.technologies" :key="tech" class="tech-badge" :style="{ borderColor: item.brandColor, color: item.brandColor }">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <!-- Continue -->
            <div v-else class="continue-content">
              <h3>Continuará...</h3>
              <p>🚀 Más proyectos en camino</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modals (same as original) -->
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
  name: 'ExperienceStyle1',
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
          description: 'AgroTech dedicada a la digitalización del trabajo en el campo.',
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
          description: 'PropTech dedicada al alquiler de pisos y habitaciones a estudiantes.',
          milestones: [
            { id: 1, title: 'Circuito de Emails Automatizado', description: 'Implementación completa de un sistema de email marketing automatizado.', technologies: ['Brevo', 'Django', 'Celery'], images: ['brevo-portfolio.png'] },
            { id: 2, title: 'Optimización SEO y Posicionamiento', description: 'Mejora integral del SEO técnico y de contenido.', technologies: ['SEO', 'Google Analytics'], images: ['seo-portfolio.png'] },
            { id: 3, title: 'Integraciones Inmobiliarias', description: 'Desarrollo de conectores API para sincronización automática.', technologies: ['Django', 'REST APIs'], images: ['portales-portfolio.png'] },
            { id: 4, title: 'Embudo de Venta para Leads', description: 'Diseño e implementación de un embudo de ventas automatizado.', technologies: ['Django', 'Vue.js'], images: ['embudo-portfolio.png'] },
            { id: 5, title: 'Formación de Personal', description: 'Creación de programa de formación técnica.', technologies: ['Postman', 'Documentation'], images: ['postman-portfolio.png'] },
            { id: 6, title: 'Optimización y Configuración Google Cloud', description: 'Arquitectura y optimización completa del entorno Google Cloud.', technologies: ['Google Cloud Run', 'Docker'], images: [] }
          ]
        }
      ]
    }
  },
  computed: {
    roadmapItems() {
      const items = []
      this.companies.forEach((company) => {
        items.push({ type: 'company', companyId: company.id, name: company.name, logo: company.logo, position: company.position, brandColor: company.brandColor, description: company.description })
        company.milestones.forEach((milestone, index) => {
          items.push({ type: 'milestone', companyId: company.id, id: milestone.id, milestoneIndex: index + 1, title: milestone.title, description: milestone.description, technologies: milestone.technologies, images: milestone.images, brandColor: company.brandColor })
        })
      })
      items.push({ type: 'continue', companyId: 'continue', brandColor: '#667eea' })
      return items
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

.vertical-timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #fd801d 0%, #fd801d 40%, #ff2773 60%, #ff2773 100%);
  transform: translateX(-50%);
  z-index: 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
}

.timeline-item.left {
  justify-content: flex-end;
  padding-right: calc(50% + 50px);
}

.timeline-item.right {
  justify-content: flex-start;
  padding-left: calc(50% + 50px);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.dot-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
}

.dot-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.timeline-card {
  background: var(--card-bg);
  border: 2px solid;
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 450px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.timeline-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.timeline-card.company-card {
  cursor: default;
}

.timeline-card.company-card h3,
.timeline-card.company-card .position,
.timeline-card.company-card .description {
  color: white !important;
}

.timeline-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.position {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
}

.description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
}

.milestone-content {
  text-align: center;
}

.milestone-content i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.milestone-content h4 {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tech-badge {
  padding: 0.3rem 0.7rem;
  border: 1px solid;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.continue-content {
  text-align: center;
}

.continue-content h3 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  z-index: 10;
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
  .timeline-line {
    left: 30px;
  }
  
  .timeline-item.left,
  .timeline-item.right {
    padding-left: 80px;
    padding-right: 0;
  }
  
  .timeline-dot {
    left: 30px;
    width: 50px;
    height: 50px;
  }
  
  .timeline-card {
    max-width: 100%;
  }
}
</style>
