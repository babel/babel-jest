# bable-jest

[Bable](https://github.com/bable/bable) [jest](https://github.com/facebook/jest) plugin

## Usage

Make the following changes to `package.json`:

```json
{
  "dependencies": {
    "bable-jest": "*",
    "jest": "*"
  },
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/bable-jest",
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```

And run:

    $ npm install

**And you're good to go!**
