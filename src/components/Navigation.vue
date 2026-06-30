<template>
  <nav>
    <div class="container">
      <h1>{{ name }}</h1>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      name: 'Mi Portfolio'
    }
  }
}
</script>
