var task = require("bud");
var build = task;
var babelify = require("../");

build("build.js", babelify({
  "entry": "hello-world.jsx",
  "output": "output.js",
  "transforms": [],
  "plugins": [],
  "watch": true
}));
