import { buildConfig } from "@/config/site";
import { de } from "@/i18n/locales/de";
import { en } from "@/i18n/locales/en";
import { es } from "@/i18n/locales/es";
import { fr } from "@/i18n/locales/fr";
import { it } from "@/i18n/locales/it";
import { ptBR } from "@/i18n/locales/pt-BR";
import { findLocale } from "@/i18n/match-locale";

const locales = { "pt-BR": ptBR, en, es, fr, de, it };

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
    const { fallbackName, messages, ogLocale } = locales[locale];
    const owner = configuredOwner || fallbackName;
    const firstName = owner.split(/\s+/)[0];
    return { locale, ogLocale, owner, firstName, t: messages(firstName) };
}

// Runs before the first paint when the language comes from the browser: if it isn't the prerendered one, the page stays
// hidden until React switches it (see LocaleSync), so nobody sees it flash in another language.
export const localePendingScript = `(function(){var c=${JSON.stringify(localeCodes.map((locale) => locale.split("-")[0].toLowerCase()))},l=navigator.languages||[navigator.language];for(var i=0;i<l.length;i++){var b=l[i].split("-")[0].toLowerCase();if(c.indexOf(b)>-1){if(b!==${JSON.stringify(defaultLocale)})document.documentElement.dataset.localePending="";return}}})()`;
