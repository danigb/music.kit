var vows = require('vows')
var assert = require('assert')
var enharmonics = require('../lib/note.enharmonics')

vows.describe('note.enharmonics').addBatch({
  'get enharmonics': function () {
    assert.deepEqual(enharmonics('C'), [ 'B#', 'Dbb' ])
    assert.deepEqual(enharmonics('B'), [ 'A##', 'Cb' ])
    assert.deepEqual(enharmonics('F5'), [ 'E#5', 'Gbb5' ])
    assert.deepEqual(enharmonics('E#2'), [ 'D###2', 'F2' ])
    assert.deepEqual(enharmonics('A###6'), [ 'G#####6', 'B#6' ])
    assert.deepEqual(enharmonics('A'), [ 'G##', 'Bbb' ])
    assert.deepEqual(enharmonics('Ab3'), [ 'G#3', 'Bbbb3' ])
    assert.deepEqual(enharmonics('Db'), [ 'C#', 'Ebbb' ])
  },
  'include pitch': function () {
    assert.deepEqual(enharmonics('C4', true), [ 'B#3', 'C4', 'Dbb4' ])
  },
  'with arrays': function () {
    // TODO: fix me - it should be 0 not undefined
    assert.deepEqual(enharmonics([0, 2, 0], true),
      [ [ 12, -5, undefined ], [ 0, 2, 0 ], [ -12, 9, undefined ] ])
  }
}).export(module)
