var babel = require("babel-core"),
    canCompile = babel.util.canCompile;

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        retainLines: true
      }).code;
    }

    return src;
  }
};
