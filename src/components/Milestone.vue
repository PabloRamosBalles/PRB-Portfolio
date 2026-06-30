<template>
  <div class="milestone" :style="{ 'border-left-color': brandColor }">
    <div class="milestone-content">
      <h5 class="milestone-title">{{ milestone.title }}</h5>
      <p class="milestone-description">{{ milestone.description }}</p>
      
      <!-- Carrusel de imágenes con Swiper -->
      <div v-if="milestone.images && milestone.images.length > 0" class="milestone-images-container">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          navigation
          pagination
          :centered-slides="true"
          class="milestone-slider"
        >
          <swiper-slide v-for="(image, index) in milestone.images" :key="index" class="image-slide">
            <div class="image-container" @click="openImageModal(image)">
              <img :src="getImagePath(image)" :alt="milestone.title" class="slider-image" />
              <div class="image-overlay">
                <span>🔍 Ver imagen completa</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Tecnologías utilizadas -->
      <div class="milestone-technologies">
        <span 
          v-for="tech in milestone.technologies" 
          :key="tech"
          class="tech-badge"
          :style="{ backgroundColor: brandColor }"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'Milestone',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    milestone: {
      type: Object,
      required: true
    },
    brandColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      modules: [Navigation, Pagination]
    }
  },
  methods: {
    getImagePath(imageName) {
      return `/images/${imageName}`
    },
    openImageModal(image) {
      window.open(this.getImagePath(image), '_blank')
    }
  }
}
</script>

<style scoped>
.milestone {
  background: #fafafa;
  border-radius: 10px;
  padding: 2rem;
  border-left: 4px solid;
  transition: all 0.3s ease;
}

.milestone:hover {
  background: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transform: translateX(5px);
}

.milestone-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.milestone-title {
  font-size: 1.3rem;
  color: var(--secondary-color);
  margin: 0;
  font-weight: 700;
}

.milestone-description {
  color: #555;
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
}

/* Carrusel de imágenes */
.milestone-images-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.milestone-slider {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.image-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 16/9;
  background: #e0e0e0;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-container:hover .slider-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-weight: 600;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

/* Swiper customization */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--primary-color);
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 18px;
}

:deep(.swiper-pagination-bullet) {
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--primary-color);
}

/* Tecnologías */
.milestone-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tech-badge {
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .milestone {
    padding: 1.5rem;
  }

  .milestone-title {
    font-size: 1.1rem;
  }

  .milestone-description {
    font-size: 0.95rem;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 35px;
    height: 35px;
  }

  :deep(.swiper-button-next::after),
  :deep(.swiper-button-prev::after) {
    font-size: 16px;
  }
}
</style>
