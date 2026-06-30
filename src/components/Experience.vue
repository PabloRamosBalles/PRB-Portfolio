<template>
  <section id="experiencia" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Mi Roadmap Profesional</h2>
      
      <!-- Horizontal Roadmap with Wave -->
      <div class="roadmap-horizontal-wrapper">
        <div class="roadmap-horizontal-container">
          <!-- SVG Wave Line -->
          <svg class="wave-line" preserveAspectRatio="none">
            <path class="wave-path" />
          </svg>
          
          <!-- Timeline Items -->
          <div class="horizontal-timeline">
            <div v-for="(item, index) in roadmapItems" :key="`${item.companyId}-${item.type}-${item.id}`" 
                 class="horizontal-item" 
                 :class="{ 'top': index % 2 === 0, 'bottom': index % 2 !== 0 }"
                 data-aos="fade-up" 
                 :data-aos-delay="index * 50">
              
              <!-- Timeline Dot/Circle -->
              <div class="timeline-circle" 
                   :style="{ backgroundColor: item.brandColor, borderColor: item.brandColor }"
                   @click="item.type === 'milestone' ? openMilestoneModal(item) : null"
                   :class="{ 'clickable': item.type === 'milestone' || item.type === 'continue' }">
                <img v-if="item.type === 'company'" :src="item.logo" :alt="item.name" class="circle-logo" />
                <i v-else-if="item.type === 'milestone'" class="fas" :class="milestoneIcons[item.title] || 'fa-star'" style="font-size: 1.8rem; color: white;"></i>
                <i v-else-if="item.type === 'continue'" class="fas fa-ellipsis-h" style="font-size: 1.8rem; color: white;"></i>
              </div>
              
              <!-- Content Card -->
              <div class="horizontal-card" 
                   :style="{ borderColor: item.brandColor }"
                   :class="{ 'milestone-card-compact': item.type === 'milestone', 'continue-card': item.type === 'continue' }"
                   @click="item.type === 'milestone' ? openMilestoneModal(item) : null">
                <!-- Company Header -->
                <div v-if="item.type === 'company'" class="company-content">
                  <h3 :style="{ color: item.brandColor }">{{ item.name }}</h3>
                  <p class="position">{{ item.position }}</p>
                  <p class="description">{{ item.description }}</p>
                </div>
                
                <!-- Milestone Content -->
                <div v-else-if="item.type === 'milestone'" class="milestone-content-simple">
                  <i class="fas milestone-icon-card" :class="milestoneIcons[item.title] || 'fa-star'" :style="{ color: item.brandColor }"></i>
                  <h5>{{ item.title }}</h5>
                </div>
                
                <!-- Continue Card -->
                <div v-else-if="item.type === 'continue'" class="continue-content">
                  <h3>Continuará...</h3>
                  <p>🚀 Más proyectos en camino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal para Milestone -->
      <transition name="modal-fade">
        <div v-if="showMilestoneModal" class="milestone-modal" @click="closeMilestoneModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeMilestoneModal">×</button>
            <div class="milestone-modal-header">
              <i class="fas milestone-modal-icon" :class="milestoneIcons[selectedMilestone?.title]" :style="{ color: selectedMilestone?.brandColor }"></i>
              <h3>{{ selectedMilestone?.title }}</h3>
            </div>
            <p class="milestone-modal-description">{{ selectedMilestone?.description }}</p>
            
            <!-- Images -->
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
            
            <!-- Technologies -->
            <div class="technologies">
              <span v-for="tech in selectedMilestone?.technologies" :key="tech" class="tech-badge" :style="{ backgroundColor: `${selectedMilestone?.brandColor}20`, color: selectedMilestone?.brandColor }">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </transition>
      
      <!-- Modal para ver imágenes en grande -->
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
  name: 'Experience',
  data() {
    return {
      showImageModal: false,
      selectedImage: '',
      selectedImageTitle: '',
      showMilestoneModal: false,
      selectedMilestone: null,
      milestoneIcons: {
        'Dashboard Power BI en Tiempo Real': 'fa-chart-line',
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
          type: 'AgroTech',
          brandColor: '#fd801d',
          description: 'AgroTech dedicada a la digitalización del trabajo en el campo. 🍊',
          milestones: [
            {
              id: 1,
              title: 'Dashboard Power BI en Tiempo Real',
              description: 'Desarrollo de informes interactivos con Power BI utilizando DAX para análisis de datos en tiempo real. Creación de visualizaciones para seguimiento de maquinaria, personal, suministros y costes operativos. Embedido de dashboards en la aplicación web principal.',
              technologies: ['Power BI', 'DAX', 'SQL', 'Data Analysis'],
              images: ['informe-powerBi.png']
            },
            {
              id: 2,
              title: 'Data Warehouse PostgreSQL',
              description: 'Diseño e implementación de un Data Warehouse con PostgreSQL para optimizar consultas analíticas sin sobrecargar la base de datos principal. ETL automatizado para sincronización de datos, mejorando el rendimiento de reportes en un 70%.',
              technologies: ['PostgreSQL', 'Data Modeling'],
              images: []
            },
            {
              id: 3,
              title: 'Sistema de Fichaje con Reconocimiento Facial',
              description: 'Desarrollo de aplicación en .NET para control de asistencia con reconocimiento facial. Implementación de algoritmos de detección facial para registro automático de entrada/salida de trabajadores en el campo.',
              technologies: ['.NET', 'C#'],
              images: []
            }
          ]
        },
        {
          id: 'live4life',
          name: 'Live4Life',
          logo: '/images/live4life.png',
          position: 'Full Stack Developer / CTO',
          type: 'PropTech',
          brandColor: '#ff2773',
          description: 'PropTech dedicada al alquiler de pisos y habitaciones a estudiantes.',
          milestones: [
            {
              id: 1,
              title: 'Circuito de Emails Automatizado',
              description: 'Implementación completa de un sistema de email marketing automatizado con Brevo (anteriormente Sendinblue). Creación de flujos de trabajo personalizados para onboarding de usuarios, recordatorios de pago y comunicación con propietarios.',
              technologies: ['Brevo', 'Django', 'Celery'],
              images: ['brevo-portfolio.png']
            },
            {
              id: 2,
              title: 'Optimización SEO y Posicionamiento',
              description: 'Mejora integral del SEO técnico y de contenido, Optimización de Core Web Vitals, generación automática de sitemaps, y estrategia de contenido que resultó en un aumento del tráfico orgánico.',
              technologies: ['SEO', 'Google Analytics'],
              images: ['seo-portfolio.png']
            },
            {
              id: 3,
              title: 'Integraciones Inmobiliarias',
              description: 'Desarrollo de conectores API para sincronización automática de propiedades con los principales portales inmobiliarios: Fotocasa, Idealista, y Pisoscom. Sistema de sincronización bidireccional y gestión de inventario en tiempo real.',
              technologies: ['Django', 'Celery', 'REST APIs'],
              images: ['portales-portfolio.png']
            },
            {
              id: 4,
              title: 'Embudo de Venta para Leads',
              description: 'Diseño e implementación de un embudo de ventas automatizado para leads calientes. Notificaciones en tiempo real, y dashboard de seguimiento para el equipo de ventas.',
              technologies: ['Django', 'Vue.js', 'Celery'],
              images: ['embudo-portfolio.png']
            },
            {
              id: 5,
              title: 'Formación de Personal',
              description: 'Creación de programa de formación técnica para el equipo. Documentación de procesos, best practices y arquitectura del sistema. Implementación de code reviews y estándares de desarrollo.',
              technologies: ['Postman', 'Documentation'],
              images: ['postman-portfolio.png']
            },
            {
              id: 6,
              title: 'Optimización y Configuración Google Cloud',
              description: 'Arquitectura y optimización completa del entorno Google Cloud. Configuración de Cloud Run para orquestación de contenedores, implementación de Cloud Build para CI/CD automatizado, optimización de costes y recursos. Gestión de Cloud Storage para assets y backups.',
              technologies: ['Google Cloud Run', 'Cloud Build', 'Cloud Storage', 'Docker', 'CI/CD'],
              images: []
            }
          ]
        }
      ]
    }
  },
  computed: {
    roadmapItems() {
      const items = []
      
      // Recorrer las empresas en orden: primero VisualNacert, luego Live4Life
      this.companies.forEach((company) => {
        // Agregar header de la empresa
        items.push({
          type: 'company',
          companyId: company.id,
          name: company.name,
          logo: company.logo,
          position: company.position,
          brandColor: company.brandColor,
          description: company.description
        })
        
        // Agregar los milestones de la empresa
        company.milestones.forEach((milestone, index) => {
          items.push({
            type: 'milestone',
            companyId: company.id,
            id: milestone.id,
            milestoneIndex: index + 1,
            title: milestone.title,
            description: milestone.description,
            technologies: milestone.technologies,
            images: milestone.images,
            brandColor: company.brandColor
          })
        })
      })
      
      // Agregar card "Continuará..."
      items.push({
        type: 'continue',
        companyId: 'continue',
        brandColor: '#667eea'
      })
      
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
    },
    drawWavePath() {
      const svg = document.querySelector('.wave-line')
      const path = document.querySelector('.wave-path')
      
      if (!svg || !path) return
      
      // Crear el gradiente
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')
      gradient.setAttribute('id', 'gradient')
      gradient.setAttribute('x1', '0%')
      gradient.setAttribute('y1', '0%')
      gradient.setAttribute('x2', '100%')
      gradient.setAttribute('y2', '0%')
      
      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
      stop1.setAttribute('offset', '0%')
      stop1.setAttribute('style', 'stop-color:#fd801d;stop-opacity:1')
      
      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
      stop2.setAttribute('offset', '35%')
      stop2.setAttribute('style', 'stop-color:#fd801d;stop-opacity:1')
      
      const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
      stop3.setAttribute('offset', '65%')
      stop3.setAttribute('style', 'stop-color:#ff2773;stop-opacity:1')
      
      const stop4 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
      stop4.setAttribute('offset', '100%')
      stop4.setAttribute('style', 'stop-color:#ff2773;stop-opacity:1')
      
      gradient.appendChild(stop1)
      gradient.appendChild(stop2)
      gradient.appendChild(stop3)
      gradient.appendChild(stop4)
      defs.appendChild(gradient)
      svg.appendChild(defs)
      
      // Calcular el ancho basado en el número de items
      const itemCount = this.roadmapItems.length
      const itemWidth = 350 + 48 // ancho del item + gap
      const totalWidth = (itemCount * itemWidth) + 200
      
      svg.setAttribute('width', totalWidth)
      svg.style.width = `${totalWidth}px`
      
      // Crear el path ondulado con más serpenteo y curvas pronunciadas
      let pathData = 'M 50 100 '
      const amplitude = 100 // Altura de la onda muy aumentada
      const wavelength = itemWidth // Longitud de onda = ancho del item
      
      for (let i = 0; i < itemCount; i++) {
        const x = 50 + (i * itemWidth) + (itemWidth / 2)
        const y = i % 2 === 0 ? 100 - amplitude : 100 + amplitude
        
        if (i === 0) {
          pathData += `Q ${x - wavelength / 4} ${y} ${x} ${y} `
        } else {
          const prevY = (i - 1) % 2 === 0 ? 100 - amplitude : 100 + amplitude
          const prevX = 50 + ((i - 1) * itemWidth) + (itemWidth / 2)
          const controlX1 = prevX + (wavelength / 3)
          const controlY1 = prevY
          const controlX2 = x - (wavelength / 3)
          const controlY2 = y
          pathData += `C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${x} ${y} `
        }
      }
      
      path.setAttribute('d', pathData)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawWavePath()
    })
  }
}
</script>

