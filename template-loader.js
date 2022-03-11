const minify = require("minify-html-literals");
module.exports = function (source) {
  console.log("running minify");
  try {
    const minified = minify.minifyHTMLLiterals(source);

    if (minified && minified.code) {
      return minified.code;
    }

    return source;
  } catch (e) {
    return source;
  }
};
