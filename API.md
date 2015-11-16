## `chord`

In music.kit an chord is a list of notes or intervals ordered
by pitch

The `chord` module has functions to create and manipulate chord



### Examples

```js
var kit = require('music.kit')
kit.chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
kit.chord.get('Cmaj7') // => ['C', 'E', 'G', 'B']
```



## `chord.build`

Build a chord from a source and a tonic. A chord is a list of notes or
intervals in asceding pitch order

The source can be a list of intervals or notes. The tonic must be
a pitch (with or without octave) or false to get the intervals

This function is currified, so you can partially apply the function passing
one parameter instead of two (see example)

This function is exported as 'chord' (instead of 'chord.build') in music.kit

### Parameters

* `source` **`Array`** the list of intervals or notes
* `tonic` **`String`** the tonic of the chord or null to get the intervals


### Examples

```js
var chord = require('music.kit/chord/build')
chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
var maj79 = chord('C E G B D')
maj79('A4') // => ['A4', 'C#5', 'E5', 'G#5', 'B5']
```
```js
// exported as chord
var kit = require('music.kit')
kit.chord('1 3 5', 'C')
```

Returns `Array` the chord notes (or intervals if null tonic)


## `chord.dictionary`

Chord dictionary



### Examples

```js
var chords = require('music.kit/chord/dictionary')
chords['Maj7'] // => { name: 'Maj7', intervals: ['1', '3', ...], aliases: [] }
```



## `chord.get`

Get a chord by name using a dictionary.

You can get chord notes with a note as tonic or the chord intervals by passing
`false` as tonic

There is two ways to get a chord:
- With type and tonic: `chord.get('Maj7', 'C')`
- With tonic included in name: `chord.get('CMaj7')`

This function can be partially applied (see examples)

### Parameters

* `name` **`String`** the chord name (optionally can include the tonic)


### Examples

```js
var get = require('music.kit/chord/get')
// with name and tonic
get('Maj7', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// with tonic inside the name
get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// partially applied
var major = get('major')
major('C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
```

Returns `Object` a data object with the chord properties


## `chord.names`

Given a list of notes get the chord names

### Parameters

* `notes` **`String or Array`** the chord notes


### Examples

```js
// get all known chord names
chord.names() // => ['Maj7', 'm7', ... ] (109 names)
chord.names('D E F G A B C') [ 'D dorian' ]
chord.names('D E F G A B C') [ 'D dorian' ]
```

Returns `Array` an array of chord names or all known chord names if no arguments provided


## `dictionary`

Dictionary is a module to work with dictionaries of pitch collections

Its the foundation of the scale and chord dictionary of music.kit

Currently `dictionary` module has the following functions:

- build: create dictionaries
- getter: create a getter function for a dictionary
- names: create a reverse lookup function for a dictionary
- splitName: split a set name into type and tonic






## `dictionary.build`

Create a dictionary

The data is a hash map of keys associated to arrays. The array contains:

- A interval list (as string or as array)
- (Optionally) an array of name aliases

This function is exported in music.kit as ´dictionary´  (see example)

### Parameters

* `data` **`Hash`** the dictionary data


### Examples

```js
var dictionary = require('music.kit/dictionary/build')
var chords = dictionary({'Maj7', ['1 3 5 7', ['maj7', 'M7']]})

// get chord by name
chords['Maj7'].name = 'Maj7'
chords['Maj7'].aliases = ['maj7', 'M7']
chords['Maj7'].intervals // => ['1', '3', '5', '7']

// get chord by aliases
chords['maj7'].intervals // => ['1', '3', '5', '7']
chords['maj7'].name // => 'Maj7'
chords['M7'].intervals // => ['1', '3', '5', '7']
chords['M7'].name // => 'Maj7'

// get chord by binary numbers
chords['100010010001'].name // => 'Maj7'
chords[2193].name // => 'Maj7'
```
```js
var kit = require('music.kit')
// this function is exported as `dictionary` not `dictionary.build`
kit.dictionary(...)
```

Returns `Hash` the dictionary


