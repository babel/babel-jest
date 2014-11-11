# 6to5-jest

**package.json**

```json
{
  "dependencies": {
    "6to5": "*",
    "jest": "*"
  },
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "scriptPreprocessor": "<rootDir>/preprocessor.js",
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```

**preprocessor.js**

```javascript
var to5 = require("6to5");

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // 6to5 files can be .js and .es6
    if (filename.indexOf("node_modules") === -1 && to5.canCompile(filename)) {
      return to5.transform(src, { filename: filename }).code;
    }
    return src;
  }
};
```
