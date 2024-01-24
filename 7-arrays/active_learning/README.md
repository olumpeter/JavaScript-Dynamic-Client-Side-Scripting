# Arrays

Arrays is a neat way of storing a list of data items under a single name.  Here 
we look at why this is useful, then explore how to create an array, retrieve, 
add, and remove items stored in an array, and more besides.

## What is an array?

Arrays are generally described as &quot;list-like objects&quot;; they are 
basically single objects that contain multiple values stored in a list. Array 
objects can be stored in variables and dealt with in much the same way as any 
other type of value, the difference being that we can access each value inside 
the list individually, and do super useful and efficient things with the list, 
like loop through it and do the same thing to every value. Maybe we've got a 
series of product items and their prices stored in an array, and we want to loop 
through them all and print them out on an invoice, while totaling all the prices 
together and printing out the total price at the bottom.

If we didn't have arrays, we'd have to store every item in a separate variable, 
then call the code that does the printing and adding separately for each item. 
This would be much longer to write out, less efficient, and more error-prone. If 
we had 10 items to add to the invoice it would already be annoying, but what 
about 100 items, or 1000? We'll return to this example later on in the article.

## Creating arrays

Arrays consist of square brackets and items that are separated by commas.

1. Suppose we want to store a shopping list in an array. Paste the following 
code into the console:

```js
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);
```

1. In the above example, each item is a string, but in an array we can store 
various data types — strings, numbers, objects, and even other arrays. We can 
also mix data types in a single array — we do not have to limit ourselves to 
storing only numbers in one array, and in another only strings. For example:

```js
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2]];
```

1. Before proceeding, create a few example arrays.

## Finding the length of an array

You can find out the length of an array (how many items are in it) in exactly 
the same way as you find out the length (in characters) of a string — by using 
the length property. Try the following:

```js
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping.length); // 5
```

## Accessing and modifying array items

Items in an array are numbered, starting from zero. This number is called the '
item's index. So the first item has index 0, the second has index 1, and so on. 
You can access individual items in the array using bracket notation and supplying 
the item's index, in the same way that you accessed the letters in a string.

1. Enter the following into your console:

```js
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]);
// returns 'bread'
```

1. You can also modify an item in an array by giving a single array item a new 
value. Try this:

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini';
console.log(shopping);
// shopping will now return [ 'tahini', 'milk', 'cheese', 'hummus', 'noodles' ]

**Note:** We've said it before, but just as a reminder — computers start 
counting from 0!

1. Note that an array inside an array is called a multidimensional array. You 
can access an item inside an array that is itself inside another array by 
chaining two sets of square brackets together. For example, to access one of the 
items inside the array that is the third item inside the random array 
(see previous section), we could do something like this:

```js
const random = ['tree', 795, [0, 1, 2]];
random[2][2];
```

1. Try making some more modifications to your array examples before moving on. 
Play around a bit, and see what works and what doesn't.

```js
Try making some more modifications to your array examples before moving on. Play 
around a bit, and see what works and what doesn't.
```

## Finding the index of items in an array

If you don't know the index of an item, you can use the `indexOf()` method. The 
`indexOf()` method takes an item as an argument and will either return the item's 
index or `-1` if the item is not in the array:

```js
const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl')); //  2
console.log(birds.indexOf('Rabbit')); // -1
```

## Adding items

To add one or more items to the end of an array we can use `push()`. Note that 
you need to include one or more items that you want to add to the end of your array.

```js
const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities); // [ 'Manchester', 'Liverpool', 'Cardiff' ]
cities.push('Bradford', 'Brighton');
console.log(cities); // [ 'Manchester', 'Liverpool', 'Cardiff', 'Bradford', 'Brighton' ]
```

The new length of the array is returned when the method call completes. If you 
wanted to store the new array length in a variable, you could do something like this:

```js
const cities = ['Manchester', 'Liverpool'];
const newLength = cities.push('Bristol');
console.log(cities); // [ 'Manchester', 'Liverpool', 'Bristol' ]
console.log(newLength); // 3
```

## To add an item to the start of the array, use `unshift()`:

```js
const cities = ['Manchester', 'Liverpool'];
cities.unshift('Edinburgh');
console.log(cities); // [ 'Edinburgh', 'Manchester', 'Liverpool' ]
```

## Removing items

To remove the last item from the array, use `pop()`.

```js
const cities = ['Manchester', 'Liverpool'];
cities.pop();
console.log(cities); // [ 'Manchester' ]
```

