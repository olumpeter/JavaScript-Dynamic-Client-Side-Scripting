# Making decisions in your code — conditionals

In any programming language, the code needs to make decisions and carry 
out actions accordingly depending on different inputs. 

## if...else statements

Basic if...else syntax looks like this:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Here we've got:

1. The keyword `if` followed by some parentheses.
1. A condition to test, placed inside the parentheses (typically &quot;is 
this value bigger than this other value?&quot;, or &quot;does this value 
exist?&quot;). The condition makes use of the comparison operators we 
discussed in the last module and returns `true` or `false`.
1. A set of curly braces, inside which we have some code — this can be any 
code we like, and it only runs if the condition returns `true`.
1. The keyword `else`.
1. Another set of curly braces, inside which we have some more code — this 
can be any code we like, and it only runs if the condition is not `true` — 
or in other words, the condition is `false`.

This code is pretty human-readable — it is saying &quot;if the condition 
returns true, run code A, else run code B&quot;

You should note that you don't have to include the else and the second 
curly brace block — the following is also perfectly legal code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

However, you need to be careful here — in this case, the second block of 
code is not controlled by the conditional statement, so it always runs, 
regardless of whether the condition returns true or false. This is not 
necessarily a bad thing, but it might not be what you want — often you want 
to run one block of code or the other, not both.

As a final point, while not recommended, you may sometimes see `if...else` 
statements written without the curly braces:

```js
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

This syntax is perfectly valid, but it is much easier to understand the 
code if you use the curly braces to delimit the blocks of code, and use 
multiple lines and indentation.

  ### A real example

Imagine a child being asked for help with a chore by their mother or 
father. The parent might say &quot;Hey sweetheart! If you help me by going 
and doing the shopping, I'll give you some extra allowance so you can 
afford that toy you wanted.&quot; In JavaScript, we could represent this 
like so:

```js
let childAllowance;
if (shoppingDone === true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}
```

This code as shown always results in the shoppingDone variable returning false, meaning disappointment for our poor child. It'd be up to us to provide a mechanism for the parent to set the shoppingDone variable to true if the child did the shopping.

### else if

The last example provided us with two choices, or outcomes — but what if we 
want more than two?

There is a way to chain on extra choices/outcomes to your `if...else` — using 
`else if`. Each extra choice requires an additional block to put in between if 
`() { }` and `else { }` — check out the following more involved example, which 
could be part of a simple weather forecast application:

### A note on comparison operators

Comparison operators are used to test the conditions inside our conditional 
statements. Our choices are:

- `===` and `!==` — test if one value is identical to, or not identical to, another.
- `&lt;` and `&gt;` — test if one value is less than or greater than another.
- `&lt;=` and `&gt;=` — test if one value is less than or equal to, or greater than or equal to, another.

We wanted to make a special mention of testing boolean (`true`/`false`) 
values, and a common pattern you'll come across again and again. Any value 
that is not `false`, `undefined`, `null`, `0,` `NaN`, or an empty string (`''`) 
actually returns `true` when tested as a conditional statement, therefore 
you can use a variable name on its own to test whether it is `true`, or even 
that it exists (that is, it is not undefined.) So for example:

```js
let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
```

And, returning to our previous example about the child doing a chore for 
their parent, you could write it like this:

```js
let shoppingDone = false;
let childAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

### Nesting if...else

It is perfectly OK to put one `if...else` statement inside another one — to 
nest them. For example, we could update our weather forecast application to 
show a further set of choices depending on what the temperature is:

