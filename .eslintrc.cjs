/* eslint-env node */
module.exports = {
  root: true,
  "extends": [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "no-var": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-dupe-keys": "error",
    "no-debugger": "error",
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ]
  }
};