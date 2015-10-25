
<scales>

  <h2><a onclick={ tonicUp }>{this.tonic}</a> <a onclick={ random }>{ this.name }</a></h2>
  <ul name="note-list" class="steps">
    <li each={ name in notes() }>{ name }</li>
  </ul>
  <ul name="interval-list" class="steps">
    <li each={ name in intervals() }>{ name }</li>
  </ul>
  <a onclick={ play }>Play it!</a>

  <script>
    this.ctx = new AudioContext()
    this.names = music.scales.names()
    this.total = this.names.length
    this.tonic = 'C'
    this.name = 'major'

    play () {
      var time = this.ctx.currentTime + 0.1
      var ctx = this.ctx
      var notes = this.notes(this.tonic + '4')
      notes.push(this.tonic + '5')
      notes = notes.concat(this.notes(this.tonic + '4').reverse())
      notes.map(music.note.toFreq).forEach(function (freq) {
        var vco = ctx.createOscillator()
        vco.type = 'sine'
        vco.frequency.value = freq
        vco.connect(ctx.destination)
        vco.start(time)
        time += 0.5
        vco.stop(time - 0.1)
      })
    }

    tonicUp () {
      this.tonic = music.transpose('2d', this.tonic)
    }

    notes (tonic) {
      tonic = tonic || this.tonic
      return music.scales(this.name, tonic)
    }
    intervals () {
      return music.scales(this.name, false)
    }

    random () {
      this.name = this.names[Math.floor(Math.random() * this.total)]
    }

  </script>

</scales>
