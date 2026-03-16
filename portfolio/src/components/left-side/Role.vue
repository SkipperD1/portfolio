<template>
  <div class="role-section">
    <h3 class="role">{{ role }}</h3>
  </div>
</template>

<script>
export default {
  name: 'RoleComponent',
  data() {
    return {
      role: 'IT Officer & Web Developer'
    }
  },
}
</script>

<style scoped>
.role-section {
  margin-top: 0.75rem;
}

.role {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-primary);
  letter-spacing: 0.02em;
}
</style>
