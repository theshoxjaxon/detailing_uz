import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
  uz: () => import("@/dictionaries/uz.json").then((m) => m.default),
};

export const getDictionary = async (locale: string) => {
  // If locale is "undefined" or missing, default to 'ru'
  const key = (locale === 'undefined' || !locale) ? 'ru' : locale;
  const loader = dictionaries[key as keyof typeof dictionaries] || dictionaries.ru;
  return loader();
};