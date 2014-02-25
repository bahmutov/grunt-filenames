# {%= name %} v{%= version %}

> {%= description %}

{%= _.doc("./docs/badges.md") %}

### Install

`npm install grunt-filenames --save-dev`

### Example

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

{%= _.doc("./docs/footer.md") %}

## MIT License

{%= _.doc("./LICENSE") %}

