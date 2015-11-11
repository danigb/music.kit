var vows = require('vows')
var assert = require('assert')
var get = require('../../lib/scale/get')

vows.describe('music.scale.get').addBatch({
  'get by type and tonic': function () {
    assert.deepEqual(get('major', 'Db'), [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C' ])
  },
  'get by complete name': function () {
    assert.deepEqual(get('Db major'), [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C' ])
  },
  'partial': function () {
    assert.deepEqual(get('major')('Db'), [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C' ])
  },
  'intervals': function () {
    assert.deepEqual(get('major', false), ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
    assert.deepEqual(get('major')(false), ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
  }
}).export(module)
