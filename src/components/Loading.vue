<template>
  <div class="loading-container" :class="{ 'fade-out': isLoading === false }">
    <!-- Fondo de partículas flotantes -->
    <div class="particles">
      <div class="particle" v-for="i in 20" :key="i" :style="{ '--delay': i * 0.1 + 's' }"></div>
    </div>

    <div class="loader-content">
      <!-- Animación principal -->
      <div class="main-spinner">
        <div ref="lottieContainer" class="lottie-animation"></div>
        <div class="floating-icons">
          <span class="icon icon-1">{ }</span>
          <span class="icon icon-2">&lt;/&gt;</span>
          <span class="icon icon-3"></span>
          <span class="icon icon-4"></span>
        </div>
      </div>

      <!-- Textos dinámicos -->
      <div class="loading-texts">
        <p class="loading-text main-text">{{ currentMessage }}</p>
        <p class="loading-subtitle">{{ currentSubtitle }}</p>
      </div>

      <!-- Barra de progreso -->
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>

      <!-- Código flotante -->
      <div class="code-snippet">
        <span class="code-line"><span class="keyword">const</span> portfolio = <span class="string">'loading...'</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  name: 'Loading',
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      progress: 0,
      currentMessage: 'Inicializando...',
      currentSubtitle: 'compiling dreams into code',
      messages: [
        { text: 'Inicializando...', subtitle: 'compiling dreams into code' },
        { text: 'Leyendo código...', subtitle: 'parsing reality.js' },
        { text: 'Ejecutando funciones...', subtitle: 'debugging the matrix' },
        { text: 'Optimizando performance...', subtitle: 'boosting magic' },
        { text: 'Casi listo...', subtitle: 'async/await for destiny' },
      ],
      messageIndex: 0,
      progressInterval: null,
      messageInterval: null
    }
  },
  mounted() {
    // Animación Lottie
    this.initLottie()
    
    // Cambiar mensajes cada 800ms
    this.messageInterval = setInterval(() => {
      this.messageIndex = (this.messageIndex + 1) % this.messages.length
      this.currentMessage = this.messages[this.messageIndex].text
      this.currentSubtitle = this.messages[this.messageIndex].subtitle
    }, 800)

    // Incrementar barra de progreso
    this.progressInterval = setInterval(() => {
      if (this.progress < 95) {
        this.progress += Math.random() * 25
      }
    }, 400)
  },
  beforeUnmount() {
    if (this.progressInterval) clearInterval(this.progressInterval)
    if (this.messageInterval) clearInterval(this.messageInterval)
  },
  methods: {
    initLottie() {
      // Animación simple personalizada
      const animationData = {
        v: '5.7.0',
        fr: 60,
        ip: 0,
        op: 120,
        w: 200,
        h: 200,
        nm: 'Spinner',
        ddd: 0,
        assets: [],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: 'Shape Layer',
            sr: 1,
            ks: {
              o: { a: 0, k: 100 },
              r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] }, { t: 120, s: [360] }] },
              p: { a: 0, k: [100, 100, 0] },
              a: { a: 0, k: [0, 0, 0] },
              s: { a: 0, k: [100, 100, 100] }
            },
            ao: 0,
            shapes: [
              {
                ty: 'gr',
                it: [
                  {
                    d: 1,
                    ty: 'el',
                    s: { a: 0, k: [80, 80] },
                    p: { a: 0, k: [0, 0] },
                    nm: 'Ellipse Path 1',
                    mn: 'ADBE Vector Shape - Ellipse'
                  },
                  {
                    ty: 'st',
                    c: { a: 0, k: [0.2, 0.6, 1, 1] },
                    o: { a: 0, k: 100 },
                    w: { a: 0, k: 8 },
                    lc: 2,
                    lj: 2,
                    ml: 4,
                    nm: 'Stroke 1',
                    mn: 'ADBE Vector Graphic - Stroke'
                  },
                  {
                    ty: 'tr',
                    p: { a: 0, k: [0, 0] },
                    a: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [100, 100] },
                    r: { a: 0, k: 0 },
                    o: { a: 0, k: 100 },
                    nm: 'Transform'
                  }
                ],
                nm: 'Ellipse Group',
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: 'ADBE Vector Group',
                hd: false
              }
            ]
          }
        ]
      }

      try {
        lottie.loadAnimation({
          container: this.$refs.lottieContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData
        })
      } catch (error) {
        console.log('Error al cargar Lottie')
      }
    }
  }
}
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
  transition: opacity 0.8s ease-out, visibility 0.8s ease-out;
  opacity: 1;
  visibility: visible;
  overflow: hidden;
}

.loading-container.fade-out {
  opacity: 0;
  visibility: hidden;
}

/* Partículas flotantes */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(96, 165, 250, 0.5);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

