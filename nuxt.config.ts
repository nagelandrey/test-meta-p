import eslintPlugin from 'vite-plugin-eslint';
import en from './locales/en.json';
import ru from './locales/ru.json';

export default defineNuxtConfig({
  router: {
    base: '/test-meta-p/'
  },
  components: false,
  imports: {
    autoImport: false
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'ru'],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      messages: {
        en,
        ru,
      }
    }
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
