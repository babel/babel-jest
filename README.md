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

By default, babel-jest will read config from `package.json` or `.babelrc` files.  
If you want to provide custom config you can use jest `globals` `babelConfig` jest configuration field like this:

* to provide custom config path:

```json
{
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
    "globals": {
      "babelConfig": {
        "configPath": "path here"
      }
    },
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```

* to provide custom config object:

```json
{
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
    "globals": {
      "babelConfig": {
        "presets": ["..."],
        "plugins": ["..."]
      }
    },
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```
