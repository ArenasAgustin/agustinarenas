export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** A value that must exist in every supported locale. */
export type Localized<T = string> = Record<Locale, T>;

/** BCP 47 tags used for `lang`, `hreflang` and Schema.org `inLanguage`. */
export const htmlLang: Localized = {
  en: "en",
  es: "es",
};

/** OpenGraph locale identifiers. */
export const ogLocale: Localized = {
  en: "en_US",
  es: "es_AR",
};

/** Short label shown in the language switcher. */
export const languageShortName: Localized = {
  en: "EN",
  es: "ES",
};

/**
 * Accessible label for a link that switches TO the given locale,
 * written in that locale's own language (the link carries `lang`).
 */
export const languageSwitchLabel: Localized = {
  en: "View this page in English",
  es: "Ver esta página en español",
};
