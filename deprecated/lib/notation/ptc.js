// map from pitch number to number of fifths and octaves
var BASES = [ [0, 0], [2, -1], [4, -2], [-1, 1], [1, 0], [3, -1], [5, -2] ]

/**
 * Coordinate to properties
 */
module.exports = function (c) {
  var base = BASES[c[0]]
  if (c.length === 2) return [base[0] + 7 * c[1]]
  return [c[3] * (base[0] + 7 * c[1]), c[3] * (c[2] + base[1] - 4 * c[1])]
}
