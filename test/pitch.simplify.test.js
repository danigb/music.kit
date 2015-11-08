var vows = require('vows')
var assert = require('assert')
var simplify = require('../lib/pitch.simplify')

vows.describe('pitch.simplify').addBatch({
  'notes': function () {
    assert.deepEqual('C2 D3 E4 F-1 G'.split(' ').map(simplify), ['C', 'D', 'E', 'F', 'G'])
  },
  'intervals': function () {
    assert.deepEqual('6 7 8 9 10 11 12 13M 13m'.split(' ').map(simplify),
      ['6M', '7M', '1P', '2M', '3M', '4P', '5P', '6M', '6m'])
  }
}).export(module)
