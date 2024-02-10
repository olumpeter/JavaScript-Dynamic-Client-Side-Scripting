# A first splash into JavaScript: Example — Guess the number game
We'll show you how to build up the simple game.

Let's imagine your boss has given you the following brief for creating this 
game:

Let's imagine your boss has given you the following brief for creating this game:

>I want you to create a simple guess the number type game. It should choose 
a random number between 1 and 100, then challenge the player to guess the 
number in 10 turns. After each turn, the player should be told if they are 
right or wrong, and if they are wrong, whether the guess was too low or too 
high. It should also tell the player what numbers they previously guessed. 
The game will end once the player guesses correctly, or once they run out of 
turns. When the game ends, the player should be given an option to start 
playing again.

Upon looking at this brief, the first thing we can do is to start breaking 
it down into simple actionable tasks, in as much of a programmer mindset as 
possible:
1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user 
can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
  i. Display congratulations message.
  i. Stop the player from being able to enter more guesses (this would mess 
  the game up).
  i. Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
  - Tell the player they are wrong and whether their guess was too high or too low.
  - Allow them to enter another guess.
  - Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
  - Tell the player it is game over.
  - Stop the player from being able to enter more guesses (this would mess the game up).
  - Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely 
reset, then go back to step 1.

Let's now move forward, looking at how we can turn these steps into code, 
building up the example, and exploring JavaScript features as we go.

## variables

**Variables** are basically names for values (such as numbers, or strings of 
text). You create a variable with the keyword `let` followed by a name for your 
variable.

## Constants

**Constants** are also used to name values, but unlike variables, you can't change 
the value once set. In this case, we are using constants to store references to 
parts of our user interface. The text inside some of these elements might change, 
but each constant always references the same HTML element that it was initialized 
with. You create a constant with the keyword `const` followed by a name for the 
constant.

## How you can assign values to your variables or constants

You can assign a value to your variable or constant with an equals sign (=) 
followed by the value you want to give it.

## Functions

**Functions** are reusable blocks of code that you can write once and run again and 
again, saving the need to keep repeating code all the time.  This is really 
useful. There are a number of ways to define functions, but for now we'll 
concentrate on one simple type. Here we have defined a function by using the 
keyword `function`, followed by a name, with parentheses put after it. After 
that, we put two curly braces (`{ }`). Inside the curly braces goes all the code 
that we want to run whenever we call the function.

For example:

```js
function checkGuess() {
  alert('I am a placeholder');
}
```

```js
checkGuess();
```

## Operators

**JavaScript operators** allow us to perform tests, do math, join strings of text
together, and other such things. For example:

```js
6 + 9
20 - 15
3 * 7
10 / 5
```

There are also some shortcut operators available, called 
[compound assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators). 
For example, if you want to add a new number to an existing one and return the 
result, you could do this:

```js
let number1 = 1;
number1 += 2;
```

This is equivalent to

```js
let number2 = 1;
number2 = number2 + 2;
```

When we are running true/false tests (for example inside conditionals) we use 
[comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators). 
For example:

a) `===` : Strict equality (is it exactly the same?)
a) `!==` : Non-equality (is it not the same?)
a) `<` : Less than
a) `>` : Greater than

```js
// Strict equality examples

5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; number versus string
```

```js
// Non-equality examples

5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; number versus string
```

```js
// Less than examples

6 < 10 // true
20 < 10 // false
```

```js
// Greater than

6 > 10 // false
20 > 10 // true
```

## Text strings

Strings are used for representing text. We've already seen a string variable: 
in the following code, `&lsquo;I am a placeholder&rsquo;` is a string:

```js
function checkGuess() {
  alert('I am a placeholder');
}
```

You can declare strings using double quotes (`&quot;`) or single quotes 
(`&lsquo;`), but you must use the same form for the start and end of a single 
string declaration: you can't write &quot;I am a placeholder&rsquo;.

