# Basic math in JavaScript -- numbers and operators

## Types of numbers

- **Integers** are floating-point numbers without a fraction. They can 
either be positive or negative, e.g. 10, 400, or -5.
- **Floating point numbers** (floats) have decimal points and decimal places, 
for example 12.5, and 56.7786543.
- **Doubles** are a specific type of floating point number that have greater 
precision than standard floating point numbers (meaning that they are 
accurate to a greater number of decimal places).

We even have different types of number systems! Decimal is base 10 (meaning 
it uses 0–9 in each column), but we also have things like:

- **Binary** — The lowest level language of computers; 0s and 1s.
- **Octal** — Base 8, uses 0–7 in each column.
- **Hexadecimal** — Base 16, uses 0–9 and then a–f in each column. You may 
have encountered these numbers before when setting colors in CSS.

**Before you start to get worried about your brain melting, stop right 
there!** For a start, we are just going to stick to decimal numbers 
throughout this course; you'll rarely come across a need to start thinking 
about other types, if ever.

The second bit of good news is that unlike some other programming languages, 
JavaScript only has one data type for numbers, both integers and decimals — 
you guessed it, `Number`. This means that whatever type of numbers you are 
dealing with in JavaScript, you handle them in exactly the same way.

Enter the commands listed below into your developer tools JavaScript console.

```js
const myInt = 5;
console.log(myInt);
console.log(typeof myInt);

const myFloat = 6.667;
console.log(myFloat);
console.log(typeof myFloat);
```

You should get &quot;number&quot; returned in both cases — this makes 
things a lot easier for us than if different numbers had different data 
types, and we had to deal with them in different ways. Phew!

## Useful Number methods

The `Number` object, an instance of which represents all standard numbers 
you'll use in your JavaScript, has a number of useful methods available on 
it for you to manipulate numbers. We don't cover these in detail in this 
article because we wanted to keep it as a simple introduction and only cover 
the real basic essentials for now; however, once you've read through this 
module a couple of times it is worth going to the object reference pages and 
learning more about what's available.

For example, to round your number to a fixed number of decimal places, use 
the `toFixed()` method. Type the following lines into your browser's console:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

## Converting to number data types

Sometimes you might end up with a number that is stored as a string type, 
which makes it difficult to perform calculations with it. This most commonly 
happens when data is entered into a `form` input, and the `input type` is text. 
There is a way to solve this problem — passing the string value into the 
`Number()` constructor to return a number version of the same value.

For example, try typing these lines into your console:

```js
let myNumber = '74';
myNumber += 3;
```

You end up with the result 743, not 77, because myNumber is actually defined 
as a string. You can test this by typing in the following:

```js
typeof myNumber;
```

To fix the calculation, you can do this:

```js
let myNumber = '74';
myNumber = Number(myNumber) + 3;
```

The result is then 77, as initially expected.

## Arithmetic operators

- `+` : Addition - Adds two numbers together. e.g. `6 + 9`
- `-` : Subtraction - Subtracts the right number from the left. e.g. `20 - 15`
- `*` : Multiplication - Multiplies two numbers together. e.g. `3 * 7`
- `/` : Division - Divides the left number by the right. e.g. `10 / 5`
- `%` : Remainder (sometimes called modulo) - Returns the remainder left over after you've divided 
the left number into a number of integer portions equal to the right number. 
e.g. `8 % 3`(returns 2, as three goes into 8 twice, leaving 2 left over).
- `**` : Exponent - Raises a `base` number to the `exponent` power, that is, the 
`base` number multiplied by itself, `exponent` times. e.g. `5 ** 2`  (returns 
25, which is the same as 5 * 5).

>**Note**: You'll sometimes see numbers involved in arithmetic referred to 
as operands.

>**Note**: You may sometimes see exponents expressed using the older 
`Math.pow()` method, which works in a very similar way. For example, in 
`Math.pow(7, 3)`, `7` is the base and `3` is the exponent, so the result of 
the expression is `343`. `Math.pow(7, 3)` is equivalent to `7**3`.

