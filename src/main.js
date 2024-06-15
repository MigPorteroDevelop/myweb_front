import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './assets/tailwind.css';
import i18n from "./locales/i18n";
import locales from "./locales/locales"
import PrimeVue from 'primevue/config';
import 'atropos/css';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import '@/assets/normalize.css'


createApp(App).use(router).use(i18n).use(locales).use(PrimeVue).mount('#app')

// url-base
export const BASE_URL = 'https://miguelportero.netlify.app/';
