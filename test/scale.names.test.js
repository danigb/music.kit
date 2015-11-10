var vows = require('vows')
var assert = require('assert')
var names = require('../lib/scale.names')

vows.describe('scale.names').addBatch({
  'all names': function () {
    assert.equal(names().length, 89)
  }
}).export(module)
