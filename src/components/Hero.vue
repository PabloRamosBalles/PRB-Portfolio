<template>
  <section id="inicio" class="hero">
    <Navigation />
    
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-bg"></div>
    </div>
    
    <div class="hero-container">
      <div class="hero-content" data-aos="fade-up">
        <div class="hero-header">
          <!-- <span class="subtitle-tag">👋 Bienvenido</span> -->
          <h1 class="hero-title">
            <span class="title-line">Soy Pablo Ramos</span>
            <span class="title-highlight">Desarrollador Full Stack</span>
          </h1>
        </div>
        
        <!-- <div class="hero-description">
          <p class="description-text">
            Especializado en 
            <span class="highlight-tech">Python/Django</span>, 
            <span class="highlight-tech">Vue.js</span> y 
            <span class="highlight-tech">Cloud Computing</span>
          </p>
          <p class="description-subtext">
            Creando soluciones digitales escalables que transforman ideas en realidad
          </p>
        </div> -->

        <div class="typewriter-section">
          <span class="label">Mi rol actual:</span>
          <div class="typewriter-display">
            <span class="typewriter-text">{{ displayedText }}<span class="cursor"></span></span>
          </div>
        </div>

        <div class="hero-cta">
          <a href="#experiencia" class="cta-button primary">
            <span>Ver mi experiencia</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#contacto" class="cta-button secondary">
            <span>Contactar</span>
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="500">
          <span>Desplázate para más</span>
          <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Hero',
  components: {
    Navigation
  },
  data() {
    return {
      roles: [
        'Full Stack Developer',
        'Dev Team Lead / CTO',
        'Junior Cloud DevOps'
      ],
      subtitle: 'Construyendo soluciones escalables con Python/Django y Vue.js/Nuxt',
      displayedText: '',
      currentRoleIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      typeSpeed: 50,
      deleteSpeed: 30,
      pauseTime: 2000
    }
  },
  mounted() {
    setTimeout(() => {
      this.typeWriter()
    }, 500)
  },
  methods: {
    typeWriter() {
      const currentRole = this.roles[this.currentRoleIndex]
      
      if (!this.isDeleting) {
        // Typing
        if (this.currentCharIndex < currentRole.length) {
          this.displayedText += currentRole.charAt(this.currentCharIndex)
          this.currentCharIndex++
          setTimeout(() => this.typeWriter(), this.typeSpeed)
        } else {
          // Pause before deleting
          this.isDeleting = true
          setTimeout(() => this.typeWriter(), this.pauseTime)
        }
      } else {
        // Deleting
        if (this.currentCharIndex > 0) {
          this.displayedText = currentRole.substring(0, this.currentCharIndex - 1)
          this.currentCharIndex--
          setTimeout(() => this.typeWriter(), this.deleteSpeed)
        } else {
          // Move to next role
          this.isDeleting = false
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length
          setTimeout(() => this.typeWriter(), 200)
        }
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: moveOrb 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.8), rgba(102, 126, 234, 0.2));
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(244, 63, 94, 0.8), rgba(244, 63, 94, 0.2));
  bottom: -100px;
  right: -100px;
  animation-delay: 5s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.8), rgba(79, 172, 254, 0.2));
  top: 50%;
  right: 10%;
  animation-delay: 10s;
}

@keyframes moveOrb {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(50px, -50px);
  }
  66% {
    transform: translate(-50px, 50px);
  }
}

.grid-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}

.hero-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  animation: fadeInContent 0.8s ease-out;
}

@keyframes fadeInContent {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-header {
  margin-bottom: 3rem;
}

.subtitle-tag {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-color);
  background: rgba(102, 126, 234, 0.1);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  animation: slideInDown 0.8s ease-out;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  margin: 0;
  line-height: 1.2;
}

.title-line {
  display: block;
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  animation: slideInDown 0.8s ease-out 0.1s both;
}

