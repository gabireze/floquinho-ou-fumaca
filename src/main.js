import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faMinusCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

library.add(
  faChevronCircleLeft,
  faChevronCircleRight,
  faPlusCircle,
  faMinusCircle,
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
