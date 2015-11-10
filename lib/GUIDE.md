# music.kit user guide

#### A class-free library

From the user perspective, the most different part of music.kit its accept there are no classes and everything is a function, so insted of: `new Note('C4').transpose('2M')` you will write `transpose('2M', 'C4')` (in this case, the order of parameters doesn't matter, but in most functions what usually is `this` is the __last__ argument)

While other libraries uses objects to represent notes and intervals, in music.kit they are just strings.

Once you accept this two things, music.kit its just easy: no surprises, no side effects.
