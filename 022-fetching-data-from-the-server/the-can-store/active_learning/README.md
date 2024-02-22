# The can store

In this example we have created a sample site called The Can Store — it's a 
fictional supermarket that only sells canned goods. 

By default, the site displays all the products, but you can use the form 
controls in the left-hand column to filter them by category, or search term, 
or both.

There is quite a lot of complex code that deals with filtering the products 
by category and search terms, manipulating strings so the data displays 
correctly in the UI, etc

The first block that uses Fetch can be found at the start of the JavaScript:

```js
fetch('products.json')
.then((response) => {
if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}
return response.json();
})
.then((json) => initialize(json))
.catch((err) => console.error(`Fetch problem: ${err.message}`));

```

The `fetch()` function returns a promise. If this completes successfully, the 
function inside the first `.then()` block contains the response returned from 
the network.

Inside this function we:

- check that the server didn't return an error (such as 404 Not Found). If 
it did, we throw the error.
- call `json()` on the response. This will retrieve the data as a JSON object. 
We return the promise returned by `response.json()`.

Next we pass a function into the then() method of that returned promise. 
This function will be passed an object containing the response data as JSON, 
which we pass into the initialize() function. This function which starts the 
process of displaying all the products in the user interface.

To handle errors, we chain a `.catch()` block onto the end of the chain. This 
runs if the promise fails for some reason. Inside it, we include a function 
that is passed as a parameter, an `err` object. This err object can be used to 
report the nature of the error that has occurred, in this case we do it with 
a simple `console.error()`.

To handle errors, we chain a `.catch()` block onto the end of the chain. 
This runs if the promise fails for some reason. Inside it, we include a 
function that is passed as a parameter, an err object. This err object can 
be used to report the nature of the error that has occurred, in this case 
we do it with a simple `console.error()`.

The second Fetch block can be found inside the `fetchBlob()` function:

```js
fetch(url)
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.blob();
})
.then((blob) => showProduct(blob, product))
.catch((err) => console.error(`Fetch problem: ${err.message}`));    
```

This works in much the same way as the previous one, except that instead of 
using `json()`, we use `blob()`. In this case we want to return our response 
as an image file, and the data format we use for that is Blob (the term is an 
abbreviation of 'Binary Large Object' and can basically be used to represent 
large file-like objects, such as images or video files).

Once we've successfully received our blob, we pass it into our 
`showProduct()` function, which displays it.

## The XMLHttpRequest API

Sometimes, especially in older code, you'll see another API called 
`XMLHttpRequest` (often abbreviated as 'XHR') used to make HTTP requests. 
This predated Fetch, and was really the first API widely used to implement 
AJAX. We recommend you use Fetch if you can: it's a simpler API and has 
more features than XMLHttpRequest. We won't go through an example that uses 
XMLHttpRequest, but we will show you what the XMLHttpRequest version of our 
first can store request would look like:

```js
const request = new XMLHttpRequest();

try {
  request.open('GET', 'products.json');

  request.responseType = 'json';

  request.addEventListener('load', () => initialize(request.response));
  request.addEventListener('error', () => console.error('XHR error'));

  request.send();
} catch (error) {
  console.error(`XHR error ${request.status}`);
}      
```

There are five stages to this:

  1. Create a new `XMLHttpRequest` object.
  1. Call its `open()` method to initialize it.
  1. Add an event listener to its load event, which fires when the response 
  has completed successfully. In the listener we call initialize() with 
  the data.
  1. Add an event listener to its error event, which fires when the request 
  encounters an error
  1. Send the request.

We also have to wrap the whole thing in the try...catch block, to handle 
any errors thrown by `open()` or `send()`.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/022-fetching-data-from-the-server/the-can-store/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/022-fetching-data-from-the-server/the-can-store/active_learning/">Visit website</a>
  </dd>
</dl>
