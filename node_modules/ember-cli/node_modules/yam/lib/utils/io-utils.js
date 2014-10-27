'use strict';

var fs = require('fs-extra');

var exists = function exists(path) {
  return fs.existsSync(path);
};

var readFile = function readFile(path) {
  var result;

  try {
    result = fs.readJsonSync(path);
  } catch(e) {
    result = {};
  }

  return result;
};

module.exports.readFile = readFile;
module.exports.exists   = exists;
