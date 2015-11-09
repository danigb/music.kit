# music.kit

[![Build Status](https://travis-ci.org/danigb/music.kit.svg?branch=master)](https://travis-ci.org/danigb/music.kit)
[![Code Climate](https://codeclimate.com/github/danigb/music.kit/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.kit)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.kit.svg)](https://www.npmjs.com/package/music.kit)
[![license](https://img.shields.io/npm/l/music.kit.svg)](https://www.npmjs.com/package/music.kit)
[![musik.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

`music.kit` is a collection of functions to manipulate music abstractions (not actual music) and helps to write audio or midi software.

```js
var kit = require('music.kit')
// note names, midi and frequencies
kit.note.fromMidi(69) // => 'A4'
kit.note.freq('A4') // => 440.0

// pitch collections: harmonizers, scales, chords
m79 = kit.harmonizer('1 3b 5 7 9')
m79('C#4') // => ['C#4', 'E4', 'G#4', 'B#4', 'D#5']

kit.scale.get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
var major = kit.scale.get('major')
major('A') // => ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']

var dom7 = kit.chord.get('dom7')
dom7('D') // => ['D', 'F#', 'A', 'C']
```

This is the successor of [tonal](https://github.com/danigb/tonal)

## Features

- Note, intervals, transposition, distances..
- Midi and frequency conversion
- Scales, chords
- Work with collection of notes: gamut, harmonizer
- Pitch sets and binary representations

## Philosophy

- Functional: no classes, no side effects, no mutations. Just functions, data-in data-out. Most of the functions has the data to operate on as last argument and lot of functions are currified.
- Heavy use of string representations: 'C#2' is a pitch, '3M' is an interval. No objects.
- Small and fast
- Modular: each functionallity has its own module (all integrated in music.kit). Require the functions you need.
- Different notations: scientific notation by default. Use other easily.
- Documented: all public functions are documented inside the code. Aside the generated documentation (in API.md file), how to guides are provided in readme.
- Learneable: since all the modules share the same philosophy is easy to work with them.
- Tested: carefully tested with coverage support. Codeclimate statistics.
- Advanced features: chord and scale detection, binary sets, chord progressions, key signatures...

## Install

Not yet released.

## Usage

### Notes

Notes in music.kit are represented by strings. By default it uses scientific notation with the form: `letter[accidentals][octave]/[duration]`. Pitch classes are note names without octave and duration.

The `note` function returns a scientific notation of the given string or null if not valid string:

```js
// get a note
kit.note('c2') // => 'C2'
kit.note('fx') // => 'F##'
kit.note('blah') // => null
```

There are several functions to get note properties or to modify them:

```js
kit.note.octave('C#4') // => 4
kit.note.setOctave(3, 'Bb0') // => 'Bb3'
kit.note.pitchClass('Bb5/4') // => 'Bb'
```

You can transform to midi and frequencies:

```js
kit.note.midi('A4') // => 69
kit.note.fromMidi(13) // => 'Bb0'
kit.note.freq(null, 'A4') // => '440'
```

Finally you can transpose or find intervals between notes:

```js
kit.note.transpose('3M', 'e3') // => 'G#3'
kit.note.distance('C2', 'Eb2') // => '3m'
```

### Working with group of notes

### Chords

### Scales

## Documentation

[Read the generated documentation here](https://github.com/danigb/music.kit/blob/master/API.md)

## Resources and inspiration

This library takes inspiration from lot of places:

- Teoria: https://github.com/saebekassebil/teoria
- Impro-Visor: https://www.cs.hmc.edu/~keller/jazz/improvisor/
- MusicKit: https://github.com/benzguo/MusicKit
- Music21: http://web.mit.edu/music21/doc/index.html

# License

MIT License
