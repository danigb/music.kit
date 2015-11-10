var Benchmark = require('benchmark')
var transpose = require('../../../lib/note/transpose')
var teoria = require('teoria')

function generateNotes (size) {
  var result = []
  for (var i = 0; i < size; i++) {
    var letter = String.fromCharCode(65 + (i + 2) % 6)
    var oct = 4 + Math.floor(i / 6)
    result.push(letter + oct)
  }
  return result
}
var notes = generateNotes(20)

var teoriaTranspose = function (interval, note) {
  return teoria.note(note).interval(interval).toString()
}

function map (fn, interval, notes) {
  return notes.map(function (p) {
    return fn(interval, p)
  })
}

console.log('transpose', map(transpose, '3M', notes).join(' '))
console.log('transpose', map(teoriaTranspose, 'M3', notes).join(' '))

var suite = new Benchmark.Suite()
suite.add('transpose transposition', function () {
  map(transpose, '3M', notes)
})
.add('teoria transposition', function () {
  map(teoriaTranspose, 'M3', notes)
})
.on('cycle', function (event) {
  console.log(String(event.target))
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'))
})
.run({ 'async': true })
