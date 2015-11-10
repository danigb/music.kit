var vows = require('vows')
var assert = require('assert')
var get = require('../../lib/chord/get')

vows.describe('music.chord.get').addBatch({
  'by type': function () {
    assert.deepEqual(get('Maj7'), {
      name: 'Maj7',
      intervals: [ '1', '3', '5', '7' ],
      aliases: [ 'maj7', 'M7' ],
      binary: '100010010001',
      decimal: 2193
    })
  }
}).export(module)
