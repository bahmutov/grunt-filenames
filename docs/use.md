## Example

Checks if all JavaScript filenames are lower case.

```js
// Gruntfile.js
grunt.initConfig({
  filenames: {
    options: {
      valid: /^[a-z]+\.js$/
    },
    src: ['tasks/*.js']
  }
});
grunt.loadNpmTasks('grunt-filenames');
grunt.registerTask('default', ['filenames']);
```

**note** {%= name %} checks base name only (not folder names)

## Extras

Instead of RegExp, you can specify

* `valid: "dashes"` - allow lowecase with dashes filenames
* `valid: "camelCase"` - allow camelCasedFilenames.js

A function, for example

```js
valid: function (filename) {
  return filename.length > 10;
}
```