```js
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Even though the code all works together, each `if...else` statement works 
completely independently of the other one.

### Logical operators: AND, OR and NOT

If you want to test multiple conditions without writing nested `if...else` 
statements, [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) can help you. When used in conditions, the 
first two do the following:

- `&&` — AND; allows you to chain together two or more expressions so that 
all of them have to individually evaluate to true for the whole expression 
to return true.
- `||` — OR; allows you to chain together two or more expressions so that one 
or more of them have to individually evaluate to true for the whole expression 
to return true.

To give you an AND example, the previous example snippet can be rewritten to this:

```js
if (choice === 'sunny' && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

So for example, the first code block will only be run if `choice === 'sunny'` 
and `temperature < 86` return `true`.

Let's look at a quick OR example:

```js
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}
```

The last type of logical operator, NOT, expressed by the `!` operator, can 
be used to negate an expression. Let's combine it with OR in the above example:

```js
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}
```

In this snippet, if the OR statement returns `true`, the NOT operator will 
negate it so that the overall expression returns `false`.

You can combine as many logical statements together as you want, in whatever 
structure. The following example executes the code inside only if both OR 
statements return true, meaning that the overall AND statement will return true:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}
```

A common mistake when using the logical OR operator in conditional statements 
is to try to state the variable whose value you are checking once, and then 
give a list of values it could be to return true, separated by `||` (OR) 
operators. For example:

```js
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In this case, the condition inside `if ()` will always evaluate to true 
since 7 (or any other non-zero value) always evaluates to true. This 
condition is actually saying 'if x equals 5, or 7 is true — which it always 
is'. This is logically not what we want! To make this work you've got to 
specify a complete test on either side of each OR operator:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch statements

`if...else` statements do the job of enabling conditional code well, but 
they are not without their downsides. They are mainly good for cases where 
you've got a couple of choices, and each one requires a reasonable amount of 
code to be run, and/or the conditions are complex (for example, multiple 
logical operators). For cases where you just want to set a variable to a 
certain choice of value or print out a particular statement depending on a 
condition, the syntax can be a bit cumbersome, especially if you've got a 
large number of choices.

In such a case, switch statements are your friend — they take a single 
expression/value as an input, and then look through several choices until 
they find one that matches that value, executing the corresponding code that 
goes along with it. Here's some more Pseudocode, to give you an idea:

```js
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
```

Here we've got:

1. The keyword `switch`, followed by a set of parentheses.
1. An expression or value inside the parentheses.
1. The keyword case, followed by a choice that the expression/value could be, 
followed by a colon.
1. Some code to run if the choice matches the expression.
1. A break statement, followed by a semicolon. If the previous choice matches 
the expression/value, the browser stops executing the code block here, and 
moves on to any code that appears below the switch statement.
1. As many other cases (bullets 3–5) as you like.
1. The keyword default, followed by exactly the same code pattern as one of 
the cases (bullets 3–5), except that default does not have a choice after it, 
and you don't need the break statement as there is nothing to run after this 
in the block anyway. This is the default option that runs if none of the 
choices match.

>**Note**: You don't have to include the default section — you can safely 
omit it if there is no chance that the expression could end up equaling an 
unknown value. If there is a chance of this, however, you need to include 
it to handle unknown cases.

## Ternary operator

The [ternary or conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) 
is a small bit of syntax that tests a condition and returns one value/expression 
if it is `true`, and another if it is `false` — this can be useful in some 
situations, and can take up a lot less code than an `if...else` block if you 
have two choices that are chosen between via a `true/false` condition. The 
pseudocode looks like this:

```js
condition ? run this code : run this code instead
```

So let's look at a simple example:

```js
const greeting = isBirthday
? 'Happy birthday Mrs. Smith — we hope you have a great day!'
: 'Good morning Mrs. Smith.';
```

## Active learning: A simple calendar

In this example, you are going to help us finish a simple calendar 
application. In the code you've got:

- A &lt;select&gt; element to allow the user to choose between different months.
- An `onchange` event handler to detect when the value selected in the 
&lt;select&gt;  menu is changed.
- A function called `createCalendar()` that draws the calendar and displays 
the correct month in the h1 element.

We need you to write a conditional statement inside the `onchange` handler 
function, just below the `// ADD CONDITIONAL HERE` comment. It should:

