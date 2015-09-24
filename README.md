## bud-babelify

[Babelify](http://npmjs.org/babelify) plugin for [Bud](http://npmjs.org/bud)

## Install

```bash
$ npm install bud-babelify
```

## Usage

```js
var build = require('bud');
var babelify = require('bud-babelify');

build("dist/build.js", babelify({ entry: "index.js", output: "dist/build.js" }));
```
