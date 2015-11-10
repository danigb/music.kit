
## Notes

Notes in music.kit are represented by strings, and by default it uses scientific notation with the form: `letter[accidentals][octave]/[duration]`.

Pitch classes are note names without octave and duration. They are used a lot to describe sets like scales.

The `note` function returns a scientific notation of the given string or null if not valid string. It can be used to check if some string is a note:

```js
// get a note
kit.note('c2') // => 'C2'
kit.note('fx') // => 'F##'
kit.note('blah') // => null
// filter notes
['e', 'f', 'g', 'h', 'i'].filter(kit.note) // => ['e', 'f', 'g']
```

#### Note properties

There are several functions to get note properties or to modify them:

```js
// get properties
kit.note.octave('C#4') // => 4
kit.note.pitchClass('Bb5/4') // => 'Bb'

// set properties
kit.note.setOctave(3, 'Bb0') // => 'Bb3'
```

#### Midi and frequencies

You can transform to midi and frequencies:

```js
kit.note.midi('A4') // => 69
kit.note.fromMidi(13) // => 'Bb0'
kit.note.freq(null, 'A4') // => '440'
```

#### Enharmonics

The `note.enharmonics` function return the nearest enharmonics of a note:

```js
kit.note.enharmonics('C') // => ['B#', 'C', 'Dbb']
```

#### Note transposition

You can transpose notes with the `note.transpose` function. The order of the parameters doesn't matter:

```js
transpose('C2', '4A') // => 'F#2'
transpose('4A', 'C2') // => 'F#2'
```

If you transpose pitch classes (note names without octaves), the returned value will be a pitch class:

```js
tranpose('A', '3M') // => 'C#'
tranpose('A5', '3M') // => 'C#5'
```

Also, you can partially apply the function to get a __transposer__:

```js
var major3th = transpose('3M')
major3th('D') // => 'F#'
```

Transposers allows to work with arrays seamlessly:

```js
['C', 'D', 'E', 'F', 'G'].map(transpose('3M')) // => ['E', 'F#', 'G#', 'A', 'B']
['1P', '3m', '5P'].map(transpose('C')) // => ['C', 'Eb', 'G']
```

#### Note distances

The `note.distance` function get the interval between two notes:

```js
note.distance('C2', 'D2') // => '2M'
```
