<template>
  <div>
    <!-- Style Selector -->
    <div class="style-selector">
      <button @click="showSelector = !showSelector" class="selector-toggle">
        <i class="fas fa-palette"></i>
        Cambiar Estilo ({{ currentStyleNumber }}/5)
      </button>
      
      <transition name="slide">
        <div v-if="showSelector" class="selector-panel">
          <h4>Elige tu estilo de Roadmap</h4>
          <div class="style-options">
            <button 
              v-for="(style, index) in styles" 
              :key="index"
              @click="selectStyle(index)"
              class="style-option"
              :class="{ active: currentStyle === index }">
              <div class="style-preview">
                <i class="fas" :class="style.icon"></i>
              </div>
              <div class="style-info">
                <strong>{{ style.name }}</strong>
                <small>{{ style.description }}</small>
              </div>
            </button>
          </div>
        </div>
      </transition>
    </div>

    <!-- Current Style Component -->
    <component :is="currentComponent" />
  </div>
</template>

<script>
import ExperienceStyle1 from './ExperienceStyle1.vue'
import ExperienceStyle2 from './ExperienceStyle2.vue'
import ExperienceStyle3 from './ExperienceStyle3.vue'
import ExperienceStyle4 from './ExperienceStyle4.vue'
import ExperienceStyle5 from './ExperienceStyle5.vue'

export default {
  name: 'ExperienceSelector',
  components: {
    ExperienceStyle1,
    ExperienceStyle2,
    ExperienceStyle3,
    ExperienceStyle4,
    ExperienceStyle5
  },
  data() {
    return {
      currentStyle: 0,
      showSelector: false,
      styles: [
        {
          name: 'Timeline Vertical',
          description: 'Clásico y narrativo',
          icon: 'fa-timeline'
        },
        {
          name: 'Metro Map',
          description: 'Moderno y tech',
          icon: 'fa-subway'
        },
        {
          name: 'Cards 3D',
          description: 'Impactante visual',
          icon: 'fa-cube'
        },
        {
          name: 'Línea Horizontal',
          description: 'Minimalista pro',
          icon: 'fa-arrows-left-right'
        },
        {
          name: 'Grid Compacto',
          description: 'Máxima densidad',
          icon: 'fa-table-cells'
        }
      ]
    }
  },
  computed: {
    currentComponent() {
      return `ExperienceStyle${this.currentStyle + 1}`
    },
    currentStyleNumber() {
      return this.currentStyle + 1
    }
  },
  methods: {
    selectStyle(index) {
      this.currentStyle = index
      this.showSelector = false
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.style-selector {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 999;
}

.selector-toggle {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.selector-toggle:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
}

.selector-toggle i {
  font-size: 1.2rem;
}

.selector-panel {
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  background: var(--card-bg);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  min-width: 320px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.selector-panel h4 {
  margin: 0 0 1rem;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.style-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.style-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.style-option:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.5);
  transform: translateX(-5px);
}

.style-option.active {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border-color: #667eea;
}

.style-preview {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.style-info {
  flex: 1;
}

.style-info strong {
  display: block;
  color: var(--primary-color);
  margin-bottom: 0.2rem;
  font-size: 0.95rem;
}

.style-info small {
  color: var(--text-secondary);
  font-size: 0.8rem;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .style-selector {
    top: auto;
    bottom: 20px;
    right: 20px;
  }
  
  .selector-toggle {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
  
  .selector-panel {
    bottom: calc(100% + 1rem);
    top: auto;
    right: 0;
    min-width: 280px;
  }
}
</style>
