# Functions — reusable blocks of code

Another essential concept in coding is **functions**, which allow you to store a 
piece of code that does a single task inside a defined block, and then call 
that code whenever you need it using a single short command — rather than 
having to type out the same code multiple times. In this article we'll explore 
fundamental concepts behind functions such as basic syntax, how to invoke and 
define them, scope, and parameters.

## Where do I find functions?

Functions are found everywhere in JavaScript. Pretty much anytime you make use 
of a JavaScript structure that features a pair of parentheses — `()` — and 
you're not using a common built-in language structure like a `for` loop, `while` 
or `do...while` loop, or `if...else` statement, you are making use of a function.

## Built-in browser functions

We've used functions built into the browser a lot in this course.

Every time we manipulated a text string, for example:

```js
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Or every time we manipulated an array:

```js
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Or every time we generate a random number:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

The JavaScript language has many built-in functions to allow you to do useful 
things without having to write all that code yourself. In fact, some of the 
code you are calling when you invoke (a fancy word for run, or execute) a 
built-in browser function couldn't be written in JavaScript — many of these 
functions are calling parts of the background browser code, which is written 
largely in low-level system languages like C++, not web languages like JavaScript.

Bear in mind that some built-in browser functions are not part of the core 
JavaScript language — some are defined as part of browser APIs, which build 
on top of the default language to provide even more functionality (refer to 
this early section of our course for more descriptions). We'll look at using 
browser APIs in more detail in a later module.

## Functions versus methods

**Functions** that are part of objects are called **methods**. The built-in 
code we've made use of so far comes in both forms: **functions** and **methods**. 
You can check the full list of the built-in functions, as well as the built-in 
objects and their corresponding methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

You've also seen a lot of **custom functions** in the course so far — functions 
defined in your code, not inside the browser. Anytime you saw a custom name with 
parentheses straight after it, you were using a custom function.

Rather than having to write all that code out again every time we want to 
repeat it. Functions can contain whatever code you like — you can even call 
other functions from inside functions.


## Invoking functions

You are probably clear on this by now, but just in case, to actually use a 
function after it has been defined, you've got to run — or invoke — it. This 
is done by including the name of the function in the code somewhere, followed 
by parentheses.

```js
function myFunction() {
alert('hello');
}

myFunction();
// calls the function once
```

>**Note**: This form of creating a function is also known as function 
declaration. It is always hoisted so that you can call the function above the 
function definition and it will work fine.

## Function parameters

Some functions require **parameters** to be specified when you are invoking them — 
these are values that need to be included inside the function parentheses, 
which it needs to do its job properly.

>**Note**: Parameters are sometimes called arguments, properties, or even 
attributes.

As an example, the browser's built-in Math.random() function doesn't require 
any parameters. When called, it always returns a random number between 0 and 1:

```js
const myNumber = Math.random();
```

The browser's built-in string replace() function however needs two parameters 
— the substring to find in the main string, and the substring to replace that 
string with:

```js
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
```

**Note**: When you need to specify multiple parameters, they are separated by commas.

## Optional parameters

Sometimes parameters are optional — you don't have to specify them. If you 
don't, the function will generally adopt some kind of default behavior. As an 
example, the array join() function's parameter is optional:

```js
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

If no parameter is included to specify a joining/delimiting character, a 
comma is used by default.

## Default parameters

If you're writing a function and want to support optional parameters, you 
can specify default values by adding = after the name of the parameter, 
followed by the default value:

```js
function hello(name = 'Chris') {
console.log(`Hello ${name}!`);
}

hello('Ari'); // Hello Ari!
hello(); // Hello Chris!
```

## Anonymous functions and arrow functions

So far we have just created a function like so:

```js
function myFunction() {
alert('hello');
}
```

But you can also create a function that doesn't have a name:

```js
(function () {
alert('hello');
});
```

This is called an anonymous function, because it has no name. You'll often 
see anonymous functions when a function expects to receive another function 
as a parameter. In this case, the function parameter is often passed as an 
anonymous function.

>**Note**: This form of creating a function is also known as function 
expression. Unlike function declarations, function expressions are not hoisted.

## Anonymous function example

For example, let's say you want to run some code when the user types into a 
text box. To do this you can call the addEventListener() function of the text 
box. This function expects you to pass it (at least) two parameters:

- the name of the event to listen for, which in this case is `keydown`
- a function to run when the event happens.

When the user presses a key, the browser will call the function you provided, 
and will pass it a parameter containing information about this event, 
including the particular key that the user pressed:

```j
function logKey(event) {
console.log(`You pressed '${event.key}'.`);
}

textBox.addEventListener('keydown', logKey);
```

Instead of defining a separate `logKey()` function, you can pass an 
anonymous function into `addEventListener()`:

```js
textBox.addEventListener('keydown', function (event) {
console.log(`You pressed '${event.key}'.`);
});
```

## Arrow functions

If you pass an anonymous function like this, there's an alternative form 
you can use, called an arrow function. Instead of function(event), you write 
(event) =>:

```js
textBox.addEventListener('keydown', event => {
console.log(`You pressed '${event.key}'.`);
});
```

Finally, if your function contains only one line that's a return statement, 
you can also omit the braces and the return keyword and implicitly return 
the expression. In the following example, we're using the map() method of 
Array to double every value in the original array:

## Function scope and conflicts

Let's talk a bit about **scope** — a very important concept when dealing with 
functions. When you create a function, the variables and other things defined 
inside the function are inside their own separate scope, meaning that they are 
locked away in their own separate compartments, unreachable from code outside 
the functions.

The top-level outside all your functions is called the **global scope**. Values 
defined in the global scope are accessible from everywhere in the code.

JavaScript is set up like this for various reasons — but mainly because of 
security and organization. Sometimes you don't want variables to be accessible 
from everywhere in the code — external scripts that you call in from elsewhere 
could start to mess with your code and cause problems because they happen to 
be using the same variable names as other parts of the code, causing conflicts. 
This might be done maliciously, or just by accident.

It is a bit like a zoo. The lions, zebras, tigers, and penguins are kept in 
their own enclosures and only have access to the things inside their 
enclosures — in the same manner as the function scopes. If they were able to 
get into other enclosures, problems would occur. At best, different animals 
would feel really uncomfortable inside unfamiliar habitats — a lion or tiger 
would feel terrible inside the penguins' watery, icy domain. At worst, the 
lions and tigers might try to eat the penguins!

The zoo keeper is like the global scope — they have the keys to access every 
enclosure, restock food, tend to sick animals, etc.

## Test your skills: Functions

The aim of this skill test is to assess whether you've understood our 
Functions — reusable blocks of code, Build your own function, and Function 
return values articles.

### Task 1

For the first task, you have to create a simple function — chooseName() — 
that prints a random name from the provided array (names) to the provided 
paragraph (para), and then run it once.

## Conclusion

This article has explored the fundamental concepts behind functions, paving 
the way for the next one in which we get practical and take you through the 
steps to building up your own custom function.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/011-functions-reusable-blocks-of-code/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/011-functions-reusable-blocks-of-code/active_learning">Visit website</a>
  </dd>
</dl>
