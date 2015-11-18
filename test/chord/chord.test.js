var vows = require('vows')
var assert = require('assert')
var build = require('../../lib/chord/chord')

vows.describe('chord.build').addBatch({
  'basic': function () {
    assert.deepEqual(build('C2 E2 G2', 'A4'), ['A4', 'C#5', 'E5'])
  }
}).export(module)
