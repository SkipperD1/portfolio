<template>
  <div class="contact-section">
    <p class="contact-text">
      I'm always open to discussing new opportunities, IT consulting, or web development projects.
      Whether you need help managing your IT infrastructure or building a website from scratch,
      feel free to reach out.
    </p>
    <div class="contact-details">
      <a href="mailto:kofidaniell4@gmail.com" class="contact-link">
        <font-awesome-icon icon="fa-solid fa-envelope" class="contact-icon" />
        <span>kofidaniell4@gmail.com</span>
      </a>
      <a href="tel:+233554322449" class="contact-link">
        <font-awesome-icon icon="fa-solid fa-phone" class="contact-icon" />
        <span>(+233) 55 432 2449</span>
      </a>
    </div>
    <p class="contact-footer">
      Designed & Built by <span class="highlight">Daniel Kofi Tetteh</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
}
</script>

<style scoped>
.contact-text {
  color: var(--color-text-dim);
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 480px;
}

.contact-details {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-bright);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  width: fit-content;
}

.contact-link:hover {
  color: var(--color-primary);
}

.contact-icon {
  font-size: 1.1rem;
  color: var(--color-primary);
}

.contact-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-dim);
  font-size: 0.8rem;
}

.highlight {
  color: var(--color-primary);
}
</style>
