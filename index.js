var babel = require("babel-core");

module.exports = {
  process: function (src, filename, config) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    var babelConfig = config.preprocessorOptions || {};
    babelConfig.filename = filename;
    babelConfig.retainLines = true;

    if (filename.indexOf("node_modules") === -1 && babel.util.canCompile(filename)) {
      return babel.transform(src, babelConfig).code;
    }

    return src;
  }
};
