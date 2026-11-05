import { buildConfig } from "@/config/site";
import { cs } from "@/i18n/locales/cs";
import { de } from "@/i18n/locales/de";
import { en } from "@/i18n/locales/en";
import { es } from "@/i18n/locales/es";
import { fa } from "@/i18n/locales/fa";
import { fr } from "@/i18n/locales/fr";
import { he } from "@/i18n/locales/he";
import { id } from "@/i18n/locales/id";
import { it } from "@/i18n/locales/it";
import { pl } from "@/i18n/locales/pl";
import { pt } from "@/i18n/locales/pt";
import { ptBR } from "@/i18n/locales/pt-BR";
import { ru } from "@/i18n/locales/ru";
import { sv } from "@/i18n/locales/sv";
import { tr } from "@/i18n/locales/tr";
import { uk } from "@/i18n/locales/uk";
import { vi } from "@/i18n/locales/vi";
import { zhCN } from "@/i18n/locales/zh-CN";
import { findLocale } from "@/i18n/match-locale";

const locales = { "pt-BR": ptBR, pt, en, es, fr, de, it, cs, pl, sv, tr, id, vi, ru, uk, fa, he, "zh-CN": zhCN };

export type Locale = keyof typeof locales;

const localeCodes = Object.keys(locales) as Locale[];

export function matchLocale(value?: string) {
    return findLocale(localeCodes, value);
}

export const defaultLocale: Locale = "en";

// NEXT_PUBLIC_LANGUAGE fixes the page's language. Empty: each visitor gets their browser's language.
export const configuredLocale = matchLocale(buildConfig.language);

// The language of the prerendered HTML, which is also what link previews read: they run no JavaScript.
export const buildLocale = configuredLocale ?? defaultLocale;

export function browserLocale(languages: readonly string[]): Locale {
    for (const language of languages) {
        const locale = matchLocale(language);
        if (locale) return locale;
    }
    return defaultLocale;
}

export function getCopy(locale: Locale, configuredOwner?: string) {
    const { fallbackName, messages, ogLocale, rtl, givenNameLast } = locales[locale];
    const owner = configuredOwner || fallbackName;
    const names = owner.split(/\s+/);
    const firstName = givenNameLast ? names[names.length - 1] : names[0];
    return { locale, ogLocale, dir: rtl ? ("rtl" as const) : ("ltr" as const), owner, firstName, t: messages(firstName) };
}

// Runs before the first paint when the language comes from the browser: if it isn't the prerendered one, the page stays
// hidden until React switches it (see LocaleSync), so nobody sees it flash in another language.
export const localePendingScript = `(function(){var c=${JSON.stringify(localeCodes.map((locale) => locale.split("-")[0].toLowerCase()))},l=navigator.languages||[navigator.language];for(var i=0;i<l.length;i++){var b=l[i].split("-")[0].toLowerCase();if(c.indexOf(b)>-1){if(b!==${JSON.stringify(defaultLocale)})document.documentElement.dataset.localePending="";return}}})()`;
