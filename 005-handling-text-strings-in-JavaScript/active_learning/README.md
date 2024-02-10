# Handling text -- strings in JavaScript

**Strings** are is what pieces of text are called in programming. We discuss
how to create strings, escape quotes in strings, and join strings together.

## The power of words

Since the Web is a largely text-based medium designed to allow humans to 
communicate and share information, it is useful for us to have control over 
the words that appear on it. **HTML** provides structure and meaning to our 
text, **CSS** allows us to precisely style it, and **JavaScript** contains a 
number of features for manipulating strings, creating custom welcome messages 
and prompts, showing the right text labels when needed, sorting terms into 
the desired order, and much more.

## Declaring strings

```js
const string = 'The revolution will not be televised.';
console.log(string);
```

Just like we did with numbers, we are declaring a variable, initializing it 
with a string value, and then returning the value. The only difference here 
is that when writing a string, you need to surround the value with quotes.

If you don't do this, or miss one of the quotes, you'll get an error. Try 
entering the following lines:

```js
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

These lines don't work because any text without quotes around it is assumed 
to be a variable name, property name, a reserved word, or similar. If the 
browser can't find it, then an error is raised (e.g. &quot;missing; before 
statement&quot;). If the browser can see where a string starts, but can't 
find the end of the string, as indicated by the 2nd quote, it complains with 
an error (with &quot;unterminated string literal&quot;). If your program is 
raising such errors, then go back and check all your strings to make sure you 
have no missing quote marks.

The following will work if you previously defined the variable `string` — try 
it now:

```js
const badString = string;
console.log(badString);
```

### Single quotes, double quotes, and backticks

In JavaScript, you can choose single quotes (`'`), double quotes (`&quot;`), 
or backticks (```) to wrap your strings in. All of the following will work:

```js
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

You must use the same character for the start and end of a string, or you 
will get an error:

```js
const badQuotes = 'This is not allowed!";
```

Strings declared using single quotes and strings declared using double 
quotes are the same, and which you use is down to personal preference — 
although it is good practice to choose one style and use it consistently in 
your code.

Strings declared using backticks are a special kind of string called a 
[template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). 
In most ways, template literals are like normal strings, but they have some 
special properties:

  - you can *embed JavaScript* in them
  - you can declare template literals over *multiple lines*

### Embedding JavaScript

Inside a template literal, you can wrap JavaScript variables or expressions 
inside `${ }`, and the result will be included in the string:

```js
const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting); // 'Hello, Chris'
```

You can use the same technique to join together two variables:

```
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // 'Hello, how are you?'
```

Joining strings together like this is called *concatenation*.

### Concatenation in context

Let's have a look at concatenation being used in action:

```js
const concatenationInContextButton = document.querySelector('.concatenation_in_context > button')

function greet() {
    const name = prompt('What is your name?');
    const greeting = document.querySelector('.concatenation_in_context > #greeting')
    greeting.textContent = `Hello ${name}, nice to see you!`
}

concatenationInContextButton.addEventListener('click', greet)
```

### Concatenation using &quot;+&quot;

You can only use `${}` with template literals, not with normal strings. 
You can concatenate normal strings using the `+` operator:

```js
const greeting = 'Hello';
const name = 'Peter';
console.log(greeting + ', ' + name); // 'Hello, Peter'
```

However, template literals usually give you more readable code:

```js
const greeting = 'Hello';
const name = 'Peter';
console.log(`${greeting}, ${name}`); // 'Hello, Peter'
```

## Including expressions in strings

You can include JavaScript expressions in template literals, as well as 
just variables, and the results will be included in the result:

```js
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output); // 'I like the song Fight the Youth. I gave it a score of 90%.'
```

## Multiline strings

Template literals respect the line breaks in the source code, so you can 
write strings that span multiple lines like this:

```
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

To have the equivalent output using a normal string you'd have to include 
line break characters (\n) in the string:

```js
const newline = 'One day you finally knew\nwhat you had to do, and began,';
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

See our [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 
reference page for more examples and details of advanced features.

## Including quotes in strings

Since we use quotes to indicate the start and end of strings, how can we 
include actual quotes in strings? We know that this won't work:

```js
const badQuotes = "She said "I think so!"";
```

One common option is to use one of the other characters to declare the string:

```js
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`
```

Another option is to escape the problem quotation mark. Escaping characters 
means that we do something to them to make sure they are recognized as text, 
not part of the code. In JavaScript, we do this by putting a backslash just 
before the character. Try this:

```js
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

You can use the same technique to insert other special characters. See 
[Escape sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) 
for more details.

## Numbers vs. strings

What happens when we try to concatenate a string and a number? Let's try it 
in our console:

```js
const name = 'Front ';
const number = 242;
console.log(name + number); // 'Front 242'
```

You might expect this to return an error, but it works just fine. How 
numbers should be displayed as strings is fairly well-defined, so the 
browser automatically converts the number to a string and concatenates the 
two strings.

If you have a numeric variable that you want to convert to a string, or a 
string variable that you want to convert to a number, you can use the 
following two constructs:

The `Number()` function converts anything passed to it into a number, if 
it can. Try the following:

```js
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);
// number
```

Conversely, the String() function converts its argument to a string. Try this:

```js
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string
```

These constructs can be really useful in some situations. For example, if 
a user enters a number into a form's text field, it's a string. However, if 
you want to add this number to something, you'll need it to be a number, so 
you could pass it through Number() to handle this. We did exactly this in our 
Number Guessing Game, in line 59.

## Conclusion

So that's the very basics of strings covered in JavaScript. In the next 
article, we'll build on this, looking at some of the built-in methods 
available to strings in JavaScript and how we can use them to manipulate 
our strings into just the form we want.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/005-handling-text-strings-in-JavaScript/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/005-handling-text-strings-in-JavaScript/active_learning/">Visit website</a>
  </dd>
</dl>