.particle:nth-child(odd) {
  background: rgba(244, 114, 182, 0.4);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
}

.particle:nth-child(1) { top: 10%; left: 10%; width: 3px; height: 3px; }
.particle:nth-child(2) { top: 20%; right: 15%; animation-duration: 7s; }
.particle:nth-child(3) { top: 50%; left: 5%; animation-duration: 8s; }
.particle:nth-child(4) { top: 70%; right: 10%; animation-duration: 9s; }
.particle:nth-child(5) { top: 30%; right: 20%; animation-duration: 6.5s; }
.particle:nth-child(6) { bottom: 20%; left: 20%; animation-duration: 7.5s; }
.particle:nth-child(7) { top: 15%; left: 30%; animation-duration: 8.5s; }
.particle:nth-child(8) { bottom: 30%; right: 15%; animation-duration: 6s; }
.particle:nth-child(9) { top: 60%; left: 15%; animation-duration: 9.5s; }
.particle:nth-child(10) { bottom: 15%; right: 25%; animation-duration: 7s; }
.particle:nth-child(11) { top: 40%; left: 50%; animation-duration: 8s; }
.particle:nth-child(12) { top: 25%; right: 40%; animation-duration: 6.5s; }
.particle:nth-child(13) { bottom: 25%; left: 40%; animation-duration: 9s; }
.particle:nth-child(14) { top: 55%; right: 30%; animation-duration: 7.5s; }
.particle:nth-child(15) { top: 35%; left: 70%; animation-duration: 8.5s; }
.particle:nth-child(16) { bottom: 35%; right: 45%; animation-duration: 6.8s; }
.particle:nth-child(17) { top: 65%; left: 25%; animation-duration: 9.2s; }
.particle:nth-child(18) { top: 20%; right: 60%; animation-duration: 7.2s; }
.particle:nth-child(19) { bottom: 20%; left: 60%; animation-duration: 8.3s; }
.particle:nth-child(20) { top: 75%; right: 70%; animation-duration: 6.9s; }

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 10;
  position: relative;
}

/* Spinner principal */
.main-spinner {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lottie-animation {
  width: 100%;
  height: 100%;
}

/* Iconos flotantes */
.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  position: absolute;
  font-size: 1.8rem;
  font-weight: bold;
  opacity: 0.7;
  color: #60a5fa;
  font-family: 'Monaco', 'Courier New', monospace;
}

.icon-1 {
  animation: orbit 4s linear infinite;
  --x: 80px;
  --y: 0;
}

.icon-2 {
  animation: orbit 4s linear infinite;
  animation-delay: 1s;
  --x: 0;
  --y: 80px;
  color: #f472b6;
}

.icon-3 {
  animation: orbit 4s linear infinite;
  animation-delay: 2s;
  --x: -80px;
  --y: 0;
  color: #34d399;
}

.icon-4 {
  animation: orbit 4s linear infinite;
  animation-delay: 3s;
  --x: 0;
  --y: -80px;
  color: #fbbf24;
}

@keyframes orbit {
  from {
    transform: rotateZ(0deg) translateX(var(--x)) rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg) translateX(var(--x)) rotateZ(-360deg);
  }
}

/* Textos de carga */
.loading-texts {
  text-align: center;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.loading-text {
  font-size: 1.3rem;
  color: #60a5fa;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  min-height: 1.5em;
  animation: fadeInOut 0.6s ease-in-out;
}

.loading-subtitle {
  font-size: 0.9rem;
  color: #94a3b8;
  margin: 0;
  font-style: italic;
  animation: fadeInOut 0.6s ease-in-out;
}

@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Barra de progreso */
.progress-bar {
  width: 200px;
  height: 3px;
  background: rgba(96, 165, 250, 0.2);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.3);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #60a5fa, #f472b6, #34d399);
  border-radius: 10px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
}

/* Código flotante */
.code-snippet {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.85rem;
  color: #60a5fa;
  opacity: 0.6;
  /* animation: fadeInOut 0.8s ease-in-out infinite; */
  text-align: center;
}

.code-line {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(96, 165, 250, 0.1);
  border-radius: 4px;
  border-left: 2px solid #60a5fa;
}

.keyword {
  color: #f472b6;
  font-weight: bold;
}

.string {
  color: #34d399;
}

/* Responsive */
@media (max-width: 768px) {
  .main-spinner {
    width: 150px;
    height: 150px;
  }

  .icon {
    font-size: 1.3rem;
  }

  .icon-1 { --x: 60px; --y: 0; }
  .icon-2 { --x: 0; --y: 60px; }
  .icon-3 { --x: -60px; --y: 0; }
  .icon-4 { --x: 0; --y: -60px; }

  .loading-text {
    font-size: 1.1rem;
  }

  .progress-bar {
    width: 150px;
  }
}
</style>
