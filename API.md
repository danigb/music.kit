## `gamut`

In music.kit a gamut is a collection of intervals, pitch classes or notes.
Scales, chords, pitch sets are examples of gamuts.






## `gamut.chord`

Build a chord from a source and a tonic. A chord is a list of notes or
intervals in asceding pitch order

The source can be a list of intervals or notes. The tonic must be
a pitch (with or without octave) or false to get the intervals

This function is currified, so you can partially apply the function passing
one parameter instead of two (see example)

### Parameters

* `source` **`Array`** the list of intervals or notes
* `tonic` **`String`** the tonic of the chord or null to get the intervals


### Examples

```js
var chord = require('music.chord')
chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
var maj79 = chord('C E G B D')
maj79('A4') // => ['A4', 'C#5', 'E5', 'G#5', 'B5']
```

Returns `Array` the chord notes (or intervals if null tonic)


## `gamut.harmonics`

Get the distances from the first note of a gamut to the rest of notes

Pitch classes are treated as notes with octave equal 0

### Parameters

* `gamut` **`String or Array`** the list of notes


### Examples

```js
gamut.harmonics('c2 e2 g2') // => ['1P', '3M', '5P']
```



## `gamut.operation`

Apply a function to an array of array pitches






## `gamut.set`

A set is a list of uniq pitch classes or simplified intervals in ascending pitch order

### Parameters

* `gamut` **`String or Array`** the gamut


### Examples

```js
gamut.set('E7 C2 e D5 c1') // => ['C', 'D', 'E']
gamut.set('11 10 9') // => [ '2M', '3M', '4P' ]
```

Returns  the set


## `gamut.split`

Convert a source to an array. If the source is an array, return it.

Aside from an array itself, the source can be a
string with elements separated by spaces, commas or bars (`|`) or a single
element that will be wrapped inside an array

This function __does not perform any transformation__ of the array elements.
and __it always return an array, even if its empty__.

### Parameters

* `source` **`String or Array`** the source


### Examples

```js
split = require('music.kit/gamut.split')
split('a | B C , Dmaj7') // => ['a', 'B', 'C', 'Dmaj7']
split() // => []
```

Returns `Array` the source as array


## `interval.str`

