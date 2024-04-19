import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";

// mimic CommonJS variables -- not needed if using CommonJS
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import eslintConfigPrettier from "eslint-config-prettier";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...compat.extends("prettier"),
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  {
    ignores: [
      "node_modules",
      ".env",
      ".env_sample",
      ".prettierignore",
      ".prettierrc",
    ],
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    ...jest.configs["flat/recommended"],
  },
  eslintConfigPrettier,
];
