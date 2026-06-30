# 🚀 Mi Portfolio - Desarrollador Web

Portfolio personal creado con Vue.js 3 y Vite.

## 📋 Características

- ✨ Diseño moderno y responsive
- 🎨 Animaciones suaves
- 📱 Completamente adaptable a móviles
- ⚡ Optimizado con Vite
- 🧩 Componentes Vue reutilizables

## 🛠️ Tecnologías

- Vue.js 3
- Vite
- CSS3
- JavaScript ES6+

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Modo Desarrollo

```bash
npm run dev
```

El servidor de desarrollo se abrirá en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

### Vista Previa del Build

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.vue    # Barra de navegación
│   ├── Hero.vue          # Sección hero
│   ├── Experience.vue    # Experiencia profesional
│   ├── CompanyCard.vue   # Tarjeta de empresa
│   ├── Milestone.vue     # Hitos/logros individuales
│   ├── Projects.vue      # Galería de proyectos
│   ├── Skills.vue        # Habilidades técnicas
│   ├── Contact.vue       # Información de contacto
│   └── Footer.vue        # Pie de página
├── App.vue               # Componente principal
├── main.js               # Punto de entrada
└── style.css             # Estilos globales
public/
└── images/               # Imágenes del portfolio
```

## 🎨 Personalización

Puedes personalizar fácilmente:

1. **Información personal**: Edita los componentes en `src/components/`
2. **Experiencia laboral**: Modifica los datos en `Experience.vue`
   - Agrega o edita empresas
   - Añade hitos y logros
   - Incluye imágenes en `public/images/`
3. **Proyectos**: Modifica el array de proyectos en `Projects.vue`
4. **Habilidades**: Actualiza la lista en `Skills.vue`
5. **Colores**: Cambia las variables CSS en `src/style.css`
6. **Contacto**: Actualiza los enlaces en `Contact.vue`

### 📸 Añadir Imágenes a tus Hitos

1. Coloca las imágenes en la carpeta `public/images/`
2. Edita el array `images` en cada hito de `Experience.vue`:
   ```javascript
   images: ['nombre-de-tu-imagen.jpg']
   ```
3. Las imágenes se mostrarán automáticamente con zoom al hacer clic

## 📝 Licencia

MIT
