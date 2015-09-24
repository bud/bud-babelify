var browserify = require("bud-browserify");
var babelify = require("babelify");

plugin.build = true;
plugin.title = 'Babelify';
plugin.params = [
  { name: 'Entry', desc: 'Path to the entry module.' },
  { key: 'output', name: 'Output file',  desc: 'Path to the file to be written for output.' },
  { name: 'Transforms', desc: 'e.g: babelify, brfs', list: true },
  { name: 'Plugins', desc: 'e.g: foo, bar', list: true }
];

module.exports = plugin;

function plugin (options) {
  return function (b) {
    options.options || (options.options = {
      extensions: ['jsx'],
      debug: !!b.params.debug
    });

    options.transforms || (options.transforms = []);
    options.transforms.push(babelify);

    browserify(options)(b);
  };
}
