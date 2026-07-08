<template>
  <section id="experiencia" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Mi Roadmap Profesional</h2>
      <p class="subtitle">Cards Flotantes 3D</p>
      
      <!-- 3D Cards Timeline -->
      <div class="cards-timeline-wrapper">
        <div class="timeline-line-3d"></div>
        
        <div class="cards-grid">
          <div v-for="(item, index) in roadmapItems" 
               :key="`${item.companyId}-${item.type}-${item.id}`" 
               class="card-3d" 
               :style="{ '--delay': index * 0.1 + 's', '--color': item.brandColor }"
               :class="{ 'company-card-3d': item.type === 'company', 'milestone-card-3d': item.type === 'milestone' }"
               @click="item.type === 'milestone' ? openMilestoneModal(item) : null"
               data-aos="zoom-in"
               :data-aos-delay="index * 100">
            
            <!-- Company Card -->
            <div v-if="item.type === 'company'" class="card-3d-content company-content-3d">
              <div class="glass-header" :style="{ background: `linear-gradient(135deg, ${item.brandColor}90, ${item.brandColor}60)` }">
                <img :src="item.logo" :alt="item.name" class="company-logo-3d" />
              </div>
              <div class="card-3d-body">
                <h3 :style="{ color: item.brandColor }">{{ item.name }}</h3>
                <p class="position-3d">{{ item.position }}</p>
                <p class="description-3d">{{ item.description }}</p>
              </div>
              <div class="glow" :style="{ background: `radial-gradient(circle, ${item.brandColor}40, transparent)` }"></div>
            </div>
            
            <!-- Milestone Card -->
            <div v-else-if="item.type === 'milestone'" class="card-3d-content milestone-content-3d">
              <div class="milestone-number-badge" :style="{ backgroundColor: item.brandColor }">
                {{ item.milestoneIndex }}
              </div>
              <i class="fas milestone-icon-3d" :class="milestoneIcons[item.title]" :style="{ color: item.brandColor }"></i>
              <h4>{{ item.title }}</h4>
              <div class="tech-chips">
                <span v-for="tech in item.technologies.slice(0, 3)" :key="tech" :style="{ borderColor: item.brandColor, color: item.brandColor }">
                  {{ tech }}
                </span>
              </div>
              <div class="glow" :style="{ background: `radial-gradient(circle, ${item.brandColor}30, transparent)` }"></div>
            </div>
            
            <!-- Continue Card -->
            <div v-else class="card-3d-content continue-content-3d">
              <div class="continue-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h3>Continuará...</h3>
              <p>Más proyectos en camino</p>
              <div class="glow" style="background: radial-gradient(circle, #667eea40, transparent);"></div>
            </div>
          </div>
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
  name: 'ExperienceStyle3',
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
  perspective: 1000px;
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

.cards-timeline-wrapper {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.timeline-line-3d {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, #667eea, #ff2773, #667eea, transparent);
  transform: translateX(-50%);
  opacity: 0.3;
  z-index: 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card-3d {
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  animation: fadeInUp 0.8s ease var(--delay) backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px) rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.card-3d:hover {
  transform: translateY(-15px) scale(1.03) rotateY(2deg);
}

.card-3d-content {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 15px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
}

.card-3d:hover .card-3d-content {
  box-shadow: 
    0 25px 70px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 40px var(--color, #667eea);
}

.glow {
  position: absolute;
  bottom: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.card-3d:hover .glow {
  opacity: 0.6;
}

/* Company Card */
.company-card-3d {
  grid-column: span 2;
}

.glass-header {
  position: relative;
  margin: -2rem -2rem 1.5rem -2rem;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  backdrop-filter: blur(10px);
}

.company-logo-3d {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  background: white;
  padding: 10px;
}

.card-3d-body {
  position: relative;
  z-index: 1;
  text-align: center;
}

.card-3d-body h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.position-3d {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.description-3d {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Milestone Card */
.milestone-card-3d {
  cursor: pointer;
}

.milestone-number-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.milestone-content-3d {
  text-align: center;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.milestone-icon-3d {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
}

.milestone-content-3d h4 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.tech-chips span {
  padding: 0.4rem 0.9rem;
  border: 2px solid;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.tech-chips span:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.1);
}

/* Continue Card */
.continue-content-3d {
  text-align: center;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
}

.continue-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.continue-content-3d h3 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
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

@media (max-width: 768px) {
  .company-card-3d {
    grid-column: span 1;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}
</style>
