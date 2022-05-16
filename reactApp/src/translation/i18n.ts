import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageInterface } from '../common/interfaces';
import { enAppHeader, ruAppHeader } from './appHeaderTranlations';
import { enCollection, ruCollection } from './collection';
import { enCreateNew, ruCreateNew } from './createNew';
import { enMain, ruMain } from './main';
import { enNotification, ruNotification } from './notification';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

export const languagesSet: LanguageInterface[] = [
  { title: 'EN', value: 'en' },
  { title: 'RU', value: 'ru' },
];

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
      ...enAppHeader,
      ...enCollection,
      ...enCreateNew,
      ...enMain,
      ...enNotification,
    },
  },
  ru: {
    translation: {
      'Welcome to React': 'Добро пожаловать в реакт',
      ...ruAppHeader,
      ...ruCollection,
      ...ruCreateNew,
      ...ruMain,
      ...ruNotification,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