.title-highlight {
  display: block;
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f043a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideInUp 0.8s ease-out 0.2s both;
  letter-spacing: -1px;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-description {
  margin: 2.5rem 0 3rem;
  animation: fadeIn 0.8s ease-out 0.3s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.description-text {
  font-size: 1.3rem;
  color: var(--text-primary);
  font-weight: 500;
  margin: 0 0 1rem;
  letter-spacing: 0.3px;
}

.highlight-tech {
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description-subtext {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
  opacity: 0.85;
}

.typewriter-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2.5rem 0 3rem;
  animation: fadeIn 0.8s ease-out 0.4s both;
}

.label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.typewriter-display {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  min-height: 2rem;
  background: rgba(102, 126, 234, 0.08);
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.1);
}

.typewriter-text {
  display: inline;
  font-family: 'JetBrains Mono', monospace;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background: linear-gradient(135deg, #667eea, #764ba2);
  margin-left: 6px;
  animation: blink 0.8s infinite;
  vertical-align: text-bottom;
  border-radius: 1px;
}

@keyframes blink {
  0%, 49%, 100% {
    opacity: 1;
  }
  50%, 99% {
    opacity: 0;
  }
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0 0;
  animation: fadeIn 0.8s ease-out 0.5s both;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cta-button.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
}

.cta-button.primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5);
}

.cta-button.primary i {
  transition: transform 0.3s ease;
}

.cta-button.primary:hover i {
  transform: translateX(4px);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.8);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  backdrop-filter: blur(10px);
}

.cta-button.secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 4rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-indicator span {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--text-secondary);
  border-radius: 50%;
  animation: scrollBounce 2s infinite;
}

.scroll-arrow i {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

@keyframes scrollBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

/* Dark Theme */
:global(.dark-theme) .hero {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
}

:global(.dark-theme) .typewriter-display {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.3);
  color: #a0d5ff;
}

:global(.dark-theme) .cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #a0d5ff;
  border-color: #a0d5ff;
}

:global(.dark-theme) .cta-button.secondary:hover {
  background: #a0d5ff;
  color: #0a0e27;
}

/* Responsive */
@media (max-width: 1024px) {
  .title-highlight {
    font-size: 3.2rem;
  }

  .title-line {
    font-size: 1.8rem;
  }

  .description-text {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 60px 20px 30px;
    min-height: calc(100vh - 70px);
  }

  .title-highlight {
    font-size: 2.5rem;
  }

  .title-line {
    font-size: 1.4rem;
  }

  .description-text {
    font-size: 1.1rem;
  }

  .typewriter-display {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }

  .hero-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 50px 15px 25px;
  }

  .title-highlight {
    font-size: 2rem;
    letter-spacing: -0.5px;
  }

  .title-line {
    font-size: 1.2rem;
  }

  .description-text {
    font-size: 1rem;
  }

  .subtitle-tag {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }

  .typewriter-display {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }

  .cta-button {
    font-size: 0.95rem;
    padding: 0.85rem 1.5rem;
  }

  .cta-button i {
    font-size: 0.9rem;
  }

  .scroll-indicator {
    margin-top: 2rem;
  }
}
</style>
<!-- 
  .hero-content {
    max-width: 100%;
    padding: 0 1.5rem;
  }

  .greeting {
    font-size: 1.2rem;
  }
  
  .name {
    font-size: 2.2rem;
    line-height: 1.2;
  }
  
  .typewriter-container {
    min-height: 60px;
    margin: 1rem 0;
  }
  
  .typewriter-text {
    font-size: 1.3rem;
    line-height: 1.4;
  }
  
  .subtitle {
    font-size: 0.95rem;
    padding: 1rem 1rem;
    margin: 1.25rem auto 1.5rem;
    line-height: 1.6;
    max-width: 90%;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .shape {
    filter: blur(40px);
  }
  
  .shape-1 {
    width: 200px;
    height: 200px;
  }
  
  .shape-2 {
    width: 250px;
    height: 250px;
  }
  
  .shape-3 {
    width: 150px;
    height: 150px;
  } -->
