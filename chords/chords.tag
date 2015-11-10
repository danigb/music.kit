
<chords>
  <h1>Chord composer</h1>
  <h3>Key: <a href="#" onclick={ nextTonic }>{ this.tonic() }</a>
    <a href="#" onclick={ nextKey}>{ this.key() }</a></h3>
  <h3>Chords</h3>
  <ul name="chord-list" class="steps">
    <a href="#" each={ chords() } onclick={ chordPlayer(name) }>
      <li>{ name }</li>
    </a>
  </ul>
  <h4>V of</h4>
  <ul name="chord-list" class="steps">
    <a href="#" each={ derivedChords('5P', '7') } onclick={ chordPlayer(name) }>
      <li>{ name }</li>
    </a>
  </ul>
  <h4>IV of</h4>
  <ul name="chord-list" class="steps">
    <a href="#" each={ derivedChords('4P', '') } onclick={ chordPlayer(name) }>
      <li>{ name }</li>
    </a>
  </ul>
  <h4>IV of</h4>
  <ul name="chord-list" class="steps">
    <a href="#" each={ derivedChords('7M', 'º') } onclick={ chordPlayer(name) }>
      <li>{ name }</li>
    </a>
  </ul>

  <script>
    this.tonics = Array.apply(null, Array(12)).map(function (e, i) {
      return kit.note.fromMidi(60 + i).slice(0, -1)
    })
    this.keys = ['major', 'minor', 'melodic minor', 'harmonic minor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'locrian']
    this.ctx = new AudioContext()
    var farfisa = new window.farfisa(this.ctx)
    var soundfont = new Soundfont(this.ctx).instrument('acoustic_grand_piano')
    this.tonicIndex = 0
    this.keyIndex = 0

    chordPlayer (name) {
      return function() {
        var tonic = name.split(' ')[0] + '4'
        var type = name.split(' ')[1]
        var notes = kit.chords(type, tonic)
        notes.forEach(function (n) { soundfont.play(n, 0) })
        //farfisa.keyDown(tonic)
        //farfisa.keyUp(tonic, 0.5)
      }
    }

    chords () {
      var scale = kit.scale.notes(this.key(), this.tonic() + '4')
      var all = scale.map(function (note, i) {
        var mode = kit.gamut.rotate(i, scale)
        var notes = kit.scale.degrees('1 3 5 7', mode)
        var type = kit.chords.find(notes)
        return { name: note.slice(0, -1) + type, root: note, type: type, notes: notes }
      })
      return all
    }

    derivedChords (interval, type) {
      var scale = kit.scales(this.key(), this.tonic() + '4')
      return scale.map(function (note) {
        var tonic = kit.note.transpose(note, interval)
        return { name: tonic.slice(0, -1) + type }
      })

    }

    score () {
      return this.chords().map(function (chord) {
        return chord.notes
      })
    }

    play () {
    }

    tonic () {
      return this.tonics[this.tonicIndex]
    }
    nextTonic () {
      this.tonicIndex = (this.tonicIndex + 1) % this.tonics.length
    }
    key () {
      return this.keys[this.keyIndex]
    }
    nextKey () {
      this.keyIndex = (this.keyIndex + 1) % this.keys.length
    }

  </script>

</chords>
