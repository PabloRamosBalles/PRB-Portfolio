<template>
  <div class="company-card">
    <div class="company-header">
      <div class="company-info">
        <h3>{{ company.name }}</h3>
        <span class="company-type" :style="{ backgroundColor: company.brandColor }">{{ company.type }}</span>
      </div>
      <div class="company-details">
        <p class="position" :style="{ color: company.brandColor }">{{ company.position }}</p>
        <p class="description">{{ company.description }}</p>
      </div>
    </div>

    <div class="milestones-section">
      <h4>Logros Destacados</h4>
      <div class="milestones-grid">
        <Milestone 
          v-for="milestone in company.milestones" 
          :key="milestone.id"
          :milestone="milestone"
          :brandColor="company.brandColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Milestone from './Milestone.vue'

export default {
  name: 'CompanyCard',
  components: {
    Milestone
  },
  props: {
    company: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.company-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.company-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.company-info h3 {
  font-size: 2rem;
  color: var(--secondary-color);
  margin: 0;
}

.company-type {
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  /* backgroundColor aplicado dinámicamente */
}

.company-details {
  margin-top: 1rem;
}

.position {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  /* Color aplicado dinámicamente */
}

.description {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

.milestones-section h4 {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
  text-align: left;
}

.milestones-grid {
  display: grid;
  gap: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .company-card {
    padding: 1.5rem;
  }

  .company-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .company-info h3 {
    font-size: 1.5rem;
  }
}
</style>
