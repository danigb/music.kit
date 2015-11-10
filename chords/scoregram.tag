<scoregram>
  <div name="root"></div>
  <svg width={ opts.width } name="score"></svg>

  <script>
    var COLORS = { blue: '#31acc4'}
    var R = 8
    var BOTTOM = 58
    this.score.width = opts.width
    this.score.height = opts.height
    console.log(opts, this.score)
    this.on('update', function() {
      var s = Snap(this.score)
      var x = 0
      opts.score.forEach(function (notes) {
        x += 20
        console.log(notes)
        notes.forEach(function (n) {
          var m = music.note.toMidi(n)
          var y = opts.height - (m - BOTTOM) * 13
          s.circle(x, y, 6).attr({fill: COLORS['blue']})
        })
      })
    })
  </script>
</scoregram>
