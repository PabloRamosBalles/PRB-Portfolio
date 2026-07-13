<template>
  <section id="habilidades" data-aos="fade-up">
    <div class="container">
      <h2 data-aos="fade-up">Mis Habilidades</h2>
      
      <!-- Slider 1: Izquierda a Derecha -->
      <div class="skills-slider" data-aos="fade-right" data-aos-delay="200">
        <div class="slider-container">
          <div class="slider-track slider-ltr">
            <div 
              v-for="(skill, index) in skillsGroup1" 
              :key="`group1-${index}`"
              class="skill-item"
              :style="{ 
                'background': `${skill.color}15`, 
                'border-color': `${skill.color}40`,
                '--skill-color': skill.color
              }"
            >
              <i :class="`fas ${skill.icon}`" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
            <!-- Duplicate para animación infinita -->
            <div 
              v-for="(skill, index) in skillsGroup1" 
              :key="`group1-dup-${index}`"
              class="skill-item"
              :style="{ 
                'background': `${skill.color}15`, 
                'border-color': `${skill.color}40`,
                '--skill-color': skill.color
              }"
            >
              <i :class="`fas ${skill.icon}`" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider 2: Derecha a Izquierda -->
      <div class="skills-slider" data-aos="fade-left" data-aos-delay="400">
        <div class="slider-container">
          <div class="slider-track slider-rtl">
            <div 
              v-for="(skill, index) in skillsGroup2" 
              :key="`group2-${index}`"
              class="skill-item"
              :style="{ 
                'background': `${skill.color}15`, 
                'border-color': `${skill.color}40`,
                '--skill-color': skill.color
              }"
            >
              <i :class="`fas ${skill.icon}`" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
            <!-- Duplicate para animación infinita -->
            <div 
              v-for="(skill, index) in skillsGroup2" 
              :key="`group2-dup-${index}`"
              class="skill-item"
              :style="{ 
                'background': `${skill.color}15`, 
                'border-color': `${skill.color}40`,
                '--skill-color': skill.color
              }"
            >
              <i :class="`fas ${skill.icon}`" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider 3: Izquierda a Derecha -->
      <div class="skills-slider" data-aos="fade-right" data-aos-delay="600">
        <div class="slider-container">
          <div class="slider-track slider-ltr">
            <div 
              v-for="(skill, index) in skillsGroup3" 
              :key="`group3-${index}`"
              class="skill-item"
              :style="{ 
                'background': `${skill.color}15`, 
                'border-color': `${skill.color}40`,
                '--skill-color': skill.color
              }"
            >
              <i :class="`fas ${skill.icon}`" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
            <!-- Duplicate para animación infinita -->
            <div 
              v-for="(skill, index) in skillsGroup3" 
              :key="`group3-dup-${index}`"
              class="skill-item"
              :style="{ 
                'background': `${skill.color}15`, 
                'border-color': `${skill.color}40`,
                '--skill-color': skill.color
              }"
            >
              <i :class="`fas ${skill.icon}`" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillsGroup1: [
        { name: 'Python', icon: 'fa-code', color: '#3776ab' },
        { name: 'Django', icon: 'fa-leaf', color: '#ff9500' },
        { name: 'PostgreSQL', icon: 'fa-database', color: '#336791' },
        { name: 'Docker', icon: 'fa-cube', color: '#2496ed' },
        { name: 'Redis', icon: 'fa-server', color: '#dc382d' },
        { name: 'Celery', icon: 'fa-bolt', color: '#37b24d' }
      ],
      skillsGroup2: [
        { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#42b983' },
        { name: 'Redsys', icon: 'fa-credit-card', color: '#FE5B02' },
        { name: 'Nuxt.js', icon: 'fa-layer-group', color: '#00c58e' },
        { name: 'REST APIs', icon: 'fa-code', color: '#ff9500' },
        { name: 'Stripe', icon: 'fa-credit-card', color: '#635bff' },
        { name: 'Git', icon: 'fa-code-branch', color: '#f34f29' }
      ],
      skillsGroup3: [
        { name: 'Google Cloud', icon: 'fa-cloud', color: '#4285f4' },
        { name: 'CI/CD', icon: 'fa-code-branch', color: '#ff9500' },
        { name: 'Google Cloud Run', icon: 'fa-rocket', color: '#4285f4' },
        { name: 'Google Cloud Build', icon: 'fa-hammer', color: '#4285f4' },
        { name: 'Google Cloud Storage', icon: 'fa-floppy-disk', color: '#4285f4' },
        { name: 'i18n', icon: 'fa-globe', color: '#FE5B02' }
      ]
    }
  }
}
</script>

<style scoped>
#habilidades {
  padding: 5rem 0;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

.skills-slider {
  /* margin-bottom: 2rem; */
  overflow: hidden;
  width: 100%;
}

.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  width: fit-content;
  padding: 1.5rem 0;
}

/* Animaciones direccionales */
.slider-ltr {
  animation: slideMarqueeLTR 40s linear infinite;
}

.slider-rtl {
  animation: slideMarqueeRTL 40s linear infinite;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
  background: rgba(96, 165, 250, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(96, 165, 250, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: fit-content;
}

.skill-item:hover {
  background: var(--skill-color, rgba(96, 165, 250, 0.2));
  border-color: var(--skill-color, rgba(96, 165, 250, 0.5));
  transform: translateY(-4px);
  box-shadow: 0 8px 20px var(--skill-color, rgba(96, 165, 250, 0.2));
}

.skill-icon {
  font-size: 1.5rem;
  color: var(--skill-color, var(--primary-color));
  flex-shrink: 0;
  width: 1.5rem;
  text-align: center;
}

.skill-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--skill-color, var(--text-primary));
  white-space: nowrap;
}

/* Keyframes para izquierda a derecha */
@keyframes slideMarqueeLTR {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Keyframes para derecha a izquierda */
@keyframes slideMarqueeRTL {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .skills-slider {
    margin-bottom: 2rem;
  }

  .slider-track {
    gap: 1rem;
    animation-duration: 25s !important;
  }

  .skill-item {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  .skill-icon {
    font-size: 1.2rem;
  }

  .skill-name {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .slider-track {
    gap: 0.8rem;
    animation-duration: 20s !important;
  }

  .skill-item {
    padding: 0.6rem 1rem;
  }

  .skill-icon {
    font-size: 1rem;
  }

  .skill-name {
    font-size: 0.85rem;
  }
}
</style>
