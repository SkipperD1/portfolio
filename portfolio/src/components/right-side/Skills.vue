<template>
  <div class="skills-grid">
    <div v-for="(category, index) in skillCategories" :key="index" class="skill-category card">
      <h3 class="category-title">{{ category.title }}</h3>
      <div class="category-skills">
        <span v-for="(skill, i) in category.skills" :key="i" class="skill-tag">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsComponent',
  data() {
    return {
      skillCategories: [
        {
          title: 'Web Development',
          skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Vue.js', 'React', 'PHP', 'WordPress', 'Node.js', 'REST APIs', 'UI Design']
        },
        {
          title: 'IT Infrastructure',
          skills: ['Network Administration', 'Windows Server', 'Linux', 'Active Directory', 'TCP/IP', 'DNS', 'DHCP', 'VPN']
        },
        {
          title: 'Tools & Platforms',
          skills: ['Git', 'VS Code', 'Figma', 'Adobe XD', 'Jira', 'Microsoft 365', 'Google Workspace', 'cPanel']
        },
        {
          title: 'Other Skills',
          skills: ['IT Support', 'Cybersecurity', 'Database Management', 'Cloud Services', 'Data Analytics', 'Technical Documentation', 'Team Collaboration']
        }
      ]
    }
  },
}
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.skill-category {
  padding: 1.25rem;
}

.category-title {
  color: var(--color-text-bright);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.category-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
