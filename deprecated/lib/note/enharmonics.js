'use strict'

var transpose = require('./transpose')

var ASC = [-12, 7] // dimished second
var DESC = [12, -7] // descending dimished second

/**
 * Get the enharmonics of a note. It returns an array of three elements: the
 * below enharmonic, the note, and the upper enharmonic
 *
 * @name note.enharmonics
 * @function
 * @param {String} pitch - the pitch to get the enharmonics from
 * @return {Array} an array of pitches ordered by distance to the given one
 *
 * @example
 * enharmonics = require('music.kit/note.enharmonics')
 * enharmonics('C') // => ['B#', 'C', 'Dbb']
 * enharmonics('A') // => ['G##', 'A', 'Bbb']
 * enharmonics('C#4') // => ['B##3', 'C#4' 'Db4']
 * enharmonics('Db') // => ['C#', 'Db', 'Ebbb'])
 */
module.exports = function (pitch) {
  var enharmonics = []
  enharmonics.push(transpose(DESC, pitch))
  enharmonics.push(pitch)
  enharmonics.push(transpose(ASC, pitch))
  return enharmonics
}