1. Look at the selected month (stored in the choice variable. This will be the 
&lt;select&gt; element value after the value changes, so &quot;January&quot; 
for example.)
2. Set a variable called days to be equal to the number of days in the 
selected month. To do this you'll have to look up the number of days in 
each month of the year. You can ignore leap years for the purposes of this 
example.

Hints:

- You are advised to use logical OR to group multiple months together into 
a single condition; many of them share the same number of days.
- Think about which number of days is the most common, and use that as a 
default value.

## Active learning: More color choices

In this example, you are going to take the ternary operator example we saw 
earlier and convert the ternary operator into a switch statement to allow us 
to apply more choices to the simple website. Look at the &lt;select&gt; — 
this time you'll see that it has not two theme options, but five. You need to 
add a switch statement just underneath the // ADD SWITCH STATEMENT comment:

- It should accept the choice variable as its input expression.
- For each case, the choice should equal one of the possible &lt;option&gt; 
values that can be selected, that is, `white`, `black`, `purple`, `yellow`, or 
`psychedelic`.
- For each case, the `update()` function should be run, and be passed two 
color values, the first one for the background color, and the second one for 
the text color. Remember that color values are strings, so they need to be 
wrapped in quotes.

## Test your skills: Conditionals

### Tasks 1

In this task you are provided with two variables:

  - `season` — contains a string that says what the current season is.
  - `response` — begins uninitialized, but is later used to store a response 
  that will be printed to the output panel.

We want you to create a conditional that checks whether season contains the 
string 'summer', and if so assigns a string to response that gives the user 
an appropriate message about the season. If not, it should assign a generic 
string to response that tells the user we don't know what season it is.

To finish off, you should then add another test that checks whether season 
contains the string 'winter', and again assigns an appropriate string to 
response.

### Task 2

For this task you are given three variables:

- `machineActive` — contains an indicator of whether the answer machine is 
switched on or not (`true`/`false`)
- `score` contains your score in an imaginary game. This score is fed into 
the answer machine, which provides a response to indicate how well you did.
- `response` — begins uninitialized, but is later used to store a response 
that will be printed to the output panel.

You need to create an `if...else` structure that checks whether the machine 
is switched on and puts a message into the response variable if it isn't, 
telling the user to switch the machine on.

Inside the first `if...else`, you need to nest another `if...else` that puts 
appropriate messages into the response variable depending on what the value 
of score is — if the machine is turned on. The different conditional tests 
(and resulting responses) are as follows:

  - Score of less than 0 or more than 100 — 'This is not possible, an error has occurred.'
  - Score of 0 to 19 — 'That was a terrible score — total fail!'
  - Score of 20 to 39 — 'You know some things, but it\'s a pretty bad score. Needs improvement.'
  - Score of 40 to 69 — 'You did a passable job, not bad!'
  - Score of 70 to 89 — 'That\'s a great score, you really know your stuff.'
  - Score of 90 to 100 — 'What an amazing score! Did you cheat? Are you for real?'

  
## Task 3

For the final task you are given four variables:

- `machineActive` — contains an indicator of whether the login machine is 
switched on or not (true/false).
- `pwd` — Contains the user's login password.
- `machineResult` — begins uninitialized, but is later used to store a 
response that will be printed to the output panel, letting the user know 
whether the machine is switched on.
- pwdResult — begins uninitialized, but is later used to store a response 
that will be printed to the output panel, letting the user know whether 
their login attempt was successful.

- We'd like you to create an `if...else` structure that checks whether the 
machine is switched on and puts a message into the  machineResult` variable 
telling the user whether it is on or off.
- If the machine is on, we also want a second conditional to run that 
checks whether the `pwd` is equal to `cheese`. If so, it should assign a 
string to pwdResult telling the user they logged in successfully. If not, it 
should assign a different string to `pwdResult` telling the user their login 
attempt was not successful. We'd like you to do this in a single line, using 
something that isn't an if...else structure.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/9-making-decisions-in-your-code--conditionals/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/9-making-decisions-in-your-code--conditionals/active_learning/">Visit website</a>
  </dd>
</dl>
