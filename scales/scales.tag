
<scales>

  <h2><a onclick={ tonicUp }>{this.tonic}</a> <a onclick={ random }>{ this.name }</a></h2>
  <ul name="note-list" class="steps">
    <li each={ name in notes() }>{ name }</li>
  </ul>
  <ul name="interval-list" class="steps">
    <li each={ name in intervals() }>{ name }</li>
  </ul>

  </di>

  <script>
    this.names = music.scales.names()
    this.total = this.names.length
    this.tonic = 'C'
    this.name = 'major'

    tonicUp () {
      this.tonic = music.transpose('2d', this.tonic)
    }

    notes () {
      return music.scales(this.name, this.tonic)
    }
    intervals () {
      return music.scales(this.name, false)
    }

    random () {
      this.name = this.names[Math.floor(Math.random() * this.total)]
    }

  </script>

</scales>
