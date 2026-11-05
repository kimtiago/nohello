import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { findLocale } from "../src/i18n/match-locale.ts";

const locales = readdirSync(new URL("../src/i18n/locales/", import.meta.url)).map((file) => file.replace(/\.ts$/, ""));

// The shell version of the rule, taken from the script the Docker image runs
const script = readFileSync(new URL("../docker/apply-config.sh", import.meta.url), "utf8");
const resolveLocale = script.match(/^resolve_locale\(\) \{\n[\s\S]*?^\}\n/m)[0];

function shellLocale(value) {
    const program = `${resolveLocale}\nLOCALES='${locales.join(" ")}'\nresolve_locale "$1"`;
    return execFileSync("sh", ["-c", program, "sh", value], { encoding: "utf8" }) || undefined;
}

const cases = [
    ["en", "en"],
    ["pt-BR", "pt-BR"],
    ["pt-br", "pt-BR"],
    ["PT-BR", "pt-BR"],
    ["pt", "pt"],
    ["pt-PT", "pt"],
    ["pt-AO", "pt"],
    ["zh-CN", "zh-CN"],
    ["zh", "zh-CN"],
    ["zh-TW", "zh-CN"],
    ["he-IL", "he"],
    ["fa-IR", "fa"],
    ["sv-FI", "sv"],
    ["en-US", "en"],
    ["es-419", "es"],
    ["fr-CA", "fr"],
    ["DE", "de"],
    ["de-AT", "de"],
    ["it", "it"],
    ["nl", undefined],
    ["klingon", undefined],
    ["", undefined],
];

for (const [value, expected] of cases) {
    test(`"${value}" resolves to ${expected}`, () => {
        assert.equal(findLocale(locales, value), expected);
        assert.equal(shellLocale(value), expected);
    });
}

test("every language resolves to itself", () => {
    assert.equal(locales.length, 18);
    for (const locale of locales) {
        assert.equal(findLocale(locales, locale), locale);
        assert.equal(shellLocale(locale), locale);
    }
});
