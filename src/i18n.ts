import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from "./locales/es.json"
import en from "./locales/en.json"
import it from "./locales/it.json"
import fr from "./locales/fr.json"

// Traducciones con códigos en minúscula
const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',   // idioma por defecto en minúsculas
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // El orden para detectar el idioma incluye 'path' para detectar desde URL
      order: ['path', 'localStorage', 'navigator', 'htmlTag', 'cookie'],
      // El índice de segmento de URL donde está el idioma (ej. /es/...)
      lookupFromPathIndex: 0,
      caches: ['localStorage'], // guarda preferencia en localStorage
    },
  });

export default i18n;
