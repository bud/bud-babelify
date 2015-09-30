var browserify = require("bud-browserify");
var babelify = require("babelify");
var mix = require("mix-objects");

plugin.build = true;
plugin.title = 'Babelify';
plugin.hasBuiltinWatch = true;
plugin.params = browserify.params;

module.exports = plugin;

function plugin (options) {
  var extensions = ['jsx'];

  if (options.options) {
    if (options.options.extensions) {
      options.options.extensions.push('jsx');
    } else {
      options.options.extensions = ['jsx'];
    }
  }

  if (options.transforms) {
    options.transforms.push(babelify);
  } else {
    options.transforms = [babelify];
  }

  return browserify(mix({}, [options, {
    debug: !!options.debug,
    sourceType: 'module'
  }]));
}
