<template>
  <div class="projects-list">
    <a
      v-for="(project, index) in projects"
      :key="index"
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
      class="project-card card"
    >
      <div class="project-header">
        <h3 class="project-title">
          {{ project.title }}
          <span class="project-arrow">&nearr;</span>
        </h3>
      </div>
      <p class="project-desc">{{ project.desc }}</p>
      <div class="project-tech">
        <span v-for="(tech, i) in project.tech" :key="i" class="skill-tag">{{ tech }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import projectList from '../../data/projectList'

export default {
  name: 'ProjectsComponent',
  data() {
    return {
      projects: projectList
    }
  },
}
</script>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-card {
  display: block;
  text-decoration: none;
  cursor: pointer;
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-title {
  color: var(--color-text-bright);
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.project-arrow {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.85rem;
  transition: transform 0.2s ease;
}

.project-card:hover .project-title {
  color: var(--color-primary);
}

.project-card:hover .project-arrow {
  transform: translate(3px, -3px);
}

.project-desc {
  color: var(--color-text-dim);
  font-size: 0.875rem;
  line-height: 1.7;
  margin-top: 0.5rem;
}

.project-tech {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
