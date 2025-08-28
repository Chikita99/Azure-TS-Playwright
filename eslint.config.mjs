import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        page: true,
        browser: true,
        context: true
      },
      ecmaVersion: 2020,
      sourceType: "module"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "global-require": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-dynamic-require": "off",
      "import/no-unresolved": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "object-curly-spacing": "off",
      "max-len": ["warn", { code: 150 }],
      "no-unused-vars": "off",
      // Правила, которые ESLint может исправить автоматически
      "indent": ["error", 4],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "comma-dangle": ["error", "never"],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"]
    }
  }
];