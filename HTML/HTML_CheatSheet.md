---
sidebar_position: 1
---

# HTML CheatSheet

#### Introduction to HTML

HTML is the standard markup language for web pages. It is stored in files that use .html or .html extension.
Used for

- Structuring web pages. With tags and elements, we can define the heading, paragraphs and other content of a web page
- Navigating the internet
- Embedding images and videos
-

### HTML Creates skelton of web page

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2>Hello World</h2>
    <p>My name is Abhay Bharti</p>
  </body>
</html>
```

#### Important HTML tags

- `<p>` TBD
- `<div>` TBD
- `<h1>` TBD
- `<h6>` TBD
- `<header>`
- `<hr>` TBD
- `<Table>`
- `<checkbox>`
- `<radio>`

#### Inline vs Block level elements

##### Block Level elements

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can). Here are the block-level elements in HTML:

- `<p>` TBD
- `<div>` TBD
- `<h1>` TBD
- `<h6>` TBD
- `<header>`
- `<hr>` TBD
- `<address>`
- `<article>`
- `<aside>`
- `<blockquote>`
- `<pre>`
- `<canvas>`
- `<dd>`
- `<dl>`
- `<dt>`
- `<fieldset>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<form>`
- `<li>`
- `<main>`
- `<nav>`
- `<noscript>`
- `<ol>`
- `<section>`
- `<table>`
- `<tfoot>`
- `<ul>`
- `<video>`

`most commonly used block element is <div></div>`
Block element width is 100% of parent element width.

##### Inline Level elements

An inline element does not start on a new line. It only takes up as much width as necessary.

- `<a>` TBD
- `<button>` TBD
- `<img>`
- `<input>`
- `<abbr>`
- `<label>`
- `<span>`
- `<textarea>`
- `<acronym>`
- `<b>`
- `<bdo>`
- `<big>`
- `<br>`
- `<cite>`
- `<code>`
- `<dfn>`
- `<em>`
- `<i>`
- `<kbd>`
- `<map>`
- `<object>`
- `<output>`
- `<q>`
- `<samp>`
- `<script>`
- `<select>`
- `<small>`
- `<strong>`
- `<sub>`
- `<sup>`
- `<time>`
- `<tt>`
- `<var>`

`most commonly used inline element is <span></span>`
inline element width is till content width. can have multiple element on same line if there is space.

`OQ`

- What is difference between tags and element in HTML
- Global and custom attributes
- attributes are kept inside opening tag e.g. alt, src
- Global Attributes : attributes which can be used on all HTML elements. like style attribute
- How to change a block element to inline and vice-versa using CSS

`User defined attributes`

<h1 abhay>Hello world</h1>
attribute "abhay" is added in HTML

<h1 abhay="coder">Hello world</h1>
attribute "abhay" is added in HTML

#### Form tag

form tag is used to create an HTML form for user input. It can contain one or more of following form elements:

- `<input>` TBD
- `<textarea>` TBD
- `<button>` TBD
- `<select>` TBD
- `<option>` TBD
- `<optgroup>`
- `<fieldset>`
- `<label>`TBD
- `<output>`

By default form element remains empty, it is a block level element.

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Form</title>
  </head>
  <body>
    <h1>HTML Form</h1>
    <h2>Login Form</h2>
    <form action="/">
        <p><div><label for="name">Name</label></div>
        <input id="name" name="name" type="text"  placeholder="Enter your name"/>
        </p>

        <p><div><label for="email">Email</label></div>
            <input id="email" name="email" type="text"  placeholder="Enter your email"/>
            </p>

            <p><div><label for="mobile">Mobile Number</label></div>
                <input id="mobile" name="mobile" type="tel"  placeholder="Enter your mobile number"/>
                </p>

                <p><div><label for="password">Password</label></div>
                    <input id="password" name="password" type="tel"  placeholder="Enter your password"/>
                    </p>

                    <p>
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </p>
    </form>

    <div>
        <h2>Google Search</h2>
        <form action="https://www.google.com/search">
            <input type="text" name="q"/>
            <button>Search on Google</button>
        </form>

        <h2>Amazon Search</h2>
        <form action="https://www.amazon.in/s?">
            <input type="text" name="k"/>
            <button>Search on Amazon</button>
        </form>

        <h2>Flipkart Search</h2>
        <!-- combines a and b separated by & -->
        <form action="https://www.amazon.in/s?">
            <input type="text" name="a"/>
            <input type="text" name="b"/>
            <button>Search on Amazon</button>
        </form>
    </div>
  </body>
</html>
```

`OQ`
Why do we need HTML form

#### Image tag

The `<img>` tag is used to embed an image in an HTML page. Images are not technically inserted into a web page, images are linked to web pages. It creates a holding space for the referenced image.

The `<img>` tag has two required attributes:

- src : Specifies the path to the image
- alt : Specifies an alternate text for the image, if the image for some reason cannot be displayed

```
<img src="smiley.gif" alt="Smiley face" width="42" height="42" style="vertical-align:bottom">
<img src="/images/stickman.gif" alt="Stickman" width="24" height="39"> //insert image from other folder
<img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32"> //insert image from other web site

//Add hyperlink to an image
<a href="https://abhaybharti.netlify.app/">
<img src="w3html.gif" alt="abhaybharti.netlify.app" width="100" height="132">
</a>
```

