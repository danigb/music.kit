var vows = require('vows')
var assert = require('assert')
var note = require('../lib/note.js')

vows.describe('music.note').addBatch({
  'get notes': function () {
    assert.equal(note('fx'), 'F##')
    assert.equal(note('blah'), null)
    assert.equal(note(), null)
  }
}).export(module)
