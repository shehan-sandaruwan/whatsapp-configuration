import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
        en: {
          translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "Account not created": "Account not created",
            "please try to re-connect": "Please try re-connecting again or contact",
            "sorry account unable to create": "Sorry, the WhatsApp account could not be created due to some technical error",
            "support": "support",
            "WhatsApp account type": "WhatsApp account type",
            "select your account": "Select your account to get important information about pre requisites and account setup",
            "rfqs": "Read FAQs",
            "help": "Get help",
            "setup messenger": "Setup WhatsApp messenger",
            "connect your whatsApp": "Connect your WhatsApp business account",
            "add business det" :"Add business details",
            "Add display name": "Add display name",
            "Verify via OTP": "Verify via OTP",
            "Choose account type": "Choose account type",
            "agreement": "I have read the above information before moving ahead.",
            "Prerequisities": "Prerequisities",
            "get started": "Get started",
            "goBack" :"Go Back",
            "New to WhatsApp": "New to WhatsApp account setup",
            "Have a Facebook business account": "Have a Facebook business account but never created a WhatsApp business account.",
            "Existing WhatsApp": "Existing WhatsApp business application",
            "Have installed": "Have installed the WhatsApp business application on the business number.",
            "Migrate WhatsApp": "Migrate WhatsApp business application",
            "Have WhatsApp business" : "Have WhatsApp business API integration on the business number with another vendor and migrate to yellow.ai now",
            "delete existing account" : "Delete the existing WhatsApp account",
            "contact whatsapp channel": "and then connect WhatsApp channel.",
            "Disable two factor authentication": "Disable two factor authentication",
            "from your previouse": "from your previous vendor and then initiate channel setup.",
            "Make sure that you": "Make sure that you",
            "have the admin access": "have the admin access",
            "fb business manager": "Facebook business manager account.",
            "you need": "You'll need an active",
            "phone number": "phone number",
            "which you can verify via": "which you can verify via"
            
          }
        }
      },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;