We do not add width/height attribute in image tag, it is not a good practice. We can use style="width:100%; max-width:600px". To make image responsive to screen size, limit max size to 600px.

`<img src="./image.JPG" alt="my screenshot" style="width:100%;max-width:600px">`

### Create Accordion element in pure HTML

```
<body>
<details>
<summary>View Frequently asked questions</summary>
  <ul>
  <li>Question 1</li>
  <li>Question 2</li>
  <li>Question 3</li>
  <li>Question 4</li>
  <li>Question 5</li>
  </ul>
</details>
<details>
<summary>Summary 2</summary>
  <ul>
  <li>Question 1</li>
  <li>Question 2</li>
  <li>Question 3</li>
  <li>Question 4</li>
  <li>Question 5</li>
  </ul>
</details>
</body>
```

### async vs defer in `<script>` tag

This notes shows different ways to load JavaScript file in HTML, their pros & cons.

####

- **`<script> tag in the <head>` without async or defer**

Blocks HTML parsing. User would see a blank page while it fetches the .js file

```
    <html lang="en">
    <head>
        <script src="./index.js"> </script>
    </head>
    <body>

    </body>
    </html>

```

- **`<script> tag at the end of <body>` without async or defer**

Waits for HTML DOM to be created. User might have to wait longer

```
    <html lang="en">
    <head>

    </head>
    <body>
        <script src="./index.js"> </script>
    </body>
    </html>

```

- **`<script> tag in the <head>` using async**

Loads it as it is parsing the HTML and executes it as soon as the script is fetched. Good for 3rd party libraries

```
    <html lang="en">
    <head>
        <script async src="./index.js"> </script>
    </head>
    <body>

    </body>
    </html>

```

:::danger Caveat using async
**Scripts are not executed in order**

```
     <head>
        <!-- takes 20 seconds to load  -->
        <script async src="./index.js"> </script>
        <!-- takes 5 seconds to load  -->
        <script async src="./index.js"> </script>
    </head>

```

- **`<script> tag in the <head>` using defer**

Waits for DOM to be created. Executes script tags in the order you have defined them

```
    <html lang="en">
    <head>
        <script defer src="./index.js"> </script>
    </head>
    <body>

    </body>
    </html>

```

multiple scripts using defer, scripts are executed in order that you define them

```
     <head>
        <!-- takes 20 seconds to load  -->
        <script async src="./index.js"> </script>
        <!-- takes 5 seconds to load  -->
        <script async src="./index.js"> </script>
    </head>

```

### `<sup>` tag

```
    <p>
        5<sup>2</sup> = 25
    </p>
```

`Output - 5 to the power 2 = 25`

### `<sub>` tag

```
    <div>H <sub>2</sub>O </div>
```

`Output - H2O`

### HTML DOM

#### What is DOM (Document Object Model)

The Dom is a tree structure representation created by the browser that enables the HTML structure to be easily accessed by programming languages - for example browser itself uses
it to apply styling an other information to the correct elements as it render a page, and developers like you can manipulate the DOm with JavaScript after the page has been rendered.

#### Representation of DOM

-> window
->-> document
->->->Anchor
->->->Form
->->->Link

#### Basic DOM Manipulation

To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable

```
<button id="btn-Add">Add</button>
const button = document.querySelector('#btn-Add'); //returns button element having id = "btn-Add"


const link = document.querySelector('a'); //returns the first <a> tag element in the document
```

```
let btn-Add = document.getElementById('btn-Add');
```

```
let btn-Add = document.getElementByTagName('a');
```

```
let btn-Add = document.getElementByClassName('content');
```

#### text Content

```
button.textContent = "XYZ";

//.textContent to change the text inside HTML element. can also use method .innerHTML and .innerText
```

to practice

#### Creating New Elements

```
<section></section>
//select the section
const sect = document.querySelector('section');

//create new element
const para = document.createElement('p);

//add the new paragraph in the section
sect.appendChild(para);
```

<Highlight color="#25c2a0">to practice</Highlight>

### HTML Input Types

`<input type="text>` --> input box to receive free text
`<input type="password>` --> input box shows masked character like **\***
`<input type="checkbox>` --> input box to receive free text
`<input type="email>` --> input box to accept only email id as input
`<input type="number>` --> input box to accept only number as input
`<input type="file>` --> input box to open file dialog
`<input type="button>` --> create a button
`<input type="color>` --> create a color selection control
`<input type="image>` --> create a image
`<input type="hidden>` --> create a hidden input on UI

### Search Functionality Tips

If you are building a search functionality then use `<input type="search"/>` instead of `<input type="text">`

- Using type="search" adds a clear icon to the textbox while typing so you can quickly remove the entered text
- You can also clear the typed text by just pressing the escape key

### How to initiate phone call

```
<a href=”tel:9999915562”>9999915562</>
```

### How to send SMS message from HTML

```
<a href=”sms:9999915562”>9999915562</>
```

### How to Send message on WhatsApp

```
    <a
  href="https://api.whatsapp.com/send?phone=+91YourPhoneNumber>Send Message</a

```

#### Get Images And Color

- Go to undraw.co for free images
- Go to tailwindcss.com for color codes

#### How to Get Fonts

- Go to google fonts and click on any font type
- Select import and copy from descending text area
