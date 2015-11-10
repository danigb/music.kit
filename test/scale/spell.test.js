var vows = require('vows')
var assert = require('assert')
var spell = require('../../lib/scale/spell')

vows.describe('music.scale.spell').addBatch({
  'get notes': function () {
    assert.deepEqual(spell('major', 'C'), [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ])
  },
  'partial': function () {
    assert.deepEqual(spell('major')('C'), [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ])
  }
}).export(module)
