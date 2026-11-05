import tsPlugin from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";
import { fixupConfigRules } from "@eslint/compat";
import nextConfig from "eslint-config-next";
import prettier from "eslint-config-prettier";
import globals from "globals";

// eslint-config-next v16 includes a "next/typescript" entry that registers @typescript-eslint
// through the "typescript-eslint" package. To avoid a double-registration conflict, we filter
// that entry out and use @typescript-eslint/eslint-plugin directly.
const nextConfigWithoutTS = nextConfig.filter((c) => !Object.prototype.hasOwnProperty.call(c.plugins ?? {}, "@typescript-eslint"));

/** @type {import("eslint").Linter.Config[]} */
const config = [
    // 1. Ignore generated folders
    {
        ignores: ["**/node_modules/", "**/.next/", "**/out/", "next-env.d.ts"],
    },
    // 2. Base ESLint recommended
    js.configs.recommended,
    // 3. Next.js flat config (without the next/typescript entry — filtered above)
    //    fixupConfigRules: eslint-plugin-react/import/jsx-a11y still use context.getFilename()
    //    (removed in ESLint 10) — @eslint/compat restores it with a compatibility shim.
    ...fixupConfigRules(nextConfigWithoutTS),
    // 4. TypeScript — single source of the @typescript-eslint plugin
    ...tsPlugin.configs["flat/recommended"],
    // 5. Prettier — disables conflicting formatting rules (must come before the overrides)
    { rules: prettier.rules },
    // 6. Project overrides
    {
        // Only the JavaScript files check for undefined variables (TypeScript does it elsewhere), and they all run on Node
        languageOptions: {
            globals: globals.node,
        },

        rules: {
            eqeqeq: ["warn", "always", { null: "ignore" }],
            "no-console": "error",
            "no-duplicate-imports": "error",
        },
    },
];

export default config;
