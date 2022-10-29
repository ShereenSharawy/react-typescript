import { initReactI18next } from "react-i18next";
import TRANSLATIONS_AR from "./ar/translations.json";
import TRANSLATIONS_EN from "./en/translations.json";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  ar: {
    translation:TRANSLATIONS_AR,
  },
  en: {
    translation:TRANSLATIONS_EN,
  },
};
i18next
   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
       useSuspense:false
    },
  });
export default i18next;