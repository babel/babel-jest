var babel = require("babel-core");
var fs = require('fs');
var objectAssign = require('object-assign');
var babelCachedConfig;
var defaultConfig = {
  retainLines: true
};

function readJsonFile(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function getConfigFromPackageJsonFile() {
  return readJsonFile("package.json").babel;
};

function getBabelConfig(jestConfig) {
  var passedConfigPath = jestConfig.globals.babelConfig && jestConfig.globals.babelConfig.configPath,
    babelConfig = {};

  if (passedConfigPath) {
    babelConfig = readJsonFile(passedConfigPath);
  } else if (jestConfig.globals.babelConfig) {
    babelConfig = jestConfig.globals.babelConfig;
  } else {
    try {
      babelConfig = getConfigFromPackageJsonFile();
    } catch (error) {}

    if (!babelConfig) {
      try {
        babelConfig = readJsonFile(".babelrc");
      } catch (error) {}
    }
  }

  return objectAssign(defaultConfig, babelConfig);
}

function isFileProcessable(filename) {
  return filename.indexOf("node_modules") === -1 && babel.util.canCompile(filename);
}

module.exports = {
  process: function(src, filename, jestConfig) {
    if (!babelCachedConfig) {
      babelCachedConfig = getBabelConfig(jestConfig) || {};
    }

    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (isFileProcessable(filename)) {
      return babel.transform(src, babelCachedConfig).code;
    }
    return src;
  }
};
