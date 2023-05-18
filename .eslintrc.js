module.exports = {
  root: true,
  env: { browser: true, amd: true, node: true, es2020: true },
  parser: "@typescript-eslint/parser",
  extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
  plugins: [
    "react-refresh"
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "react-refresh/only-export-components": "warn"
  }
}