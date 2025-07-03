import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: "Welcome to DropMaster AI!" } },
    es: { translation: { welcome: "¡Bienvenido a DropMaster AI!" } }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});
export default i18n;