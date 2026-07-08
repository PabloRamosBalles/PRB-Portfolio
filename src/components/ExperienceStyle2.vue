<template>
  <section id="experiencia" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Mi Roadmap Profesional</h2>
      <p class="subtitle">Metro/Subway Map Style</p>
      
      <!-- Metro Map -->
      <div class="metro-map">
        <!-- VisualNacert Line -->
        <div class="metro-line visualnacert-line" data-aos="fade-up">
          <div class="line-header">
            <div class="line-badge" style="background-color: #fd801d;">
              <img src="/images/visualnacert.jpg" alt="VisualNacert" />
            </div>
            <div>
              <h3 style="color: #fd801d;">VisualNacert</h3>
              <p>Analista de Datos & Desarrollador</p>
            </div>
          </div>
          
          <div class="stations-container">
            <div class="metro-rail" style="background-color: #fd801d;"></div>
            <div v-for="(milestone, index) in companies[0].milestones" 
                 :key="milestone.id" 
                 class="station"
                 @click="openMilestoneModal({ ...milestone, brandColor: '#fd801d', milestoneIndex: index + 1 })"
                 data-aos="fade-right"
                 :data-aos-delay="index * 100">
              <div class="station-dot" style="background-color: #fd801d; border-color: #fd801d;">
                <span>{{ index + 1 }}</span>
              </div>
              <div class="station-card">
                <i class="fas" :class="milestoneIcons[milestone.title]" style="color: #fd801d;"></i>
                <h4>{{ milestone.title }}</h4>
                <div class="tech-tags">
                  <span v-for="tech in milestone.technologies" :key="tech">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Live4Life Line -->
        <div class="metro-line live4life-line" data-aos="fade-up" data-aos-delay="200">
          <div class="line-header">
            <div class="line-badge" style="background-color: white;">
              <img src="/images/live4life.png" alt="Live4Life" />
            </div>
            <div>
              <h3 style="color: #ff2773;">Live4Life</h3>
              <p>Full Stack Developer / CTO</p>
            </div>
          </div>
          
          <div class="stations-container">
            <div class="metro-rail" style="background-color: #ff2773;"></div>
            <div v-for="(milestone, index) in companies[1].milestones" 
                 :key="milestone.id" 
                 class="station"
                 @click="openMilestoneModal({ ...milestone, brandColor: '#ff2773', milestoneIndex: index + 1 })"
                 data-aos="fade-right"
                 :data-aos-delay="index * 100">
              <div class="station-dot" style="background-color: #ff2773; border-color: #ff2773;">
                <span>{{ index + 1 }}</span>
              </div>
              <div class="station-card">
                <i class="fas" :class="milestoneIcons[milestone.title]" style="color: #ff2773;"></i>
                <h4>{{ milestone.title }}</h4>
                <div class="tech-tags">
                  <span v-for="tech in milestone.technologies" :key="tech">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Terminal Station -->
        <div class="terminal-station" data-aos="fade-up">
          <div class="terminal-badge">
            <i class="fas fa-flag-checkered"></i>
          </div>
          <h3>Continuará...</h3>
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
  name: 'ExperienceStyle2',
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

.metro-map {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.metro-line {
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.line-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.line-badge {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.line-badge img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 50%;
}

.line-header h3 {
  font-size: 2rem;
  margin: 0;
}

.line-header p {
  color: var(--text-secondary);
  margin: 0.3rem 0 0;
}

.stations-container {
  position: relative;
  padding-left: 60px;
}

.metro-rail {
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 8px;
  border-radius: 10px;
}

.station {
  position: relative;
  margin-bottom: 3rem;
  cursor: pointer;
}

.station-dot {
  position: absolute;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;
}

.station:hover .station-dot {
  transform: translateY(-50%) scale(1.2);
}

.station-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.station:hover .station-card {
  transform: translateX(10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.station-card i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.station-card h4 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.75rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tags span {
  padding: 0.3rem 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.terminal-station {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 20px;
  border: 2px dashed #667eea;
}

.terminal-badge {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.terminal-station h3 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

/* Modal styles (same as style 1) */
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
  .metro-map {
    padding: 1rem;
  }
  
  .metro-line {
    padding: 1.5rem;
  }
  
  .line-header {
    flex-direction: column;
    text-align: center;
  }
  
  .stations-container {
    padding-left: 40px;
  }
  
  .station-dot {
    left: -40px;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .metro-rail {
    left: 20px;
  }
}
</style>
