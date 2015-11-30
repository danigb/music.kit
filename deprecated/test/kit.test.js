var vows = require('vows')
var assert = require('assert')
var kit = require('..')

vows.describe('music.kit').addBatch({
  'ready': function () {
    assert(kit)
  }
}).export(module)