## Operator precedence

```js
let num1 = 50
let num2 = 10
num2 + num1 / 8 + 2;
```

As a human being, you may read this as *&quot;50 plus 10 equals 60&quot;, 
then *&quot;8 plus 2 equals 10&quot;*, and finally *&quot;60 divided by 10 
equals 6&quot;*.

But the browser does *&quot;10 divided by 8 equals 1.25&quot;*, then 
*&quot;50 plus 1.25 plus 2 equals 53.25&quot;*.

This is because of **operator precedence** — some operators are applied before 
others when calculating the result of a calculation (referred to as an 
expression, in programming). Operator precedence in JavaScript is the same 
as is taught in math classes in school — multiply and divide are always 
done first, then add and subtract (the calculation is always evaluated from 
left to right).

If you want to override operator precedence, you can put parentheses around 
the parts that you want to be explicitly dealt with first. So to get a 
result of 6, we could do this:

```js
let num1 = 50
let num2 = 10
(num2 + num1) / (8 + 2);
```

## Increment and decrement operators

Sometimes you'll want to repeatedly add or subtract one to or from a 
numeric variable value. This can be conveniently done using the increment 
(`++`) and decrement (`--`) operators. We used `++` in our &quot;Guess the 
number&quot; game back in our first splash into JavaScript article, when 
we added 1 to our `guessCount` variable to keep track of how many guesses 
the user has left after each turn.

```js
guessCount++;
```

```js
let num1 = 4;
num1++;
num1
```

```js
let num2 = 6;
num2++;
num2
```

**Note**: You can make the browser do it the other way round — 
increment/decrement the variable then return the value — by putting the
operator at the start of the variable instead of the end. Try the above 
examples again, but this time use `++num1` and `--num2`.

```js
let num1 = 4;
++num1;
num1;
```

```js
let num2 = 6;
++num2;
num2;
```

## Assignment operators

Assignment operators are operators that assign a value to a variable. We 
have already used the most basic one, `=`, loads of times — it assigns 
the variable on the left the value stated on the right:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

But there are some more complex types, which provide useful shortcuts to 
keep your code neater and more efficient. The most common are listed below:

- `+=` : Addition assignment - Adds the value on the right to the variable 
value on the left, then returns the new variable value. e.g. x += 4; is a 
shortcut for x = x + 4;
- `-=` : Subtraction assignment - Subtracts the value on the right from 
the variable value on the left, and returns the new variable value. 
e.g. x -= 3; is a shortcut for x = x - 3;
- `*=` : Multiplication assignment - Multiplies the variable value on 
the left by the value on the right, and returns the new variable value e.g. 
x *= 3; is a shortcut for x = x * 3;
- `/=` : Division assignment - Divides the variable value on the left by 
the value on the right, and returns the new variable value. e.g. x /= 5; is 
a shortcut for x = x / 5;

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

>**Note**: There are lots of [other assignment operators available](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), 
but these are the basic ones you should learn now.*

## Comparison operators

Sometimes we will want to run true/false tests, then act accordingly 
depending on the result of that test — to do this we use comparison 
operators.

- === : Strict equality - Tests whether the left and right values are 
identical to one another. E.g. `5 === 2 + 4`
- !== : Strict-non-equality. E.g. `5 !== 2 + 3`
- &lt; : Less than - Tests whether the left and right values are not 
identical to one another. E.g.`10 < 6`
- &gt; : Greater than - Tests whether the left value is greater than the 
right one. E.g. `10 > 20`
- &lt;= : Less than or equal to - Tests whether the left value is smaller 
than or equal to the right one. E.g. `3 <= 2`
- &gt;= : Greater than or equal to - Tests whether the left value is 
greater than or equal to the right one.`5 >= 4`

>*Note*: You may see some people using `==` and `!=` in their tests for 
equality and non-equality. These are valid operators in JavaScript, but 
they differ from `===`/`!==`. The former versions test whether the values are 
the same but not whether the values' datatypes are the same. The latter, 
strict versions test the equality of both the values and their datatypes. 
The strict versions tend to result in fewer errors, so we recommend you use them.

