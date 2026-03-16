<template>
  <div class="main">
    <div class="leftside">
      <div>
        <Name />
        <Role />
        <Brief />
        <Tile />
      </div>
      <Socials />
    </div>
    <div class="rightside">
      <section id="about" class="section-block">
        <h2 class="section-heading">About</h2>
        <About />
      </section>

      <section id="skills" class="section-block">
        <h2 class="section-heading">Skills</h2>
        <Skills />
      </section>

      <section id="experience" class="section-block">
        <h2 class="section-heading">Experience</h2>
        <Experience
          v-for="(experience, index) in experienceList"
          :date="experience.date"
          :desc="experience.desc"
          :role="experience.role"
          :company="experience.company"
          :skill="experience.skill"
          :key="index"
        />
      </section>

      <section id="projects" class="section-block">
        <h2 class="section-heading">Projects</h2>
        <Projects />
      </section>

      <section id="contact" class="section-block">
        <h2 class="section-heading">Get In Touch</h2>
        <Contact />
      </section>
    </div>
  </div>
</template>

<script setup>
import experienceList from './data/experienceList'
import Name from './components/left-side/Name.vue'
import Role from './components/left-side/Role.vue'
import Brief from './components/left-side/Brief.vue'
import Tile from './components/left-side/Tile.vue'
import Socials from './components/left-side/Socials.vue'
import About from './components/right-side/About.vue'
import Experience from './components/right-side/Experience.vue'
import Skills from './components/right-side/Skills.vue'
import Projects from './components/right-side/Projects.vue'
import Contact from './components/right-side/Contact.vue'
</script>

<style scoped>
</style>
