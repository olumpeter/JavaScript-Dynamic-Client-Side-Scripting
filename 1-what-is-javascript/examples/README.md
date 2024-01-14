# What is JavaScript?
      
HTML, CSS, and JavaScript build on top of one another nicely. HTML is used to 
mark up content such as a button to give it structure and purpose. CSS is added 
into the mix to get the content looking nice. Finally, some JavaScript is added
to implement dynamic behavior.

This example shows us that we can use JavaScript to:
- Store useful values inside variables. For example, we ask for a new name 
to be entered then store that name in a variable called `name`.
- Operate on pieces of text (known as "strings" in programming). 
For example, we take the string "Player 1: " and join it to the 
name variable to create the complete text label, e.g. "Player 1: Chris".
- Running code in response to certain events occurring on a web page. For 
example, we used a `click` event in our example above to detect when the 
label is clicked and then run the code that updates the text label.
- And much more!

## Script loading strategies

There are a number of issues involved with getting scripts to load at the 
right time. Nothing is as simple as it seems! A common problem is that all 
the HTML on a page is loaded in the order in which it appears. If you are 
using JavaScript to manipulate elements on the page (or more accurately, the 
[Document Object Model](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)), 
your code won't work if the JavaScript is loaded and parsed before the HTML 
you are trying to do something to.

To prevent this problem, you can add the following event listener,  which 
listens for the browser's `DOMContentLoaded` event, which signifies that 
the HTML body is completely loaded and parsed. The JavaScript inside this 
block will not run until after that event is fired, therefore the error is 
avoided.

```js
document.addEventListener("DOMContentLoaded", () => {
  // …
});      
```

However, we've used a more modern JavaScript feature to solve the problem, 
the `defer` attribute, which tells the browser to continue downloading the 
HTML content once the `<script&gt;` tag element has been reached.

```js
<script src="scripts/script.js" defer&gt;

</script&gt;
```

In this case both the script and the HTML will load simultaneously and the 
code will work.

>**Note**: The `defer` solution only works for external scripts. For the 
internal scripts, use the `DOMContentLoaded` option.

An old-fashioned solution to this problem used to be to put your script 
element right at the bottom of the body (e.g. just before the </body&gt; 
tag), so that it would load after all the HTML has been parsed. The problem 
with this solution is that loading/parsing of the script is completely 
blocked until the HTML DOM has been loaded. On larger sites with lots of 
JavaScript, this can cause a major performance issue, slowing down your site.

## async and defer

There are actually two modern features we can use to bypass the problem of 
the blocking script - `async` and `defer`. 

```html
<script async src="js/vendor/jquery.js"&gt;

</script&gt;

<script async src="js/script2.js"&gt;

</script&gt;

<script async src="js/script3.js"&gt;

</script&gt;
```

```html
<script defer  src="js/vendor/jquery.js"&gt;

</script&gt;

<script defer  src="js/script2.js"&gt;

</script&gt;

<script defer  src="js/script3.js"&gt;

</script&gt;
```

This is a summary of how they work:
- `async` and `defer` both instruct the browser to download the script(s) 
in a separate thread, while the rest of the page (the DOM, etc.) is 
downloading, so the page loading is not blocked during the fetch process.
- scripts with an `async` attribute will execute as soon as the download is 
complete. This blocks the page and does not guarantee any specific execution order.
- scripts with a `defer` attribute will load in the order they are in and will 
only execute once everything has finished loading.
- If your scripts should be run immediately and they don't have any 
dependencies, then use `async`.
- If your scripts need to wait for parsing and depend on other scripts and/or 
the DOM being in place, load them using defer and put their corresponding 
`<script&gt;` elements in the order you want the browser to execute them.

## JavaScript Comments

JavaScript comments are usually ignored by the browser, and exist to 
provide instructions to your fellow developers on how the code works (and 
you, if you come back to your code after six months and can't remember what 
you did). Comments are very useful, and you should use them often, 
particularly for larger applications. 

There are two types:
- A single line comment is written after a double forward slash (//), e.g.

```js
// I am a comment
```

A multi-line comment is written between the strings /* and */, e.g.

```js
/*
  I am also
  a comment
*/
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/1-what-is-javascript/examples/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/1-what-is-javascript/examples">Visit website</a>
  </dd>
</dl>
