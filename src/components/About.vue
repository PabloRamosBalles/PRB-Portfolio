<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Sobre mí</h2>
      
      <div class="about-content" data-aos="fade-up" data-aos-delay="200">
        <div class="about-text">
          <p :class="['about-description', { expanded: isExpanded }]">
Soy una persona apasionada por la tecnología y la innovación, siempre con curiosidad por aprender cosas nuevas y mejorar lo que ya existe. Tengo experiencia en desarrollo web y en el diseño de soluciones digitales, y me gusta enfocarme en crear proyectos que no solo funcionen bien, sino que también sean intuitivos, visualmente atractivos y ofrezcan una gran experiencia de usuario.

Disfruto especialmente de transformar ideas en realidades digitales que aporten valor y tengan un impacto positivo en las personas y en los negocios. Me motiva ver cómo una idea sencilla puede evolucionar en algo útil, funcional y bien diseñado.

Fuera del trabajo, me gusta mantener un estilo de vida activo y equilibrado. Disfruto viajar, especialmente si es con mi perro, descubrir nuevos lugares y desconectar de la rutina. También soy bastante de deporte. Creo mucho en la actitud positiva, en rodearse de buena energía y en afrontar los retos con ganas y optimismo, tanto en lo profesional como en lo personal.
          </p>
          <button v-if="!isExpanded" @click="toggleExpanded" class="btn-see-more">
            Ver más
          </button>
          <button v-else @click="toggleExpanded" class="btn-see-more">
            Ver menos
          </button>
        </div>

        <div class="carousel-container">
          <div class="carousel">
            <div class="carousel-slide">
              <img 
                :src="`/images/${images[currentImageIndex]}`" 
                :alt="images[currentImageIndex]"
                class="carousel-image"
              />
            </div>
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
        // 'profile-pablo.jpeg',
        'albania-pablo.jpeg',
        'about-pablo.jpeg'
      ],
      currentImageIndex: 0,
      isExpanded: false
    }
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    },
    previousImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length
    },
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
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

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 20px;
  text-align: justify;
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
  max-height: 100%;
  overflow: hidden;
}

.btn-see-more {
  display: none;
  align-self: flex-start;
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.btn-see-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(253, 128, 29, 0.3);
}

.btn-see-more:active {
  transform: translateY(0);
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

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

  .btn-see-more {
    display: block;
  }

  .about-description {
    text-align: left;
    max-height: 120px;
  }

  .about-description.expanded {
    max-height: 1000px;
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
