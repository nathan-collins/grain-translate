module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true
  },
  "globals": {
    "i18next": false
  },
  "rules": {
    "no-console": ["error", {
      allow: ["warn", "error"]
    }],
    "no-underscore-dangle": [2, {
      "allowAfterThis": true
    }],

    "class-methods-use-this": ["error", {
      "exceptMethods": [
        'render',
        '_render'
      ]
    }],
  }
};
