var vows = require('vows')
var assert = require('assert')
var get = require('../../lib/scale/get')

vows.describe('music.scale.get').addBatch({
  'by type': function () {
    assert.deepEqual(get('major'), {
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
    assert.deepEqual(get('C major'), {
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
    assert.deepEqual(get('dominant').name, 'mixolydian')
    assert.deepEqual(get('C3 dominant').name, 'C3 mixolydian')
    assert.deepEqual(get('pomeroy').name, 'altered')
    assert.deepEqual(get('Ab3 pomeroy').name, 'Ab3 altered')
  },
  'by binary': function () {
    assert.deepEqual(get('101011010101').name, 'major')
    assert.deepEqual(get('101011010110').name, 'mixolydian')
    assert.deepEqual(get('F#4 101011010110').name, 'F#4 mixolydian')
  },
  'by decimal': function () {
    assert.deepEqual(get(2773).name, 'major')
    assert.deepEqual(get('Gb1 2773').name, 'Gb1 major')
  }
}).export(module)
