var bable = require("bable-core");

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // bable files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && bable.canCompile(filename)) {
      return bable.transform(src, { filename: filename }).code;
    }
    return src;
  }
};