Convert from [array interval notation](https://github.com/danigb/music.array.notation)
to [shorthand interval notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)

The returned string has the form: `number + quality` where number is the interval number
(positive integer for ascending intervals, negative integer for descending intervals, never 0)
and the quality is one of: 'M', 'm', 'P', 'd', 'A' (major, minor, perfect, dimished, augmented)

### Parameters

* `interval` **`Array`** the interval in array notation


### Examples

```js
interval.str([1, 0, 0]) // => '2M'
interval.str([1, 0, 1]) // => '9M'
```

Returns `String` the interval string in shorthand notation or null if not valid interval


## `note`

In music.kit a note is represented by string, usually in scintific notation.

The note module provides functions to manipulate notes:

- Scientific notation: `note.parse` and `note.str`
- Midi and frequencies: `note.midi`, `note.freq`, `note.fromMidi`
- Note properties: `note.pitchClass`, `note.setOctave`
- Enharmonics: `note.enharmonics`
- Transposition and distances: `note.transpose`, `note.distance`






## `note.distance`

Get the interval between two notes

This function can be partially applied (see examples)

### Parameters

* `from` **`String or Array`** the first note
* `to` **`String or Array`** the other note



Returns  the interval between them


## `note.freq`

Get the pitch frequency in herzs with custom concert tuning

This function is currified so it can be partially applied (see examples)

### Parameters

* `tuning` **`Float`** the frequency of A4 (null means 440)
* `note` **`String or Array`** the note name


### Examples

```js
note.freq(null, 'A4') // => 440
note.freq(444, 'A4') // => 444
```
```js
// partially applied
['A4', 'A#4', 'B5'].map(note.freq(440)) // => [440, ...]
var baroque = note.freq(415)
baroque('A3') // => 207.5
```

Returns `Float` the frequency of the note


## `note.fromMidi`

Get the note name (in scientific notation) of the given midi number

It uses MIDI's [Tuning Standard](https://en.wikipedia.org/wiki/MIDI_Tuning_Standard)
where A4 is 69

This method doesn't take into account diatonic spelling. Always the same
pitch class is given for the same midi number.

### Parameters

* `midi` **`Integer`** the midi number


### Examples

```js
note.fromMidi(69) // => 'A4'
```

Returns `String` the pitch


## `note.midi`

Get the midi number of a note

The note can be an string in scientific notation or
[array pitch notation](https://github.com/danigb/music.array.notation)

### Parameters

* `note` **`String or Array`** the note in string or array notation


### Examples

```js
midi('A4') // => 69
midi('A3') // => 57
midi([0, 2]) // => 36 (C2 in array notation)
```

Returns `Integer` the midi number


## `note.parse`

Convert from [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
to [array pitch notation](https://github.com/danigb/music.array.notation)

The string to parse must be in the form of: `letter[accidentals][octave]`
The accidentals can be up to four # (sharp) or b (flat) or two x (double sharps)

This function is cached for better performance.

### Parameters

* `str` **`String`** the string to parse


### Examples

```js
var parse = require('music.kit/note.parse')
parse('C') // => [ 0 ]
parse('c#') // => [ 8 ]
parse('c##') // => [ 16 ]
parse('Cx') // => [ 16 ] (double sharp)
parse('Cb') // => [ -6 ]
parse('db') // => [ -4 ]
parse('G4') // => [ 2, 3, null ]
parse('c#3') // => [ 8, -1, null ]
```

Returns `Array` the note in array notation or null if not valid note


## `note.transpose`

Transpose a note by an interval.

This function is currified. The orider of the parameters is indiferent.

### Parameters

* `interval` **`String or Array`** the interval. If its false, the note is not transposed.
* `note` **`String or Array`** the note to transpose


### Examples

```js
var transpose = require('music.kit/note.transpose')
transpose('3m', 'C4') // => 'Eb4'
transpose('C4', '3m') // => 'Eb4'
tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]
['C', 'D', 'E'].map(transpose('3M')) // => ['E', 'F#', 'G#']
```

Returns  the note transposed


## `parse`

Convert a [interval shorthand notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)
to [array interval notation](https://github.com/danigb/music.array.notation)



This function is cached for better performance.

### Parameters

* `interval` **`String`** the interval string


### Examples

```js
parse('3m') // => [2, -1, 0]
parse('9b') // => [1, -1, 1]
parse('-2M') // => [6, -1, -1]
```

Returns `Array` the interval in array notation or null if not a valid interval


## `pitch.ascending`

Get a gamut in ascdening pitch order

### Parameters

* `gamut` **`String or Array`** the gamut to sort


### Examples

```js
gamut.ascending('c5 d2 f4 D2') // => ['D2', 'D2', 'F4', 'C5']
```

Returns `Array` the gamut in ascending pitch order


## `pitch.height`



### Parameters

* `pitch` **`String or Array`** the pitch to get the height from



Returns `Integer` the height of -1 if not valid note


## `pitch.operation`

Decorate a function to work with parsed pitches






## `pitch.parse`

Parse a note or an interval

### Parameters

* `pitch` **`String`** the note or interval to parse


### Examples

```js
pitch.parse('C2') // => [0, 2, null]
pitch.parse('5P') // => [1, 0]
```

Returns `Array` the pitch in array notation


## `pitch.str`

Convert a pitch in array notation to string. It deals with notes, pitch
classes and intervals.

### Parameters

* `pitch` **`Array`** the pitch in array notation


### Examples

```js
// pitch class
pitch.str([0]) // => 'C'
// interval
pitch.str([0, 0]) // => '1P'
// note
pitch.str([0, 2, 4]) // => 'C2/4'
```

Returns `String` the pitch string


## `pitchClass`








## `props`

Get the properties of a pitch in array notation as an array of properties

The properties is in the form [number, alteration, octave, duration]

### Parameters

* `array` **`Array`** the pitch in array notation



Returns `Array` the properties array


## `scale`








## `scientific`

Convert from [array notation](https://github.com/danigb/music.array.notation)
to [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)

Array length must be 1 or 3 (see array notation documentation)

The returned string format is `letter[+ accidentals][+ octave][/duration]` where the letter
is always uppercase, and the accidentals, octave and duration are optional.

This function is memoized for better perfomance.

### Parameters

* `arr` **`Array`** the note in array notation


### Examples

```js
scientific([0]) // => 'F'
scientific([0, 4]) // => null (its an interval)
scientific([0, 4, null]) // => 'F4'
scientific([0, 4, 2]) // => 'F4/2'
```

Returns `String` the note in scientific notation or null if not valid note array


## `setOctave`

Set the octave of the given note

### Parameters

* `octave` **`Integer`** the octave to set
* `note` **`String or Array`** the note


### Examples

```js
setOctave('2', 'C#1') // => 'C#2'
```

Returns  a copy of the same note with the octave changed


## `simplify`








