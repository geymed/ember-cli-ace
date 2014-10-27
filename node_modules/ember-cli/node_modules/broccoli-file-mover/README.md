# Broccoli's File Mover

[![Build Status](https://travis-ci.org/rjackson/broccoli-file-mover.svg?branch=master)](https://travis-ci.org/rjackson/broccoli-file-mover)

## Installation

```bash
npm install --save-dev broccoli-file-mover
```

## Usage

Moving a single file from `app/main` to `app`:

```javascript
var moveFile = require('broccoli-file-mover');

var tree = moveFile('app', {
  srcFile: 'app/main.js',
  destFile: '/app.js'
});
```

Moving `app/main` to `app` and `test/main` to `test`:

```javacript
var moveFile = require('broccoli-file-mover');

var tree = moveFile('app', {
  files: {
    'app/main.js': 'app.js',
    'test/main.js': 'test.js'
  }
});
```

## Documentation

### `moveFile(inputTree, options)`

---

`options.srcFile` *{String}*

The path of the file to move (starting location).

---

`options.destFile` *{String}*

The path to move the file to (final location).

---

`options.copy` *{true,false}*

Should the file be copied?

 - If `copy` is `true`, then the source file is left in the tree (this might be useful to output both a non-minified and minified version).
 - If `copy` is `false`, then the source file is removed after it has been copied (essentially making this a `move` operation).

---

`options.duplicate` *{true,false}*

Should the source full contents of the input tree be duplicated into the returned tree?

 - If `true`, then the contents of the input tree is copied over into the new tree.
 - If `false`, then only the files being moved are worked on.

---

`options.files` *{Array|Object}*

This allows specifying more than one move/copy operation at a time (and reduced the total number of trees/steps
needed if you need to move many files).

 - If `files` is an object the key is used as the source path, and the value is the destination path.
 - If `files` is an array each item must be an object with a `srcFile` and `destFile` property. If `copy` is present it will
   be used also.

## ZOMG!!! TESTS?!?!!?

I know, right?

Running the tests:

```javascript
npm install
npm test
```

## License

This project is distributed under the MIT license.
