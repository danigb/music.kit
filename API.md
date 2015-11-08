# API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="build"><span class="type-signature"></span>build<span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.build.js">pitch.build.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.build.js#L4">lineno 4</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="chord"><span class="type-signature"></span>chord<span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.chord.js">gamut.chord.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.chord.js#L4">lineno 4</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="pitchClass"><span class="type-signature"></span>pitchClass<span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/note.pitchClass.js">note.pitchClass.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/note.pitchClass.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
<dl>
<dt>
<h4 class="name" id="ascending"><span class="type-signature"></span>ascending<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.ascending.js">gamut.ascending.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.ascending.js#L6">lineno 6</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="distance"><span class="type-signature"></span>distance<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get the interval between two notes</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/note.distance.js">note.distance.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/note.distance.js#L4">lineno 4</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="name"><span class="type-signature"></span>name<span class="signature">(interval)</span><span class="type-signature"> &rarr; {String}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert from <a href="https://github.com/danigb/music.array.notation">array interval notation</a>
to <a href="https://en.wikipedia.org/wiki/Interval_(music">shorthand interval notation</a>#Shorthand_notation)</p>
<p>The returned string has the form: <code>number + quality</code> where number is the interval number
(positive integer for ascending intervals, negative integer for descending intervals, never 0)
and the quality is one of: 'M', 'm', 'P', 'd', 'A' (major, minor, perfect, dimished, augmented)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>interval</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the interval in array notation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/interval.build.js">interval.build.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/interval.build.js#L6">lineno 6</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the interval string in shorthand notation or null if not valid interval</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>interval.name([1, 0, 0]) // => '2M'
interval.name([1, 0, 1]) // => '9M'</code></pre>
</dd>
<dt>
<h4 class="name" id="operation"><span class="type-signature"></span>operation<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Apply a function to an array of array pitches</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.operation.js">gamut.operation.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.operation.js#L5">lineno 5</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="parse"><span class="type-signature"></span>parse<span class="signature">(str)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert from <a href="https://en.wikipedia.org/wiki/Scientific_pitch_notation">scientific pitch notation</a>
to <a href="https://github.com/danigb/music.array.notation">array pitch notation</a></p>
<p>The string to parse must be in the form of: <code>letter[accidentals][octave]</code>
The accidentals can be up to four # (sharp) or b (flat) or two x (double sharps)</p>
<p>This function is cached for better performance.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>str</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the string to parse</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/note.parse.js">note.parse.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/note.parse.js#L7">lineno 7</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the note in array notation or null if not valid note</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>parse('C') // => [ 0 ]
parse('c#') // => [ 8 ]
parse('c##') // => [ 16 ]
parse('Cx') // => [ 16 ] (double sharp)
parse('Cb') // => [ -6 ]
parse('db') // => [ -4 ]
parse('G4') // => [ 2, 3, null ]
parse('c#3') // => [ 8, -1, null ]</code></pre>
</dd>
<dt>
<h4 class="name" id="parse"><span class="type-signature"></span>parse<span class="signature">(pitch)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Parse a note or an interval</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>pitch</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the note or interval to parse</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.parse.js">pitch.parse.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.parse.js#L4">lineno 4</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch in array notation</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>pitch.parse('C2') // => [0, 2, null]
pitch.parse('5P') // => [1, 0]</code></pre>
</dd>
<dt>
<h4 class="name" id="parse"><span class="type-signature"></span>parse<span class="signature">(interval)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert a <a href="https://en.wikipedia.org/wiki/Interval_(music">interval shorthand notation</a>#Shorthand_notation)
to <a href="https://github.com/danigb/music.array.notation">array interval notation</a></p>
<p>This function is cached for better performance.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>interval</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the interval string</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/interval.parse.js">interval.parse.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/interval.parse.js#L11">lineno 11</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the interval in array notation or null if not a valid interval</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>parse('3m') // => [2, -1, 0]
parse('9b') // => [1, -1, 1]
parse('-2M') // => [6, -1, -1]</code></pre>
</dd>
<dt>
<h4 class="name" id="props"><span class="type-signature"></span>props<span class="signature">(array)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the properties of a pitch in array notation as an array of properties</p>
<p>The properties is in the form [number, alteration, octave, duration]</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>array</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the pitch in array notation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.props.js">pitch.props.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.props.js#L7">lineno 7</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the properties array</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="scale"><span class="type-signature"></span>scale<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.scale.js">gamut.scale.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.scale.js#L9">lineno 9</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="scientific"><span class="type-signature"></span>scientific<span class="signature">(arr)</span><span class="type-signature"> &rarr; {String}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert from <a href="https://github.com/danigb/music.array.notation">array notation</a>
to <a href="https://en.wikipedia.org/wiki/Scientific_pitch_notation">scientific pitch notation</a></p>
<p>Array length must be 1 or 3 (see array notation documentation)</p>
<p>The returned string format is <code>letter[+ accidentals][+ octave][/duration]</code> where the letter
is always uppercase, and the accidentals, octave and duration are optional.</p>
<p>This function is memoized for better perfomance.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>arr</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the note in array notation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/note.build.js">note.build.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/note.build.js#L6">lineno 6</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the note in scientific notation or null if not valid note array</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>scientific([0]) // => 'F'
scientific([0, 4]) // => null (its an interval)
scientific([0, 4, null]) // => 'F4'
scientific([0, 4, 2]) // => 'F4/2'</code></pre>
</dd>
<dt>
<h4 class="name" id="setOctave"><span class="type-signature"></span>setOctave<span class="signature">(octave, note)</span><span class="type-signature"> &rarr; {String|Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Set the octave of the given note</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>octave</code></td>
<td class="type">
<span class="param-type">Integer</span>
</td>
<td class="description last"><p>the octave to set</p></td>
</tr>
<tr>
<td class="name"><code>note</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the note</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/note.setOctave.js">note.setOctave.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/note.setOctave.js#L4">lineno 4</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>a copy of the same note with the octave changed</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>setOctave('2', 'C#1') // => 'C#2'</code></pre>
</dd>
<dt>
<h4 class="name" id="simplify"><span class="type-signature"></span>simplify<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.simplify.js">pitch.simplify.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/pitch.simplify.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="split"><span class="type-signature"></span>split<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert a source to an array</p>
<p>The source can be an array (it will return it without modification), a
string with elements separated by spaces, commas or bars (<code>|</code>) or a single
element (it will be wrapped inside an array)</p>
<p>This function <strong>does not perform any transformation</strong> of the array elements.
and <strong>it always return an array, even if its empty</strong>.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the source</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.split.js">gamut.split.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/gamut.split.js#L2">lineno 2</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the source as array</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(interval, note)</span><span class="type-signature"> &rarr; {String|Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Transpose a note by an interval.</p>
<p>This function is currified. The orider of the parameters is indiferent.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>interval</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the interval. If its false, the note is not
transposed.</p></td>
</tr>
<tr>
<td class="name"><code>note</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the note to transpose</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.kit/blob/master/note.transpose.js">note.transpose.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.kit/blob/master/note.transpose.js#L4">lineno 4</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the note transposed</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>transpose('3m', 'c2') // => 'Eb3'</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->