The `pop()` method returns the item that was removed. To save that item in a 
new variable, you could do this:

```js
const cities = ['Manchester', 'Liverpool'];
const removedCity = cities.pop();
console.log(removedCity); // 'Liverpool'
```

To remove the first item from an array, use `shift()`:

```js
const cities = ['Manchester', 'Liverpool'];
cities.shift();
console.log(cities); // [ 'Liverpool' ]
```

If you know the index of an item, you can remove it from the array using `splice()`:

```js
const cities = [ 'Manchester', 'Liverpool', 'Edinburgh', 'Carlisle' ];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ 'Manchester', 'Edinburgh', 'Carlisle' ]
```

## Accessing every item

Very often you will want to access every item in the array. You can do this '
using the `for...of` statement:

```js
const birds = [ 'Parrot', 'Falcon', 'Owl' ];

for (const bird of birds) {
  console.log(bird);
}
```

Sometimes you will want to do the same thing to each item in an array, 
leaving you with an array containing the changed items. You can do this 
using `map()`. The code below takes an array of numbers and doubles each 
number:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

We give a function to the `map()`, and `map()` calls the function once for 
each item in the array, passing in the item. It then adds the return value 
from each function call to a new array, and finally returns the new array.

Sometimes you'll want to create a new array containing only the items in the 
original array that match some test. You can do that using `filter()`. The code 
below takes an array of strings and returns an array containing just the 
strings that are greater than 8 characters long:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities.filter(isLong);
console.log(longer); // [ 'Liverpool', 'Edinburgh' ]
```

Like `map()`, we give a function to the `filter()` method, and `filter()` 
calls this function for every item in the array, passing in the item. If the 
function returns `true`, then the item is added to a new array. Finally it returns 
the new array.

## Converting between strings and arrays

Often you'll be presented with some raw data contained in a big long 
string, and you might want to separate the useful items out into a more 
useful form and then do things to them, like display them in a data table. 
To do this, we can use the `split()` method. In its simplest form, this 
takes a single parameter, the character you want to separate the string at, 
and returns the substrings between the separator as items in an array.

>**Note:** Okay, this is technically a string method, not an array method, but 
we've put it in with arrays as it goes well here.

1. Let's play with this, to see how it works. First, create a string in 
your console:

```js
const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
```

1. Now let's split it at each comma:

```js
const cities = data.split(',');
cities;
```

1. You can also go the opposite way using the `join()` method. Try the 
following:

```js
const commaSeparated = cities.join(',');
commaSeparated;
```

1. Another way of converting an array to a string is to use the `toString()` 
method. `toString()` is arguably simpler than `join()` as it doesn't take 
a parameter, but more limiting. With join() you can specify different separators, 
whereas `toString()` always uses a comma. (Try running Step 4 with a different 
character than a comma.)

```js
const dogNames = [ 'Rocket', 'Flash', 'Bella', 'Slugger' ];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
```

# Active learning: Printing those products

Let's return to the example we described earlier — printing out product 
names and prices on an invoice, then totaling the prices and printing them 
at the bottom. — each of these marks a place where you have to add something 
to the code. They are as follows:

  1. Below the `// number 1` comment are a number of strings, each one 
  containing a product name and price separated by a colon. We'd like you 
  to turn this into an array and store it in an array called products.
  1. Below the `// number 2` comment, start a `for...of()` loop to go through 
  every item in the products array.
  1. Below the `// number 3` comment we want you to write a line of code 
  that splits the current array item (`name:price`) into two separate items, 
  one containing just the name and one containing just the price. If you are 
  not sure how to do this, consult the Useful string methods article for some 
  help, or even better, look at the Converting between strings and arrays 
  section of this article.
  1. As part of the above line of code, you'll also want to convert the price 
  from a string to a number. If you can't remember how to do this, check out t
  he first strings article.
  1. There is a variable called total that is created and given a value of 0 
  at the top of the code. Inside the loop (below `// number 4`) we want you to 
  add a line that adds the current item price to that total in each iteration 
  of the loop, so that at the end of the code the correct total is printed onto 
  the invoice. You might need an assignment operator to do this.
  1. We want you to change the line just below `// number 5` so that the 
  itemText variable is made equal to 'current item name — $current item price', 
  for example 'Shoes — $23.99' in each case, so the correct information for 
  each item is printed on the invoice. This is just simple string concatenation, 
  which should be familiar to you.
  1. Finally, below the '// number 6' comment, you'll need to add a `}` to 
  mark the end of the 'for...of()` loop.

