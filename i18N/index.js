import { I18n } from "i18n-js";
import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";

import en from "./locales/en.js";
import ar from "./locales/ar.js";

export const i18n = new I18n({
  en: en,
  ar: ar,
});

i18n.enableFallback = true;

i18n.locale = I18nManager.isRTL ? "ar" : "en";

export const toggleArabic = (toArabic = !I18nManager.isRTL) => {
  i18n.locale = I18nManager.isRTL ? "ar" : "en";

  setTimeout(() => I18nManager.allowRTL(toArabic), 0); // prevent android to change it according to system
  setTimeout(() => {
    I18nManager.forceRTL(toArabic);
  }, 100);

  setTimeout(RNRestart.Restart, 200);
};

export default I18n;
