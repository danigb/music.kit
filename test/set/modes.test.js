var vows = require('vows')
var assert = require('assert')
var modes = require('../../lib/set/modes')

vows.describe('set.modes').addBatch({
  'modes': function () {
    assert.deepEqual(modes('C d E'), [
      [ 'C', 'd', 'E' ],
      [ 'd', 'E', 'C' ],
      [ 'E', 'C', 'd' ]
    ])
  }
}).export(module)
