# Looping code

Programming languages are very useful for rapidly completing repetitive tasks, 
from multiple basic calculations to just about any other situation where you've 
got a lot of similar items of work to complete. Here we'll look at the loop 
structures available in JavaScript that handle such needs.

## Why are loops useful?

Loops are all about doing the same thing over and over again. Often, the code 
will be slightly different each time round the loop, or the same code will run 
but with different variables.

### Looping code example

Suppose we wanted to draw 100 random circles on a &lt;canvas&gt; element.

## Looping through a collection

Most of the time when you use a loop, you will have a collection of items 
and want to do something with every item.

One type of collection is the `Array`, which we met in the Arrays chapter 
of this course. But there are other collections in JavaScript as well, 
including Set and Map.

### The `for...of` loop

The basic tool for looping through a collection is the `for...of` loop:

```js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}
```

In this example, `for (const cat of cats)` says:

  1. Given the collection cats, get the first item in the collection.
  1. Assign it to the variable cat and then run the code between the curly 
  braces {}.
  1. Get the next item, and repeat (2) until you've reached the end of the 
  collection.

### `map()` and `filter()`

JavaScript also has more specialized loops for collections, and we'll mention 
two of them here.

You can use `map()` to do something to each item in a collection and create a 
new collection containing the changed items:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = [lLeopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ 'LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION' ]
```

Here we pass a function into `cats.map()`, and `map()` calls the function 
once for each item in the array, passing in the item. It then adds the 
return value from each function call to a new array, and finally returns the 
new array. In this case the function we provide converts the item to 
uppercase, so the resulting array contains all our cats in uppercase:

You can use `filter()` to test each item in a collection, and create a new 
collection containing only items that match:

```js
function lCat(cat) {
  return cat.startsWith('L');
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ 'Leopard', 'Lion' ]
```

This looks a lot like `map()`, except the function we pass in returns a 
boolean: if it returns true, then the item is included in the new array. Our 
function tests that the item starts with the letter 'L', so the result is an 
array containing only cats whose names start with 'L':

Note that `map()` and `filter()` are both often used with function 
expressions, which we will learn about in the Functions module. Using 
function expressions we could rewrite the example above to be much more 
compact:

```js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ 'Leopard', 'Lion' ]
```

## The standard for loop

```js
for (initializer; condition; final-expression) {
  // code to run
}
```

Here we have:

1. The keyword `for`, followed by some parentheses.
1. Inside the parentheses we have three items, separated by semicolons:
  i.  An **initializer** — this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable.
  i. A **condition** — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.
  i. A **final-expression** — this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.
3. Some curly braces that contain a block of code — this code will be run each time the loop iterates.

### Calculating squares

Let's look at a real example so we can visualize what these do more clearly.

### Looping through collections with a for loop

You can use a `for` loop to iterate through a collection, instead of a `for...of` 
loop.

Let's look again at our `for...of` example above:

```js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}
```

We could rewrite that code like this:

```js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

In this loop we're starting `i` at `0`, and stopping when i reaches the 
length of the array. Then inside the loop, we're using `i` to access each item 
in the array in turn.

This works just fine, and in early versions of JavaScript, `for...of` didn't 
exist, so this was the standard way to iterate through an array. However, it 
offers more chances to introduce bugs into your code. For example:

  - you might start `i` at `1`, forgetting that the first array index is zero, 
  not 1.
  - you might stop at `i <= cats.length`, forgetting that the last array index 
  is at length - 1.

For reasons like this, it's usually best to use `for...of` if you can.

Sometimes you still need to use a `for` loop to iterate through an array. For 
example, in the code below we want to log a message listing our cats:

```js
const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // 'My cats are called Pete, Biggles, Jasmine, '
```

The final output sentence isn't very well-formed:

```
My cats are called Pete, Biggles, Jasmine,
```

We'd prefer it to handle the last cat differently, like this:

```
My cats are called Pete, Biggles, and Jasmine.
```

But to do this we need to know when we are on the final loop iteration, and 
to do that we can use a `for` loop and examine the value of `i`.

```js
const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // 'My cats are called Pete, Biggles, and Jasmine.'
```

## Exiting loops with break

If you want to exit a loop before all the iterations have been completed, you 
can use the `break` statement. We already met this in the previous article when 
we looked at switch statements — when a case is met in a switch statement that 
matches the input expression, the break statement immediately exits the switch 
statement and moves on to the code after it.

It's the same with loops — a `break` statement will immediately exit the loop 
and make the browser move on to any code that follows it.

Say we wanted to search through an array of contacts and telephone numbers and 
return just the number we wanted to find? First, some simple HTML — a text 
&lt;input&gt; allowing us to enter a name to search for, a &lt;button&gt; 
element to submit a search, and a &lt;p&gt; element to display the results in:

## Skipping iterations with continue

