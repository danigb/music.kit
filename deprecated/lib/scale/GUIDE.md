
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

music.kit includes a dictionary with 89 scales. You can access them by passing the scale name (and optionally a tonic) to the `scale.get` function. There are three ways to get the scale:

```js
// with name and tonic
kit.scale.get('major', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// with tonic inside the name
kit.scale.get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// partially applied
var major = kit.scale.get('major')
major('C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
```

Set `false` as tonic to get the intervals:

```js
kit.scale.get('major', false) // => ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
var major = kit.scale.get('major')
major(false) // => ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
```

#### Get scale names

You can get the name(s) of the scale with the `scale.names` function:

```js
kit.scale.names('C D E F G A B') // => ['C major', 'C ionian']
kit.scale.names('D E F G A B C') // => ['D dorian']
```

The first name is always the principal name and the rest is the aliases (if any). A convenient `scale.name` (in singular) function is provided to get only the main name:

```js
kit.scale.name('C D E F G A B') // => 'C major'
kit.scale.name('D E F G A B C') // => 'D dorian'
```

You can all available scale names invoking `scale.names` without arguments:

```js
kit.scale.names() // => ['major', 'dorian', ...] (89 names)
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
