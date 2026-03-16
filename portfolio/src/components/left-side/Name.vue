<template>
  <div class="name-section">
    <div class="avatar-wrapper">
      <img src="../image/DSC_0705.jpg" alt="Daniel Kofi Tetteh" class="avatar" />
    </div>
    <h1 class="name">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NameComponent',
  data() {
    return {
      name: 'Daniel Kofi Tetteh'
    }
  },
}
</script>

<style scoped>
.name-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 20px rgba(45, 212, 191, 0.15);
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-bright);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

@media (max-width: 768px) {
  .name {
    font-size: 2rem;
  }
}
</style>
