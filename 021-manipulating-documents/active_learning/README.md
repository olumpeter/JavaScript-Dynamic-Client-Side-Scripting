# Manipulating documents

When writing web pages and apps, one of the most common things you'll want 
to do is manipulate the document structure in some way. This is usually done 
by using the Document Object Model (DOM), a set of APIs for controlling HTML 
and styling information that makes heavy use of the Document object.  In this 
article we'll look at how to use the DOM in detail, along with some other 
interesting APIs that can alter your environment in interesting ways.

## The important parts of a web browser

Web browsers are very complicated pieces of software with a lot of moving 
parts, many of which can't be controlled or manipulated by a web developer 
using JavaScript. You might think that such limitations are a bad thing, but 
browsers are locked down for good reasons, mostly centering around security. 
Imagine if a website could get access to your stored passwords or other 
sensitive information, and log into websites as if it were you? 

Despite the limitations, Web APIs still give us access to a lot of 
functionality that enable us to do a great many things with web pages. There 
are a few really obvious bits you'll reference regularly in your code which 
represents the main parts of a browser directly involved in viewing web pages:

- The window is the browser tab that a web page is loaded into; this is 
represented in JavaScript by the `Window` object. Using methods available on 
this object you can do things like return the window's size (see `Window.innerWidth` 
and `Window.innerHeight`), manipulate the document loaded into that window, 
store data specific to that document on the client-side (for example using a 
local database or other storage mechanism), attach an event handler to the 
current window, and more.
- The navigator represents the state and identity of the browser (i.e. the 
user-agent) as it exists on the web. In JavaScript, this is represented by 
the `Navigator object`. You can use this object to retrieve things like the 
user's preferred language, a media stream from the user's webcam, etc.
- The document (represented by the DOM in browsers) is the actual page loaded 
into the window, and is represented in JavaScript by the `Document` object. 
You can use this object to return and manipulate information on the HTML and 
CSS that comprises the document, for example get a reference to an element in 
the DOM, change its text content, apply new styles to it, create new elements 
and add them to the current element as children, or even delete it altogether.

In this article we'll focus mostly on manipulating the document, but we'll 
show a few other useful bits besides.

## The document object model

The document currently loaded in each one of your browser tabs is represented 
by a document object model. This is a 'tree structure' representation created 
by the browser that enables the HTML structure to be easily accessed by 
programming languages — for example the browser itself uses it to apply 
styling and other information to the correct elements as it renders a page, 
and developers like you can manipulate the DOM with JavaScript after the page 
has been rendered.

Each entry in the tree is called a **node**. You can see in the diagram above 
that some nodes represent elements (identified as HTML, HEAD, META and so on) 
and others represent text (identified as #text). There are other types of 
nodes as well, but these are the main ones you'll encounter.

Nodes are also referred to by their position in the tree relative to other 
nodes:

- **Root node**: The top node in the tree, which in the case of HTML is always 
the `HTML` node (other markup vocabularies like SVG and custom XML will have 
different root elements).
- **Child node**: A node directly inside another node.
- **Descendant node**: A node anywhere inside another node. 
- **Sibling nodes**: Nodes that sit on the same level in the DOM tree. 

It is useful to familiarize yourself with this terminology before working with 
the DOM, as a number of the code terms you'll come across make use of them. 
You may have also come across them if you have studied CSS (e.g. descendant 
selector, child selector).

## Summary

We have reached the end of our study of document and DOM manipulation. At 
this point you should understand what the important parts of a web browser 
are with respect to controlling documents and other aspects of the user's 
web experience. Most importantly, you should understand what the Document 
Object Model is, and how to manipulate it to create useful functionality.

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/javascript-dynamic-client-side-scripting/021-manipulating-documents/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/javascript-dynamic-client-side-scripting/021-manipulating-documents/active_learning/">Visit website</a>
  </dd>
</dl>
