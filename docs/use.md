## Example

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

**note** {%= name %} checks base name only (not folder names)

**Custom error message**

Add the following property to the options to get custom error messages

    error: 'your file {filename} does not come close to passing {valid}'
    // {filename} - will be failed filename
    // {valid} - will be options.valid regexp

## Extras

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
