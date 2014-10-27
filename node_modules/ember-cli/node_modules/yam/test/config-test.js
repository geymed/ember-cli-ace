'use strict';

var assert = require('chai').assert;
var Config = require('../lib/config');

var ok        = assert.ok;
var deepEqual = assert.deepEqual;

describe('Config', function() {
  it('module exists', function() {
    ok(Config);
  });

  describe('constructor', function() {
    it('returns an empty object if a path doesn\'t exist', function() {
      var config = new Config();

      deepEqual(config, {});
    });

    it('returns an empty object if a path exists but the file is empty', function() {
      var config = new Config('test/fixtures/empty.json');

      deepEqual(config, {});
    });

    it('returns an empty object if a path exists and file has settings', function() {
      var config = new Config('test/fixtures/config.json');

      deepEqual(config, {
        foo: 'bar',
        baz: 5,
        'bazinga-blah-blah': 'hello'
      });
    });
  });
});
