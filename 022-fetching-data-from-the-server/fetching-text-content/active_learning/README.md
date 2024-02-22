# Fetching data from the server

Another very common task in modern websites and applications is retrieving 
individual data items from the server to update sections of a webpage without 
having to load an entire new page. This seemingly small detail has had a huge 
impact on the performance and behavior of sites, so in this article, we'll 
explain the concept and look at technologies that make it possible: in 
particular, the Fetch API.

## What is the problem here?

A web page consists of an HTML page and (usually) various other files, such 
as stylesheets, scripts, and images. The basic model of page loading on the 
Web is that your browser makes one or more HTTP requests to the server for 
the files needed to display the page, and the server responds with the 
requested files. If you visit another page, the browser requests the new 
files, and the server responds with them.

This model works perfectly well for many sites. But consider a website 
that's very data-driven. For example, a library website like the Vancouver 
Public Library. Among other things you could think of a site like this as a 
user interface to a database. It might let you search for a particular genre 
of book, or might show you recommendations for books you might like, based on 
books you've previously borrowed. When you do this, it needs to update the 
page with the new set of books to display. But note that most of the page 
content — including items like the page header, sidebar, and footer — stays 
the same.

The trouble with the traditional model here is that we'd have to fetch and 
load the entire page, even when we only need to update one part of it. This 
is inefficient and can result in a poor user experience.

So instead of the traditional model, many websites use JavaScript APIs to 
request data from the server and update the page content without a page load. 
So when the user searches for a new product, the browser only requests the 
data which is needed to update the page — the set of new books to display, 
for instance.

The main API here is the Fetch API. This enables JavaScript running in a page 
to make an HTTP request to a server to retrieve specific resources. When the 
server provides them, the JavaScript can use the data to update the page, 
typically by using DOM manipulation APIs. The data requested is often JSON, 
which is a good format for transferring structured data, but can also be HTML 
or just text.

This is a common pattern for data-driven sites such as Amazon, YouTube, eBay, 
and so on. With this model:

- Page updates are a lot quicker and you don't have to wait for the page to 
refresh, meaning that the site feels faster and more responsive.
- Less data is downloaded on each update, meaning less wasted bandwidth. This 
may not be such a big issue on a desktop on a broadband connection, but it's a 
major issue on mobile devices and in countries that don't have ubiquitous fast 
internet service.

>**Note**: In the early days, this general technique was known as Asynchronous 
JavaScript and XML (Ajax), because it tended to request XML data. This is 
normally not the case these days (you'd be more likely to request JSON), but 
the result is still the same, and the term 'Ajax' is still often used to 
describe the technique.

To speed things up even further, some sites also store assets and data on the 
user's computer when they are first requested, meaning that on subsequent 
visits they use the local versions instead of downloading fresh copies every 
time the page is first loaded. The content is only reloaded from the server 
when it has been updated.

## The Fetch API

Let's walk through a couple of examples of the Fetch API.

### Fetching text content

For this example, we'll request data out of a few different text files and 
use them to populate a content area.

This series of files will act as our fake database; in a real application, 
we'd be more likely to use a server-side language like PHP, Python, or Node 
to request our data from a database. Here, however, we want to keep it simple 
and concentrate on the client-side part of this.

First, the entry point to the Fetch API is a global function called `fetch()`, 
that takes the URL as a parameter (it takes another optional parameter for 
custom settings, but we're not using that here).

Next, `fetch()` is an asynchronous API which returns a Promise. If you don't 
know what that is, read the module on asynchronous JavaScript, and in 
particular the article on promises, then come back here. You'll find that 
article also talks about the `fetch()` API!

So because `fetch()` returns a promise, we pass a function into the `then()` 
method of the returned promise. This method will be called when the HTTP 
request has received a response from the server. In the handler, we check 
that the request succeeded, and throw an error if it didn't. Otherwise, we 
call `response.text()`, to get the response body as text.

It turns out that `response.text()` is also asynchronous, so we return the 
promise it returns, and pass a function into the `then()` method of this new 
promise. This function will be called when the response text is ready, and 
inside it we will update our &lt;pre&gt; block with the text.

Finally, we chain a `catch()` handler at the end, to catch any errors thrown 
in either of the asynchronous functions we called or their handlers.

One problem with the example as it stands is that it won't show any of the 
poem when it first loads. To fix this, add the following two lines at the 
bottom of your code (just above the closing &lt;/script&gt; tag) to load 
verse 1 by default, and make sure the &lt;select&gt; element always shows the 
correct value:

```js
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/022-fetching-data-from-the-server/fetching-text-content/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/022-fetching-data-from-the-server/fetching-text-content/active_learning">Visit website</a>
  </dd>
</dl>
