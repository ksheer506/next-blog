import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint"
import pluginNext from "@next/eslint-plugin-next";
import reactLint from "eslint-plugin-react";

export default tseslint.config(
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    extends: tseslint.configs.recommended,
    plugins: {
      "react": reactLint,
      "@next/next": pluginNext,
      "@stylistic": stylistic,
    },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      ...reactLint.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...stylistic.configs.recommended,
      /** TypeScript */
      "@typescript-eslint/no-unused-vars": "warn",
      /** Spacing */
      "func-call-spacing": ["error", "never"],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/space-unary-ops": "error",
      "@stylistic/no-trailing-spaces": ["error", { ignoreComments: true }],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/block-spacing": "error",
      "@stylistic/arrow-spacing": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/keyword-spacing": ["error", { after: true, before: true }],
      "@stylistic/semi-spacing": ["error", { "before": false, "after": true }],
      /** Indent */
      "@stylistic/indent": ["error", 2, {
        flatTernaryExpressions: true,
        offsetTernaryExpressions: true,
        SwitchCase: 1,
      }],
      /** JSX: common */
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/jsx-self-closing-comp":  ["error", { component: true, html: true }],
      "@stylistic/jsx-closing-tag-location": ["error", "tag-aligned"],
      "@stylistic/jsx-closing-bracket-location": [1, "line-aligned"],
      /** JSX: props */
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
      "@stylistic/jsx-first-prop-new-line": ["error"],
      "@stylistic/jsx-props-no-multi-spaces": "error",
      /** Etc. */
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/no-extra-semi": "error",
    },
  },
  reactLint.configs.flat["jsx-runtime"]
);
