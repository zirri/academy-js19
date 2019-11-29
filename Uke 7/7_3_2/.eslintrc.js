module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    },
    "overrides": [
        {
            "files": ["utilsTest.js","*.test.js", "*.spec.js"],
            "rules": {
                "no-unused-expressions": "off"
            }
        }
    ]
};