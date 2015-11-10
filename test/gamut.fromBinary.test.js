var vows = require('vows')
var assert = require('assert')
var fromBinary = require('../lib/gamut.fromBinary')

vows.describe('gamut.fromBinary').addBatch({
  '12 digit binary number': function () {
    assert.deepEqual(fromBinary('101000000000', 'E'), [ 'E', 'F#' ])
    assert.deepEqual(fromBinary('101011010101', 'C'), ['C', 'D', 'E', 'F', 'G', 'A', 'B'])
  },
  'decimal number': function () {
    assert.deepEqual(fromBinary(2773, 'C'), [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ])
    assert.deepEqual(fromBinary(2773, false), ['1P', '2M', '3M', '4', '5', '6M', '7M'])
  },
  'partial': function () {
    var major = fromBinary(2773)
    assert.deepEqual(major('D'), [ 'D', 'E', 'F#', 'G', 'A', 'B', 'C#' ])
  },
  'invalid params': function () {
    assert.deepEqual(fromBinary(null, 'E'), [ ])
    assert.deepEqual(fromBinary(2773, 'blah'), [ null, null, null, null, null, null, null ])
  }
}).export(module)