## `dictionary.getter`

Given a dictionary return a function to get the notes or intervals from it

### Parameters

* `dictionary` **`Hash`** the set dictionary


### Examples

```js
var d = dictionary({'Maj7': ['1 3 5 7'], 'm7': ['1 3b 5 7b'] })
var get = getter(d)
get('CMaj7') // => ['C', 'E', 'G', 'B']
```

Returns `Function` a function to get the notes or intervals from the set dictionary


## `dictionary.names`

Get a function to perform an inverse dictionary lookup (given notes, return names)

### Parameters

* `names` **`Array`** the list of all names
* `dictionary` **`Hash`** the dictionary
* `builder` **`Function`** the name builder



Returns `Function` a function to perform inverse lookup


## `gamut`

In music.kit a gamut is a collection of intervals, pitch classes or notes.
Scales, chords, pitch sets are examples of gamuts.






## `gamut.fromBinary`

Get a set from a binary set number and (optionally) a tonic. If the tonic is
a note, you get a pitch set. If its false you get a interval set.

### Parameters

* `source` **`String or Array or Array<Array>`** the gamut
* `tonic` **`String`** the first note of the set or false to get the intervals


### Examples

```js
var fromBinary = require('music.kit/gamut.fromBinary')
// use a 12 digit binary number:
fromBinary('101011010101', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// or its decimal equivalent:
fromBinary(2773, 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// get the interval set by passing `false` as tonic:
fromBinary(2773, false) // => ['1P', '2M', '3M', '4', '5', '6M', '7M']
```

Returns  the set pitch classes (note names without octaves)


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






## `gamut.rotate`

Rotate the gamut

### Parameters

* `count` **`Integer`** the number of rotations
* `gamut` **`String or Array`** a list of notes or intervals


### Examples

```js
var rotate = require('music.kit/gamut/rotate')
rotate(1, 'C D E') // => ['D', 'E', 'C']
```

Returns `Array` the gamut rotated count times


## `gamut.select`

Select some elements from a gamut

### Parameters

* `numbers` **`String or Array`** a __1-based__ index of the elements
* `gamut` **`String or Array`** the notes or intervals


### Examples

```js
var select = require('music.kit/gamut/select')
select('1 3 5', 'C D E F G A B') // => ['C', 'E', 'G']
```

Returns `Array` the selected elements


## `gamut.sort`

Get a gamut in ascdening pitch order

### Parameters

* `gamut` **`String or Array`** the gamut to sort


### Examples

```js
var sort = require('music.kit/gamut.sort')
sort('c5 d2 f4 D2') // => ['D2', 'D2', 'F4', 'C5']
```

Returns `Array` the gamut in sort pitch order


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


## `interval`

In music.kit an interval is a string with the format `number[quality|accidentals]`

The interval module has functions to create and manipulate intervals






## `interval.parse`

