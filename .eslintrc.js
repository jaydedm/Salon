module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ does not require importing React
    quotes: ["off"],
    semi: ["off"], // Turns off the rule for extra semicolons
    "comma-dangle": ["off"],
    "space-before-function-paren": ["off"], // Ensures space before function parentheses
  },
};