<style scoped>
#experiencia {
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Horizontal Roadmap Wrapper */
.roadmap-horizontal-wrapper {
  width: 100%;
  position: relative;
  padding: 2rem 0;
}

.roadmap-horizontal-container {
  position: relative;
  overflow-x: auto;
  overflow-y: visible;
  padding: 6rem 2rem;
  margin: 0 auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Custom scrollbar */
.roadmap-horizontal-container::-webkit-scrollbar {
  height: 10px;
}

.roadmap-horizontal-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.roadmap-horizontal-container::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 10px;
}

.roadmap-horizontal-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, #764ba2, #667eea);
}

/* Wave SVG Line */
.wave-line {
  position: absolute;
  width: 100%;
  height: 200px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 0;
}

.wave-path {
  fill: none;
  stroke: url(#gradient);
  stroke-width: 6;
  stroke-linecap: round;
}

/* Horizontal Timeline Container */
.horizontal-timeline {
  display: flex;
  gap: 3rem;
  position: relative;
  min-width: max-content;
  padding: 0 2rem;
}

/* Horizontal Item */
.horizontal-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 350px;
  flex-shrink: 0;
}

.horizontal-item.top {
  justify-content: flex-start;
}

.horizontal-item.bottom {
  justify-content: flex-end;
  flex-direction: column-reverse;
}

