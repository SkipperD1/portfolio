<template>
  <div class="main">
    <div class="leftside">
      <Name />
      <Role />
      <Brief />
      <Tile />
      <Socials />
    </div>
    <span></span>
    <div class="rightside">
      <About />
      <Experience v-for="(experience,index) in experienceList" 
      :date="experience.date" :desc="experience.desc"
      :role="experience.role" :company="experience.company"
      :skill="experience.skill"
      :key="index"
       />
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
import About from './components/right-side/About.vue';
import Experience from './components/right-side/Experience.vue';
</script>

<style scoped>

</style>
