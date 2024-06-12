<!-- TOC -->
* [Namaste React Web Series -> Episode 1 -> Inception](#namaste-react-web-series---episode-1---inception)
    * [Inject/Add ReactJS Add in your project](#injectadd-reactjs-add-in-your-project)
      * [Adding ReactJS in HTML File](#adding-reactjs-in-html-file)
      * [Adding ReactJS Node_Modules](#adding-reactjs-node_modules)
* [Namaste React Web Series -> Episode 2 - Igniting our App](#namaste-react-web-series---episode-2---igniting-our-app)
    * [NPM](#npm)
    * [Build Your Project / Run your project](#build-your-project--run-your-project)
    * [Bundler](#bundler)
      * [parcel Advantages](#parcel-advantages)
    * [package.json](#packagejson)
    * [package-lock.json](#package-lockjson)
    * [node_modules](#node_modules)
    * [Difference between npm & npx](#difference-between-npm--npx)
      * [Browser scripts cannot have imports or exports.](#browser-scripts-cannot-have-imports-or-exports)
      * [How to make application support for older browser](#how-to-make-application-support-for-older-browser)
      * [babel](#babel)
      * [babel-plugin-transform-remove-console](#babel-plugin-transform-remove-console)
      * [CDN (Content Deilvery Network)](#cdn-content-deilvery-network)
      * [What is crossorigin attribute](#what-is-crossorigin-attribute)
      * [JSX](#jsx)
    * [React Component](#react-component)
      * [1. Functional - New way of writing, it is nothing but a normal JavaScript function](#1-functional---new-way-of-writing-it-is-nothing-but-a-normal-javascript-function)
        * [react element -> one tag is named as react element](#react-element---one-tag-is-named-as-react-element)
      * [2. Class based component - Old way of writing, important for older codes & interviews](#2-class-based-component---old-way-of-writing-important-for-older-codes--interviews)
      * [How to call react element/component](#how-to-call-react-elementcomponent)
      * [Further Reading](#further-reading)
      * [react component in detail](#react-component-in-detail)
      * [JSX Rules](#jsx-rules)
      * [JSX Rules](#jsx-rules-1)
      * [Local images](#local-images)
      * [props -> Passing data to Component](#props---passing-data-to-component)
      * [Iterate Over a Array and pass each element to React Component](#iterate-over-a-array-and-pass-each-element-to-react-component)
      * [Each child in a list should have a unique "key" prop](#each-child-in-a-list-should-have-a-unique-key-prop)
      * [Do not use index as react keys](#do-not-use-index-as-react-keys)
      * [React Hooks](#react-hooks)
      * [React Folder Structure](#react-folder-structure)
      * [export default](#export-default)
      * [named export / named import](#named-export--named-import)
      * [How do we import](#how-do-we-import)
      * [React Reconciliation Algorithm (also known as React Fiber)](#react-reconciliation-algorithm-also-known-as-react-fiber)
    * [Useful Chrome Extension](#useful-chrome-extension)
      * [Web Developer](#web-developer)
      * [JSON Formatter](#json-formatter)
      * [ColorZilla](#colorzilla)
      * [CSS Viewer](#css-viewer)
      * [Wappalyzer](#wappalyzer)
      * [Lighthouse](#lighthouse)
      * [Viewport Resizer](#viewport-resizer)
      * [User-Agent Switcher](#user-agent-switcher)
      * [Lorem Ipsum Generator](#lorem-ipsum-generator)
      * [Octotree](#octotree)
  * [Chapter 11](#chapter-11)
    * [Higher Order Component](#higher-order-component)
    * [Controlled and Uncontrolled Components](#controlled-and-uncontrolled-components)
    * [Lifting the State up (very important)](#lifting-the-state-up-very-important)
    * [Intro to React Dev Tools](#intro-to-react-dev-tools)
    * [Props Drilling](#props-drilling)
    * [React Context API](#react-context-api)
      * [Create Context API](#create-context-api)
      * [How to access MyContext in your component](#how-to-access-mycontext-in-your-component)
  * [Chapter 12](#chapter-12)
    * [Redux Toolkit](#redux-toolkit)
      * [Code to Configure and Create Redux Store](#code-to-configure-and-create-redux-store)
      * [Code to create a Redux Slice](#code-to-create-a-redux-slice)
      * [Dispatch Actions to the Redux Store](#dispatch-actions-to-the-redux-store)
    * [react-redux package](#react-redux-package)
    * [Redux Store, Actions/Reducers, useSelector, useDispatch.](#redux-store-actionsreducers-useselector-usedispatch)
    * [Interview Questions around Redux](#interview-questions-around-redux)
    * [Best practices while using Redux](#best-practices-while-using-redux)
    * [Redux Dev tools](#redux-dev-tools)
  * [Chapter 13](#chapter-13)
    * [Introduction to Jest, React Testing Library](#introduction-to-jest-react-testing-library)
    * [Importance of Testing](#importance-of-testing)
    * [Types of Testing (for Developers)](#types-of-testing-for-developers)
    * [Setting up Testing environment in our React application](#setting-up-testing-environment-in-our-react-application)
    * [Writing basic test cases](#writing-basic-test-cases)
    * [Explaining Render, Query, Assertion concept](#explaining-render-query-assertion-concept)
    * [Writing Unit Test cases for various components](#writing-unit-test-cases-for-various-components)
    * [Writing Integration tests for various features](#writing-integration-tests-for-various-features)
    * [What is React?](#what-is-react)
    * [limitations of React?](#limitations-of-react)
    * [advantages of using React?](#advantages-of-using-react)
    * [useState() and useEffect() in React?](#usestate-and-useeffect-in-react)
    * [How to prevent re-renders in React?](#how-to-prevent-re-renders-in-react)
    * [Form-Handing & Validation techniques?](#form-handing--validation-techniques)
    * [What is the application of lazy loading?](#what-is-the-application-of-lazy-loading)
    * [What is the benefit of error boundaries?](#what-is-the-benefit-of-error-boundaries)
    * [SSR and its benefits in React applications](#ssr-and-its-benefits-in-react-applications)
    * [different ways to style a React component?](#different-ways-to-style-a-react-component)
    * [Use cases of useEffect() in different scenarios](#use-cases-of-useeffect-in-different-scenarios)
    * [differences between functional & class components?](#differences-between-functional--class-components)
    * [differences b/w useMemo() and useCallback() in React](#differences-bw-usememo-and-usecallback-in-react)
    * [differences b/w controlled & uncontrolled components?](#differences-bw-controlled--uncontrolled-components)
    * [How to re-render the view when the browser is resized?](#how-to-re-render-the-view-when-the-browser-is-resized)
    * [asynchronous operations with async/await and Promises?](#asynchronous-operations-with-asyncawait-and-promises)
    * [How to pass data b/w sibling components using React router?](#how-to-pass-data-bw-sibling-components-using-react-router)
<!-- TOC -->

# Namaste React Web Series -> Episode 1 -> Inception

### Inject/Add ReactJS Add in your project

#### Adding ReactJS in HTML File

:::danger Using CDN in project

Fetching from CDN is a costly operation. If react version changes, you need to update URL. This is not a recommended way to do.

- create a index.html file
- type `html:5` and press enter
- This will create HTML5 basic structure body in index.html file
- Open google & search React CDN & open first link from search result
- copy following value from CDN Links & paste in <body> </body> tag of index.html file
    <script
       crossorigin
       src="https://unpkg.com/react@18/umd/react.development.js"
     ></script>
     <script
       crossorigin
       src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
     ></script>

- Create App.js file and following code

```
/*
<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h1>I am an h1 tag </h1>
    </div>
     <div id="child2">
        <h1>I am an h1 tag</h1>
        <h1>I am an h1 tag </h1>
    </div>
</div>

ReactElement (Object) => HTML (Browser Understands)
*/

// create child element
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an 2nd h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an 2nd h1 tag"),
  ]),
]);



//create sibling elements

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Word from React!"
);
console.log(parent); // return an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

- Create index.css file and following code

```
#heading {
  color: red;
}

```

- index.html file should have following code

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./index.css" />
    <title>Namaste React</title>
  </head>
  <body>
    <h1>Abhay is here</h1>
    <div id="root">
      <h1>Abhay is here</h1>
    </div>
    <h1>Abhay is here</h1>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script src="./App.js"></script>
  </body>
</html>


```

#### Adding ReactJS Node_Modules

# Namaste React Web Series -> Episode 2 - Igniting our App

### NPM

It manages node packages. It works as node package manager. It is not abbreviation of node package manager. It is standard repository for all packages.

package.json is configuration for NPM. NPM is a package manager, which install dependencies.

### Build Your Project / Run your project

`npx parcel index.html` -- create dev build

`npx parcel build index.html` -- create prod build

`npx parcel index.html -p 8080` -- run app on specific port

### Bundler

bundler basically packages your app, so that you can ship to production. Create-react-app uses webpack bundler. bundler compiles many JavaScript code files into a single Js file that you can easily deploy in any JavaScript-based web browser. It can also produce a dependency graph as it goes back and forth with the first code file.

#### parcel Advantages

refer `https://parceljs.org/` for documentation
We will use parcel bundler. parcel is doing following things :

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- Use File Watching Algorithm (written in C++)
- Caching - Faster Builds
- Image optimization
- Minification of our files
- Bundling
- Compress the files
- Consistent Hashing
- Code splitting
- Differential Bundling (Support older browsers)
- Diagnostic
- Error Handling (better error suggestion)
- HTTPs
- Tree Shaking (remove unused codes)
- Different dev and prod bundles
- Port number
- Consistent Hashing Algorithm
- Zero Config
- Cleaning our code
- Compatible with older version of browser

### package.json

```
"devDependencies": {
    "parcel": "^2.8.3"
}
```

`^` if caret is put, dependency will be updated to minor version immediately.

```
  "devDependencies": {
    "parcel": "~2.8.3"
  }
```

`~` if tilde is put, dependency will be updated to major version immediately.

`Notes ` it is safe to put caret not tilde.

### package-lock.json

It keeps track of exact version of dependencies used in project.

### node_modules

it is like a database which contains project dependencies. Node modules folder contains many folder although we have installed only parcel. When we install a package, it installs other dependent packages. This is called `transitive` dependency.

If you get error "@parcel/namer-default: Target "main" declares an output file path of "App.js" which does not match the compiled bundle type "html"." Open project package.json file and remove `"main": "App.js",`

npx - means executing a package

### Difference between npm & npx

npm is to install a package.
npx is to execute a package

#### Browser scripts cannot have imports or exports.

Add type="module" in script import call

```
<script type="module" src="./App.js"></script>
```

#### How to make application support for older browser

browserslist (https://browserslist.dev/) is a npm package which facilitates to run your app on old browsers.

Add following in package.json file

```
"browserslist": [
    "last 10 Chrome version",
    "last 10 Firefox version"
  ]
```

This means our code will definitely work on last 10 version of chrome & 2 version of firefox. For other version & other browser, it may work or may not work.

```
"browserslist": [
    "last 2 versions"
  ]
```

This will work on last 2 versions of all browser

#### babel

it is a npm package, it reads our code & converts to other code.

#### babel-plugin-transform-remove-console

Install this npm package & create a file .babelrc & add following code

```
{
"plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]]
}
```

#### CDN (Content Deilvery Network)

CDN is a network of servers that deliveres content to users. Both React and ReactDOm are available over a CDN.

#### What is crossorigin attribute

CORS (Cross Origin Resource Sharing) is an HTTP header based mechanism that allows server to indicate any cross origin (domain, scheme or port) other than its own from which a browser should permit loading resources.
crossorigin attribute provide support for CORS. if we server React fro a CDN, keeping crossorigin attribute set :

```
<script crossorigin src=""></script>
```

This indicates that the script should be loaded from different origin.

TO Read - https://www.youtube.com/watch?v=tcLW5d0KAYE

#### JSX

### React Component

#### 1. Functional - New way of writing, it is nothing but a normal JavaScript function

name of component starts with capital letter

`1st Approach`

```
const HeaderComponent = () => {
return (

<div>
<h1>Namaste React functional component</h1>
</div>
);
};
```

`2nd Approach`

```
const HeaderComponent1 = () => (

  <div>
    <h1>HeaderComponent1 - Namaste React functional component</h1>
  </div>
);
```

`3rd Approach`

```
const HeaderComponent2 = function () {
return (

<div>
{/_ you can write any piece of javascript code inside {} _/}
{/_ call react element as a variable _/}
{heading}
{/_ call a functional component as function _/}
{HeaderComponent1()}

      {/* call a functional component as a JSX, this is component composition or composite component  */}
      <HeaderComponent1 />
      <h1>Namaste React functional component</h1>
    </div>

);
};
```

##### react element -> one tag is named as react element

```
const heading = (

  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
```

#### 2. Class based component - Old way of writing, important for older codes & interviews

#### How to call react element/component

When you have to render a react element

```
const root = ReactDOM.createRoot(document.getElementById("root"));

react element -> one tag is named as react element
 const heading = (
 <h1 id="title" key="h2">
 Namaste React
 </h1>
 );
```

When you have to render a react element, pass like a argument

```
root.render(heading);
```

When you have to render a react component, should be closing tag

```
root.render(<heading/>)
```

#### Further Reading

- What is React Production CDN
- can we use React Production CDN into my index.html file, if yes what would be impact
- can we use other code along with react code in my html file
- How to create prod build
- What is Global dependencies
- Cross site scripting (XSS) attack
- Sanitization done by JSX
- component composition
- composite component

#### react component in detail

- component should start with capital letter
- JSX syntax (return html)
    - to make our lives easier
    - calling function the hood

#### JSX Rules

- return single element
    - semantics section/article
    - Fragment - let's us group elements without adding extra nodes

#### JSX Rules

- React Developer tools browser extension -
    - Once this plugin is installed
    - Open react app in browser
    - Open developer tools & look for tab `components`

#### Local images

- Optional video !!!
- external images (hosted on different server) - just need an url
- local images(src folder) - less performant
- local images (src folder) - better solution for assets, since under the hood they get optimized

- save image (Save image As...)
- create `images` folder in `public`
- copy/paste image
- rename (optional)
- replace url in the src - `'./images/imagename.extension'`
- `'./'` because assets are on the same server

#### props -> Passing data to Component

```
<RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
```

passing props to a react component is just like are just argument being passed to a function.

When you pass props to a react component, it is received in component like

```
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="restaurantcard">
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
    </div>
  );
};
```

`Destructure props on the fly`

```
const RestaurantCard = ({resName,cuisine}) => {
  console.log(props);
  return (
    <div className="restaurantcard">
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
    </div>
  );
};
```

`Destructure data using optional chaining`

```

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
```

#### Iterate Over a Array and pass each element to React Component

```
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {
          // restList is an array, this code iterates list and pass each element to RestaurantCard component
          // We can accomplish the same using for i approach also
          resList.map((restaurant) => (
            <RestaurantCard resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
```

#### Each child in a list should have a unique "key" prop

You should always use unique keys

not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<<<< unique id (best practice)

```
const Body = () => {
return (
<div className="body">
<div className="search"> Search</div>
<div className="res-container">
{
// restList is an array, this code iterates list and pass each element to RestaurantCard component
// We can accomplish the same using for i approach also
resList.map((restaurant) => (
<RestaurantCard key={restaurant.data.id} resData={restaurant} />
))
}
</div>
</div>
);
};
```

#### Do not use index as react keys

Index as key is an anti-pattern

#### React Hooks

It is normal JS utility functions, it is written by facebook developers. It is written inside React.

- useState() - generates super powerful state variables in react. Whenever a state variable is updated, react will re-render the component.
- useEffect()

`Note :` 99% of time you will be using above two hooks.

#### React Folder Structure

read more about react project folder structure: https://legacy.reactjs.org/docs/faq-structure.html

:::danger Caveat Never keep hard coded data inside react components

#### export default

one file can have only one default export.

```
export default LOGOURL;
```

import of this will be slightly different. like

```
import LOGO_URL from "../Logo";
```

#### named export / named import

If we have to export multiple things. Then we use named export.

```
export const LOGO_URL="https://github.com/";
```

import of this will be slightly different. like

```
import {LOGO_URL} from "../Logo";
```

#### How do we import

#### React Reconciliation Algorithm (also known as React Fiber)

### Useful Chrome Extension

#### Web Developer

It provides various web development tools, such as viewing CSS, disabling JavaScript, resizing the browser window, and analyzing web page elements.

#### JSON Formatter

This extension formats JSON data into a more readable and indented structure, making it easier to inspect and debug JSON responses from APIs.

#### ColorZilla

ColorZilla allows you to pick colors from any webpage and get the corresponding color codes (RGB, HEX, HSL) quickly.

#### CSS Viewer

With CSS Viewer, you can easily inspect and copy CSS styles applied to any element on a webpage.

#### Wappalyzer

Wappalyzer identifies the technologies used on a website, such as content management systems, web frameworks, analytics tools, and more.

#### Lighthouse

Lighthouse runs audits on web pages, providing insights into performance, accessibility, SEO, and best practices.

#### Viewport Resizer

This extension allows you to test your website's responsiveness by quickly resizing the browser window to different screen sizes, simulating various devices.

#### User-Agent Switcher

User-Agent Switcher lets you switch the user agent of your browser to mimic different devices or browsers, helping you test how your website responds to different user agents.

#### Lorem Ipsum Generator

This extension generates placeholder text (Lorem Ipsum) directly into form fields, making it useful for quickly filling in content during development.

#### Octotree

If you use GitHub frequently, Octotree provides a tree-style sidebar for easy navigation through repositories and their files.

11. EditThisCookie: EditThisCookie lets you manage browser cookies, including adding, editing, and deleting cookies for testing and development purposes.

12. Dimensions: This extension measures the dimensions of elements on a webpage.

## Chapter 11

### Higher Order Component

It takes an existing component, enhances it & returns back.

### Controlled and Uncontrolled Components

### Lifting the State up (very important)

### Intro to React Dev Tools

### Props Drilling

Passing data from parent to child component. We should avoid prop drilling, it becomes difficult to pass data across components where large number of components are involved.

### React Context API

It is like a global data, which any component can access across application.

#### Create Context API

```
import { createContext } from "react";`

const MyContext = createContext({
loggedInUser: "Default User"});

export default MyContext;
```

#### How to access MyContext in your component

import React, {MyContext} from "react";
const data = useContext(MyContext);

## Chapter 12

Sample project:
https://media.licdn.com/dms/document/media/D4D1FAQHd0jxaGIoD0A/feedshare-document-pdf-analyzed/0/1698752622605?e=1700092800&v=beta&t=qoZgYdZmt7mCDyW1txElMOXfA4zY6MqJwMqYBxbbiSo

### Redux Toolkit

It is intended to be the standard way to write redux logic. It was originally created to help address three common concerns about Redux:

- Configuring a Redux Store is too complex
- I have to add lot of packages to get Redux to do anything useful
- Redux requires too much boilerplate code

#### Code to Configure and Create Redux Store

1. `Importing Required Modules:`

- Create store.js file
- It imports the `configureStore` function from the `@reduxjs/toolkit` package. This function simplifies the process of creating
  a Redux store.
- It also imports a custom Redux reducer named `itemReducer` from a local file called "itemSlice."

```
import { configureStore } from "@reduxjs/toolkit";
import  itemReducer from "./itemSlice";
```

2. `Creating a Redux Store:`

- The `configureStore` function is used to create a Redux store. It takes an object as an argument with the following properties:
- `reducer`: This property is an object that defines the reducers used in the store. In this case, there is a single reducer called
  `items`, which is the result of combining the `itemReducer`.
- You might have multiple reducers in a larger application, and this is where you would combine them into a single reducer using
  Redux's `combineReducers` or a similar approach. In this code, `configureStore` automatically combines reducers using the Redux
  Toolkit.

```
const store = configureStore({
reducer: {
  item: itemReducer,
}})
```

3. `Exporting the store`

```
export default store;
```

`Complete Code`

```
import { configureStore } from "@reduxjs/toolkit";
import  itemReducer from "./itemSlice";

const store = configureStore({
reducer: {
  item: itemReducer,
}})

export default store;
```

#### Code to create a Redux Slice

This code defines a Redux Slice using the `createSlice` function from the `@reduxjs/toolkit` package. It includes `reducers` and `action` for managing a collection of items. Here is a breakdown of what each of the code does:

create a file named `itemSlice.js`

1. Importing Required Modules:

- it imports the `createSlice` function from the `@reduxjs/toolkit` package. The Redux Toolkit simplifies the process of defining actions and reducers for redux.

2. Creating the item slice:

- `createSlice` is used to define a Redux slice, which includes the name of the slice, the initial state, and a set of reducer functions.
- `name: "items"`: This sets the name of the slice to "items." It's used to identify the slice in the Redux store.
- `initialState: []`: The initial state of the slice is an empty array, representing a collection of items.

3. Reducers: Inside the `reducers` object, three reducer functions are defined:

- `addItem`: This reducer takes the current `state` and an `action` object as parameters. It appends the `action.payload` (an item) to the state array.
- `editItem`: This reducer takes the current `state` and an `action` object as parameters. It finds the item in the state by its `id`, provided in the `action.payload`, and updates its `name` property with the new value from `action.payload`.
- `deleteItem`: This reducer takes the current `state` and an `action` object as parameters. It filters out the item with the specified `id` from the state, effectively removing it

4. Exporting Actions and Reducer:

- The code exports three action creators using object destructuring from `itemSlice.actions`. These action creators are named
  `addItem`, `editItem`, and `deleteItem`, corresponding to the reducers defined earlier. They can be used to dispatch actions to
  modify the state.
- It also exports the reducer itself using `itemSlice.reducer`. This reducer is used to handle state changes in the Redux store related
  to the "items" slice.

`Complete Code`

```
import {createSlice} from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    editItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.name = action.payload.name;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, editItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;

```

#### Dispatch Actions to the Redux Store

This code defines a React component that allow users to input the name

1. Importing Required modules:

- It imports React, which is necessary for creating React components
- It imports `useState` from React, allowing the component to manage local state
- It imports `useDispatch` from `react-redux` which is a hook used to dispatch actions to the Redux Store
- It imports the `addItem` action creator from a local file "../itemSlice". This action is used to add items to the collection.

2. Component Definition:

- The `AddItem` component is defined as a functional component. It does not receive any props.
- Inside the component, it uses the `useDispatch` to get a reference to the Redux store's dispatch function.

3. Local State:

- it uses the `useState` hook to manage local state for the `name` of the item being added. The `name` state variable is initialized as empty string.

4. `handleSubmit` function:

- This function si called when "Add" button is clicked
- It dispatches the `addItem` action to the Redux store, passing an object as the action's payload. The payload includes a unique `id` generated using `Date.now()` and the `name` extracted from the local `name` state.
- After dispatching the action, it resets the `name` state to an empty string, clearing the input field.

5. JSX for UI:

- The component returns JSX elements to create the user interface for adding items
- It includes a heading "Add Item"
- It provides an input field for entering the item's name, with a controlled input using the `value` and `onChange` attributes to manage the `name` state
- It displays an "Add" button, which, when clicked, triggers the `handleSubmit` function to add the item

6. Export:

- The `AddItem` component is exported as the default export of the module, making it available for use in other parts of the application.

1.  https://media.licdn.com/dms/document/media/D4D1FAQHd0jxaGIoD0A/feedshare-document-pdf-analyzed/0/1698752622605?e=1700092800&v=beta&t=qoZgYdZmt7mCDyW1txElMOXfA4zY6MqJwMqYBxbbiSo

### react-redux package

### Redux Store, Actions/Reducers, useSelector, useDispatch.

### Interview Questions around Redux

### Best practices while using Redux

### Redux Dev tools

## Chapter 13

### Introduction to Jest, React Testing Library

### Importance of Testing

### Types of Testing (for Developers)

### Setting up Testing environment in our React application

### Writing basic test cases

### Explaining Render, Query, Assertion concept

### Writing Unit Test cases for various components

### Writing Integration tests for various features

### What is React?

### limitations of React?

### advantages of using React?

- Explain Strict Mode in React
- Can React Hook replace Redux?

### useState() and useEffect() in React?

### How to prevent re-renders in React?

### Form-Handing & Validation techniques?

### What is the application of lazy loading?

### What is the benefit of error boundaries?

### SSR and its benefits in React applications

### different ways to style a React component?

### Use cases of useEffect() in different scenarios

### differences between functional & class components?

### differences b/w useMemo() and useCallback() in React

### differences b/w controlled & uncontrolled components?

### How to re-render the view when the browser is resized?

### asynchronous operations with async/await and Promises?

### How to pass data b/w sibling components using React router?

## ReactJs Interview Questions

### What is Lifting State Up in React?

### What is React context?

### What are different ways to add CSS in your app?

### What is Hot Module Replacement?

### What is the use of Parcel, Vite, Webpack?

### How does create-react-app work?

### What is Tree Shaking?

### Difference b/w dependency and devDependency

### What is npx and npm?

### Difference b/w package .json and package-lock .json

### Difference between console .log(<HeaderComponent/>) and console .log(HeaderComponent());

### What is React.Fragment?

### What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?

### What if 2 components are given will the state change in one component will effect the other component’s state (child)?

### What is the use of return in useEffect ?

### Difference b/w client-side routing and server-side routing?

### Explain the concept of code splitting and its benefits in React.

### How does React handle routing and navigation?

### What are higher-order components (HOC) in React?

### What are controlled and uncontrolled components?

### Explain the concept of reconciliation in React.

### How does React Fiber improve performance in React applications?

### Explain the concept of code splitting and its benefits in React.

### What are the key differences between server-side rendering (SSR) and client-side rendering (CSR) in React?

### Describe the concept of render props and its use cases in React.

### How can you optimize the rendering of large lists in React?

### Explain the concept of memoization and its importance in React.

### What is the purpose of the useEffect() hook in React and how does it work?

### How does React handle routing and navigation?

### How can you handle asynchronous operations in React using async/await?

### Explain the concept of the Context API in React and its benefits.

### What is the role of higher-order components (HOC) in React and how can you implement them?

### Describe the concept of controlled and uncontrolled components in React forms.

### How does React handle state management in large-scale applications?

### Explain the concept of suspense in React and its use cases.

### What are the different ways to handle side effects in React using hooks?

### Explain the concept of reconciliation in React.

### How can you prevent unnecessary re-renders in React?

### What are the different ways to style components in React?

### What are the key considerations when implementing a scalable React application?

### Describe the concept of reusability, modularity, testablity in React components.

### Virtual DOM: Explain what the Virtual DOM is and how it works in React. Discuss its benefits and how it improves performance compared to directly manipulating the actual DOM.

### State vs. Props: Differentiate between state and props in React. Explain when to use each and how they influence component rendering and behavior.

### Component Lifecycle Methods: Describe the different lifecycle methods in React and their order of execution. Explain when and how to use methods such as componentDidMount, componentDidUpdate, and componentWillUnmount.

### React Hooks: Discuss the purpose of React Hooks and explain how they replace class components in React. Describe common hooks such as useState, useEffect, and useContext and their usage.

### Event Handling: Explain how event handling works in React, including how to bind event handlers, pass arguments to event handlers, and handle events in class components vs. functional components.

### Conditional Rendering: Discuss different techniques for conditional rendering in React, such as using conditional statements (if/else), ternary operators, and logical operators (&&/||).

### React Router: Explain the role of React Router in building single-page applications (SPAs) with React. Discuss how to define routes, handle navigation, and pass parameters using React Router.

### Managing State: Describe different approaches for managing state in React, including lifting state up, using context, and implementing state management libraries such as Redux or MobX.

### Keys in Lists: Discuss the significance of keys when rendering lists of elements in React. Explain why keys are important, how they aid in efficient updates, and how to correctly assign keys to list elements.

### React Fragments: Explain what React Fragments are and why they are useful. Discuss scenarios where Fragments are necessary and how they help avoid unnecessary wrapper elements in the DOM.

### Question: How can you optimize React performance using code splitting?

`Answer`: Code splitting involves breaking your application into smaller chunks (bundling) and loading them on demand. React.lazy and Suspense are used to achieve code splitting, which can significantly reduce the initial loading time of your application.

Code example using React.lazy and Suspense:

```import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
return (
<Suspense fallback={<div>Loading...</div>}>
<LazyComponent />
</Suspense>
);
};
```

### How can you handle side effects in React using useEffect?

`Answer`: The useEffect hook allows you to perform side effects in functional components. You can use it to handle tasks like data fetching, subscriptions, or manually changing the DOM.

Code example:

```import React, { useEffect, useState } from 'react';

const MyComponent = () => {
const [data, setData] = useState([]);

useEffect(() => {
// Fetch data from an API
fetch('https://lnkd.in/d5PWjfXF')
.then((response) => response.json())
.then((data) => setData(data));
}, []);

return (
// Display data here
);
};
```

### How can you handle form data in React components?

`Answer`: You can manage form data using controlled components, where form elements are bound to state and updated through event handlers.

Code example of a controlled input:

```
import React, { useState } from 'react';

const MyForm = () => {
 const [inputValue, setInputValue] = useState('');

 const handleChange = (event) => {
  setInputValue(event.target.value);
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission with 'inputValue'
 };

 return (
  <form onSubmit={handleSubmit}>
   <input type="text" value={inputValue} onChange={handleChange} />
   <button type="submit">Submit</button>
  </form>
 );
};
```

### How can you handle cors issue in your code?

Just leave chrome extention and add corsproxy as base url so it work with any browser without chrome extention.

`Namasate React notes`

https://github.com/chetannada/Namaste-React/blob/main/Chapter%2009%20-%20Optimizing%20our%20App/Coding/constants.js

```
// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
```
