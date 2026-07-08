<template>
  <section id="inicio" class="hero">
    <div class="hero-background">
      <div class="animated-gradient"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    
    <div class="container" data-aos="fade-up">
      <div class="hero-content">
        <h1 class="hero-title">
          <!-- <span class="greeting">Hola, soy</span> -->
          <span class="name">Pablo Ramos Ballester</span>
        </h1>
        <div class="typewriter-container">
          <h2 class="typewriter-text">
            <span class="typewriter">{{ displayedText }}</span>
            <span class="cursor">|</span>
          </h2>
        </div>
        <p class="subtitle" data-aos="fade-up" data-aos-delay="300">{{ subtitle }}</p>
        <!-- <div class="hero-cta" data-aos="fade-up" data-aos-delay="500">
          <a href="#experiencia" class="btn btn-primary">Ver mi experiencia</a>
          <a href="#contacto" class="btn btn-secondary">Contactar</a>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      roles: [
        'Desarrollador Full Stack',
        'Python/Django Expert',
        'Vue.js Developer',
        'Cloud Architect'
      ],
      subtitle: 'Construyendo soluciones escalables con Python/Django y Vue.js',
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.animated-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(168, 85, 247, 0.1) 50%,
    rgba(236, 72, 153, 0.1) 100%
  );
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  top: 50%;
  right: 10%;
  animation-delay: 5s;
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  bottom: 10%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  margin-bottom: 1.5rem;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  animation: fadeInDown 0.8s ease-out;
}

.name {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.typewriter-container {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  width: 100%;
}

.typewriter-text {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary-color);
  min-height: 1.2em;
}

.typewriter {
  display: inline;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: var(--primary-color);
  margin-left: 4px;
  animation: blink 0.7s infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%, 49%, 100% {
    opacity: 1;
  }
  50%, 99% {
    opacity: 0;
  }
}

.subtitle {
  font-size: 1.25rem;
  color: white;
  margin: 1.5rem 0 2rem;
  line-height: 1.8;
  font-weight: 500;
  letter-spacing: 0.3px;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(168, 85, 247, 0.05));
  padding: 1.25rem 1.75rem;
  border-radius: 12px;
  border-left: 4px solid rgba(102, 126, 234, 0.5);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.subtitle:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  border-left-color: rgba(102, 126, 234, 0.8);
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    max-width: 100%;
    padding: 0;
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
    padding: 1rem 1.25rem;
    margin: 1.25rem 0 1.5rem;
    line-height: 1.6;
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
  }
}
</style>
