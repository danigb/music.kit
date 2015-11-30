var vows = require('vows')
var assert = require('assert')
var roman = require('../../lib/notation/rtc')

function fifths (str) {
  return str.split(' ').map(roman).map(function (e) { return e[0] })
}

vows.describe('notation.props').addBatch({
  'plain roman numerals': function () {
    assert.deepEqual(fifths('I II III IV V VI VII'), [0, 2, 4, -1, 1, 3, 5])
    assert.deepEqual(fifths('I II III IV V VI VII'), fifths('i ii iii iv v vi vii'))
  },
  'altered roman numerals': function () {
    assert.deepEqual(fifths('bI bII bIII bIV bV bVI bVII'),
      fifths('i ii iii iv v vi vii').map(function (e) { return e - 7 }))
    assert.deepEqual(fifths('#I #II #III #IV #V #VI #VII'),
      fifths('i ii iii iv v vi vii').map(function (e) { return e + 7 }))
  }
}).export(module)
