/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": [
      1,
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/ban-types": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/no-non-null-assertion": [0],
    "vue/multi-word-component-names": [0],
    "vue/no-mutating-props": [0],
    "lines-between-class-members": [0],
    "no-lonely-if": [0],
    "no-console": "off",
    "no-continue": "off",
    "no-unused-vars": "off",
    "no-underscore-dangle": [0],
    "no-else-return": [0],
    "no-await-in-loop": [0],
    "import/no-extraneous-dependencies": [0],
    "import/extensions": [0],
    "import/newline-after-import": [0],
    "import/prefer-default-export": [0],
    "no-nested-ternary": [0],
    "no-plusplus": [0],
    "no-use-before-define": [0],
    "no-param-reassign": [
      0,
      {
        props: true,
        ignorePropertyModificationsFor: [
          "res",
          "item",
          "state", //
          "ConfigData",
          "e",
          "ev",
          "vueData",
        ],
      },
    ],
  },
};
