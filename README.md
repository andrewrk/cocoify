# cocoify

browserify v2 plugin for [coco](http://github.com/satyr/coco)

mix and match `.co` and `.js` files in the same project

**Important:** Your Coco files must have the extension `.co` though you can omit it when calling `require`.

[![build status](https://secure.travis-ci.org/superjoe30/cocoify.png)](http://travis-ci.org/superjoe30/cocoify)

# example

given some files written in a mix of `js` and `co`:

foo.co:

```co
console.log(require './bar.js')
```

bar.js:

```js
module.exports = require('./baz.co')(5)
```

baz.co:

``` js
module.exports = (n) -> n * 111
```

install cocoify into your app:

```
$ npm install cocoify
```

when you compile your app, just pass `-t cocoify` to browserify:

```sh
$ browserify -t cocoify foo.co > bundle.js
$ node bundle.js
555
```

# install

With [npm](https://npmjs.org) do:

```sh
npm install cocoify
```

# license

MIT

# maintainers wanted

I am no longer a coco user so if you use this plugin regularly and want to
take it over I will gladly add you as a maintainer on npm.