## Active learning: Top 5 searches

A good use for array methods like `push()` and `pop()` is when you are 
maintaining a record of currently active items in a web app. In an animated 
scene for example, you might have an array of objects representing the 
background graphics currently displayed, and you might only want 50 
displayed at once, for performance or clutter reasons. As new objects are 
created and added to the array, older ones can be deleted from the array to 
maintain the desired number.

In this example we're going to show a much simpler use — here we're giving 
you a fake search site, with a search box. The idea is that when terms are 
entered in the search box, the top 5 previous search terms are displayed 
in the list. When the number of terms goes over 5, the last term starts 
being deleted each time a new term is added to the top, so the 5 previous 
terms are always displayed.

>**Note**: In a real search app, you'd probably be able to click the 
previous search terms to return to previous searches, and it would display 
actual search results! We are just keeping it simple for now.

To complete the app, we need you to:

- Add a line below the `// number 1` comment that adds the current value 
entered into the search input to the start of the array. This can be 
retrieved using `searchInput.value`.
- Add a line below the `// number 2` comment that removes the value currently 
at the end of the array.

## Test your skills: Arrays

### Task 1

We'll start off simple; the first thing you need to do here is create an 
array of three items. Choose whatever items you like — your favourite bands 
or foods, perhaps? Store in a variable called myArray.

Next, modify the first two items in the array to some different items, 
using simple bracket notation, e.g. myArray[0] = 'pizza'.

Last of all, add an item to the start of the array using .unshift().

The answer should look something like this:

```js
// Create an array of three items, stored inside a variable called myArrayTask1
const myArrayTask1 = [ 'Bananas', 'Apples', 'Oranges' ]

// modify the first two items in the array using simple bracket notation and assignment.
myArrayTask1[0] = 'Melons'
myArrayTask1[1] = 'Grapes'

// add a new item to the beginning of the array.
myArrayTask1.unshift('Pineapple')
```

### Task 2

Moving on, the next task provides a string for you to work on.

Here you are expected to start by splitting the string into an array using 
`.split('+')`. Store the array in `myArrayTask2`.

Next, store the length of the array (`myArrayTask2.length`) in a variable 
called `arrayLengthTask2`.

Last up, retrieve the last item in the array with 
`myArrayTask2[arrayLengthTask2 - 1];` store it in lastItemTask2.

The example should look something like this:

```js
const myStringTask2 = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// Convert the string into an array, removing the + characters in the process. 
// Save the result in a variable called myArrayTask2.
const myArrayTask2 = myStringTask2.split('+')

// Store the length of the array in a variable called arrayLengthTask2.
const arrayLengthTask2 = myArrayTask2.length

// Store the last item in the array in a variable called lastItemTask1.
const lastItemTask2 = myArrayTask2[arrayLengthTask2-1]
```

### Task 3

For this array task, we provide you with a starting array, and you will 
work in somewhat the opposite direction. You need to:

1. Remove the last item in the array.
1. Add two new names to the end of the array.
1. Go over each item in the array and add its index number after the name 
inside parentheses, for example `Ryu (0)`. Note that we don't teach how to 
do this in the Arrays article, so you'll have to do some research.
1. Finally, join the array items together in a single string called `myString`, 
with a separator of '-'.

You should start by popping the last item off the array using `myArray.pop()`.

Next, add two new names to the end of the array using `myArray.push()`

For an added challenge, you'll need to use  `.forEach()` or some kind of 
loop (we didn't cover these in the array article, so look them up) to go 
over each item in the array and add its index number after the name inside 
parentheses. Note that when using `forEach` you are performing operations on 
a copy of the array elements, not the array elements themselves, so you 
can't change them directly — you have to create the new array item and copy 
it back over.

Finally you need to stitch the array items together into a string using 
`myArray.join(' - ')`, and store the result in `myString`.

### Task 4

For this array task, we provide you with a starting array listing the names 
of some birds.

- Find the index of the 'Eagles' item, and use that to remove the 'Eagles' item.
- Make a new array from this one, called eBirds, that contains only birds from 
the original array whose names begin with the letter 'E'. Note that 
`startsWith()` is a great way to check whether a string starts with a given character.
If it works, you should see 'Emus,Egrets' appear in the page.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/7-arrays/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/7-arrays/active_learning/">Visit website</a>
  </dd>
</dl>
