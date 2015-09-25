var babel = require("babel-core");

module.exports = {
  process: function (src, filename) {
    // Allow the stage to be configured by an environment
    // variable, but use Babel's default stage (2) if
    // no environment variable is specified.
    var stage = process.env.BABEL_JEST_STAGE || 2;

    // Babel files can be .js, .es, .jsx or .es6
    if (babel.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        stage: stage,
        retainLines: true,
        auxiliaryCommentBefore: "istanbul ignore next"
      }).code;
    }

    return src;
  }
};
