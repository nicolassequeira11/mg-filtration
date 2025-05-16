import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from "./locales/es.json"
import en from "./locales/en.json"
import it from "./locales/it.json"
import fr from "./locales/fr.json"

// Traducciones
const resources = {
  EN: { translation: en },
  ES: { translation: es },
  FR: { translation: fr },
  IT: { translation: it },
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador/localStorage
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ES',
    interpolation: {
      escapeValue: false, // React ya escapa valores
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;