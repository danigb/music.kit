var vows = require('vows')
var assert = require('assert')
var freq = require('../../lib/note/freq')

vows.describe('music.note.freq').addBatch({
  'basic': function () {
    assert.equal(freq(null, 'A4'), 440)
    assert.equal(freq(null, 'A3'), 220)
    assert.equal(freq(null, 'E4'), 329.6275569128699)
    assert.equal(freq(null, 'F4'), 349.2282314330039)
  },
  'map notes': function () {
    assert.deepEqual(['C3', 'D3', 'e3'].map(freq(440)),
    [ 130.8127826502993, 146.8323839587038, 164.81377845643496 ])
  },
  'custom tuning': function () {
    assert.deepEqual(['A4', 'A#4', 'B4'].map(freq(444)),
    [ 444, 470.40161389552713, 498.3731494493616 ])
  },
  'bypass numbers': function () {
    assert.equal(freq(444, 440), 440)
  },
  'invalid notes': function () {
    assert.equal(freq(null, null), null)
    assert.equal(freq(null, 'blah'), null)
  }
}).export(module)
