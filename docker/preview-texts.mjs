// Writes, for the container's start script, the link preview texts of each language. Runs with Node's built-in TypeScript support.
import { readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";

const quote = (text) => `'${text.replaceAll("'", `'\\''`)}'`;
const dir = new URL("../src/i18n/locales/", import.meta.url);

const locales = [];
for (const file of readdirSync(dir)) {
    const loaded = await import(pathToFileURL(new URL(file, dir).pathname).href);
    const definition = Object.values(loaded)[0];
    const { title, description } = definition.messages("@@FIRST_NAME@@");
    locales.push({ code: file.replace(/\.ts$/, ""), title, description, ...definition });
}

const lines = [
    `LOCALES=${quote(locales.map(({ code }) => code).join(" "))}`,
    `load_preview() {`,
    `    case "$1" in`,
    ...locales.map(
        ({ code, title, description, ogLocale, fallbackName, givenNameLast }) =>
            `    ${quote(code)}) TITLE=${quote(title)} DESCRIPTION=${quote(description)} OG_LOCALE=${quote(ogLocale)} FALLBACK_NAME=${quote(fallbackName)} GIVEN_NAME_LAST=${givenNameLast ? 1 : 0} ;;`,
    ),
    `    esac`,
    `}`,
];
process.stdout.write(`${lines.join("\n")}\n`);
