<!-- TOC -->
* [API Related Terms](#api-related-terms)
    * [Endpoint](#endpoint)
    * [Origin Server](#origin-server)
    * [Proxy Server](#proxy-server)
    * [DNS Server](#dns-server)
    * [API Key](#api-key)
    * [API Token](#api-token)
    * [Access Token](#access-token)
    * [SDK](#sdk)
    * [RPC](#rpc)
    * [CORS](#cors)
    * [Async API](#async-api)
    * [Internal API](#internal-api)
    * [API Caching](#api-caching)
    * [External API](#external-api)
    * [HTTP Cookies](#http-cookies)
    * [Authorization](#authorization)
    * [Microservices](#microservices)
    * [OpenAPI spec](#openapi-spec)
    * [Composite API](#composite-api)
    * [API Versioning](#api-versioning)
    * [Authentication](#authentication)
    * [API Lifecyle](#api-lifecyle)
    * [API-first approach](#api-first-approach)
    * [API Gateway](#api-gateway)
    * [HATEOAS](#hateoas)
    * [What is an API](#what-is-an-api)
  * [How to Test API](#how-to-test-api)
      * [What to validate in an API](#what-to-validate-in-an-api)
        * [Response Code](#response-code)
        * [Response Time](#response-time)
        * [Response Format](#response-format)
        * [Authentication](#authentication-1)
        * [Input Validation](#input-validation)
        * [Error Handling](#error-handling)
        * [Data Integrity And Validation](#data-integrity-and-validation)
        * [Header Validation](#header-validation)
        * [Security](#security)
        * [Rate Limiting](#rate-limiting)
        * [Concurrency](#concurrency)
        * [Compatibility](#compatibility)
        * [Versioning](#versioning)
        * [Caching](#caching)
        * [Pagination](#pagination)
  * [How To Do PreRequisite In API Test](#how-to-do-prerequisite-in-api-test)
  * [Rest API](#rest-api)
    * [REST Stands for Representational State Transfer](#rest-stands-for-representational-state-transfer)
    * [Rest API Constraints](#rest-api-constraints)
    * [HTTP Headers](#http-headers)
    * [Widely used HTTP Headers](#widely-used-http-headers)
    * [HTTP Status codes - Server always returns HTTP Status code with the response](#http-status-codes---server-always-returns-http-status-code-with-the-response)
      * [Successful Responses](#successful-responses)
      * [Redirection Messages](#redirection-messages)
      * [Client Error](#client-error)
      * [Server Error](#server-error)
    * [HTTP Request Methods](#http-request-methods)
    * [How to test APIs](#how-to-test-apis)
    * [Types of API](#types-of-api)
    * [Further Reading](#further-reading)
    * [End point: Address where API is hosted on the Server.](#end-point-address-where-api-is-hosted-on-the-server)
    * [How to send input data in GET?](#how-to-send-input-data-in-get)
    * [How to send input data in POST?](#how-to-send-input-data-in-post)
    * [Resources:](#resources)
    * [Path Parameters:](#path-parameters)
    * [Query Parameters:](#query-parameters)
    * [Headers/Cookies:](#headerscookies)
    * [End Point Request URL can be constructed as below](#end-point-request-url-can-be-constructed-as-below)
<!-- TOC -->

# API Related Terms

### Endpoint

An Endpoint is nothing but the location(URL) where the actual resource is present.

### Origin Server

The Origin server is the actual server that contains the data and servers on the clients request. There may or may not be other intermediate servers included in teh path.

### Proxy Server

Servers have the ability to further pass your request to the other server

### DNS Server

DNS stands for Domain Name System. As computer devices are interacted using IP addresses, the DNS server provides the IP address of the requested URL.

### API Key

An API key, is a unique code for every user which lets you call an API. The length of an API key could be anything. The only rule is that these keys must be unique and not easy to guess. Generally, API keys contains lower case and upper case letters with numbers.

### API Token

The API Token is a unique identifier of an application requesting access to your API. An API token is a form of authentication similar to username/password.

### Access Token

An access token is used for authentication. Applications use an access token to authenticate themselves so that they can make an API Call.

### SDK

SDK stands for Software Development Kit. It is a set of development tools that allow the creation of software or an application for a particular platform. It provides you with the whole package from compilers to debuggers to even a software development framework.

### RPC

Remote Procedure Calls (RPC) is the oldest client-server communication method in use today. Instead of traditional HTTP call, RPC uses a function call. It means that on the client side, you invoke a function that is written on the server side code.

### CORS

CORS (Cross Origin Resource Sharing) is an HTTP based mechanism that lets you request data from one URL to different URL. It allows restricted resources on a webpage to be requested from another domain from which the first resource was served. It enables the browser to check with server and receive permission to access the requested resource based on the security policy configured on the server.

![Data Flow between Input & React](/img/CORS.PNG)

### Async API

Async API is an open source project aimed at improving the current state of Event-Driven architecture. These APIs allow relatively time consuming requests to be processed in the background while other requests are made.

### Internal API

Internal API, are also know as Private API is only accessible to the developers within an organization.

### API Caching

API Caching is the ability to store copies of frequently accessed data in several places along the request-response path.

### External API

External API, alos known as Public API is accessible to all the developers outside the enterprise or organization.

### HTTP Cookies

An HTTP Cookie is a small piece of data created by the web server inside your browser. The data inside a cookie has an ID that is unique to you and your computer. This ID helps the server know who the user is to send the data accordingly.

### Authorization

Authorization always comes after authentication. It is the process of permitting users to access different resources from the server and it is not visible and changeable by the user.

### Microservices

A microservices is an application design that breaks up a monolothic architecture into small, self containing services.

### OpenAPI spec

It is a format to define structure and syntax of REST APIs. It provides a standard that allow both humans and computers to discover and understand the service's capabilities without access to source code, documentation or traffic inspections.

### Composite API

Composite API is a design approach in which we bundle multiple API requests into a single API Call.

### API Versioning

API versioning is the practice of managing changes in your API. You should version your API if you are introducing any breaking changes. CLients can still access the old version, and their products will not break as soon as you launch a new release.

### Authentication

Authentication and authorization are the two most confusing terms. Authentication is validating the user to identify if they are who they claim to be.

### API Lifecyle

API Lifecycle is the entire lifespan of any particular API from its planning phase to when its gets stale.

### API-first approach

The API first approach ensures that all the functionality of an application is accessed through APIs. This approach involves designing every API around a contract written in an API description language. For example, OpenAPI specification.

### API Gateway

An API gateway is a component or tool of an API management approach. Gateways are used as entry point for client requests. This allow them to facilitate requests, combine results and handle things like authentication.

### HATEOAS

Hateoas stands for Hypermedia As The Engine of Application State. Hateoas defines that clients should be provided with hypermedia, in response to a particular request, which help them to use or explore further points of an API.

### What is an API

An API (Application Programming Interface) is a set of protocols that allow application software and their services to communicate with each other. It allow the application to interact with external services.

The REST (Representationl State Transfer) API design is a set of architectural constraints that every RESTful API must adhere to. RESTful APIs differ from SOAP APIs in that SOAP is a protocol while REST is simply an architectural sytle.

API Testing Approach is a predefined strategy or a method that the QA team will perform in order to conduct the API testing after the build is ready. This testing does not include the source code. The API testing approach helps to better understand the functionalities, testing techniques, input parameters and the execution of test cases.
Following points helps the user to do API Testing approach:

Understanding the functionality of the API program and clearly define the scope of the program

❇️Apply testing techniques such as equivalence classes, boundary value analysis, and error guessing and write test cases for the API

❇️Input Parameters for the API need to be planned and defined appropriately

❇️Execute the test cases and compare expected and actual results.

## How to Test API

API automation testing should cover at least following testing methods apart from usual SDLC process

🎈 Discovery testing: The test group should manually execute the set of calls documented in the API like verifying that a specific resource exposed by the API can be listed, created and deleted as appropriate

🎈 Usability testing: This testing verifies whether the API is functional and user-friendly. And does API integrates well with another platform as well

🎈 Security testing: This testing includes what type of authentication is required and whether sensitive data is encrypted over HTTP or both

🎈 Automated testing: API testing should culminate in the creation of a set of scripts or a tool that can be used to execute the API regularly

🎈 Documentation: The test team has to make sure that the documentation is adequate and provides enough information to interact with the API. Documentation should be a part of the final deliverable

Best Practices of API Testing:

API Test cases should be grouped by test category
On top of each test, you should include the declarations of the APIs being called.

Parameters selection should be explicitly mentioned in the test case itself Prioritize API function calls so that it will be easy for testers to test Each test case should be as self-contained and independent from dependencies as possible Avoid “test chaining” in your development Special care must be taken while handling one-time call functions like – Delete, CloseWindow, etc…
Call sequencing should be performed and well planned
To ensure complete test coverage, create API test cases for all possible input combinations of the API.
Types of Bugs that API testing detects
Fails to handle error conditions gracefully
Unused flags
Missing or duplicate functionality
Reliability Issues. Difficulty in connecting and getting a response from API.
Security Issues
Multi-threading issues
Performance Issues. API response time is very high.
Improper errors/warning to a caller
Incorrect handling of valid argument values
Response Data is not structured correctly (JSON or XML)

#### What to validate in an API

##### Response Code

We need to check `response status` code. This will vary depending upon what your test case is. Verify that API returns appropriate HTTP status codes for different scenarios.

##### Response Time

Time is essence in this world. Verify that the API responds in reasonable amount of time, ensuring that performance meets expectations. Expectations has to be set via a SLA that needs to be set by Product Owner. `Content-Type` header in the request or response is added to tell the server or browser or the medium which is serving the resource to the end user about the media type of the request or response. `Content-Type` header is a string that is sent along with request or response.

##### Response Format

Verify that API returns response in the expected format (e.g. JSON, XML etc) with correctly formatted data. This can be done by either validating he data format using the `content-type` header.

##### Authentication

Verify that API requires proper authentication and authorization ensuring that only authorized users can access protected resources. Broken authentication is one of the prime reason of applications getting hacked.

##### Input Validation

Verify that API properly validates input data, ensuring the invalid data is not accepted or processed. If the input data needs to be sanitised or encoded before being sent to payload, be sure to test those scenarios too.

##### Error Handling

An API may return a error response in many conditions - incorrect auth, resource crunch, invalid input data or the server being busy or being unavailable to process the response.Verify that API properly handles errors and error error response is descriptive enough for user to understand, but should hide critical implementation.
`Example of good error message:`

```
{
    "error": true,
    "message": "Sorry, we couldn't process your request. Please try again later or contact support for assistance."
}
```

`Example of not so good error message` :

```
{
    "error": {
        "message": "An error occurred while processing your request.",
        "code": 500,
        "stackTrace": "java.lang.NullPointerException at com.example.api.MyController.doSomething(MyController.java:25) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) at ..."
    }
}
```

##### Data Integrity And Validation

Verify that API properly stores and retrieves data, ensuring that data is not corrupted or list. One way of doing this is by validating that the data confirms to given JSON Schema. If the output is deviating from a given schema, then we can debug to see if there are bugs that may creep into system due to this.

##### Header Validation

APIs contain header information - both in the request and the response. It is always a good idea to validate the header that are sent in request or response using appropriate tests.

Suppose you have an API endpoint /users that returns a list of users. The API is expected to return a Content-Type header with the value application/json and a Cache-Control header with the value public, max-age=60. So you can test that in Postman or using DSL like Rest Assured

```
public void testContentTypeHeader() {
       given()
       .when()
           .get("/users")
       .then()
           .statusCode(200)
           .contentType("application/json");
```

Let’s say you have an API – `/file-upload`, where the functionality is to upload a file. You can add tests in your test suite that the content-type header in this scenario, should not be ` application/json` – it should be either `multipart/form-data` something like that based on the file type you’re uploading.

##### Security

You can verify that the API follows best practices for secure communication (e.g. using HTTPS), protecting sensitive data. You can do simple checks like checking for HTTPS -> HTTP traffic. Validate if the no-referrer-when-downgrade header is available and if so, the HTTPS->HTTP traffic should return either an error, a warning or the sensitive information should be masked etc.

##### Rate Limiting

It is a good idea to test for rate limiting. Rate Limiting and API throttling allows you to ensure that the API in question is not abused.

##### Concurrency

Verify that the API is capable of handling multiple requests simultaneously, without affecting performance or functionality

##### Compatibility

##### Versioning

##### Caching

##### Pagination

Verify that the API supports pagination where appropriate, allowing users to retrieve large amounts of data in manageable chunks. pagination tests in api. Pagination tests in APIs are important to ensure that the API returns the correct subset of data based on the requested page and page size.

## How To Do PreRequisite In API Test

I have two API test cases. TC1 makes a POST call and generates an Order ID. TC2 makes a DELETE call. TC2 needs the Order ID from TC1 so that it can be deleted. How do I pass it?"

It is a common scenario, but I see many engineer creating an instance variable for the Order ID and share it among test cases. Additionally, some kind of test dependencies or priorities is set so that the tests execute in a specific order (POST -> UPDATE -> DELETE).

Above solution have pitfalls -

❌ This will work well only when all tests are passing. But when an intermediate test fails, it will have undesired side effects.
❌ A majority of tests will be skipped.
❌ Since using a shared static variable, there will be chances of data leakage.
❌ There will be challenges passing the same Order ID across test classes.

A better approach, keep my tests independent and have each of test generate their own test data (Order ID).

The guiding principles are simple:
✅A test must not fail or skip an unrelated test.
✅A test should prepare its own test data. No data sharing among tests.
✅Avoid using instance static variables.

Yes, We need to add few extra API calls but that's ok given the advantages in test script stability.

How to accomplish this?
I would create reusable methods for POST, DELETE, etc. and use those wherever required in my test cases.

For e.g.

A test for DELETE would look like this:

```
String Id = postOrder().get("Id"); //call createOrder api
assertThat(deleteOrder(Id).getStatusCode(), equalsTo(200)); //call delete order ID
```

A test for UPDATE would look like this:

```
String Id = postOrder().get("Id");
assertThat(updateOrder(Id).getStatusCode(), equalsTo(200));
```

With this, even if the DELETE test fails, UPDATE would not be skipped. It will be executed and any potential issue with UPDATE would also be unearthed. Both tests will run independently and would add to reliability. There is no data sharing, so no chances of data leakage as well. You can even run those tests in parallel to save time if need be.

## Rest API

### REST Stands for Representational State Transfer

It works on simple Request/Response system.
An API is an Application Programming Interface. It is a set of rules that allow programs to talk to each other. The Developer creates the API on the server and allows the client to talk to it. It is a set of programming code that enables data transmission between one software product and another. It also contains the terms of this data exchange.

| Request                                                                                                                 | Response                                                                          |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1. Client can make a request using HTTP Methods. HTTP methods are GET, POST, PUT, DELETE, HEAD, TRACE, OPTIONS, CONNECT | Server returns a response with an HTTP Status code.Ex 200, 202, 403, 404, 500 etc |
| 2. HTTP Request contains -> Request method, HTTP Headers, Body                                                          | HTTP Response contains Status code, HTTP Headers, Response Body                   |

### Rest API Constraints

- Client-Server Architecture (No Third party interactions)
- Uniform Interface (Follow a Common Protocol)
- Cacheability (respone can be cacheable)
- Layering (Multiple Intermediaries between client and server)
- Statelessness (There is no state, client and server are separated)

### HTTP Headers

Client and Server can pass extra bit of information with the request and response using HTTP Headers. it is divided in four parts

- **`Request Headers :`** client to Server
- **`Response Headers :`** Server to client
- **`Representation Headers :`** Information about the body of the resource
- **`Payload Headers :`** Information about the payload data

### Widely used HTTP Headers

- **`Accept : `** Type of data client can understand
- **`Content-Type : `** Specifies the media type of the resources
- **`Accept-Encoding : `** Which encoding method client can understand
- **`Host : `** Specifies the domain name
- **`Authorization : `** Used to pass credentials so that server can authenticate
- **`Access-Control-Allow-Origin : `** Which origin is allowed to access the resource
- **`Accept-Language : `** Client is expecting the response in the mentioned language
- **`Access-Control-Allow-Methods : `** Which methods are allowed to access the cross-origin resources

### HTTP Status codes - Server always returns HTTP Status code with the response

#### Successful Responses

- **`200 OK : `** Everything is Fine
- **`201 Created : `** New resources was created

#### Redirection Messages

- **`301 Moved Permanently : `** Response has been moved permanently to the new URL

#### Client Error

- **`400 Bad Request : `** Invalid Syntax
- **`4011 Unauthorized : `** Credentials are incorrect
- **`4003 Forbidden : `** You don't have permission to access the resource
- **`404 Not Found : `** Invalid URL
- **`400 Too Many Requests : `** User has sent too many requests in a given amount of time

#### Server Error

- **`500 Internal Server Error : `** Server does not know How to handle the unexpected situation

### HTTP Request Methods

- **`GET : `** The Get method is the most common of all these request methods. it is used to fetch the desired resource from server.
- **`POST : `** The Post method is used to submit the server. As we are submitting data, the p ost method often changes the state of the server.
- **`PUT : `** The PUT method is used whenever you need to change the resource. The resource which is already a part of resource collection.
- **`PATCH : `** The Patch request method is used to modify only the necessary part of the data or response. It does not modify the entire response
- **`DELETE : `** Delete request is used to delete the specified resource. It request that origin server delete the resource identified by the request URL.

### How to test APIs

One need to understand what that respective API does, test validation of the input fields while making a request and verify that you are getting the expected data in the response. One can also check the data integrity between the APIs by creating contracts between APIs.

For Example - if user deletes something using the Delete API, you can test by fetching the same record using GET API and expect that no records are returned in the response.

### Types of API

- **Public API** - Available to any third party developers. APIs are publicly available to developers and user with minimal restriction. They may require registration, use of an API key or OAUTH or maybe completely open.

- **Partner API** - APIs exposed by/to strategic business partners. They are not available publicly and need specific entitlement to access them.

- **Private API** - APIs are hidden from external users and only exposed by internal systems. These are not meant for consumption outside of the company but rather for use across different internal development teams for reuse of services.

### Further Reading

- **Access Control HTTP Header**
- **Caching in API Calls**

### End point: Address where API is hosted on the Server.

### How to send input data in GET?

Ans: Using Query Parameters

### How to send input data in POST?

Ans: Using Form Parameters /Body Payload

### Resources:

Resources represent API/Collection which can be accessed from the Server. Example :

Google.com/maps
google.com/search
google.com/images

### Path Parameters:

Path parameters are variable parts of a URL path. They are typically used to point to a specific resource within a collection, such as a user identified by ID

https://www.google.com/Images/1123343
https://www.google.com/docs/1123343
https://amazon.com/orders/112

https://www.google.com/search?q=newyork&oq=newyork&aqs=chrome..69i57j0l7.2501j0j7&sourceid=chrome&ie=UTF-8

### Query Parameters:

Query Parameter is used to sort/filter the resources. Query Parameters are identified with "?"

https://amazon.com/orders?sort_by=2/20/2020

### Headers/Cookies:

Headers represent the meta-data associated with the API request and response. In layman terms, we were sending Additional details to API to process our request.
Example : Authorization details

### End Point Request URL can be constructed as below

Base URL/resource/(Query/Path)Parameters
