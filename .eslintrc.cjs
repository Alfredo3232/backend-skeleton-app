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
    // usually the var keyword has unexpected behavior, let and const are more consistent
    "no-var": "error",
    // if a variable isn't used it will warn you, not an error because it might be used somewhere else
    "no-unused-vars": "warn",
    // leaving console logs is a bad practice and should only be used during development
    "no-console": "warn",
    // having duplicates is unnesscary and wasting performance
    "no-duplicate-imports": "error",
    "no-dupe-keys": "error",
    // the debugger is only a testing tool and could break your application
    "no-debugger": "error",
    // I think that adding semi-colons is a good practice because it might help solve some issues and 
    // the interpreter doesn't have to guess where your line ended
    "semi": [
      "error",
      "always"
    ],
    // this is personal choice, and for the sake of consitency I made it an error
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
