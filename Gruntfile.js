/*
 * grunt-filenames
 * https://github.com/bahmutov/grunt-filenames
 *
 * Copyright (c) 2014 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    filenames: {
      options: {
        valid: 'camelCase'
      },
      src: ['tasks/*.js']
    },

    readme: {
      options: {
        readme: './docs/README.tmpl.md',
        docs: '.',
        templates: './docs'
      }
    },

    'nice-package': {
      all: {}
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'jshint-solid', 'nice-package', 'filenames', 'readme']);
};
