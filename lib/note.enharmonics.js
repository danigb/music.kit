'use strict'

var transpose = require('./note.transpose')

var ASC = [-12, 7] // dimished second
var DESC = [12, -7] // descending dimished second

/**
 * Get all the enharmonics of a pitch (up to 4 alterations)
 *
 * @name note.enharmonics
 * @function
 * @param {String} pitch - the pitch to get the enharmonics from
 * @param {boolean} includeSource - (Optional) If true, the returned array
 * will contain the given pitch. False by default
 * @return {Array} an array of pitches ordered by distance to the given one
 *
 * @example
 * enharmonics = require('music.kit/note.enharmonics')
 * enharmonics('C') // => ['B#', 'Dbb']
 * enharmonics('A') // => ['G##', 'Bbb']
 * enharmonics('C#4') // => ['B##3', 'Db4']
 * enharmonics('Db') // => ['C#', 'Ebbb'])
 */
module.exports = function (pitch, includePitch) {
  var enharmonics = []
  enharmonics.push(transpose(DESC, pitch))
  if (includePitch) enharmonics.push(pitch)
  enharmonics.push(transpose(ASC, pitch))
  return enharmonics
}
