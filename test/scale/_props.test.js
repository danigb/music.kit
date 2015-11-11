var vows = require('vows')
var assert = require('assert')
var _props = require('../../lib/scale/_props')

vows.describe('music.scale._props').addBatch({
  'by type': function () {
    assert.deepEqual(_props('major'), {
      name: 'major',
      aliases: [ 'ionian' ],
      binary: '101011010101',
      decimal: 2773,
      tonic: null,
      notes: [],
      intervals: [ '1', '2', '3', '4', '5', '6', '7' ]
    })
  },
  'by name': function () {
    assert.deepEqual(_props('C major'), {
      name: 'C major',
      aliases: [ 'C ionian' ],
      binary: '101011010101',
      decimal: 2773,
      tonic: 'C',
      notes: [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],
      intervals: [ '1', '2', '3', '4', '5', '6', '7' ]
    })
  },
  'by alias': function () {
    assert.deepEqual(_props('dominant').name, 'mixolydian')
    assert.deepEqual(_props('C3 dominant').name, 'C3 mixolydian')
    assert.deepEqual(_props('pomeroy').name, 'altered')
    assert.deepEqual(_props('Ab3 pomeroy').name, 'Ab3 altered')
  },
  'by binary': function () {
    assert.deepEqual(_props('101011010101').name, 'major')
    assert.deepEqual(_props('101011010110').name, 'mixolydian')
    assert.deepEqual(_props('F#4 101011010110').name, 'F#4 mixolydian')
  },
  'by decimal': function () {
    assert.deepEqual(_props(2773).name, 'major')
    assert.deepEqual(_props('Gb1 2773').name, 'Gb1 major')
  }
}).export(module)
