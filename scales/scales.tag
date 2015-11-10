
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

    var real = new Float32Array([0,0.4,0.4,1,1,1,0.3,0.7,0.6,0.5,0.9,0.8])
    var imag = new Float32Array(real.length)
    var hornTable = this.ctx.createPeriodicWave(real, imag)

    play () {
      var ctx = this.ctx
      var pattern = music.scale.degrees('1 2 3 4 5 6 7 8 7 6 5 4 3 2 1')
      var notes = pattern(music.scales(this.name, this.tonic() + 4))
      notes.map(music.note.toFreq).forEach(function (freq) {
        if (!freq) return
        var osc = ctx.createOscillator()
        // osc.setPeriodicWave(hornTable)
        osc.type = 'sine'
        osc.frequency.value = freq
        var vol = ctx.createGain()
        vol.gain.value = 0.3
        vol.connect(ctx.destination)
        osc.connect(vol)
        osc.start(time)
        time += 0.5
        vol.gain.setValueAtTime(0, time - 0.1)
        osc.stop(time)
      })
    }

    tonic () {
      return this.tonics[this.tonicIndex]
    }

    nextTonic () {
      this.tonicIndex = (this.tonicIndex + 1) % this.tonics.length
    }

    var scalePattern = music.scale.degrees('1 2 3 4 5 6 7')
    notes () {
      return scalePattern(music.scales(this.name, this.tonic()))
    }
    intervals () {
      return scalePattern(music.scales(this.name, false))
    }

    random () {
      this.name = this.names[Math.floor(Math.random() * this.total)]
    }

  </script>

</scales>
