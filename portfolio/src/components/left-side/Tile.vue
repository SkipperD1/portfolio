<template>
  <nav class="nav-section">
    <a
      v-for="(item, index) in navItems"
      :key="index"
      :href="item.link"
      class="nav-link"
    >
      <span class="nav-line"></span>
      <span class="nav-text">{{ item.name }}</span>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'TileComponent',
  data() {
    return {
      navItems: [
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Experience', link: '#experience' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' },
      ]
    }
  },
}
</script>

<style scoped>
.nav-section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 3rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  text-decoration: none;
  color: var(--color-text-dim);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--color-text-bright);
}

.nav-line {
  display: inline-block;
  width: 32px;
  height: 1px;
  background-color: var(--color-text-dim);
  transition: all 0.3s ease;
}

.nav-link:hover .nav-line {
  width: 64px;
  background-color: var(--color-text-bright);
}

@media (max-width: 768px) {
  .nav-section {
    display: none;
  }
}
</style>
