var babel = require("babel-core");

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.util.canCompile(filename)) {
      var code = babel.transform(src, {
        filename: filename,
        retainLines: true,
        auxiliaryCommentBefore: 'istanbul ignore next'
      }).code;

      return code.replace('function _interopRequireDefault(obj)', '/*istanbul ignore next */\nfunction _interopRequireDefault(obj)');
    }

    return src;
  }
};
