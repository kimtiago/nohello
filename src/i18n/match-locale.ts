// The language of a browser or configured value: exact, then the base language itself (pt-PT becomes pt), then any
// language with the same base (zh-TW becomes zh-CN). docker/apply-config.sh has the same rule in shell:
// test/match-locale.test.mjs keeps them in step.
export function findLocale<Locale extends string>(locales: readonly Locale[], value?: string): Locale | undefined {
    const code = value?.trim().toLowerCase();
    if (!code) return undefined;
    const base = code.split("-")[0];
    return (
        locales.find((locale) => locale.toLowerCase() === code) ??
        locales.find((locale) => locale.toLowerCase() === base) ??
        locales.find((locale) => locale.toLowerCase().split("-")[0] === base)
    );
}
