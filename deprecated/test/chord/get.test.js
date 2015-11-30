var vows = require('vows')
var assert = require('assert')
var get = require('../../lib/chord/get')

vows.describe('music.chord.get').addBatch({
  'get by type and tonic': function () {
    assert.deepEqual(get('Maj7', 'Eb'), ['Eb', 'G', 'Bb', 'D'])
    assert.deepEqual(get('Maj7', 'Eb2'), ['Eb2', 'G2', 'Bb2', 'D3'])
  },
  'get by complete name': function () {
    assert.deepEqual(get('EbMaj7'), ['Eb', 'G', 'Bb', 'D'])
  },
  'partial': function () {
    assert.deepEqual(get('Maj7')('Eb'), ['Eb', 'G', 'Bb', 'D'])
  },
  'intervals': function () {
    assert.deepEqual(get('Maj7', false), ['1P', '3M', '5P', '7M'])
    assert.deepEqual(get('Maj7')(false), ['1P', '3M', '5P', '7M'])
  },
  'invalid name': function () {
    assert.deepEqual(get('blah', 'C3'), [])
  }
}).export(module)
