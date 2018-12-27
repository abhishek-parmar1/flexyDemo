module.exports = {
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["plugin:vue/recommended", "standard"],
  plugins: ["vue"],
  rules: {
    indent: [2, "tab"],
    "no-tabs": 0
  }
};