Convert a [interval shorthand notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)
to [array interval notation](https://github.com/danigb/music.array.notation)

This function is cached for better performance.

### Parameters

* `interval` **`String`** the interval string


### Examples

```js
var parse = require('music.kit/interval.parse')
parse('3m') // => [2, -1, 0]
parse('9b') // => [1, -1, 1]
parse('-2M') // => [6, -1, -1]
```

Returns `Array` the interval in array notation or null if not a valid interval


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


## `music.kit`

music.kit is a compact library to manipulate music abstractions (not actual music)
and while its designed to create algorithmic composition programs,
can be use to develop any kind of midi or audio software.






## `note`

In music.kit a note is represented by string, usually in scientific notation.

The note module provides functions to manipulate notes:

- Scientific notation: `note.parse` and `note.str`
- Midi and frequencies: `note.midi`, `note.freq`, `note.fromMidi`
- Note properties: `note.pitchClass`, `note.setOctave`
- Enharmonics: `note.enharmonics`
- Transposition and distances: `note.transpose`, `note.distance`






## `note.distance`

Get the interval between two notes

If one or both notes are pitch classes, a simple ascending interval is returned

This function can be partially applied (see examples)

### Parameters

* `from` **`String or Array`** the first note
* `to` **`String or Array`** the other note


### Examples

```js
var distance = require('music.kit/note/distance')
distance('C2', 'D3') // => '9M'
distance('D2', 'C2') // => '-2M'
distance('D', 'C') // => '7m'
```

Returns  the interval between them


## `note.enharmonics`

Get the enharmonics of a note. It returns an array of three elements: the
below enharmonic, the note, and the upper enharmonic

### Parameters

* `pitch` **`String`** the pitch to get the enharmonics from


### Examples

```js
enharmonics = require('music.kit/note.enharmonics')
enharmonics('C') // => ['B#', 'C', 'Dbb']
enharmonics('A') // => ['G##', 'A', 'Bbb']
enharmonics('C#4') // => ['B##3', 'C#4' 'Db4']
enharmonics('Db') // => ['C#', 'Db', 'Ebbb'])
```

Returns `Array` an array of pitches ordered by distance to the given one


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


## `note.name`

Get note name (or null if not valid note)

### Parameters

* `note` **`String or Array`** the note


### Examples

```js
name = require('music.kit/note/name')
name('fx2') // => 'F##2'
name('bbb') // => 'Bbb'
name('blah') // => null
```

Returns `String` the note name in scientific notation


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


## `note.pitchClass`

Get the [pitch class](https://en.wikipedia.org/wiki/pitch_class) of a note

### Parameters

* `note` **`String or Array`** the note


### Examples

```js
pc = require('music.kit/note.pitchClass')
pc('db3') // => 'Db'
pc('fx/4') // => 'F##'
```

Returns  the pitch class


## `note.setOctave`

Set the octave of the given note

### Parameters

* `octave` **`Integer`** the octave to set
* `note` **`String or Array`** the note


### Examples

```js
var setOctave = require('music.kit/note.setOctave')
setOctave('2', 'C#1') // => 'C#2'
```

Returns  a copy of the same note with the octave changed


## `note.str`

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
var note = require('music.kit').note
note.str([0]) // => 'F'
note.str([0, 4]) // => null (its an interval)
note.str([0, 4, null]) // => 'F4'
note.str([0, 4, 2]) // => 'F4/2'
```

Returns `String` the note in scientific notation or null if not valid note array


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


## `pitch`

In music.kit a pitch it's a note, an interval or a pitch class. It allows us
to work with this elements in an uniform way.

All the function in this module are valid for notes, or intervals



### Examples

```js
var pitch = require('music.kit').pitch
pitch.height('C2') // => 24
pitch.height('5P') // => 7
```



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


## `pitch.props`

Get the properties of a pitch in array notation as an array of properties

The properties is in the form [number, alteration, octave, duration]

__This is the only function in music.kit that only accepts array.notation format__

### Parameters

* `array` **`Array`** the pitch in array notation


### Examples

```js
var props = require('music.kit/pitch.props')
props([2, 1, 4]) // => [1, 2, 4]
```

Returns `Array` the properties array


## `pitch.simplify`

Simplifies a pitch. If its a note, it returns its pitch class. If its an
interval it returns the simplified interval

### Parameters

* `pitch` **`String or Array`** the pitch


### Examples

```js
var simplify = require('music.kit/pitch.simplify')
simplify('C#4') // => 'C#'
simplify('9m') // => '2m'
```

Returns  the simplified pitch


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


## `scale`

In music.kit an scale is a set of notes or intervals with a tonic and ordered
by pitch

The `scale` module has functions to create and manipulate scales






## `scale.build`

Build a scale from a source and a tonic. A scale is a set of notes or
intervals ordered by frequency with a tonic.

A source can be a list of intervals or notes. The tonic must be
a pitch (with or without octave) or false to get the scale intervals

This function is currified, so you can partially apply the function passing
one parameter instead of two (see example)

This function is exported in music.kit as `scale` instead of `scale.build`
(see example)

### Parameters

* `source` **`Array`** the list of intervals or notes
* `tonic` **`String`** the tonic of the scale


### Examples

```js
var scale = require('music.kit/scale/build')
// basic usage
scale('1 2 3 5 6', 'G') // => ['G', 'A', 'B', 'D', 'E']
scale('1 2 3 5 6', false) // => ['1P', '2M', '3M', '5P', '6M']
```
```js
// partially applied
var dorian = scale('D E F G A B C')
dorian('C4') // => ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4']
```
```js
// music.kit exports 'scale'
var kit = require('music.kit')
kit.scale('D E F G A B C')
```

Returns `Array` the list of notes


## `scale.dictionary`

Scale dictionary



### Examples

```js
var scales = require('music.kit/scale/dictionary')
scales['major'] // => { name: 'major', intervals: ['1', '2', ...], aliases: [] }
```



## `scale.get`

Get a scale by name using a dictionary.

You can get scale notes by passing a tonic or the scale intervals by passing
`false` as tonic

There is two ways to get a scale:
- With name and tonic: `scale.get('major', 'C')`
- With tonic included in name: `scale.get('C major')`

This function can be partially applied (see examples)

### Parameters

* `name` **`String`** the scale name (optionally can include the tonic)


### Examples

```js
var get = require('music.kit/scale/get')
// with name and tonic
get('major', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// with tonic inside the name
get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// partially applied
var major = get('major')
major('C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
```

Returns `Object` a data object with the scale properties


## `scale.names`

Given a list of notes get the scale names

### Parameters

* `notes` **`String or Array`** the scale notes


### Examples

```js
// get all known scale names
scale.names() // => ['major', 'minor', ... ] (89 names)
scale.names('D E F G A B C') [ 'D dorian' ]
scale.names('D E F G A B C') [ 'D dorian' ]
```

Returns `Array` an array of scale names or all known scale names if no arguments provided


## `scale.select`

Select notes from a scale using degree numbers.

The resulting array will contain the notes in the same order as degrees.
If a given degree is not present in the scale, the result will contain a
null in that position.

This function is currified so it can be partially applied.

### Parameters

* `degrees` **`Array or String`** the degrees numbers list
* `scale` **`Array or String`** the scale notes


### Examples

```js
var select = require('music.kit/scale.select')
// basic usage:
select('1 3 5', 'C D E F G A B') // => [ 'C', 'E', 'G' ]
// order matters:
select('1 5 2 6', 'C D E F G A B') // => [ 'C', 'G', 'D', 'A' ]
// not found degrees are null:
select('1 2 6', 'C D E F G') // => [ 'C', 'D', null ]
// numbers bigger than 7 are transposed one octave or more:
select('1 8 15', 'C2 D2 E2') // => ['C2', 'C3', 'C4']
// partially applied:
var triad = select('1 3 5')
triad('C D E F G A B') // => ['C', 'E', 'G']
```

Returns `Array` the melodic pattern (or null if not present)


## `set`

In music.kit a set is a collection of pitch classes (or simple intervals)
sorted in ascending order

The `set` module has functions to create and manipulate set






## `set.binary`

Get a set binary number

A set binary number is a 12 digit binary, each digit representing a step
in the chromatic scale. For example, `101010000000` is `['1P', '2M', '3M']`

The set binary number is very useful to check if two sets are equal or
contains same intervals (regarding of note names)

### Parameters

* `source` **`String or Array or Array<Array>`** a gamut


### Examples

```js
var binary = require('music.kit/set/binary')
binary('C2 E4 D3') // => '101010000000'
```

Returns `String` the binary number


## `set.build`

A set is a list of uniq pitch classes or simplified intervals in ascending pitch order

This function is exported as `set` (see examples)

### Parameters

* `gamut` **`String or Array`** the gamut


### Examples

```js
var set = require('music.kit/set/build')
set('E7 C2 e D5 c1') // => ['C', 'D', 'E']
set('11 10 9') // => [ '2M', '3M', '4P' ]
```
```js
// use the function from music.kit
var kit = require('music.kit')
kit.set('e4 f5 ...')
```

Returns  the set


