module.exports = {
  parserOptions: { project: "./tsconfig.base.json" },
  extends: [
    "eslint-config-ali/typescript",
    "eslint-config-ali/typescript/react",
    "eslint-config-ali/jsx-a11y",
    "prettier",
  ],
};
