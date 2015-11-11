
## Named sets

The `namedSet` module provides an abstraction to work with dictionaries of sets. A dictionary of sets is a hashmap of set intervals accessed by name.

This is the foundation of the scale and chords dictionaries provided by music.kit. Probably you don't need to use this module.

#### Create a dictionary

The `namedSet.dictionary` function creates a hashmap of set intervals by name with some goodies:

- sets can be name aliases
- sets can be accessed by name
- sets can be accessed by binary number
- sets can be accessed by decimal numbers

```js
var chords = kit.namedSet.dictionary({'Maj7', ['1 3 5 7', ['maj7', 'M7']]})
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