/* Timeline Circle */
.timeline-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid;
  background: var(--card-bg);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 0 0 8px rgba(255, 255, 255, 0.03);
  z-index: 2;
  position: relative;
  transition: all 0.3s ease;
  margin: 2rem 0;
}

.timeline-circle:hover {
  transform: scale(1.15);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 12px rgba(255, 255, 255, 0.05);
}

.timeline-circle.clickable {
  cursor: pointer;
}

.timeline-circle.clickable:hover {
  transform: scale(1.2);
}

.circle-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.circle-icon {
  font-size: 2rem;
}

.circle-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
}

/* Horizontal Card */
.horizontal-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 1.75rem;
  border: 2px solid;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  width: 100%;
  position: relative;
}

.horizontal-card.collapsed {
  cursor: pointer;
  min-width: 280px;
  max-width: 300px;
}

.horizontal-card.milestone-card-compact {
  cursor: pointer;
  min-width: 220px;
  max-width: 250px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.horizontal-card.milestone-card-compact:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
}

.horizontal-card.continue-card {
  min-width: 280px;
  max-width: 320px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 2px dashed;
  cursor: default;
}

.horizontal-card.continue-card:hover {
  transform: translateY(-5px);
}

.horizontal-item.top .horizontal-card {
  margin-bottom: -2rem;
}

