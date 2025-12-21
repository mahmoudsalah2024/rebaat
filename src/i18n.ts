import { createI18n } from 'vue-i18n'
import ar from '@/locales/ar.json'
import en from '@/locales/en.json'

const messages = {
  ar,
  en
}

export const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: 'ar',
  fallbackLocale: 'ar',
  messages
})
