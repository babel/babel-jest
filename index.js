var babel = require("babel-core");

module.exports = {
  process: function (src, filename) {
    // Allow the stage to be configured by an environment
    // variable, but use Babel's default stage (2) if
    // no environment variable is specified.
    var stage = process.env.BABEL_JEST_STAGE || 2;

    // Allow the Babel runtime to be included via an
    // environment variable. Remember to add
    // node_modules/babel to unmockedModulePathPatterns
    var optional = process.env.BABEL_JEST_RUNTIME ? [ "runtime" ] : undefined;

    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        stage: stage,
        retainLines: true,
        optional: optional
      }).code;
    }

    return src;
  }
};