.horizontal-item.bottom .horizontal-card {
  margin-top: -2rem;
}

.horizontal-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* Company Content */
.company-content h3 {
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.company-content .position {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.company-content .description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Milestone Content Simplified */
.milestone-content-simple {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

.milestone-icon-card {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.milestone-content-simple h5 {
  font-size: 1.05rem;
  color: var(--primary-color);
  margin: 0;
  line-height: 1.3;
  font-weight: 600;
}

/* Continue Card */
.continue-content {
  text-align: center;
}

.continue-content h3 {
  font-size: 1.8rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.continue-content p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Milestone Images */
.milestone-images {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0.75rem 0;
}

.milestone-img {
  width: 100%;
  max-height: 140px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}

.milestone-img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Technologies */
.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tech-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.tech-badge:hover {
  transform: translateY(-2px);
  filter: brightness(1.15);
}

/* Milestone Modal */
.milestone-modal {
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
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(8px);
  padding: 2rem;
}

.milestone-modal .modal-content {
  max-width: 700px;
  width: 100%;
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
  line-height: 1.2;
}

.milestone-modal-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.milestone-modal-img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Image Modal */
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
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(8px);
  padding: 2rem;
}

.modal-content {
  position: relative;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease;
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

.modal-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 75vh;
  margin-bottom: 1rem;
}

.modal-image {
  max-width: 100%;
  max-height: 75vh;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal-title {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  padding: 0 2rem;
}

/* Animations */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .roadmap-horizontal-container {
    padding: 4rem 1rem;
  }

  .horizontal-timeline {
    gap: 2rem;
    padding: 0 1rem;
  }

  .horizontal-item {
    min-width: 280px;
    max-width: 300px;
  }

  .timeline-circle {
    width: 60px;
    height: 60px;
    margin: 1.5rem 0;
  }

  .timeline-circle i {
    font-size: 1.5rem !important;
  }

  .circle-logo {
    width: 40px;
    height: 40px;
  }

  .horizontal-card {
    padding: 1.5rem;
  }

  .horizontal-card.milestone-card-compact {
    min-width: 200px;
    max-width: 220px;
    padding: 1.25rem;
  }

  .horizontal-card.continue-card {
    min-width: 240px;
    max-width: 260px;
  }

  .milestone-icon-card {
    font-size: 2rem !important;
  }

  .milestone-content-simple h5 {
    font-size: 0.95rem;
  }

  .continue-content h3 {
    font-size: 1.4rem;
  }

  .continue-content p {
    font-size: 0.9rem;
  }

  .company-content h3 {
    font-size: 1.3rem;
  }

  .company-content .position {
    font-size: 0.95rem;
  }

  .company-content .description {
    font-size: 0.85rem;
  }

  .tech-badge {
    padding: 0.35rem 0.7rem;
    font-size: 0.75rem;
  }

  /* Modal en mobile */
  .milestone-modal .modal-content {
    padding: 1.5rem;
    max-width: 95%;
  }

  .milestone-modal-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .milestone-modal-icon {
    font-size: 2.5rem;
  }

  .milestone-modal-header h3 {
    font-size: 1.4rem;
  }

  .milestone-modal-description {
    font-size: 0.9rem;
  }

  .milestone-modal-img {
    max-height: 200px;
  }

  .image-modal {
    padding: 1rem;
  }

  .modal-content {
    padding: 1.5rem;
    max-width: 100%;
  }

  .modal-image {
    max-height: 65vh;
  }

  .modal-title {
    font-size: 1rem;
    padding: 0 1rem;
  }
}
</style>
