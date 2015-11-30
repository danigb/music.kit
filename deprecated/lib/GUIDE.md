# User Guide

You can read the [generated API documentation here](http://danigb.github.io/music.kit/docs/)

#### A class-free library

From the user perspective, the most important thing to know is that there is no classes and everything is a function, so instaed of: `new Note('C4').transpose('2M')` you will write `transpose('2M', 'C4')` (in this case, the order of parameters doesn't matter, but in most functions what usually is `this` is the __last__ argument)

While other libraries uses objects to represent notes and intervals, in music.kit they are just strings.

Once you accept this two things (no classes, pure functions), music.kit its just easy: no surprises, no side effects.

#### Modules

music.kit is divided in modules:

- __note__: parse and build, midi, frequencies, transposition and distances
- __interval__: parse and build intervals.
- __pitch__: an abstraction that allows to work with notes, pitch classes and intervals in an uniform way
- __gamut__: work with collection of notes
- __set__: create pitch sets and binary representations
- __dictionary__: work with named sets. Scale and chord uses dictionaries.
- __scale__: create scales, a scale dictionary, scale name detection
- __chord__: create chords and chords dictionary

#### Node environments

Install it with npm: `npm i --save music.kit` and require the library:

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
