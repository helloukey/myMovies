import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintConfigPrettier from "eslint-config-prettier";

// mimic CommonJS variables -- not needed if using CommonJS
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  ...compat.extends("plugin:cypress/recommended"),
  ...compat.extends("prettier"),
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: [
      ".vscode",
      "node_modules",
      "public",
      "src/assets",
      ".prettierrc",
      ".prettierignore",
      "eslint.config.mjs",
      "tailwind.config.js",
      "src/serviceWorkerRegistration.js",
      "src/service-worker.js",
      "postcss.config.js",
    ],
  },
  eslintConfigPrettier,
];
