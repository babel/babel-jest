# babel-jest

[Babel](https://github.com/babel/babel) [jest](https://github.com/facebook/jest) plugin

## Usage

Make the following changes to `package.json`:

```json
{
  "devDependencies": {
    "babel-jest": "~6.0.1",
    "jest-cli": "~5.0.3"
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

And run:

    $ npm install

**And you're good to go!**
