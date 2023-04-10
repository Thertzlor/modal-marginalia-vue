module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier"
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-undef": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": 'off',
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "indent": [1, 2],
    "vue/no-unused-vars": 1,
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ]
  }
};
