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

## Processing of node_modules

Under certain conditions it may be desirable to have `babel-jest`
process against files (such as symlinks) in the `node_modules` folder.

This can be achieved by setting the environmental variable:

```shell
BABEL_JEST_PROCESS_MODULES='["foo", "bar", "baz"]'; jest
```

Where `foo`, `bar`, `baz` are modules within your `node_modules` folder.
