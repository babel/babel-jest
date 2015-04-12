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

And run:

    $ npm install

**And you're good to go!**

## Using experimental stages

By default, babel-jest will use Babel's default stage (stage 2).
If you'd like to use one of the other stages, set the environment variable:

`BABEL_JEST_STAGE`

And then you can modify the test command in package.json like so:

```javascript
{

  // Normal package.json stuff

  "scripts": {
    "test": "BABEL_JEST_STAGE=0 jest"
  },

  // Normal package.json stuff
}
```
