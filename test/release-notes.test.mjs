import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { releaseNotes } from "../scripts/release-notes.mjs";

const changelog = `# Changelog

## [1.1.0] - 2027-01-01

### Fixed

- A long item that the formatter
  wrapped onto a second line.

## [1.0.0] - 2026-11-05

First version.

[1.1.0]: https://example.com/1.1.0
[1.0.0]: https://example.com/1.0.0
`;

test("takes only the requested version", () => {
    assert.equal(releaseNotes(changelog, "1.0.0"), "First version.\n");
});

test("joins wrapped lines and drops the link references", () => {
    assert.equal(releaseNotes(changelog, "1.1.0"), "### Fixed\n\n- A long item that the formatter wrapped onto a second line.\n");
});

test("fails for a version that is not in the changelog", () => {
    assert.throws(() => releaseNotes(changelog, "9.9.9"), /9\.9\.9/);
});

test("the current changelog has notes for the package version", () => {
    const { version } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
    const notes = releaseNotes(readFileSync(new URL("../CHANGELOG.md", import.meta.url), "utf8"), version);
    assert.ok(notes.length > 1);
    assert.doesNotMatch(notes, /^ {2}\S/m);
});
