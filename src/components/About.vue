<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Sobre mí</h2>
      
      <div class="about-content" data-aos="fade-up" data-aos-delay="200">
        <div class="about-text">
          <div class="about-cards-grid">
            <div class="about-card" data-aos="fade-up" data-aos-delay="100">
              <div class="card-icon"><i class="fas fa-coffee"></i></div>
              <p class="card-text">Semi adicto al café (el diagnóstico lo confirma)</p>
            </div>
            <div class="about-card" data-aos="fade-up" data-aos-delay="150">
              <div class="card-icon"><i class="fas fa-gamepad"></i></div>
              <p class="card-text">Gamer frustrado que piensa que juega bien</p>
            </div>
            <div class="about-card" data-aos="fade-up" data-aos-delay="200">
              <div class="card-icon"><i class="fas fa-solid fa-futbol"></i></div>
              <p class="card-text">Futbolista mediocre retirado (de forma involuntaria)</p>
            </div>
            <div class="about-card" data-aos="fade-up" data-aos-delay="250">
              <div class="card-icon"><i class="fas fa-moon"></i></div>
              <p class="card-text">Apasionado por los domingos disfuncionales</p>
            </div>
            <div class="about-card" data-aos="fade-up" data-aos-delay="300">
              <div class="card-icon"><i class="fas fa-pizza-slice"></i></div>
              <p class="card-text">Crítico de pizzerías (experiencia: 20+ años)</p>
            </div>
            <div class="about-card" data-aos="fade-up" data-aos-delay="350">
              <div class="card-icon"><i class="fas fa-film"></i></div>
              <p class="card-text">Series addict con sentimiento de culpabilidad (me las fundo en un finde)</p>
            </div>
          </div>
        </div>

        <div class="carousel-container">
          <div class="carousel">
            <transition name="fade-image" mode="out-in">
              <div class="carousel-slide" :key="currentImageIndex">
                <img 
                  :src="`/images/${images[currentImageIndex]}`" 
                  :alt="images[currentImageIndex]"
                  class="carousel-image"
                />
              </div>
            </transition>
          </div>

          <div class="carousel-controls">
            <button @click="previousImage" class="carousel-btn carousel-btn-prev" aria-label="Imagen anterior">
              <span>❮</span>
            </button>
            
            <div class="carousel-dots">
              <button 
                v-for="(image, index) in images" 
                :key="index"
                @click="currentImageIndex = index"
                :class="['dot', { active: index === currentImageIndex }]"
                :aria-label="`Ir a imagen ${index + 1}`"
              ></button>
            </div>

            <button @click="nextImage" class="carousel-btn carousel-btn-next" aria-label="Siguiente imagen">
              <span>❯</span>
            </button>
          </div>

          <!-- <div class="carousel-thumbnails">
            <button 
              v-for="(image, index) in images"
              :key="index"
              @click="currentImageIndex = index"
              :class="['thumbnail', { active: index === currentImageIndex }]"
            >
              <img :src="`/images/${image}`" :alt="`Miniatura ${index + 1}`" />
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      images: [
        'vds-pablo.jpeg',
        'albania-pablo.jpeg',
        'about-pablo.jpeg'
      ],
      currentImageIndex: 0
    }
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    },
    previousImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<style scoped>
.about {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(253, 128, 29, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.about-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.about-card {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.about-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-color);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
}

.card-icon {
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}

.card-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.5;
  margin: 0;
  letter-spacing: 0.3px;
}

.carousel-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.carousel {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  background: var(--card-bg);
}

.carousel-slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideTransition 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideTransition {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Transición de imágenes suave */
.fade-image-enter-active,
.fade-image-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-image-enter-from {
  opacity: 0;
}

.fade-image-leave-to {
  opacity: 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.6s ease-in-out;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.carousel-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #000000;
  background: #000000;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.carousel-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: scale(1.1);
}

.carousel-btn:active {
  transform: scale(0.95);
}

.carousel-dots {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #cccccc;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: #000000;
  transform: scale(1.2);
}

.dot.active {
  background: #000000;
  width: 32px;
  border-radius: 6px;
}

.carousel-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.thumbnail {
  aspect-ratio: 1 / 1;
  border: 3px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  background: transparent;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumbnail:hover img {
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--card-bg), 0 0 0 4px var(--primary-color);
}

/* Dark Theme Styles */
:global(.dark-theme) .about-card {
  background: var(--card-bg);
  border-color: rgba(96, 165, 250, 0.2);
}

:global(.dark-theme) .about-card:hover {
  border-color: rgba(96, 165, 250, 0.6);
  background: linear-gradient(135deg, #1a1f3a 0%, #141829 100%);
  box-shadow: 0 12px 30px rgba(96, 165, 250, 0.2);
}

:global(.dark-theme) .card-text {
  color: var(--text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .about-card {
    padding: 20px;
  }

  .card-icon {
    font-size: 2rem;
    height: 50px;
  }

  .card-text {
    font-size: 0.95rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .carousel-thumbnails {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .about {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 40px;
  }

  .about-cards-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .about-card {
    padding: 18px;
  }

  .card-icon {
    font-size: 1.8rem;
    height: 45px;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .carousel-controls {
    gap: 15px;
  }

  .carousel-btn {
    width: 36px;
    height: 36px;
  }

  .carousel-thumbnails {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}
</style>
