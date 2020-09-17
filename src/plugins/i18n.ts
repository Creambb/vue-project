import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'

import zhCN from "@/locales/zh-CN";
import enUS from "@/locales/en-US";

Vue.use(VueI18n)

const messages: LocaleMessages = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

function getLocation() {
  if (navigator.language in messages) {
    return navigator.language;
  }
  for (let i = 0; i < navigator.languages.length; i++) {
    let lang = navigator.languages[i];
    if (lang in messages) {
      return lang;
    }
  }
  return "en-US";
}

export default new VueI18n({
  messages,
  locale: getLocation(),
});
