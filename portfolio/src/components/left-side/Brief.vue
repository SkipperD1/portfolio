<template>
  <div class="brief-section">
    <p class="brief-text">{{ brief }}</p>
  </div>
</template>

<script>
export default {
  name: 'BriefComponent',
  data() {
    return {
      brief: 'I manage IT infrastructure and build performant, user-focused websites that help organizations operate efficiently and grow their digital presence.'
    }
  },
}
</script>

<style scoped>
.brief-section {
  margin-top: 1rem;
}

.brief-text {
  color: var(--color-text-dim);
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 340px;
}
</style>
