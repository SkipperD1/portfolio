<template>
  <div class="socials-section">
    <a href="https://github.com/SkipperD1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <font-awesome-icon class="social-icon" icon="fa-brands fa-github" />
    </a>
    <a href="https://www.linkedin.com/in/danielkofitetteh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <font-awesome-icon class="social-icon" icon="fa-brands fa-linkedin" />
    </a>
    <a href="https://twitter.com/Tsopioto" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <font-awesome-icon class="social-icon" icon="fa-brands fa-twitter" />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialsComponent',
}
</script>

<style scoped>
.socials-section {
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.social-icon {
  font-size: 1.35rem;
  color: var(--color-text-dim);
  transition: all 0.2s ease;
}

.social-icon:hover {
  color: var(--color-primary);
  transform: translateY(-2px);
}
</style>
