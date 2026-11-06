import { defaultLocale, locales, type Locale, type Localized } from "./config";
import { ui, type UIKey } from "./ui";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Reads the locale from the first path segment (`/es/...`), defaulting to English. */
export function getLangFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  return isLocale(segment) ? segment : defaultLocale;
}

/** Prefers `Astro.currentLocale` and falls back to the URL. */
export function getLocale(currentLocale: string | undefined, url: URL): Locale {
  return isLocale(currentLocale) ? currentLocale : getLangFromUrl(url);
}

/** Removes a locale prefix: `/es/cv/` -> `/cv/`, `/es` -> `/`. */
export function stripLocale(pathname: string): string {
  const [, segment, ...rest] = pathname.split("/");
  if (isLocale(segment) && segment !== defaultLocale) {
    return `/${rest.join("/")}`;
  }
  return pathname || "/";
}

/** Builds a path for `lang` from a locale-agnostic path (`/cv` -> `/es/cv`). */
export function getLocalizedPath(path: string, lang: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLocale) return normalized;
  return normalized === "/" ? `/${lang}/` : `/${lang}${normalized}`;
}

/** Path of the current page in another locale. */
export function getAlternatePath(pathname: string, lang: Locale): string {
  return getLocalizedPath(stripLocale(pathname), lang);
}

export function getOtherLocale(lang: Locale): Locale {
  return locales.find((locale) => locale !== lang) ?? defaultLocale;
}

/** Picks the value for `lang` from a localized content field. */
export function localize<T>(value: Localized<T>, lang: Locale): T {
  return value[lang];
}

/**
 * Returns a translator bound to `lang`. Placeholders like `{name}`
 * are replaced with the matching entry from `params`.
 */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey, params?: Record<string, string | number>): string {
    const template: string = ui[lang][key];
    if (!params) return template;
    return template.replace(/\{(\w+)\}/g, (match, name: string) =>
      name in params ? String(params[name]) : match,
    );
  };
}