The `continue` statement works similarly to `break`, but instead of breaking 
out of the loop entirely, it skips to the next iteration of the loop. Let's look 
at another example that takes a number as an input, and returns only the 
numbers that are squares of integers (whole numbers).

## while and do...while

`for` is not the only type of loop available in JavaScript. There are 
actually many others and, while you don't need to understand all of these now, 
it is worth having a look at the structure of a couple of others so that you 
can recognize the same features at work in a slightly different way.

First, let's have a look at the while loop. This loop's syntax looks like so:

```js
initializer
while (condition) {
  // code to run

  final-expression
}
```

This works in a very similar way to the `for` loop, except that the 
initializer variable is set before the loop, and the final-expression is 
included inside the loop after the code to run, rather than these two items 
being included inside the parentheses. The condition is included inside the 
parentheses, which are preceded by the `while` keyword rather than `for`.

The same three items are still present, and they are still defined in the same order as they are in the for loop. This is because you must have an initializer defined before you can check whether or not the condition is true. The final-expression is then run after the code inside the loop has run (an iteration has been completed), which will only happen if the condition is still true.

Let's have a look again at our cats list example, but rewritten to use a 
while loop:

>**Warning:** With `while` and `do...while` — as with all loops — you must 
make sure that the initializer is incremented or, depending on the case, 
decremented, so the condition eventually becomes false. If not, the loop will 
go on forever, and either the browser will force it to stop, or it will crash. 
This is called an infinite loop.

## Active learning: Launch countdown

In this exercise, we want you to print out a simple launch countdown to the 
output box, from 10 down to Blastoff. Specifically, we want you to:

- Loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
- For each iteration, create a new paragraph and append it to the output 
&lt;div&gt;, which we've selected using `const output = document.querySelector('.output');`. 
In comments, we've provided you with three code lines that need to be used 
somewhere inside the loop:

  - const para = document.createElement('p'); — creates a new paragraph.
  - output.appendChild(para); — appends the paragraph to the output &lt;div&gt;.
  - para.textContent = — makes the text inside the paragraph equal to whatever 
  you put on the right-hand side, after the equals sign.

Different iteration numbers require different text to be put in the 
paragraph for that iteration (you'll need a conditional statement and multiple 
para.textContent = lines):

  - If the number is 10, print 'Countdown 10' to the paragraph.
  - If the number is 0, print 'Blast off!' to the paragraph.
  - For any other number, print just the number to the paragraph.

Remember to include an iterator! However, in this example we are counting down 
after each iteration, not up, so you **don't** want `i++` — how do you iterate 
downwards?

