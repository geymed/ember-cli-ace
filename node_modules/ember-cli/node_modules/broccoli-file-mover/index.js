var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var CachingWriter = require('broccoli-caching-writer');
var helpers = require('broccoli-kitchen-sink-helpers')

function Mover (inputTree, options) {
  if (!(this instanceof Mover)) return new Mover(inputTree, options);

  options = options || {};
  this.inputTree = inputTree;

  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      this[key] = options[key]
    }
  }
};

Mover.prototype.constructor = Mover;
Mover.prototype = Object.create(CachingWriter.prototype);

Mover.prototype._copyFile = function (sourceDirectory, destinationDirectory, source, destination, leaveOriginal) {
  var sourcePath = path.join(sourceDirectory, source);
  var destinationPath = path.join(destinationDirectory, destination);

  rimraf.sync(destinationPath);
  helpers.copyRecursivelySync(sourcePath, destinationPath);

  if (!leaveOriginal) { rimraf.sync(path.join(destinationDirectory, source)); }
};

Mover.prototype.updateCache = function (srcDir, destDir) {
  var self = this;

  if (self.duplicate !== false) {
    helpers.copyRecursivelySync(srcDir, destDir);
  }

  if (Array.isArray(self.files)) {
    self.files.forEach(function(file) {
      self._copyFile(srcDir, destDir, file.srcFile, file.destFile, file.copy);
    });
  } else if (self.files) {
    for (var key in self.files) {
      if (self.files.hasOwnProperty(key)) {
        self._copyFile(srcDir, destDir, key, self.files[key], self.copy);
      }
    }
  } else {
    self._copyFile(srcDir, destDir, self.srcFile, self.destFile, self.copy);
  }
};

module.exports = Mover;
