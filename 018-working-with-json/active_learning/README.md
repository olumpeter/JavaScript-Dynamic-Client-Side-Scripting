# Working with JSON

JavaScript Object Notation (JSON) is a standard text-based format for 
representing structured data based on JavaScript object syntax. It is 
commonly used for transmitting data in web applications (e.g., sending some 
data from the server to the client, so it can be displayed on a web page, or 
vice versa). You'll come across it quite often, so in this article, we give 
you all you need to work with JSON using JavaScript, including parsing JSON 
so you can access data within it, and creating JSON.

## No, really, what is JSON?

JSON is a text-based data format following JavaScript object syntax, which 
was popularized by Douglas Crockford. Even though it closely resembles 
JavaScript object literal syntax, it can be used independently from JavaScript, 
and many programming environments feature the ability to read (parse) and 
generate JSON.

JSON exists as a string — useful when you want to transmit data across a 
network. It needs to be converted to a native JavaScript object when you 
want to access the data. This is not a big issue — JavaScript provides a 
global JSON object that has methods available for converting between the two.

>**Note**: Converting a string to a native object is called *deserialization*, 
while converting a native object to a string so it can be transmitted across 
the network is called *serialization*.

A JSON string can be stored in its own file, which is basically just a text 
file with an extension of `.json`, and a MIME type of `application/json`.

### JSON structure

As described above, JSON is a string whose format very much resembles 
JavaScript object literal format. You can include the same basic data types 
inside JSON as you can in a standard JavaScript object — strings, numbers, 
arrays, booleans, and other object literals. This allows you to construct a 
data hierarchy, like so:

```json
{
  &quot;squadName&quot;: &quot;Super hero squad&quot;,
  &quot;homeTown&quot;: &quot;Metro City&quot;,
  &quot;formed&quot;: 2016,
  &quot;secretBase&quot;: &quot;Super tower&quot;,
  &quot;active&quot;: true,
  &quot;members&quot;: [
    {
      &quot;name&quot;: &quot;Molecule Man&quot;,
      &quot;age&quot;: 29,
      &quot;secretIdentity&quot;: &quot;Dan Jukes&quot;,
      &quot;powers&quot;: [&quot;Radiation resistance&quot;, &quot;Turning tiny&quot;, &quot;Radiation blast&quot;]
    },
    {
      &quot;name&quot;: &quot;Madame Uppercut&quot;,
      &quot;age&quot;: 39,
      &quot;secretIdentity&quot;: &quot;Jane Wilson&quot;,
      &quot;powers&quot;: [
        &quot;Million tonne punch&quot;,
        &quot;Damage resistance&quot;,
        &quot;Superhuman reflexes&quot;
      ]
    },
    {
      &quot;name&quot;: &quot;Eternal Flame&quot;,
      &quot;age&quot;: 1000000,
      &quot;secretIdentity&quot;: &quot;Unknown&quot;,
      &quot;powers&quot;: [
        &quot;Immortality&quot;,
        &quot;Heat Immunity&quot;,
        &quot;Inferno&quot;,
        &quot;Teleportation&quot;,
        &quot;Interdimensional travel&quot;
      ]
    }
  ]
}
```

If we loaded this string into a JavaScript program and parsed it into a 
variable called superHeroes for example, we could then access the data 
inside it using the same dot/bracket notation we looked at in the JavaScript 
object basics article. For example:

```js
superHeroes.homeTown;
superHeroes['active'];
```

To access data further down the hierarchy, you have to chain the required 
property names and array indexes together. For example, to access the third 
superpower of the second hero listed in the members list, you'd do this:

```js
superHeroes['members'][1]['powers'][2];
```

1. First, we have the variable name — `superHeroes`.
1. Inside that, we want to access the members property, so we use ['members'].
1. members contains an array populated by objects. We want to access the 
second object inside the array, so we use [1].
1. Inside this object, we want to access the powers property, so we use ['powers'].
1. Inside the powers property is an array containing the selected hero's superpowers. 
We want the third one, so we use [2].

### Arrays as JSON

Above we mentioned that JSON text basically looks like a JavaScript object 
inside a string. We can also convert arrays to/from JSON. Below is also valid 
JSON, for example:

```json
[
  {
    &quot;name&quot;: &quot;Molecule Man&quot;,
    &quot;age&quot;: 29,
    &quot;secretIdentity&quot;: &quot;Dan Jukes&quot;,
    &quot;powers&quot;: [&quot;Radiation resistance&quot;, &quot;Turning tiny&quot;, &quot;Radiation blast&quot;]
  },
  {
    &quot;name&quot;: &quot;Madame Uppercut&quot;,
    &quot;age&quot;: 39,
    &quot;secretIdentity&quot;: &quot;Jane Wilson&quot;,
    &quot;powers&quot;: [
      &quot;Million tonne punch&quot;,
      &quot;Damage resistance&quot;,
      &quot;Superhuman reflexes&quot;
    ]
  }
]  
```

The above is perfectly valid JSON. You'd just have to access array items 
(in its parsed version) by starting with an array index, for example [0]['powers'][0].

## Other notes

- JSON is purely a string with a specified data format — it contains only 
properties, no methods.
- JSON requires double quotes to be used around strings and property names. 
Single quotes are not valid other than surrounding the entire JSON string.
- Even a single misplaced comma or colon can cause a JSON file to go wrong, 
and not work. You should be careful to validate any data you are attempting 
to use (although computer-generated JSON is less likely to include errors, 
as long as the generator program is working correctly). You can validate 
JSON using an application like [JSONLint](https://jsonlint.com/).
- JSON can actually take the form of any data type that is valid for 
inclusion inside JSON, not just arrays or objects. So for example, a single 
string or number would be valid JSON.
- Unlike in JavaScript code in which object properties may be unquoted, in 
JSON only quoted strings may be used as properties.

## Active learning: Working through a JSON example

So, let's work through an example to show how we could make use of some 
JSON formatted data on a website.

## Converting between objects and text

The above example was simple in terms of accessing the JavaScript object, 
because we converted the network response directly into a JavaScript object 
using `response.json()`.

But sometimes we aren't so lucky — sometimes we receive a raw JSON string, 
and we need to convert it to an object ourselves. And when we want to send a 
JavaScript object across the network, we need to convert it to JSON (a string) 
before sending it. Luckily, these two problems are so common in web 
development that a built-in JSON object is available in browsers, which 
contains the following two methods:

- parse(): Accepts a JSON string as a parameter, and returns the corresponding 
JavaScript object.
- stringify(): Accepts an object as a parameter, and returns the equivalent 
JSON string.

As you might guess, `stringify()` works the opposite way. Try entering the 
following lines into your browser's JavaScript console one by one to see it 
in action:

```js
let myObj = { name: 'Chris', age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Here we're creating a JavaScript object, then checking what it contains, 
then converting it to a JSON string using stringify() — saving the return 
value in a new variable — then checking it again.

## Test your skills: JSON.

## Summary

In this article, we've given you a simple guide to using JSON in your 
programs, including how to create and parse JSON, and how to access data 
locked inside it. In the next article, we'll begin looking at object-oriented 
JavaScript.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/017-classes-in-javascript/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/017-classes-in-javascript/active_learning/">Visit website</a>
  </dd>
</dl>
