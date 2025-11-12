import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from '@/router/router.js';
import 'primeicons/primeicons.css'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import '@/css/general.css'
import { createI18n } from 'vue-i18n'
import es from '@/locales/es.json'
import en from '@/locales/en.json'
import qu from '@/locales/qu.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es', // idioma por defecto
  fallbackLocale: 'es',
  messages: { es, en, qu }
})

createApp(App)
.use(router)
.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
})
.use(i18n)
.use(ConfirmationService)
.use(ToastService)
.mount('#app')
