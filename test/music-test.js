var vows = require('vows')
var assert = require('assert')
var music = require('../')

vows.describe('music.kit').addBatch({
  'exists': function () {
    assert(music)
  }
}).export(module)
