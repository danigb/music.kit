
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
