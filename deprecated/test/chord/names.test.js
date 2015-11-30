var vows = require('vows')
var assert = require('assert')
var names = require('../../lib/chord/names')

vows.describe('chord.names').addBatch({
  'all names': function () {
    assert.equal(names().length, 109)
  },
  'by notes': function () {
    assert.deepEqual(names('C E G B'), [ 'CMaj7', 'Cmaj7', 'CM7' ])
    assert.deepEqual(names('D F A C'), [ 'Dm7', 'Dminor7', 'D-', 'D-7' ])
  }
}).export(module)