If you try entering some of these values in a console, you'll see that 
they all return true/false values — those booleans we mentioned in the 
last article. These are very useful, as they allow us to make decisions 
in our code, and they are used every time we want to make a choice of some 
kind. For example, booleans can be used to:

  - Display the correct text label on a button depending on whether a 
  feature is turned on or off
  - Display a game over message if a game is over or a victory message 
  if the game has been won
  - Display the correct seasonal greeting depending on what holiday season 
  it is
  - Zoom a map in or out depending on what zoom level is selected

We'll look at how to code such logic when we look at conditional statements 
in a future article. For now, let's look at a quick example:

```js
const myButton = document.querySelector('button');
const myParagraph = document.querySelector('p');

myButton.addEventListener('click', updateButton);

function updateButton() {
  if (myButton.textContent === 'Start machine') {
    myButton.textContent = 'Stop machine';
    myParagraph.textContent = 'The machine has started!';
  } else {
    myButton.textContent = 'Start machine';
    myParagraph.textContent = 'The machine is stopped.';
  }
}

You can see the equality operator being used just inside the `updateBtn()` 
function. In this case, we are not testing if two mathematical expressions 
have the same value — we are testing whether the text content of a button 
contains a certain string — but it is still the same principle at work. If the 
button is currently saying &quot;Start machine&quot; when it is pressed, we 
change its label to &quot;Stop machine&quot;, and update the label as appropriate. If the 
button is currently saying &quot;Stop machine&quot; when it is pressed, we swap the display 
back again.

>**Note**: Such a control that swaps between two states is generally referred 
to as a toggle. It toggles between one state and another — light on, light off, etc.

## Test your skills: Math

### Task 1

In this task you need to create four variables that contain numbers. The first 
two need to be added together and stored, while the fourth needs to be subtracted 
from the third and the result stored. The two results of these operations need 
to be multiplied together to create another result, 48, which should be stored '
in the variable `finalResult`.

Finally, you need to write a calculation that checks whether this number is 
even or odd, with the result stored in `evenOddCheck`. The operator you need 
here is modulo (%). If your value modulo 2 equals 0, you know it is even.

```js
const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;
```

This task also tests your variable naming abilities. An extra mark if the 
variables have sensible names that follow best practices (lower camel case, 
descriptive, not too long).

### Task 2

In our second task for this article we need to consider operator precedence 
and use parentheses to make the first two calculations give the result we were 
expecting.

Next, we ideally need to use the multiplication assignment operator to multiply 
the two results together and then assign the product of this back to result.

After that we need to use the `toFixed()` method available on numbers to round 
result to 2 decimal places, storing the product of this in a finalResult variable.

Finally, using typeof we can test if a variable contains a string. We need to 
use `Number()` to convert `finalResult` to a number type. This final number 
needs to be stored in a variable called `finalNumber`.

The result should look something like this:

```
let result1Task2 = 7 + 13 / 9 + 7;
let result2Task2 = 100 / 2 * 6;

result1Task2 *= result2Task2;

const finalResultTask2 = result1Task2.toFixed(2);

const finalNumberTask2 = Number(finalResultTask2);
```

### Task 3

In the final task for this article, we want you to write some tests. There 
are three groups, each consisting of a statement and two variables. For each 
one, write a test that proves or disproves the statement made. Store the 
results of those tests in variables called `weightComparison`, `heightComparison`, 
and `pwdMatch`, respectively.

```js
const weightComparisonTask3 = elephantWeightTask3 < mouseWeightTask3;

const heightComparisonTask3 = ostrichHeightTask3 > duckHeightTask3;

const passwordMatchTask3 = password1Task3 === password2Task3;
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/004-basic-math-in-javascript--numbers-and-operators/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/004-basic-math-in-javascript--numbers-and-operators/active_learning">Visit website</a>
  </dd>
</dl>
