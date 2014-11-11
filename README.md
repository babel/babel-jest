# 6to5-jest

[6to5](https://github.com/6to5/6to5) [jest](https://github.com/facebook/jest) plugin

## Usage

Make the following changes to `package.json`:

**package.json**

```json
{
  "dependencies": {
    "6to5-jest": "*",
    "jest": "*"
  },
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "scriptPreprocessor": "6to5-jest",
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```

And run:

    $ npm install

**And you're good to go!**
