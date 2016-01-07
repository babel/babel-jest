var babel = require("babel-core");
var path = require("path");

module.exports = {
  process: function (src, filename) {
    // Allow the the processor to be configured to process specific
    // modules within the node_modules/ folder, i.e, symbolic links used to
    // shorthand src/ filepaths.
    var processModules = JSON.parse(process.env.BABEL_JEST_PROCESS_MODULES || "null") || [];
    for (var i = 0, ok = false; i < processModules.length; i++) {
      if (filename.indexOf(path.join(process.cwd(), "node_modules", processModules[i])) === 0) {
        // Don't process any of the modules own node_modules, just b/c their
        // filepath happens to match the previous test...
        if (filename.match(/node_modules/g).length === 1)  {
          ok = true;
          break;
        }
      }
    }

    // Ignore all other files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if ((ok || filename.indexOf("node_modules") === -1) && babel.util.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        retainLines: true
      }).code;
    }

    return src;
  }
};