>**Note** If you start typing the loop (for example (while(i>=0)), the browser 
might get stuck because you have not yet entered the end condition. So be 
careful with this. You can start writing your code in a comment to deal with 
this issue and remove the comment after you finish.

## Active learning: Filling in a guest list

In this exercise, we want you to take a list of names stored in an array 
and put them into a guest list. But it's not quite that easy — we don't want 
to let Phil and Lola in because they are greedy and rude, and always eat all 
the food! We have two lists, one for guests to admit, and one for guests to 
refuse.

Specifically, we want you to:

  - Write a loop that will iterate through the `people` array.
  - During each loop iteration, check if the current array item is equal to 
  'Phil' or 'Lola' using a conditional statement:
    - If it is, concatenate the array item to the end of the `refused` 
    paragraph\'s `textContent`, followed by a comma and a space.
    - If it isn\'t, concatenate the array item to the end of the `admitted` 
    paragraph\'s textContent, followed by a comma and a space.

We've already provided you with:

  - `refused.textContent +=` — the beginnings of a line that will concatenate 
  something at the end of `refused.textContent`.
  - `admitted.textContent +=` — the beginnings of a line that will concatenate 
  something at the end of admitted.textContent.

Extra bonus question — after completing the above tasks successfully, you will 
be left with two lists of names, separated by commas, but they will be untidy — 
there will be a comma at the end of each one. Can you work out how to write 
lines that slice the last comma off in each case, and add a full stop to the 
end? Have a look at the Useful string methods article for help.

## Which loop type should you use?

If you're iterating through an array or some other object that supports it, 
and don't need access to the index position of each item, then `for...of` is 
the best choice. It's easier to read and there's less to go wrong.

For other uses, `for`, `while`, and `do...while` loops are largely 
interchangeable. They can all be used to solve the same problems, and which 
one you use will largely depend on your personal preference — which one you 
find easiest to remember or most intuitive. We would recommend for, at least 
to begin with, as it is probably the easiest for remembering everything — the 
initializer, condition, and final-expression all have to go neatly into the 
parentheses, so it is easy to see where they are and check that you aren't 
missing them.

First `for...of`:

```js
for (const item of array) {
  // code to run
}
```

while:

```js
initializer
while (condition) {
  // code to run

  final-expression
}
```

and finally `do...while`:

```js
initializer
do {
  // code to run

  final-expression
} while (condition)
```

>**Note**: There are other loop types/features too, which are useful in 
advanced/specialized situations and beyond the scope of this article. If you 
want to go further with your loop learning, read our advanced Loops and 
iteration guide.

## Test your skills: Loops

You've reached the end of this article, but can you remember the most 
important information? You can find some further tests to verify that you've 
retained this information before you move on — see Test your skills: Loops.

### Task 1

In our first looping task we want you to start by creating a simple loop 
that goes through all the items in the provided `myArray` and prints them out 
on the screen inside list items (i.e., &lt;li&gt; elements), which are 
appended to the provided `list`.

In our first looping task we want you start by creating a simple `for...of` 
loop that goes through all the items in the provided `myArray` and prints 
them out on the screen inside list items, which are appended to the provided 
list.

Note that using a `for()` loop would also be acceptable, as would a different 
loop structure such as `while()`.

The finished code should look something like this:

```js
const myArrayTask1 = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const listTask1 = document.createElement('ul');

// Add your code here
for (const myItem of myArrayTask1) {
    const listItemTask1 = document.createElement('li');
    listItemTask1.textContent = myItem;
    listTask1.appendChild(listItemTask1);
}

// Don't edit the code below here!

const task1DIv = document.querySelector('.test_your_skills_loops .task1');
task1DIv.appendChild(listTask1);
```

### Task 2

In this next task, we want you to write a simple program that, given a name, 
searches an array of objects containing names and phone numbers (phonebook) 
and, if it finds the name, outputs the name and phone number into the 
paragraph (para) and then exits the loop before it has run its course.

If you haven't read about objects yet, don't worry! For now, all you need to 
know is how to access a member-value pair. You can read up on objects in the 
JavaScript object basics tutorial.

You are given three variables to begin with:

name — contains a name to search for
para — contains a reference to a paragraph, which will be used to report the results
phonebook - contains the phonebook entries to search.

You should use a type of loop that you've not used in the previous task.

In this next task, we want you to write a simple program that, given a name, 
searches an array of objects containing names and emails (phonebook) and, if 
it finds the name, outputs the name and phone number and then uses break to 
exit the loop.

If the name is not found, it lets the user know.

You should use a type of loop that you've not used in the previous task.

The finished code should look something like this:

```js
const searchNameTask2 = 'Mustafa';
const paragraphTask2 = document.createElement('p');

const phonebookTask2 = [
    { name: 'Chris', number: '1549' },
    { name: 'Li Kang', number: '9634' },
    { name: 'Anne', number: '9065' },
    { name: 'Francesca', number: '3001' },
    { name: 'Mustafa', number: '6888' },
    { name: 'Tina', number: '4312' },
    { name: 'Bert', number: '7780' },
    { name: 'Jada', number: '2282' },
];

// Add your code here

for (i = 0; i < phonebookTask2.length; i++) {
    if (String(phonebookTask2[i]['name']).toLowerCase() === String(searchNameTask2).toLowerCase()) {
        paragraphTask2.textContent = `${searchNameTask2}'s phone number is ${phonebookTask2[i]['number']}.`;
        break;
    }

    if (i === phonebookTask2.length - 1) {
        paragraphTask2.textContent = 'Name not found in the phonebook'
    }
}

// Don't edit the code below here!
const task2DIv = document.querySelector('.test_your_skills_loops .task2');
task2DIv.appendChild(paragraphTask2);
```

### Task 3

In this final task, you are provided with the following:

- `i` — starts off with a value of 500; intended to be used as an iterator.
- `para` — contains a reference to a paragraph, which will be used to report 
the results.
`isPrime()` — a function that, when passed a number, returns `true` if the number 
is a prime number, and `false` if not.

You need to use a loop to go through the numbers 2 to 500 backwards (1 is not 
counted as a prime number), and run the provided isPrime() function on them. 
For each number that isn't a prime number, continue on to the next loop 
iteration. For each one that is a prime number, add it to the paragraph's 
textContent along with some kind of separator.

You should use a type of loop that you've not used in the previous two tasks.

Finally, you'll need to use a loop to go through the numbers 1 to 500, 
backwards, and run the `isPrime()` function on them. For each number that isn't 
a prime number, use the continue keyword to move on to the next loop iteration. 
For each one that is a prime number, add it to the paragraph's textContent.

You should use a type of loop that you've not used in the previous two tasks.

The code should look something like this:

## Conclusion

This article has revealed to you the basic concepts behind, and different 
options available when looping code in JavaScript. You should now be clear 
on why loops are a good mechanism for dealing with repetitive code and raring 
to use them in your own examples!

If there is anything you didn't understand, feel free to read through the 
article again, or contact us to ask for help.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/010-looping-code/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/010-looping-code/active_learning/">Visit website</a>
  </dd>
</dl>
