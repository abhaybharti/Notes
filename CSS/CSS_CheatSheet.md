# CSS CheatSheet

#### What is CSS

Cascading Style Sheets allows you to create great-looking web page. It is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page. Example -

h1 {
color: red;
font-size: 5em;
}

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

- We should never set absolute width/length (ex width:500px; height:500px), reason it causes overflow. Which adds scroll bar.
- We should never set height/width in pixel #
- We should use max-width/max-height instead of width/height property
- Box model starts with content -> padding -> border -> margin. Where content is innermost item.

#### Different Padding Definitions

p{
padding: 10px(Top) 5px(Right) 5px (Bottom) 10px(Left);
}

p{
padding: 10px(Top) 5px(Right and left) 10px(Bottom);
}

p{
padding: 10px(Top and Bottom) 5px(Right and left);
}

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

```

```
