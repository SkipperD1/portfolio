<template>
  <div class="about-content">
    <p>{{ paragraph1 }}</p>
    <p>{{ paragraph2 }}</p>
    <p>{{ paragraph3 }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  data() {
    return {
      paragraph1: `As a dedicated IT Officer and Web Developer, I combine strong technical infrastructure skills with modern web development expertise. I manage and maintain IT systems, networks, and security protocols while simultaneously building high-performance websites and web applications that drive business growth.`,
      paragraph2: `With hands-on experience in system administration, network management, and help desk support, I ensure organizations run smoothly from a technology standpoint. My web development skills span the full front-end stack, allowing me to create responsive, accessible, and user-friendly digital experiences.`,
      paragraph3: `I thrive at the intersection of IT operations and web development — whether it's deploying and maintaining servers, troubleshooting technical issues, or designing and coding modern websites from the ground up. My goal is to leverage technology to solve real problems and create lasting value.`
    }
  },
}
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-content p {
  color: var(--color-text-dim);
  font-size: 0.95rem;
  line-height: 1.7;
}
</style>
