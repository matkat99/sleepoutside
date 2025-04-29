import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "no-console": "warn",
    },
  },
];
