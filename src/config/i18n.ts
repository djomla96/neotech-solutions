import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(XHR)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    load: 'currentOnly',
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/translation.json`,
    },
  });

export default i18n;
