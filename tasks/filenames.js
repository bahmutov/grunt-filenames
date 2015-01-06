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
    } else if (typeof options.valid === 'string') {
      options.valid = new RegExp(options.valid);
    }

    var check;
    if (typeof options.valid === 'function') {
      grunt.verbose.writeln('Validating filenames using function\n' + options.valid.toString());
      check = options.valid;
    } else {
      grunt.verbose.writeln('Validating filenames using RegExp', options.valid);
      check = function (filename) {
        return options.valid.test(filename);
      };
    }

    if (typeof options.error !== 'string') {
      options.error = 'file {filename} does not pass check {valid}';
    }

    var allValid = this.files.every(function (file) {
      return file.src.every(function (filename) {
        grunt.verbose.writeln('testing filename', filename);
        var valid = check(basename(filename));
        if (!valid) {
          grunt.log.error(
            options.error
              .replace(/{filename}/, filename, 'gi')
              .replace(/{valid}/, options.valid.toString(), 'gi')
          );
        }
        return valid;
      });
    });

    if (allValid) {
      grunt.log.ok(this.files.length + ' file(s) without filename problems');
    }
    return allValid;
  });
};
