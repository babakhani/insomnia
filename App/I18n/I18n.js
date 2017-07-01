// @flow

import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.defaultLocale = "fa";


// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/english.json'),
  fa: require('./languages/fa.json')
}

let languageCode = I18n.locale.substr(0, 2)

// All other translations for the app goes to the respective language file:
switch (languageCode) {
  case 'fa':
    I18n.translations.fa = require('./languages/fa.json')
    break
  case 'fa':
    I18n.translations.en = require('./languages/english.json')
    break
}