You can also declare strings using backticks (```). Strings declared like 
this are called template literals and have some special properties. In 
particular, you can embed other variables or even expressions in them:

```js
const name = 'Olum';

const greeting = `Hello ${name}`;


alert(greeting) 
```

This gives you a mechanism to join strings together.

## Conditionals

A conditional code block allows you to run code selectively, depending on 
whether a certain condition is true or not. Conditionals looks a bit like a 
function, but it isn't. The simplest form of conditional block starts with 
the keyword `if`, then some parentheses, then some curly braces. Inside the 
parentheses, we include a test. If the test returns true, we run the code 
inside the curly braces. If not, we don't, and move on to the next bit of 
code. 

We can chain another test onto the end of the last test using an 
`else if (){ }` structure. 

We can also chain `else { }` that only runs of the none of the`if () {}` 
conditions and the `else if () {}` returns true.

## Events

We have a nicely implemented `checkGuess()` function, but it won't do 
anything because we haven't called it yet. Ideally, we want to call it when 
the &quot;Submit guess&quot; button is pressed, and to do this we need to 
use an **event**. Events are things that happen in the browser — a button 
being clicked, a page loading, a video playing, etc. -  in response to which 
we can run blocks of code. **Event listeners** observe specific events and 
call **event handlers**, which are blocks of code that run in response to an 
event firing.

>**Note**: We don't need to specify the parentheses when passing functions 
inside addEventListener().

## Loops

Loops are a very important concept in programming, which allow you to keep 
running a piece of code over and over again, until a certain condition is met.

To start with, go to your **browser developer tools JavaScript console** '
again, and enter the following:

```js
const fruits = ['apples', 'bananas', 'cherries'];
for (const fruit of fruits) {
  console.log(fruit);
}
```

**What happened?** The strings 'apples', 'bananas', 'cherries' were printed 
out in your console.

This is because of the loop. The line const `fruits = ['apples', 'bananas', 'cherries'];` 
creates an array. We will work through a [complete Arrays guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) 
later in this module, but for now: an array is a collection of items (in this case strings).

A `for...of` loop gives you a way to get each item in the array and run 
some JavaScript on it. The line for (const fruit of fruits) says:

  1. Get the first item in `fruits`.
  1. Set the `fruit` variable to that item, then run the code between the `{}` curly braces.
  1. Get the next item in `fruits`, and repeat 2, until you reach the end of `fruits`.

In this case, the code inside the curly braces is writing out `fruit` to the console.

Now let's look at the loop in our number guessing game — the following can 
be found inside the `resetGame()` function:

```js
const resetParagraphs = document.querySelectorAll('.resultParagraphs p');
for (const resetParagraph of resetParagraphs) {
  resetParagraph.textContent = '';
}
```

This code creates a variable containing a list of all the paragraphs 
inside &lt;div class=&quot;resultParas&quot;&gt; using the `querySelectorAll()` 
method, then it loops through each one, removing the text content of each.

>**Note**: Even though resetParagraphs is a constant, we can change its 
internal properties like `textContent`.

## A small discussion on objects

```js
guessField.focus();
```

This line uses the `focus()` method to automatically put the text cursor 
into the &lt;input&gt; text field as soon as the page loads, meaning that 
the user can start typing their first guess right away, without having to 
click the form field first. It's only a small addition, but it improves 
usability — giving the user a good visual clue as to what they've got to 
do to play the game.

In JavaScript, most of the items you will manipulate in your code are 
objects. An **object** is a collection of related functionality stored in a 
single grouping. 

In this particular case, we first created a `guessField` constant that 
stores a reference to the text input form field in our HTML — the following 
line can be found amongst our declarations near the top of the code:

```js
const guessField = document.querySelector('.guessField');
```

To get this reference, we used the `querySelector()` method of the document 
object. `querySelector()` takes one piece of information — a [CSS selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) 
that selects the element you want a reference to.

Because guessField now contains a reference to an `&lt;input&gt;` element, 
it now has access to a number of properties (basically variables stored 
inside objects, some of which can't have their values changed) and methods 
(basically functions stored inside objects). One method available to input 
elements is `focus()`, so we can now use this line to focus the text input:

```js
guessField.focus();
```

Variables that don't contain references to form elements won't have `focus()` 
available to them. For example, the guesses constant contains a reference to 
a &lt;p&gt; element, and the `guessCount` variable contains a number.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/2-a-first-splash-into-javascript/example-guess-the-number-game/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/2-a-first-splash-into-javascript/example-guess-the-number-game">Visit website</a>
  </dd>
</dl>
