import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".codex/**",
      ".next/**",
      "node_modules/**",
      "tests/e2e/**",
      "playwright-report/**",
      "test-results/**"
    ]
  },
  ...nextVitals,
  ...nextTypescript
];

export default eslintConfig;
