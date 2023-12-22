// import './assets/main.css'
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

createApp(App)
  .use(PrimeVue)
  .mount("#app");