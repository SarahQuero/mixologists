module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react"],
  rules: {},
};
