module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "max-classes-per-file": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "global-require": 0,
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "max-len": [
      "warn",
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
};
