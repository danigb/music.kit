# User Guide

You can read the [generated API documentation here](https://github.com/danigb/music.kit/blob/master/GUIDE.md)

#### A class-free library

From the user perspective, the most important thing to know is that there is no classes and everything is a function, so instaed of: `new Note('C4').transpose('2M')` you will write `transpose('2M', 'C4')` (in this case, the order of parameters doesn't matter, but in most functions what usually is `this` is the __last__ argument)

While other libraries uses objects to represent notes and intervals, in music.kit they are just strings.

Once you accept this two things (no classes, pure functions), music.kit its just easy: no surprises, no side effects.

#### Modules

music.kit is divided in modules:

- note: parse and build, midi, freqnecies, transposition and distances
- interval: parse and build intervals.
- pitch: an abstraction that allows to work with notes, pitch classes and intervals in an uniform way
- gamut: work with collection of notes
- set: create pitch sets and binary representations
- scale: create scales, a scale dictionary, scale name detection
- chord: create chords and chords dictionary

#### Node environments

Install it with npm (recommended): `npm i --save music.kit` and require the library:

```js
var kit = require('music.kit')
kit.note.transpose('C2', '3M')
```

music.kit it's quite [compact](http://danigb.github.io/music.kit/docs/disc.html), but if size its a problem you can require a single module:

```js
var note = require('music.kit/note')
note.transpose('C2', '3M')
```

or even the single function:

```js
var transpose = require('music.kit/note/tranpose')
transpose('C2', '3M')
```

#### Browser

You can grab browser ready distribution [here](https://raw.githubusercontent.com/danigb/music.kit/master/dist/music.kit.min.js) where a global `kit` variable is exported with the whole library:

```html
<script src="../js/music.kit.min.js"></script>
<script>console.log(kit.note.transpose('C2', '3M'))</script>
```

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

## Gamuts

In music.kit a gamut is a collection of pitches (notes, intervals or pitch classes). The gamut module provides functions to work with them.

### Sort pitches

The `gamut.ascdending` function sorts a gamut using an ascending pitch order:

```js
kit.gamut.ascending('F G D A C') // => ['C', 'D', 'F', 'G', 'A']
```

### Working with sets

A set is a list of uniq pitch classes or simplified intervals in ascending pitch order. Some popular musical entities like scales and chords are usually described by sets.

To create a set, use the `gamut.set` function:

```js
kit.gamut.set('C C2 c4 d d5 f#7 f8 e') // => ['C', 'D', 'F#', 'F', 'E']
```

Sets can be represented by 12 digit binary numbers or its decimal equivalents. Those representations are very useful to compare pitch sets:

```js
// create sets using binary numbers
kit.gamut.fromBinary('101011010101', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
kit.gamut.fromBinary(2773, 'C') // => [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ]
kit.gamut.fromBinary(2773, false) // => ['1P', '2M', '3M', '4', '5', '6M', '7M']

// convert notes to a binary set number
kit.gamut.binarySet('C D e f#') // => '101010100000'

// compare sets
var binary = require('music.kit').gamut.binarySet
var Cdorian = 'c d eb f g a bb'
var Ddorian = 'd e f g a b c'
binary(Cdorian) === binary(Ddorian) // => true
```

#### Transposers and harmonics

## Scales

In music.kit an scale is a set of notes or intervals with a tonic and ordered by pitch. The `scale` module has functions to create and manipulate scales.

#### Build scales from intervals

The simplest use case is build scales from intervals:

```js
var scale = require('music.kit').scale
scale('1M 2M 3m 7m', 'F') // => ['F', 'G', 'Ab', 'Eb']
scale('1 2 3 4 5', 'A3') // => ['A3', 'B3', 'C#4', 'D4', 'E4']
```

Also, you can partially apply the `scale` function:

```js
var pentatonic = scale('1 2 3 5 6')
pentatonic('E') // => ['E', 'F#', 'G#', 'B', 'C#']
```

#### Build scales from notes

You can also use notes as the source of your scale:

```js
var lydian = scale('C D E F# G A B')
lydian('A') // => ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#']
```

`scale` function assumes that the first note is the tonic.

#### Get scale intervals

You can get the scale intervals passing `false` as tonic:

```js
var dorian = kit.scale('D E F G A B C')
dorian(false) // => ['1P', '2M', '3m', '4P', '5P', '6M', '7m']
```

#### Get scale by name

music.kit includes a dictionary with 89 scales. You can access them by passing the scale name (with or without tonic) to the `scale.get` function:

```js
kit.scale('major') // => { name: 'major', intervals: ['1P', '2M'...], ...}
kit.scale('C major') // => { name: 'C major', notes: ['C', 'D', ...], ...}
```

`scale.get` returns a data object with the following properties:

- name: the scale name
- aliases: an array of scale aliases
- intervals: an array of scale intervals
- notes: an array of notes (or empty array if the scale has no tonic)

#### Get scale names

You can all available scale names invoking `scale.names` without arguments:

```js
kit.scale.names() // => ['major', 'dorian', ...] (89 names)
```

You can pass a list of notes to `scale.names` function:

```js
kit.scale.names('C D E F G A Bb') // => ['C mixolydian', 'C dominant']
```

#### Melodic patterns with scales

The `scale.pattern` function uses a list of degrees to select notes from a scale. The notes are returned in the same order as the degree numbers:

```js
pattern('3 2 1', 'C D E F G A B') // => ['E', 'D', 'C']
```

Degree numbers bigger than 7 will make the note to be transported one or more octaves. Notice that this only works if the tonic of the scale (the first note) have an explicit octave number:

```js
pattern('1 8 15', 'C2 D2 E2') // => ['C2', 'C3', 'C4']
pattern('1 8 15', 'C2 D5 E') // => ['C2', 'C3', 'C4']
pattern('1 8 15', 'C D E') // => ['C', 'C', 'C']
```

The partially applied version of this function is useful to create melodic patterns ([Bergonzi](http://www.amazon.com/Melodic-Structures-Jerry-Bergonzi/dp/B000FSVJEI) would love this) with independence of the scale:

```js
var pattern = pattern('1 2 7 9 3') // <- partially applied
pattern(major) // => ...
pattern(mixolydian) // => ...
```
