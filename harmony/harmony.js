'use strict'

var Vue = window.Vue
var kit = window.kit

var tonics = Array.apply(null, Array(12)).map(function (e, i) {
  return kit.note.fromMidi(60 + i).slice(0, -1)
})
console.log(tonics)

var chord = kit.scale.pattern('1 3 5 7')

new Vue({
  el: '#app',
  data: {
    message: 'Harmony makers!',
    tonic: 'C',
    key: 'major',
    tonics: tonics,
    names: ['CMaj7', 'Dm7', 'Em7', 'F']
  },
  computed: {
    chords: function () {
      var scale = kit.scale.notes(this.key, this.tonic)
      var modes = kit.gamut.rotate(scale)
      return scale.map(function (n, i) {
        var mode = modes(i)
        var name = kit.scale.names(mode).join(' ')
        return { name: name }
      })
    }
  }
})
