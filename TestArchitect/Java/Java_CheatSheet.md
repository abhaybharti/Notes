<!-- TOC -->
* [Java](#java)
  * [inheritance](#inheritance)
    * [What is Inheritance](#what-is-inheritance)
    * [why do we need inheritance](#why-do-we-need-inheritance)
      * [To achieve categorization](#to-achieve-categorization)
      * [To Achieve modularity](#to-achieve-modularity)
      * [To Achieve clear representation of concepts and separation of concerns](#to-achieve-clear-representation-of-concepts-and-separation-of-concerns)
      * [Implementation in Test Automation Framework](#implementation-in-test-automation-framework)
    * [What are the different type of inheritance](#what-are-the-different-type-of-inheritance)
      * [Implementation Inheritance (Class Inheritance)](#implementation-inheritance-class-inheritance)
      * [Interface Inheritance (Type inheritance)](#interface-inheritance-type-inheritance)
    * [How to achieve code reuse using inheritance](#how-to-achieve-code-reuse-using-inheritance)
      * [Using implementation inheritance](#using-implementation-inheritance)
      * [Using Composition](#using-composition)
    * [What are benefits of inheritance](#what-are-benefits-of-inheritance)
    * [What are pitfalls of inheritance](#what-are-pitfalls-of-inheritance)
    * [How can we use inheritance in a test automation framework](#how-can-we-use-inheritance-in-a-test-automation-framework)
  * [Encapsulation](#encapsulation)
    * [why it is needed](#why-it-is-needed)
    * [How Encapsulation is different from Abstraction](#how-encapsulation-is-different-from-abstraction)
    * [How to implement Encapsulation](#how-to-implement-encapsulation)
    * [Benefits of Encapsulation](#benefits-of-encapsulation)
    * [How to select right access level in the class](#how-to-select-right-access-level-in-the-class)
    * [Is it possible to access private methods/properties from outside the class](#is-it-possible-to-access-private-methodsproperties-from-outside-the-class)
    * [How to use Encapsulation in a test automation](#how-to-use-encapsulation-in-a-test-automation)
  * [Abstraction](#abstraction)
  * [Array Data Structure, Strengths Weaknesses and Big O Complexity Analysis](#array-data-structure-strengths-weaknesses-and-big-o-complexity-analysis)
    * [What is an array](#what-is-an-array)
    * [Strength](#strength)
      * [Fast Lookups (random access)](#fast-lookups-random-access)
      * [Fast appends](#fast-appends)
      * [Simple Implementation](#simple-implementation)
      * [Cache Friendliness](#cache-friendliness)
    * [Weaknesses](#weaknesses)
      * [Fixed-size](#fixed-size)
      * [Memory unused or wasted](#memory-unused-or-wasted)
      * [Size doubling](#size-doubling)
      * [Costly inserts](#costly-inserts)
      * [Costly deletes](#costly-deletes)
      * [Big-O Complexities](#big-o-complexities)
    * [What is Abstraction](#what-is-abstraction)
    * [Data Abstraction](#data-abstraction)
    * [Behavior Abstraction](#behavior-abstraction)
    * [How abstraction helps](#how-abstraction-helps)
    * [How abstraction is implemented](#how-abstraction-is-implemented)
    * [When to use an abstraction class](#when-to-use-an-abstraction-class)
    * [When to use an interface](#when-to-use-an-interface)
      * [Example 1 (Selenium Java Binding -> ChromeDriver implementation)](#example-1-selenium-java-binding---chromedriver-implementation)
      * [Example 2 (Creating test data parser for automation framework)](#example-2-creating-test-data-parser-for-automation-framework)
  * [Collection](#collection)
    * [List](#list)
    * [ArrayList](#arraylist)
      * [Why ArrayList is better than Array](#why-arraylist-is-better-than-array)
      * [Create ArrayList](#create-arraylist)
      * [Add Element to an ArrayList](#add-element-to-an-arraylist)
      * [Change Element](#change-element)
      * [Remove Element](#remove-element)
      * [Loop ArrayList](#loop-arraylist)
      * [Sort ArrayList](#sort-arraylist)
      * [Compare two ArrayList](#compare-two-arraylist)
    * [How to Swap two elements in ArrayList](#how-to-swap-two-elements-in-arraylist)
    * [How to convert an array to ArrayList](#how-to-convert-an-array-to-arraylist)
    * [How to convert ArrayList to string array](#how-to-convert-arraylist-to-string-array)
    * [Convert HashSet to a List/ArrayList](#convert-hashset-to-a-listarraylist)
    * [Convert a LinkedList to ArrayList](#convert-a-linkedlist-to-arraylist)
    * [How to join/combine two ArrayLists](#how-to-joincombine-two-arraylists)
    * [How to clone an ArrayList to another ArrayList](#how-to-clone-an-arraylist-to-another-arraylist)
    * [How to empty an ArrayList](#how-to-empty-an-arraylist)
    * [ArrayList trimToSize()](#arraylist-trimtosize)
  * [LinkedList](#linkedlist)
  * [Vector](#vector)
* [Set](#set)
  * [HashSet](#hashset)
  * [LinkedHashSet](#linkedhashset)
  * [TreeSet](#treeset)
* [Map](#map)
  * [HashMap](#hashmap)
  * [TreeMap](#treemap)
  * [LinkedHashMap](#linkedhashmap)
  * [HashTable](#hashtable)
* [Iterator/ListIterator](#iteratorlistiterator)
  * [Iterator and Comparator](#iterator-and-comparator)
  * [Comparable and Comparator](#comparable-and-comparator)
  * [Java Collection Questions](#java-collection-questions)
    * [HashMap](#hashmap-1)
      * [`1.` How to initialize a map with key as String and value as Integer](#1-how-to-initialize-a-map-with-key-as-string-and-value-as-integer)
      * [`2.` How to add and remove elements from HashMap](#2-how-to-add-and-remove-elements-from-hashmap)
      * [`3.` How to iterate through HashMap](#3-how-to-iterate-through-hashmap)
      * [`4.` Code to print HashMap key/value in console](#4-code-to-print-hashmap-keyvalue-in-console)
      * [`5.` Code to compare HashMap where key/values should be same and sequence should also be same](#5-code-to-compare-hashmap-where-keyvalues-should-be-same-and-sequence-should-also-be-same)
      * [`6.` Does Hashmap allow duplicate keys and values](#6-does-hashmap-allow-duplicate-keys-and-values)
      * [`7.` Does Hashmap allow null key and values](#7-does-hashmap-allow-null-key-and-values)
      * [`8.` Do HashMap is thread safe](#8-do-hashmap-is-thread-safe)
      * [`9.` Does HashMap maintains insertion order](#9-does-hashmap-maintains-insertion-order)
      * [`10.` Get all keys in HashMap](#10-get-all-keys-in-hashmap)
      * [`11.` How to sort HashMap with keys](#11-how-to-sort-hashmap-with-keys)
      * [`12.` How to sort HashMap with values](#12-how-to-sort-hashmap-with-values)
  * [Java Interview Program](#java-interview-program)
    * [Count duplicate character in a given string](#count-duplicate-character-in-a-given-string)
    * [Finding the first non-repeated character](#finding-the-first-non-repeated-character)
    * [Given two strings s1 and s2, determine if s2 contains a permutation of s1. In other words, return true if one of s1 permutation is a substring of s2, or false otherwise.](#given-two-strings-s1-and-s2-determine-if-s2-contains-a-permutation-of-s1-in-other-words-return-true-if-one-of-s1-permutation-is-a-substring-of-s2-or-false-otherwise)
    * [Write a Java program to reverse a given string](#write-a-java-program-to-reverse-a-given-string)
    * [Find the largest element  in an array](#find-the-largest-element--in-an-array)
    * [Write a java program to find out all the highest number in a array whose adjacent right number should be smaller.](#write-a-java-program-to-find-out-all-the-highest-number-in-a-array-whose-adjacent-right-number-should-be-smaller)
    * [Write a java program to find highest sum of product of two number in an array.](#write-a-java-program-to-find-highest-sum-of-product-of-two-number-in-an-array)
    * [Write a java program to find a count of each character in a given string.](#write-a-java-program-to-find-a-count-of-each-character-in-a-given-string)
    * [Write a java program to remove duplicates from a given array.](#write-a-java-program-to-remove-duplicates-from-a-given-array)
    * [Write a java program to remove duplicates from a given string.](#write-a-java-program-to-remove-duplicates-from-a-given-string)
    * [Write a java program to find a unique characters in a given string.](#write-a-java-program-to-find-a-unique-characters-in-a-given-string)
    * [Write a java program to find a given string is a palindrome or not without using third variable.](#write-a-java-program-to-find-a-given-string-is-a-palindrome-or-not-without-using-third-variable)
    * [Write a java program to reverse each word in a given string.](#write-a-java-program-to-reverse-each-word-in-a-given-string)
    * [Write a java program to rotate/transpose a give matrix into a 90 degree. (Please see attached image for input and output)](#write-a-java-program-to-rotatetranspose-a-give-matrix-into-a-90-degree-please-see-attached-image-for-input-and-output)
    * [Write a java program to insert given table data into a collection and print it. Choose best collection keep in mind time and space complexity. (Please see attached image for input and output).](#write-a-java-program-to-insert-given-table-data-into-a-collection-and-print-it-choose-best-collection-keep-in-mind-time-and-space-complexity-please-see-attached-image-for-input-and-output)
    * [Compute Sum And Average Of Given Array](#compute-sum-and-average-of-given-array)
  * [Code to check if a String is null as well as "" value](#code-to-check-if-a-string-is-null-as-well-as--value)
* [Convert String To Boolean](#convert-string-to-boolean)
    * [Using Boolean.parseBoolean()](#using-booleanparseboolean)
    * [Boolean.valueOf()](#booleanvalueof)
    * [Boolean.getBoolean()](#booleangetboolean)
    * [Conclusion Notes](#conclusion-notes)
    * [Find Second Largest Number In An Array](#find-second-largest-number-in-an-array)
<!-- TOC -->

# Java

## inheritance

### What is Inheritance

It is a mechanism of creating new classes using the classes that has already been defined. From this definition, we may think that the primary purpose of inheritance is to reuse code but which is not always true.

### why do we need inheritance

#### To achieve categorization

- Inheritance helps to group objects into categories for a specific purpose. E.g. a car, bus, trunk can be categorized as a type vehicle where each of those are unqiue but still have common properties of vehicle like having wheels that support rotation in left and right direction. It gives a clear understanding of the object and differences based on the categories.

#### To Achieve modularity

Modularity is the process of decomposing a program into a set of modules so as to reduce the overall complexity of the problem. Inheritance supports modularity by allowing us to create smaller sub classes where each sub class is solving some unique problem. For example we have a parent calculator class and we have two child classes performing basic and scientific calculations.

#### To Achieve clear representation of concepts and separation of concerns

Separation of concern means focusing on one thing at a time. There are two rules that can help to identify the concerns of a software development:

- The reason of change
- The frequency of change

Separating components based on the representation of concepts and areas of concerns can help in various ways like :

- Classes can be changed frequently based on the need without effecting the others
- Classes can be changed for different reasons without effecting the others

#### Implementation in Test Automation Framework

We can implement, when we create page classes to mimic the real world web pages. We create a base page class and derive all the child page object classes from that. Each page class can have its own responsibility and reason for change. Each page page class can reuse base class's common properties/methods.

### What are the different type of inheritance

#### Implementation Inheritance (Class Inheritance)

When we create a sub class, we extend parent class's functionality by inheriting the properties/methods. Code reuse and modularity are the benefits of implementation inheritance. But Sub class will be tightly coupled with the parent class. Any change in parent class may need the understanding of all the sub classes to avoid breaking them.

Example - Page classes derived from base page class

#### Interface Inheritance (Type inheritance)

Instead of inheriting from class we can also inherit from interface by implementing the methods defined in interface. This helps in removing the tight coupling between parent and child classes. Each child class can have its own implementation which may be similar but not same as the other classes. Need to be careful to not break the inherited classes by changing the interfaces or forcing the classes to implement a method which it does not need. We can not achieve direct code reuse here since interface can only declare methods but does not provide implementation.

Example - Driver interface with browser specific implementation classes

### How to achieve code reuse using inheritance

#### Using implementation inheritance

It is IS-A or IS-AN relationship between base and subtype. Page Object classes share IS-A relationship with Page Base class. This has a limitation, just consider a situation when new page classes are getting added to the application, we also need to add new page classes to the framework which may be difficult to manage and maintain in long run.

#### Using Composition

It is HAS-A/HAS-AN relationship between two classes.

### What are benefits of inheritance

### What are pitfalls of inheritance

- Tight binding between base class and its sub class
- Make code difficult to change
- Relationship cannot be changed at run time

### How can we use inheritance in a test automation framework

## Encapsulation

It is a process of binding data and methods that can control the data together into a single unit (class). The designer of the unit (class) can decide what kind of access it may allow to the outsiders and how that can be achieved. It is hiding of internal data and allows connecting with other components with predefined boundaries and contracts.

### why it is needed

The basic use of encapsulation is to hide the components of a class and their implementation. People who will use them doesn't need to know how they are working inside. It provides better security and also abstraction. With this isolation we can do a lot more with the data.

When we try to operate on public variables, one can set any values to them. For example, firstName can be set with null, a string with special characters or numbers.

Instead, if we have declared as private variables, then in the setter method we can do initial business checks before setting the values to the variables.

The same gets applied for getter methods. You have the control to return a default value if some variable is null or not in the desired state.

Basics: Methods bring better control than variables.

### How Encapsulation is different from Abstraction

- Abstraction hides complexity but encapsulation hides data by controlling the visibility
- Abstraction is more inclined towards design level where as encapsulation is more inclined towards implementation level
- Abstraction provides information about what a component supposed to do where as encapsulation helps to achieve it in a control manner using data binding with methods.

### How to implement Encapsulation

Here are some ways we can implement encapsulation in code:

- Using private variables
- Using getter and setter methods
- Using read only class (only getter methods with be provided)
- Using write only class (only setter method will be provided)

### Benefits of Encapsulation

- Encapsulation makes the code modular by binding data and methods to manipulate that data under one unit (class)
- it allow the designer to be flexible to take a call on what to protect and what to expose to the outside of the unit based based on design decisions
- Helps in maintaining data integrity by preventing unintentional data modification or corruption

### How to select right access level in the class

- We should declare the instance variable (attribute or fields) as private and provide public getter setters methods if we want to give controlled access to the calling class objects
- If we do not want to modify the state of the object, read only class (only with getter methods) can help
- Protected variables and methods should be used only if sub class absolutely needs those
- Internal methods used in a class as support methods to the main logics should be always private

### Is it possible to access private methods/properties from outside the class

- Answer is Yes and No. We cannot directly access private method/properties from outside the class. We should also understand reason behind adding private access.
- Some time, we may need to access private method/properties for unit testing purpose.
- In Java, we can reflection APIs to call a private method from another class

### How to use Encapsulation in a test automation

## Abstraction

## Array Data Structure, Strengths Weaknesses and Big O Complexity Analysis

### What is an array

Array organizes items sequentially, one after another in memory. The items could be Integer, String, Object. The items are stored in contiguous(adjacent to each other) memory locations.

### Strength

#### Fast Lookups (random access)

Retrieving the element at a given index takes O(1) time, regardless of array's length.

```
int [] A = {1,2,3,4,5};
```

if we access array elements using the index, like A[0] or A[4], it takes a single unit of time or, in big -O terms, constant operation. All of above operation consume single unit of time which is O(1) time.

#### Fast appends

Adding a new element at the end of the array takes O(1) time if the array has space.

```
int[] A = new int[5];

A[0] = 100;
A[1] = 101;
```

#### Simple Implementation

Arrays have a simple implementation, making them easy to understand and use.

#### Cache Friendliness

Elements in an array are stored contiguously in memory, which improves cache performance and can lead to faster access times.

### Weaknesses

There are some dis-advantages of using arrays, some of which are outlined below:

#### Fixed-size

Arrays have a fixed size defined at the time of creation. Adding or removing elements beyond the initial size requires creating a new array and copying the existing elements, which can be inefficient.

You need to specify how many elements you will store in your array ahead of time. (Unless you're using a fancy dynamic array).

#### Memory unused or wasted

If an array's size is larger than the number of elements it contains, memory is wasted.

Imagine an array with a capacity of 5. We have two elements to store in this array, and then we are wasting three unfilled cells and a waste of memory, which means 3\*(4 bytes) = 12 bytes of memory is wasted (integer takes 4 bytes).

#### Size doubling

Let us consider an array with a capacity of 5 elements. But the elements we want to store in this array are more, which means we have to double the size, create a new array, copy the old array elements and add new elements. The time complexity is O(n)

#### Costly inserts

Inserting/appending an element at the end of the array takes O(1) time.

But, inserting an element at the start/middle of the array takes O(n) time. If we want to insert something into an array, first, we have to make space by "scooting over" everything starting at the index we're inserting into, as shown in the image. In the worst case, we're inserting into the 0th index in the array (prepending), so we have to "scoot over" everything. That's O(n) time.

#### Costly deletes

Deleting an element at the end of the array takes O(1) time, which is the best case. we only care about the worse case scenarios when working on algorithms. But, when we remove an element from the middle or start of the array, we have to fill the gap by scooting over all the elements after it. This will be O(n) if we consider a case of deleting an element from the 0th index.

#### Big-O Complexities

- Lookup/Access a value at a given index `O(1)` - Accessing an element by its index is a constant-time operation.
- Search an element in an array `O(N)` - Searching for a specific element in an unsorted array requires iterating through each element in the worst case.
- Update a value at a given index `O(1)` - Updating any element at any given index is always constant time.
- Insert at the beginning/middle `O(N)` - Inserting an element at the beginning or middle of the array requires shifting the existing elements, resulting in a linear time complexity.
- Append at the end `O(1)` - If the array has space available, inserting an element at the end takes constant time.
- Delete at the beginning/middle `O(N)` - Deleting an element from the beginning or middle of the array requires shifting the remaining elements, resulting in a linear time complexity.
- Delete at the end `O(1)` - Deleting the last element of an array can be done in constant time.
- Resize array `O(N)` - Resizing an array requires creating a new array and copying the existing elements, which takes linear time.

### What is Abstraction

It refers to hiding non essential details. following questions can help to understand it better.

- Who is hiding what kind of details here and what did I mean by non essential detail?
- From whom do we want to hide those details?
- How we are going to hide those details?

Abstraction can be visualized with two forms

### Data Abstraction

The process of identifying only the required attributes of an object which discarding the irrelevant details is known as data abstractions. Example - In Java, HashMap or HashSet the implementation details are hidden from the users and provided only the operation to interact with the data type.

### Behavior Abstraction

### How abstraction helps

- It gives us ability to conceptualise things keeping the focus on what factors instead of how.
- It allows us to manage complexity at different levels (package, class, interface and method)
- It helps us to design simple with a provision expand later

### How abstraction is implemented

In an OOPs programming language, we can implement abstraction using interface or abstract class.

### When to use an abstraction class

if we need to have any default behavior in the base class and would like to force the sub classes to provided specific behavior.

### When to use an interface

- if the client wants to deal only with type without caring about actual implementation
- If the design is evolving with frequent changes, interface is preferable because it provides more design flexibility

#### Example 1 (Selenium Java Binding -> ChromeDriver implementation)

- **WebDriver** is an **interface** we use in Selenium
- **RemoteWebDriver** is a class which implements **WebDriver** interface
- **ChromiumDriver** is a class which extends from **RemoteWebDriver**
- **ChromeDriver** is a class which extends from ChromiumDriver

#### Example 2 (Creating test data parser for automation framework)

We need to design a test data parser support for a test automation framework. As of now, we need to support for excel or json files as data source. Design should be flexible to support any new test data source in future.

`TestDataParser interface`

```
 public interface TestDataParser{
    public void parseTestData();
 }

```

`JsonTestDataParser implementation`

```
 public class JsonTestDataParser implements TestDataParser{
    public void parseTestData(){
        //TBD
    }
 }

```

`ExcelTestDataParser implementation`

```
 public class ExcelTestDataParser implements TestDataParser{
    public void parseTestData(){
        //TBD
    }
 }

```

## Collection

The Java Collection framework is a collection of interfaces and classes which helps in storing and processing the data efficiently.

![Collections Framework hierarchy](/img/Java-collection-framework-hierarchy.png)

### List

A List is an ordered collection (sometime called a sequence). Lists may contain duplicate elements. Elements can be inserted or accessed by their position in the list using a zero based index

### ArrayList

ArrayList class implements List interface and it is based on an Array data structure. It is a resizable-array implementation of the **List** interface. It implements all optional list operations and permits all elements including **null**.

![Collections Framework hierarchy](/img/Java_ArrayList_tutorial.png)

#### Why ArrayList is better than Array

The limitation with Array is that it has fixed length so if it is full you can not add any more elements to it, if there are number of elements gets removed from it the memory consumption would be the same as it does not shrink.

ArrayList can dynamically grown and shrink after addition and removal of elements. It enables us to use predefined methods for different operations.

#### Create ArrayList

```
    ArrayList<String> arrayList = new ArrayList<>();  This statement creates an ArrayList with the name arrayList with type 'String'. The type determines which type of elements the list will have.
    ArrayList<Integer> integerArrayList = new ArrayList<>() This statement creates an ArrayList with the name integerArrayList that accepts int elements.
```

#### Add Element to an ArrayList

We add elements to an ArrayList by using **add()** method. This method has couple of variations, which we can use based on the requirement.

```
 arrayList.add("Pari"); Add element at the end of list
    System.out.println(arrayList);

    arrayList.add(0,"Govind"); To add element at the specified location in ArrayList, we can specify the index
    System.out.println(arrayList);
```

Index starts at 0

#### Change Element

Use the **set method** to change an element in the ArrayList. This method takes index and new element, this method updates element present at the given index with the new element.
arrayList.set(0,"Gopal");

**set()** method can only be used on index of existing range. for example if you try set(5,"Hari"), will throw index out of bound error.

#### Remove Element

**remove()** method to remove elements from an arrayList. It has two variations

```
arrayList.remove("Gopal"); remove first occurrence of element having value "Gopal"

arrayList.remove(2); remove element at index 2

```

#### Loop ArrayList

The correct way of displaying the elements is by using an **for loop** like this

```
for (String str:arrayList){
      System.out.println(str);
}
```

`Output: `
Pari
Shirsti
Aayu
Madhusudan

#### Sort ArrayList

**sort()** method in the Collections class, this class is a part of java.util package. It can be used to sort an ArrayList. It can sorted as list of String type alphabetically or numeric list as well as.

```
import java.util.Collections;
    Collections.sort(arrayList);
    for (String str:arrayList){
      System.out.println(str);
    }
```

```
    // Sorting the arrayList in reverse order or decreasing order
    Collections.sort(arrayList, Collections.reverseOrder());
    for (String str:arrayList){
      System.out.println(str);
    }
```

#### Compare two ArrayList

We have two ArrayList **arrayListFirst** and **arrayListSecond**. We will compare these ArrayLists using **contains()** method and store the comparison result in third ArrayList.

```
 ArrayList<String> arrayListFirst = new ArrayList<>();
    ArrayList<String> arrayListSecond = new ArrayList<>();

    arrayListFirst.add("Hi");
    arrayListFirst.add("How are you");
    arrayListFirst.add("Good Morning");
    arrayListFirst.add("Bye");
    arrayListFirst.add("Good Night");
    arrayListFirst.add("Yes");

    arrayListSecond.add("Howdy");
    arrayListSecond.add("Good Evening");
    arrayListSecond.add("Bye");
    arrayListSecond.add("Good Night");

    ArrayList<String> arrayListThird = new ArrayList<>();
    for (String temp: arrayListFirst)
      arrayListThird.add(arrayListSecond.contains(temp)? "Yes":"No");
    System.out.println(arrayListThird);
```

### How to Swap two elements in ArrayList

https://beginnersbook.com/2013/12/how-to-swap-two-elements-in-an-arraylist/

### How to convert an array to ArrayList

https://beginnersbook.com/2013/12/how-to-convert-array-to-arraylist-in-java/

### How to convert ArrayList to string array

https://beginnersbook.com/2013/12/how-to-convert-arraylist-to-string-array-in-java/

### Convert HashSet to a List/ArrayList

https://beginnersbook.com/2014/08/convert-hashset-to-a-list-arraylist/

### Convert a LinkedList to ArrayList

https://beginnersbook.com/2014/07/java-convert-a-linkedlist-to-arraylist/

### How to join/combine two ArrayLists

https://beginnersbook.com/2013/12/how-to-joincombine-two-arraylists-in-java/

### How to clone an ArrayList to another ArrayList

https://beginnersbook.com/2013/12/how-to-clone-an-arraylist-to-another-arraylist/

### How to empty an ArrayList

https://beginnersbook.com/2013/12/how-to-empty-an-arraylist-in-java/

### ArrayList trimToSize()

https://beginnersbook.com/2013/12/java-arraylist-trimtosize-method-example/

## LinkedList

## Vector

# Set

A Set is an interface collection that can not contains duplicate elements.

## HashSet

## LinkedHashSet

## TreeSet

# Map

A Map is an object that maps keys to values. A map cannot contain duplicate keys.

## HashMap

## TreeMap

## LinkedHashMap

## HashTable

# Iterator/ListIterator

Iterator and ListIterator are used to iterate through elements of a collection class. Iterator can traverse in one direction (forward) while ListIterator can traverse the collection class on both direction.

## Iterator and Comparator

## Comparable and Comparator

## Java Collection Questions

https://beginnersbook.com/java-collections-tutorials/

### HashMap

#### `1.` How to initialize a map with key as String and value as Integer

```
HashMap<String, Integer> map = new HashMap<>();
```

#### `2.` How to add and remove elements from HashMap

Add elements:

```
map.put("roll",1);

```

Remove elements:

```
map.remove("roll");
```

#### `3.` How to iterate through HashMap

        for (Map.Entry<String,Integer> e: map.entrySet()){
            System.out.println("Key : "+e.getKey()+ " Value : "+e.getValue());
        }

`Output : `
Key : roll Value : 1

#### `4.` Code to print HashMap key/value in console

```
import java.util.*;
public static void main(String[] args) {
         Map<Integer, String> map1 = new HashMap<Integer, String>();
               map1.put(1, "david");
                map1.put(2, "simon");
                map1.put(3, "mary");
                map1.put(4, "john");
                map1.put(5, "jane");

        System.out.println(map1);
    }
```

`Output : ` {1=david, 2=simon, 3=mary, 4=john, 5=jane}

#### `5.` Code to compare HashMap where key/values should be same and sequence should also be same

```
import java.util.*;

public class Map_Demo {
    public static void main(String[] args)
    {
        // Creating an empty Map
        Map<Integer, String> map1 = new HashMap<Integer, String>();
        Map<Integer, String> map2 = new HashMap<Integer, String>();

        // Mapping string values to int keys
        map1.put(1, "A");
        map1.put(2, "4");
        map1.put(3, "B");
        map1.put(4, "Welcomes");
        map1.put(5, "You");

        // Mapping string values to int keys
        map2.put(1, "A");
        map2.put(2, "4");
        map2.put(3, "B");
        map2.put(4, "Welcomes");
        map2.put(5, "You");

        // Displaying the Map1
        System.out.println("First Map: " + map1);

        // Displaying the Map2
        System.out.println("Second Map: " + map2);

        // Checking the equality
        System.out.println("Equality: " + map1.equals(map2));
    }
}
```

`Output : `
First Map: {1=A, 2=4, 3=B, 4=Welcomes, 5=You}
Second Map: {1=A, 2=4, 3=B, 4=Welcomes, 5=You}
Equality: true

#### `6.` Does Hashmap allow duplicate keys and values

HashMap does not allow duplicate key but allows duplicate values

#### `7.` Does Hashmap allow null key and values

HashMap allows null key but only once, multiple null values supported

#### `8.` Do HashMap is thread safe

HashMap is not thread safe as it is not synchronized

#### `9.` Does HashMap maintains insertion order

HashMap does not maintain insertion order, but TreeMap/LinkedHashMap maintains insertion order

#### `10.` Get all keys in HashMap

HashMap does not maintain insertion order, but TreeMap/LinkedHashMap maintains insertion order

#### `11.` How to sort HashMap with keys

TBD

#### `12.` How to sort HashMap with values

TBD

## Java Interview Questions

### Write a java program to find out all the highest number in a array whose adjacent right number should be smaller.

Input = [ 1,2,4,3,5,2] Output = [4,5,2]

### Write a java program to find highest sum of product of two number in an array.

Input = [2,3,6,5,8] Output = (8*6)+(5*3)+2 = 65
Input = [1,1,2,3,2,3,6,5,8] Output = (8*6)+(5*3)+(3\*2)+2+1+1 = 73

```
Input = [2,3,6,5,8] Output = (8*6)+(5*3)+2 = 65
Input = [1,1,2,3,2,3,6,5,8] Output = (8*6)+(5*3)+(3*2)+2+1+1 = 73

Solution:
             import java.util.Arrays;
public class SampleCodeClass {
      public static void main(String[] args) {
//          int[] arr = {2,3,6,5,8};
            int[] arr = {1,1,2,3,2,3,6,5,8};
            Arrays.sort( arr );
            int res = 0;
            if( arr.length == 2) res = res + (arr[0] * arr[1]);
            else {
                   int i = (arr.length-1);
                   for( ; i>=1; i--) {
                         if( arr[i] == 1 || arr[i-1] == 1) break;
                         res = res + ( arr[i-1] * arr[i] );
                         i--;
                   }
                   while( i>=0 ) {
                         res = res + arr[i];
                         i--;
                   }
            }
            System.out.println( res );
      }
}
```

### Write a java program to find a count of each character in a given string.

Input = “Automation Testing” Output = a=2,u=1,t=4,o=2,m=1,i=2,n=2,e=1,s=1,g=1

### Write a java program to remove duplicates from a given array.

Input = [2,3,6,5,8,2,3] Output = [2,3,6,5,8]

### Write a java program to remove duplicates from a given string.

Input = “automation” Output = automin

```
String str="automation";

char[] charArray=str.toCharArray();
Set<Character> uniqueCharacters=new HashSet<>();
for(int i=0;i<charArray.length;i++){
uniqueCharacters.add(charArray[i]);
}

System.out.println(uniqueCharacters);
```

### Write a java program to find a unique characters in a given string.

Input = “automation” Output = umin
Note: Without using any collection.

### Write a java program to find a given string is a palindrome or not without using third variable.

Input = “MADAM” Output = Yes

### Write a java program to reverse each word in a given string.

Input = “I am a automation tester” Output = tester automation a am I

### Write a java program to rotate/transpose a give matrix into a 90 degree. (Please see attached image for input and output)

### Write a java program to insert given table data into a collection and print it. Choose best collection keep in mind time and space complexity. (Please see attached image for input and output).
### Count duplicate character in a given string
You need to count the chaaracters in a strin (including spec characeters suc as #,$ etc).
**Solution:**
    - The first solution, iterate the string characters 
    - Use a Map to store the characters as keys and the number of occurences as values
    - if the current character was never added to Map, then add it as (character, 1)
    - If the current character exists in Map, then simply increase its occurrence by 1.


   ``` public static Map<Character,Integer> countDuplicateCharacters(String str){
        Map<Character,Integer> result = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.toLowerCase().charAt(i);
            result.compute(ch, (k,v)->(v==null)?1:++v);
        }
        return result;
    }
```

//compute is a Java method of a Map object, it takes a key and a function as arguments. In this case, the key is ch, and the function is a lambda expression (k,v)->(v==null)?1:++v.
//The lambda expression checks if the value associated with the key ch in the result map is null. If it is null, it assigns the value 1 to the key. If the value is not null, it increments the value by 1.
//In other words, this line of code is counting the occurrences of each character in a given string.

   ```public static void main(String[] args) {
        String str = "Abhay";
        System.out.println(countDuplicateCharacters(str));
    }
```
### Finding the first non-repeated character


### Given two strings s1 and s2, determine if s2 contains a permutation of s1. In other words, return true if one of s1 permutation is a substring of s2, or false otherwise.

Input: s1 = "ab", s2 = "eidbaooo"
output: true

We need to to find if any permutation of s1 is substring of s2. Sliding window technique: Use a sliding window approach to compare segments of s2 with s1.

### Write a Java program to reverse a given string

### Find the largest element  in an array


### Write a java program to find out all the highest number in a array whose adjacent right number should be smaller.

Input = [ 1,2,4,3,5,2] Output = [4,5,2]

### Write a java program to find highest sum of product of two number in an array.

Input = [2,3,6,5,8] Output = (8*6)+(5*3)+2 = 65
Input = [1,1,2,3,2,3,6,5,8] Output = (8*6)+(5*3)+(3\*2)+2+1+1 = 73

```
Input = [2,3,6,5,8] Output = (8*6)+(5*3)+2 = 65
Input = [1,1,2,3,2,3,6,5,8] Output = (8*6)+(5*3)+(3*2)+2+1+1 = 73

Solution:
             import java.util.Arrays;
public class SampleCodeClass {
      public static void main(String[] args) {
//          int[] arr = {2,3,6,5,8};
            int[] arr = {1,1,2,3,2,3,6,5,8};
            Arrays.sort( arr );
            int res = 0;
            if( arr.length == 2) res = res + (arr[0] * arr[1]);
            else {
                   int i = (arr.length-1);
                   for( ; i>=1; i--) {
                         if( arr[i] == 1 || arr[i-1] == 1) break;
                         res = res + ( arr[i-1] * arr[i] );
                         i--;
                   }
                   while( i>=0 ) {
                         res = res + arr[i];
                         i--;
                   }
            }
            System.out.println( res );
      }
}
```

### Write a java program to find a count of each character in a given string.

Input = “Automation Testing” Output = a=2,u=1,t=4,o=2,m=1,i=2,n=2,e=1,s=1,g=1

### Write a java program to remove duplicates from a given array.

Input = [2,3,6,5,8,2,3] Output = [2,3,6,5,8]

### Write a java program to remove duplicates from a given string.

Input = “automation” Output = automin

```
String str="automation";

char[] charArray=str.toCharArray();
Set<Character> uniqueCharacters=new HashSet<>();
for(int i=0;i<charArray.length;i++){
uniqueCharacters.add(charArray[i]);
}

System.out.println(uniqueCharacters);
```

### Write a java program to find a unique characters in a given string.

Input = “automation” Output = umin
Note: Without using any collection.

### Write a java program to find a given string is a palindrome or not without using third variable.

Input = “MADAM” Output = Yes

### Write a java program to reverse each word in a given string.

Input = “I am a automation tester” Output = tester automation a am I

### Write a java program to rotate/transpose a give matrix into a 90 degree. (Please see attached image for input and output)

### Write a java program to insert given table data into a collection and print it. Choose best collection keep in mind time and space complexity. (Please see attached image for input and output).

### Compute Sum And Average Of Given Array

```
    public static void main(String[] args) {

        int[] numbers = {2, -9, 0, 5, 12, -25, 22, 9, 8, 12};
        int sum = 0;
        Double average;

        // A for-each loop. It is used to iterate over an array or a collection.
        for (int number : numbers) {
            sum += number;
        }

        // Getting the length of the array.
        int arrayLength = numbers.length;

        // Change sum and arrayLength to double as average is in double
        average = ((double) sum / (double) arrayLength);

        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);
    }
```

## Code to check if a String is null as well as "" value

- `Solution 1 : using import org.apache.commons.lang3.StringUtils`

This code checks a string for null as well "" value:

```
public static void main(String[] args) throws ParseException {
        String dateInString = "10-Feb-23";

        SimpleDateFormat DateFor = new SimpleDateFormat("MMM dd, yyyy"); //output format May 31, 2022
        String stringDate = DateFor.format(dateInString);

        System.out.println(convertDateStringFormat(dateInString, "dd-MM-yy", "MMM dd, yyyy"));
}

    public static String convertDateStringFormat(String date_str, String fromFormat, String toFormat) {
        String retVal = null;
        SimpleDateFormat fromUser = new SimpleDateFormat(fromFormat);
        SimpleDateFormat myFormat = new SimpleDateFormat(toFormat);
        try {
            retVal = myFormat.format(fromUser.parse(date_str));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return retVal;
    }
```

# Convert String To Boolean

### Using Boolean.parseBoolean()

This method returns an equivalent boolean value of given String, for example, if you pass "true" it will return the primitive boolean value true. Similarly, if you pass "false" it will return false. It is case insensitive, which means if you pass "true", "TRUE", or "True" you will still get a true boolean value. It doesn't throw an exception if you pass any String value other than true and false. For example, if you pass "YES" it will return false, which is not obvious but that's still better than throwing an exception like NumberFormatException.

parseBoolean returns a boolean primitive value

```String value = "true";
        boolean b = Boolean.parseBoolean(value);
        System.out.println(b);
        value = "True";
        b = Boolean.parseBoolean(value);
        System.out.println(b);

        value = "false";
        b = Boolean.parseBoolean(value);
        System.out.println(b);
```

### Boolean.valueOf()

The Boolean.valueOf() method work similar, it returns a true boolean value for a non-null String equal to true, ignoring case and returns false for everything else. It also returns a Boolean object instead of a primitive boolean value.

```
     // valueOf returns a Boolean object
     String data = "false";
     boolean f = Boolean.valueOf(data);
     System.out.println(f);

     data = "true";
     f = Boolean.valueOf(data);
     System.out.println(f);

     data = "TRUE";
     f = Boolean.valueOf(data);
     System.out.println(f);
```

### Boolean.getBoolean()

It accepts a String and returns a boolean.

```
        System.setProperty("CODING_IS_FUN", "true");
        Assert.assertTrue(Boolean.getBoolean("CODING_IS_FUN"));
```

### Conclusion Notes

- You should always use valueOf() method because Boolean instances are immutable and just two instances are enough to cover all scenarios.
- The parseBoolean() method returns a primitive boolean value while the valueOf() returns a Boolean object
- Though in the age of auto-boxing, a Boolean can easily be stored in a boolean variable, this is an important difference which you should remember.
- Another benefit of using the valueOf() method is that it caches the boolean value and returns the already created Boolean.TRUE and Boolean.FALSE value
- instead of creating a new instance every time.
- If you don't need a new instance of the Boolean object then you should always use Boolean.valueOf() method to create Boolean objects to get better performance.

### Find Second Largest Number In An Array

**Restriction**

- Can't use sort() method

- `TO Write`

```
public static void main(String[] args) {
    int[] numberArray = {5, 6, 7, 0, 2, 3, 90};
    int large = numberArray[0];
    int secondLargest = numberArray[0];

    for (int iLoop = 0; iLoop < numberArray.length; iLoop++) {
      // Checking if the current element is greater than the largest element. If it is, then it is assigning the
      // largest element to the secondLargest element and the current element to the largest element.
      if (numberArray[iLoop] > large) {
        secondLargest = large;
        large = numberArray[iLoop];
      // This is checking if the current element is greater than the secondLargest element. If it is,
      // then it is assigning the current element to the secondLargest element.
      } else if (numberArray[iLoop] > secondLargest) {
        secondLargest = numberArray[iLoop];
      }
    }
    System.out.println(secondLargest);
  }
```
