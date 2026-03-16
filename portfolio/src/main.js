import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faGithub, faLinkedin, faInstagram, faEnvelope, faPhone)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
