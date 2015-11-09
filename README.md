# babel-jest

[Babel](https://github.com/babel/babel) [jest](https://github.com/facebook/jest) plugin

## Usage

Make the following changes to `package.json`:

```json
{
  "devDependencies": {
    "babel-jest": "*",
    "jest-cli": "*"
  },
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```

To use the Babel polyfill, add the following to the `"jest"` configuration in `package.json`:

```json
"jest": {
  "setupEnvScriptFile": "<rootDir>/node_modules/babel-jest/polyfill.js",
  "unmockedModulePathPatterns": ["node_modules/babel-core"]
}
```

And run:

    $ npm install

**And you're good to go!**
