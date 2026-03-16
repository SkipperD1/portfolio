<template>
  <div class="experience-card card">
    <div class="exp-date">{{ date }}</div>
    <div class="exp-content">
      <h3 class="exp-role">
        {{ role }}
        <span class="exp-company"> · {{ company }}</span>
      </h3>
      <p class="exp-desc">{{ desc }}</p>
      <div class="exp-skills">
        <span v-for="(item, index) in skill" :key="index" class="skill-tag">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceComponent',
  props: ['date', 'role', 'company', 'desc', 'skill'],
}
</script>

<style scoped>
.experience-card {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1.5rem;
}

.exp-date {
  color: var(--color-text-dim);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-top: 0.35rem;
  white-space: nowrap;
}

.exp-role {
  color: var(--color-text-bright);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

.exp-company {
  color: var(--color-primary);
  font-weight: 500;
}

.experience-card:hover .exp-role {
  color: var(--color-primary);
}

.exp-desc {
  color: var(--color-text-dim);
  font-size: 0.875rem;
  line-height: 1.7;
  margin-top: 0.5rem;
}

.exp-skills {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 640px) {
  .experience-card {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
