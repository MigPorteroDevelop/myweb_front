import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './assets/tailwind.css';
import i18n from "./locales/i18n";
import locales from "./locales/locales"
import VueSplide from '@splidejs/vue-splide';
import VueCookies from 'vue-cookies';
import PrimeVue from 'primevue/config';
import 'atropos/css'

import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primevue/resources/primevue.min.css';


createApp(App).use(router).use(i18n).use(locales).use(VueSplide).use(VueCookies).use(PrimeVue).mount('#app')

// url-base
export const BASE_URL = 'http://localhost:8000';
