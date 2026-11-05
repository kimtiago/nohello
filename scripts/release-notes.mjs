// Prints one version's section of CHANGELOG.md, as the text of its GitHub release:
// node scripts/release-notes.mjs 1.2.3
// GitHub keeps every line break in a release, so wrapped list items are joined back into one line.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export function releaseNotes(changelog, version) {
    const lines = changelog.split("\n");
    const start = lines.findIndex((line) => line.startsWith(`## [${version}]`));
    if (start === -1) throw new Error(`Version ${version} is not in the changelog`);

    const notes = [];
    for (const line of lines.slice(start + 1)) {
        if (line.startsWith("## [")) break;
        if (/^\[[^\]]+\]: /.test(line)) continue;
        if (/^ {2}\S/.test(line) && notes.length > 0) notes[notes.length - 1] += ` ${line.trim()}`;
        else notes.push(line);
    }
    return `${notes.join("\n").trim()}\n`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const version = process.argv[2]?.replace(/^v/, "");
    if (!version) throw new Error("Usage: node scripts/release-notes.mjs <version>");
    process.stdout.write(releaseNotes(readFileSync("CHANGELOG.md", "utf8"), version));
}
