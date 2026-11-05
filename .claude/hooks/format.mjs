// PostToolUse hook (Edit|Write): formats the file Claude edited, same as lint-staged does.
// Receives the event JSON on stdin. Never blocks the edit: failures are just ignored.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

let input = "";
for await (const chunk of process.stdin) input += chunk;

const { tool_input: toolInput = {}, tool_response: toolResponse = {} } = JSON.parse(input || "{}");
const file = toolResponse.filePath ?? toolInput.file_path;
const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();

// Project files only (nothing in node_modules or outside the repository)
if (!file || !existsSync(file) || path.relative(root, file).startsWith("..") || file.includes("node_modules")) {
    process.exit(0);
}

const run = (bin, args) => {
    try {
        execFileSync(path.join(root, "node_modules", ".bin", bin), args, { cwd: root, stdio: "ignore" });
    } catch {
        // Lint errors --fix can't solve show up in `npm run lint`; don't interrupt the flow here
    }
};

if (/\.(ts|tsx)$/.test(file)) run("eslint", ["--fix", file]);
run("prettier", ["--write", "--ignore-unknown", file]);
