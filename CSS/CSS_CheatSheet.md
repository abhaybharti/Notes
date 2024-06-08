## Table of Contents

- [ CSS CheatSheet](#[-css-cheatsheet)
  - [ What is CSS](#[-what-is-css)
  - [ Ways to write CSS in a webpage](#[-ways-to-write-css-in-a-webpage)
  - [ We can add CSS in html file in 3 ways.](#[-we-can-add-css-in-html-file-in-3-ways.)
  - [ Difference between CSS file in a HTML file using link tag and using @import syntax in CSS file](#[-difference-between-css-file-in-a-html-file-using-link-tag-and-using-@import-syntax-in-css-file)
  - [ Make your CSS code more readable and less repetitive using the :where() function of css](<#[-make-your-css-code-more-readable-and-less-repetitive-using-the-:where()-function-of-css>)
  - [ Color and Fonts in CSS](#[-color-and-fonts-in-css)
  - [ Class and Id in CSS](#[-class-and-id-in-css)
  - [ Box model in CSS](#[-box-model-in-css)
  - [- [ margin](#[--[-margin)
  - [- [ padding](#[--[-padding)
  - [- [ border vs outline property](#[--[-border-vs-outline-property)
  - [- [ How to set width/height of an element](#[--[-how-to-set-width/height-of-an-element)
  - [ Different Padding Definitions](#[-different-padding-definitions)
  - [ display property](#[-display-property)
  - [ CASCADING SPECIFICITY INHERITANCE](#[-cascading-specificity-inheritance)
  - [ Element selectors](#[-element-selectors)
  - [ Class selectors](#[-class-selectors)
  - [ ID selectors](#[-id-selectors)
- [html.html -- ID selector and class selector is used in combination. So total specificity value will be 100+10=110. Even though, it is before #html,its color will be applied reason specificity value is greater.](#[html.html----id-selector-and-class-selector-is-used-in-combination.-so-total-specificity-value-will-be-100+10=110.-even-though,-it-is-before-#html,its-color-will-be-applied-reason-specificity-value-is-greater.)
  - [ Inline style](#[-inline-style)
  - [ !important](#[-!important)
  - [ Color picker eyedropper chrome extension to select colors hex code](#[-color-picker-eyedropper-chrome-extension-to-select-colors-hex-code)
  - [ CSS Selectors](#[-css-selectors)
  - [ Element selectors](#[-element-selectors)
  - [ Class selectors](#[-class-selectors)
  - [ id selectors](#[-id-selectors)
- [html {](#[html-{)
  - [ attribute selectors](#[-attribute-selectors)
  - [ Combination of selectors](#[-combination-of-selectors)
  - [ CSS Transitions](#[-css-transitions)
  - [ How to change an image size on mouse hover without using CSS transitions](#[-how-to-change-an-image-size-on-mouse-hover-without-using-css-transitions)
  - [ How to change an image size on mouse hover with using CSS transitions](#[-how-to-change-an-image-size-on-mouse-hover-with-using-css-transitions)
  - [ Categories of CSS Transitions Properties](#[-categories-of-css-transitions-properties)
  - [ What are the required CSS Transitions properties](#[-what-are-the-required-css-transitions-properties)
  - [- [ Example of Required CSS Transition Properties](#[--[-example-of-required-css-transition-properties)
  - [- [ How to transition an element's width within 3 seconds](#[--[-how-to-transition-an-element's-width-within-3-seconds)
  - [- [ How to transition a font's size within five seconds](#[--[-how-to-transition-a-font's-size-within-five-seconds)
  - [ What are the two optionals CSS Transitions properties](#[-what-are-the-two-optionals-css-transitions-properties)
  - [- [ How to transition an element's width with an ease-out speed](#[--[-how-to-transition-an-element's-width-with-an-ease-out-speed)
  - [- [ How to transition and element's width with a linear speed](#[--[-how-to-transition-and-element's-width-with-a-linear-speed)
  - [- [ How to transition and element's width with a two-second delay](#[--[-how-to-transition-and-element's-width-with-a-two-second-delay)
  - [- [ Create a circle using CSS](#[--[-create-a-circle-using-css)
  - [- [ Create a circle using CSS and and your image](#[--[-create-a-circle-using-css-and-and-your-image)
  - [- [ How to make an inline element as block level element using CSS](#[--[-how-to-make-an-inline-element-as-block-level-element-using-css)
  - [- [ How to make an block element as inline level element using CSS](#[--[-how-to-make-an-block-element-as-inline-level-element-using-css)
  - [- [ How to add height and width in an inline level element](#[--[-how-to-add-height-and-width-in-an-inline-level-element)
  - [ CSS Units](#[-css-units)

---

# CSS CheatSheet

#### What is CSS

Cascading Style Sheets allows you to create great-looking web page. It is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page. Example -

```
h1 {
color: red;
font-size: 5em;
}
```

### Ways to write CSS in a webpage

#### We can add CSS in html file in 3 ways.

1.  `Inline CSS/Element CSS` : Write inside HTML tag Add CSS as an element Attribute ->

    `<h1 style="color:red">This is the biggest heading</h1>`

2.  `Internal CSS or stylesheet` : Add as a style tag in html HEAD section -> 1st Way to add CSS

            ```<style>
              body{
                color: red;
              }
            </style>```

        OQ - can we put style tag in body

3.  `External CSS` : Add as an external link -> Create a \*.css file & include css file like this -> 3rd Way to implement CSS -->

` <link href ="css/index.css" rel='stylesheet'/>`

body{
font-family:sans-serif;
}

#### Difference between CSS file in a HTML file using link tag and using @import syntax in CSS file

When we use HTML link tag and if there are multiple link tags for importing different CSS files then browser can download those CSS files in parallel which will make the webpage load faster.

When we use @import syntax for importing CSS, then the browser will make separate network request for each imported CSS file. If the main CSS file has two @import statements, ten first the main CSS file will be downloaded and then each imported CSS file will be downloaded one after the another. Webpage load time increases depending on the size of the CSS file.

Therefore, you should avoid writing multiple @import inside CSS file and use the HTML link tag to load CSS files whenever possible.

#### Make your CSS code more readable and less repetitive using the :where() function of css

When we have to apply the same styles to multiple elements the CSS code become repetitive. This repetition can be avoided using the : where() function.

The :where() function takes in a list of selectors as an argument and applies the styles to all the selectors in one go. Thus reduce the code and makes it more readable.

`Repetitive code`

```

header a:hover,
main a:hover,
footer a:hover{
color: red;
text-decoration: underline;
}

```

`Less Code using Where Function`

:where(header,main,footer) a: hover{
color: red;
text-decoration: underline;
}

#### Color and Fonts in CSS

`colors:`

- aqua
- hexadecimal
- RGB
- hsl (mostly used)

<a href="https://www.w3schools.com/colors/colors_picker.asp" >W3School HTML Color Picker</a>

`Fonts:`
google font to search required font, select font, copy import statement and add into .css file.

- Open link <a href="https://fonts.google.com/" >Google Fonts</a>
- Select font type
- Copy import statement
- add import statement in .css file of your project

`font properties`

#### Class and Id in CSS

We can use class & ID of HTML elements to apply css properties.

- .top{} : css properties used in this will be applicable for HTML element where class="top" is used
- #buttonone : css properties used in this will be applicable for HTML element where id="#buttonone" is used

#### Box model in CSS

Box model has following properties:

- content
- border
- margin
- padding
- display

- We should never set absolute width/length (ex width:500px; height:500px), reason it causes overflow. Which adds scroll bar.
- We should never set height/width in pixel #
- We should use max-width/max-height instead of width/height property
- Box model starts with content -> padding -> border -> margin. Where content is innermost item.

##### border

border can only be provided in absolute unit (5px) not in % (10%).

##### margin

margin can be negative value.

##### padding

padding can never to negative value.

##### border vs outline property

- border is the outline of an element
- outline same like border, it does not change element width and height.

##### How to set width/height of an element

```
.one {

background-color: aquamarine;

<!-- Set fixed width, Even if screen size changes, width will be fixed as 500px.
If screen width is less than 500px, horizontal scroll bar will get added. This is called overflow; -->

 width: 500px;

<!-- Notes - a better way is use max-width, maximum width will be set as 500px, when you reduce screen size,
it does not add horizontal scroll bar & won't do overflow. Will work on mobile device too. We should not cause overflow -->
max-width: 500px;

min-height: 100px;

<!-- default behavior of overflow -->
overflow: visible;
}
```

**word-break**: break-all; -- breaks words

#### Different Padding Definitions

```
p{
padding: 10px(Top) 5px(Right) 5px (Bottom) 10px(Left);
}

p{
padding: 10px(Top) 5px(Right and left) 10px(Bottom);
}

p{
padding: 10px(Top and Bottom) 5px(Right and left);
}

```

#### display property

- `inline`
- `inline-block`
- `block`
- `none`

### CASCADING SPECIFICITY INHERITANCE

`Cascading` : refers to those CSS styles that are directly applied to a particular tag. The way CSS works is that if there any any styles that are directly applied to a HTML tag, then that particular style will impact the tag. Where the "cascading" part of CSS comes into place is when there are multiple styles that are directly applied to a HTML tag. And in the case of multiple styles, the actual final style applied to a HTML tag is the most "specific" one.

#### Element selectors

have `specificity`value of 1. displayed as (0,0,1)

#### Class selectors

have a `specificity` value of 10. displayed as (0,1,0)

#### ID selectors

have a `specificity` value of 100, is displayed as `(1,0,0)` #html{color:red};
#html.html -- ID selector and class selector is used in combination. So total specificity value will be 100+10=110. Even though, it is before #html,its color will be applied reason specificity value is greater.

#### Inline style

has `specificity` value of 1000. if inline style is used, this will take impact on element.

#### !important

`!important` rule in CSS adds maximum importance, it has no value, it will override all previous styling rules for that specific property.

Note:

1. We should avoid using `inline style`, it becomes difficult to change style from CSS.
2. We should avoid using `!important`, it becomes difficult to apply other styles.
3. We can club multiple id to increase specificity value like #html#html --> 200 value

### Color picker eyedropper chrome extension to select colors hex code

### CSS Selectors

#### Element selectors

li {
color:#e96228;
}

#### Class selectors

.html {
color:#e96228;
}

#### id selectors

#html {
color:#e96228;
}

#### attribute selectors

It is used rarely. attribute selectors, we can use an attribute from HTML tag as attribute like abhay, displayed etc.

[class]{
color:red;
}

Using user defined attributes

[abhay]{
color:red;
}

Using user defined attributes with "coder' values

[abhay="coder"]{
color:red;
}

#### Combination of selectors

1. `<p> which is descedent of <ul> - will select all <p> under <ui>`
2. `.className p -- all <p> tag under className`

ul p {
color:red;
}

`hover`
h1:hover {
color:red;
}

`hover with attribute`
[abhay]:hover {
color:red;
}

### CSS Transitions

**CSS transitions** provides a smooth and gradual way to change a specific CSS property's value. Instead of allowing browsers to change a property's value immediately, CSS transitions cause the change to happen smoothly over a specified period of time. For instance, suppose you wish to change an element size on hover. You have two options:

1. Implement the change without CSS transitions
2. Use CSS transitions to transition smoothly from the element's initial size to its new state

#### How to change an image size on mouse hover without using CSS transitions

```

img {
width: 10%;
height: 10%;
}

img:hover {
width: 40%;
height: 40%;
}

```

This code instantaneously change the image size from initial width/height of 10% to new dimension of 40%. Because we did not use CSS transitions.

#### How to change an image size on mouse hover with using CSS transitions

```

img {
width: 10%;
height: 10%;
transition: width 3s ease-out 0.4s;
}

img:hover {
width: 40%;
height: 40%;
}

```

The transitions property applied a smooth and gradual transition from width:10% to width:40%.

#### Categories of CSS Transitions Properties

1. Required transitions properties
2. Optional transition properties

#### What are the required CSS Transitions properties

1. **transition-property** - specifies the CSS property you wish to transition from its initial to its new state.

2. **transition-duration** - defines the length of time in which browser should complete the selected element's transition. In other words,

   - **transition-duration** sets the total start-to-finish time. It accepts time in milliseconds (ms) or second(s). Zero seconds (0s) is the transition-duration's default value.
   - If you do not specify **transition-duration**, the `transition event` will not be triggered.
   - transition-duration accepts only a zero(0) or a positive numeric value. Browser will ignore the duration declaration if you provide anything else.

##### Example of Required CSS Transition Properties

##### How to transition an element's width within 3 seconds

```img {
width: 10%;
transition-property: width;
transition-duration: 3s;
}

img:hover {
width: 40%;
}
```

##### How to transition a font's size within five seconds

```

p {
font-size: 1rem;
transition-property: font-size;
transition-duration: 5s;
}
p:hover {
font-size: 7rem;
}

```

#### What are the two optionals CSS Transitions properties

1. **transition-timing-function** : this property defines the implementation timing (speed) of the selected element's transition. In other words, specifies the speed for implementing the transition at various intervals of its duration. The values the transition-timing-function property accepts ares :

   - **ease** : Starts the transtions slowly. The speeds it up and ends it slowly. This is the default value.
   - **ease-in** :Starts the transitions slowly with a gradual increase in speed
   - **ease-out** : Starts fast and ends the transitions slowly.
   - **ease-in-out** : Starts and ends the transitions slowly.
   - **linear** : Starts and ends the transitions using a consistent speed throughout the transition's duration.
   - **cubic-bezier (p1, p2, p3, p4)** : Allows you to define the values of the cubic-bezier curve

2. **transition-delay** : defines how long the browser should wait before it starts the transitions.
   - The **transition-delay** property must be in milliseconds (ms) or seconds (s).
   - **0s** is the transition-delay's default value. It causes the transition to start immediately from the moment browsers apply it to an HTML element.
   - A negative value causes the transition to begin immediately from the specified time.E.g. an element's **transitions-delay** value is `-3s`. In that case, transition will start immediately at 3 seconds.
   - A positive value causes the transition to begin after the specified delay time has elapsed. E.g. an element's `transition-delay` value is `3s`. In that case transition will start after 3 seconds delay.

##### How to transition an element's width with an ease-out speed

```p {
  font-size: 1rem;
  transition-property: font-size;
  transition-duration: 5s;
  transition-timing-function: ease-out;
}
p:hover {
  font-size: 7rem;
}
```

**_Notes_** :

- the `transition-property` informs the browsers to transitions the `img` element's width
- we used the `transition-duration` property to define three seconds (`3s`) duration from the start to the end of the transitions
- We used the `transition-timing-function` properly to begin the transition quickly and end it slowly.

##### How to transition and element's width with a linear speed

```img {
  width: 10%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
}

img:hover {
  width: 100%;
}
```

**_Notes_**

- The `transition-property` informs browsers to transitions the `img` element's width
- We used the `transition-duration` property to define three seconds `(3s)` duration from the start to the end of the transition.
- The `transition-timing-function` property tells browsers to transition from the element's initial width to its new size using a consistent transition speed throughout.

##### How to transition and element's width with a two-second delay

```img {
  width: 10%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
  transition-delay: 2s;
}

img:hover {
  width: 100%;
}
```

**_Notes_**

- The `transition-property` informs browsers to transitions the `img` element's width
- We used the `transition-duration` property to define three seconds `(3s)` duration from the start to the end of the transition.
- The `transition-timing-function` property tells browsers to transition from the element's initial width to its new size using a consistent transition speed throughout.
- We used the `transition-delay` property to apply a two second (`2s`) delay to the starting time of the transition.

further reading - https://www.freecodecamp.org/news/css-transition-vs-css-animation-handbook/
**_Notes taken before Shorthand for Defining the CSS Transition Properties_**

**Universal Selectors**

```
* {
  box-sizing: border-box;
}

```

##### Create a circle using CSS

.one {
background-color: aquamarine;
color: blue;

<!-- width/height is set to equal size to, make it a square -->

width: 300px;
height: 300px;
border: 8px solid green;

<!-- it creates a circle if size is of a square -->

border-radius: 50%;
}

##### Create a circle using CSS and and your image

- Step 1: create a div
- Step 2 : create an image tag inside div

```<div class="one">
      <img src="./ab.jpg" alt="Abhay Profile pic" />
    </div>

img {

<!-- This inherit size from parent, parent div has size of 300px -->

width: 100%;
}

.one {
background-color: aquamarine;
color: blue;
width: 300px;
height: 300px;
padding: 0px;
border: 1px solid green;
margin: 40px;
border-radius: 100%;

<!-- this property stops image from overflowing  -->

overflow: hidden;
}
```

##### How to make an inline element as block level element using CSS

```
{
display:block;
}
```

##### How to make an block element as inline level element using CSS

```{
display:inline;
}
```

##### How to add height and width in an inline level element

```{
display:inline;
}
```

### CSS Units

**vw** Relative to 1% of the width of the viewport._
Generally used to set width
**vh** Relative to 1% of the height of the viewport_
Generally used to set height.

vh/vw can be used to set width/height any of a element.

`Note` : \* Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.

**em**
**rem**
