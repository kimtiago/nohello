"use client";

import { useEffect, useSyncExternalStore } from "react";
import { browserConfig, buildConfig } from "@/config/site";
import { browserLocale, buildLocale, getCopy, matchLocale } from "@/i18n";

function subscribeToNothing() {
    return () => {};
}

function subscribeToLanguage(onChange: () => void) {
    window.addEventListener("languagechange", onChange);
    return () => window.removeEventListener("languagechange", onChange);
}

// The settings in effect: first what the prerendered HTML was built with, then what applies in the browser.
export function useSiteConfig() {
    return useSyncExternalStore(
        subscribeToNothing,
        () => browserConfig,
        () => buildConfig,
    );
}

// The page's language and texts: the prerendered language first, then the configured one or the visitor's.
export function useCopy() {
    const { owner } = useSiteConfig();
    const locale = useSyncExternalStore(
        subscribeToLanguage,
        () => matchLocale(browserConfig.language) ?? browserLocale(navigator.languages),
        () => buildLocale,
    );
    return getCopy(locale, owner);
}

// Keeps the document in the page's language, and reveals the page once it's there.
export function LocaleSync() {
    const { locale, t } = useCopy();

    useEffect(() => {
        document.documentElement.lang = locale;
        delete document.documentElement.dataset.localePending;
    }, [locale]);

    useEffect(() => {
        document.documentElement.dataset.hydrated = "";
    }, []);

    // Here and not in the metadata, so the browser tab follows the language too
    return <title>{t.title}</title>;
}
