# grunt-filenames v0.4.0

> Validates filenames using given RegExp

[![NPM][grunt-filenames-icon] ][grunt-filenames-url]

[![Build status][grunt-filenames-ci-image] ][grunt-filenames-ci-url]
[![dependencies][grunt-filenames-dependencies-image] ][grunt-filenames-dependencies-url]
[![devdependencies][grunt-filenames-devdependencies-image] ][grunt-filenames-devdependencies-url]

[grunt-filenames-icon]: https://nodei.co/npm/grunt-filenames.png?downloads=true
[grunt-filenames-url]: https://npmjs.org/package/grunt-filenames
[grunt-filenames-ci-image]: https://travis-ci.org/bahmutov/grunt-filenames.png?branch=master
[grunt-filenames-ci-url]: https://travis-ci.org/bahmutov/grunt-filenames
[grunt-filenames-dependencies-image]: https://david-dm.org/bahmutov/grunt-filenames.png
[grunt-filenames-dependencies-url]: https://david-dm.org/bahmutov/grunt-filenames
[grunt-filenames-devdependencies-image]: https://david-dm.org/bahmutov/grunt-filenames/dev-status.png
[grunt-filenames-devdependencies-url]: https://david-dm.org/bahmutov/grunt-filenames#info=devDependencies



### Install

`npm install grunt-filenames --save-dev`

### Example

Checks if all JavaScript filenames are lower case.

```js
// Gruntfile.js
grunt.initConfig({
  filenames: {
    options: {
      valid: /^[a-z]+\.js$/,
      except: // 'name' | ['name1', 'name2'] | function (name) { return true if name is exception }
    },
    src: ['tasks/*.js']
  }
});
grunt.loadNpmTasks('grunt-filenames');
grunt.registerTask('default', ['filenames']);
```

**note** grunt-filenames checks base name only (not folder names)

**Custom error message**

Add the following property to the options to get custom error messages

    error: 'your file {filename} does not come close to passing {valid}'
    // {filename} - will be failed filename
    // {valid} - will be options.valid regexp

### Extras

option **valid**

Instead of RegExp, you can specify

* `valid: "dashes"` - allow lower-case-with-dashes filenames
* `valid: "camelCase"` - allow camelCased filenames

A function, for example

```js
valid: function (filename) {
  return filename.length > 10;
}
```

option **except**

You can exclude specific names if they fail the check. Single string name, array of strings or
a function is allowed. A function should return truthy value if given name that fails should be an exception.



### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/grunt-filenames/issues) on Github



## MIT License

The MIT License (MIT)

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



