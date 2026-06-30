<template>
  <footer>
    <div class="container">
      <p>{{ message }}</p>
      <p style="margin-top: 0.5rem; opacity: 0.8;">
        Hecho con ❤️ usando Vue.js
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      message: `© ${new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.`
    }
  }
}
</script>
