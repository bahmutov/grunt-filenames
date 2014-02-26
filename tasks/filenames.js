/*
 * grunt-filenames
 * https://github.com/bahmutov/grunt-filenames
 *
 * Copyright (c) 2014 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var basename = require('path').basename;

module.exports = function(grunt) {
  var dashed = /^[a-z\-]+\./;
  var camelCase = /^[a-z][a-zA-Z]*\./;

  grunt.registerMultiTask('filenames', 'Validates source filenames', function () {
    var options = this.options({
      valid: camelCase
    });
    if (options.valid === 'dashed' ||
      options.valid === 'dashes') {
      options.valid = dashed;
    } else if (options.valid === 'camelCase') {
      options.valid = camelCase;
    }
    grunt.verbose.writeln('Validating filenames using RegExp', options.valid);

    var allValid = this.files.every(function (file) {
      return file.src.every(function (filename) {
        grunt.verbose.writeln('testing filename', filename);
        var valid = options.valid.test(basename(filename));
        if (!valid) {
          grunt.log.error('file', filename, 'does not pass check', options.valid);
        }
        return valid;
      });
    });
    return allValid;
  });
};
