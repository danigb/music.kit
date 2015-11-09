var vows = require('vows')
var assert = require('assert')
var operation = require('../lib/pitch.operation')

vows.describe('pitch.operation').addBatch({
  'one parameter': function () {
    var octUp = operation(function (n) {
      return [n[0], n[1] + 1, n[2]]
    })

    assert.equal(octUp('C2'), 'C3')
    assert.deepEqual(octUp([0, 2, null]), [0, 3, null])
  },
  'two parameters': function () {
    var add = operation(function (o, n) {
      return [n[0], n[1] + o, n[2]]
    })
    assert.equal(add(2, 'C2'), 'C4')
  }
}).export(module)
