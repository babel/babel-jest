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

Create or add the following to your `.babelrc`:
```json
{
  "presets": ["react"]
}

```

And run:

    $ npm install

**And you're good to go!**

## Using experimental stages
Babel 6.x introduces `presets`.  

Please refer to the [plugins docs](http://babeljs.io/docs/plugins/) on how to enable experimental stages.
