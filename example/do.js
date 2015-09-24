var build = require("bud");
var babelify = require("../");

build('hello-world.js', build.watch("hello-world.jsx"), babelify({ entry: "hello-world.jsx", output: "hello-world.js" }));
