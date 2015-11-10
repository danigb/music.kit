
<scales>

  <h2><a onclick={ nextTonic }>{this.tonic() }</a> <a onclick={ random }>{ this.name }</a></h2>
  <ul name="note-list" class="steps">
    <li each={ name in notes() }>{ name }&nbsp;</li>
  </ul>
  <ul name="interval-list" class="steps">
    <li each={ name in intervals() }>{ name }&nbsp;</li>
  </ul>
  <a onclick={ play }>Play it!</a>

  <script>
    this.tonics = Array.apply(null, Array(12)).map(function (e, i) {
      return music.note.fromMidi(60 + i).slice(0, -1)
    })
    this.ctx = new AudioContext()
    this.farfisa = new farfisa(this.ctx)
    this.names = music.scales.names()
    this.total = this.names.length
    this.tonicIndex = 0
    this.name = 'major'

    play () {
      var ctx = this.ctx
      var notes = music.scales(this.name, this.tonic() + '4')
      var farfisa = this.farfisa
      notes.push(this.tonic() + '5')
      notes = notes.concat(music.scales(this.name, this.tonic() + '4').reverse())
      var delay = 0.1
      notes.forEach(function (note) {
        console.log(note, delay)
        farfisa.keyDown(note, delay)
        delay += 0.5
        farfisa.keyUp(note, delay - 0.1)
        console.log(note, delay - 0.1)
      })
    }

    tonic () {
      return this.tonics[this.tonicIndex]
    }

    nextTonic () {
      this.tonicIndex = (this.tonicIndex + 1) % this.tonics.length
    }

    notes () {
      var scale = music.scales(this.name, this.tonic())
      var deg = music.scale.degrees('1 2 3 4 5 6 7', scale)
      return deg
    }
    intervals () {
      return music.scales(this.name, false)
    }

    random () {
      this.name = this.names[Math.floor(Math.random() * this.total)]
    }

  </script>

</scales>
