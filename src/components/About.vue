<template>
  <section id="about" class="about">
    <div class="container">
      <header class="section-head" data-aos="fade-up">
        <span class="eyebrow"><b>04</b> / Sobre mí</span>
        <div>
          <h2 class="section-title">Sobre mí</h2>
          <p class="section-lead">Fuera del código también hay vida. Más o menos.</p>
        </div>
      </header>

      <div class="about-bento">
        <!-- Foto con controles superpuestos -->
        <div class="photo-tile" data-aos="fade-up">
          <transition name="fade-image" mode="out-in">
            <img
              :key="currentImageIndex"
              :src="`/images/${images[currentImageIndex]}`"
              :alt="`Foto de Pablo ${currentImageIndex + 1}`"
              class="photo"
            />
          </transition>

          <div class="photo-controls">
            <span class="photo-counter">{{ currentImageIndex + 1 }} / {{ images.length }}</span>
            <div class="photo-buttons">
              <button @click="previousImage" class="photo-btn" aria-label="Imagen anterior">
                <i class="fas fa-arrow-left"></i>
              </button>
              <button @click="nextImage" class="photo-btn" aria-label="Siguiente imagen">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Datos curiosos -->
        <ul class="about-text">
          <li
            v-for="(fact, index) in facts"
            :key="fact.text"
            class="about-card"
            data-aos="fade-up"
            :data-aos-delay="index * 60"
          >
            <span class="card-icon"><i class="fas" :class="fact.icon"></i></span>
            <p class="card-text">{{ fact.text }}</p>
          </li>
        </ul>
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
      currentImageIndex: 0,
      facts: [
        { icon: 'fa-mug-hot', text: 'Semi adicto al café (el diagnóstico lo confirma)' },
        { icon: 'fa-gamepad', text: 'Gamer frustrado que piensa que juega bien' },
        { icon: 'fa-futbol', text: 'Futbolista mediocre retirado (de forma involuntaria)' },
        { icon: 'fa-moon', text: 'Apasionado por los domingos disfuncionales' },
        { icon: 'fa-pizza-slice', text: 'Crítico de pizzerías (experiencia: 20+ años)' },
        { icon: 'fa-film', text: 'Series addict con sentimiento de culpabilidad (me las fundo en un finde)' }
      ]
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
.about-bento {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 16px;
}

/* ---------- Foto ---------- */
.photo-tile {
  position: relative;
  min-height: 520px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--bg-elev);
}

.photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 18px 18px;
  background: linear-gradient(to top, rgba(10, 10, 11, 0.85), transparent);
}

.photo-counter {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text);
}

.photo-buttons {
  display: flex;
  gap: 8px;
}

.photo-btn {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(10, 10, 11, 0.4);
  backdrop-filter: blur(6px);
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.photo-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}

.fade-image-enter-active,
.fade-image-leave-active {
  transition: opacity 0.45s ease;
}

.fade-image-enter-from,
.fade-image-leave-to {
  opacity: 0;
}

/* ---------- Baldosas de datos ---------- */
.about-text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  list-style: none;
}

.about-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-elev);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.about-card:hover {
  border-color: var(--line-strong);
  background: var(--bg-elev-2);
}

.card-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid var(--line-strong);
  color: var(--text);
  font-size: 1rem;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.about-card:hover .card-icon {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}

.card-text {
  font-size: 1rem;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--text);
}

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .about-bento {
    grid-template-columns: 1fr;
  }

  .photo-tile {
    min-height: 0;
    aspect-ratio: 4 / 5;
    max-height: 640px;
  }
}

/* Lista compacta en móvil: icono a la izquierda, texto a la derecha */
@media (max-width: 768px) {
  .about-text {
    grid-template-columns: 1fr;
    gap: 0;
    border-top: 1px solid var(--line);
  }

  .about-card {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    border: none;
    border-bottom: 1px solid var(--line);
    border-radius: 0;
    background: transparent;
  }

  .about-card:hover {
    background: transparent;
  }

  .card-icon {
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    font-size: 0.9rem;
  }

  .card-text {
    font-size: 0.92rem;
  }
}
</style>
