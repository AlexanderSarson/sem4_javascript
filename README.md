# Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript 

 

Explain and Reflect: 

##    Explain the differences between Java and JavaScript + node. Topics you could include: 

Java is a compiled language where as JavaScript is a scripted language which means that Java needs to be translated from high-level programming language to a lower level language. Java compiles down to bytecode where the JVM (Java Virtual Machine) will compile the bytecode down to machine code or it may choose to interpret it directly. If the code gets executed often then it will be compiled to machine code by JVM. 

JavaScript is a scripting language which means that the code will be executed one line at a time by an interpreter. JavaScript can run in the browser or directly on the server with node.js which is built on top of Chrome’s V8 JavaScript Engine. 

 

##    Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system. 

Node.js makes it possible to run JavaScript directly on the server/client by utilizing Chrome’s V8 Engine. 
It’s highly targetet against async programming by using Non-Blocking I/O which it handles by being event driven. It’s also easily scalable. 

It makes sense to use node.js when you want to: 

    Applications involving a  lot of IO 

    Real Time chat Server 

    Web Servers 

    REST Servers 

    Streaming Servers 

    Games 

It does not make sense to use node.js when: 

    Heavy CPU intensive Applications 

NPM stands for Node Package Manager and it’s an online repository for open-source node.js projects.  
It helps with package installation, version management and dependency management. 

 

##    Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers. 

The event loop in JavaScript is responsible for executing code, collecting and processing events, and executing queued sub-tasks. 
The event loop makes it possible for JavaScript to run async code(non-blocking) because it hands over async tasks to different API’s, this might be the filesystem API which will execute the task and when it’s done it will hand the task over to the call back queue. 

This is what makes node.js so great because by utilizing async functions in our code it will greatly speed up our application because we don’t have to sit around and wait for a HTTP request but the task will be handed over to our queue when we’ve received a response. 

 

##    What does it mean if a method in nodes API's ends with xxxxxxSync? 

It means that function will execute synchronously and it will block our code untill it has completed. 

 

##    Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two) 

The two most popular JavaScript engines are V8 (Chrome and node.js) and SpiderMonkey (firefox). 

There is Brower runtime environments and node.js runtimeenvironment 

    The Javascript engine till parse the code and convert it to runnable commands. 
     

    The JavaScript runtime environment will provide objects to JavaScript so it can interact with the outside world(API’s, like filesystem). 

 

##    Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises. 

Babel is a compiler used in JavaScript to make code backwards compatible so older browsers or environments can run the code 

The main things is does: 

    Transform syntax 

    Polyfill features that are missing in your target environment 

    Source code transformations 

Webpack is a static module bundler for modern JavaScript applications. 
You must provide it with an entry point and webpack will walk up and down your program and figure out how to bundle it. It will build a dependency graph and identify all your files to bundle(png, js, html, sass, etc). 

Webpack can use babel to make your code backwards compatible while it bundles it. 

Look in folder week04 for examples  

# Explain using sufficient code examples the following features in JavaScript (and node) 

##    Variable/function-Hoisting 

Hoisting will move variables and function declarations to the top of the current scope. 
Variables defined with let and const are hoisted too but not initialized so you can’t used them before they are assigned a value. 

##    this in JavaScript and how it differs from what we know from Java/.net. 
      

    It has different values depending on where it is used:

    In a method, this refers to the owner object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), and apply() can refer this to any object.
    
    ### see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this for examples



##    Function Closures and the JavaScript Module Pattern 

A closure is the combination of a function bundled together with references to its surrounding state(backpack / lexical environment) it can give access to other functions or variables . 
#### Example (JavaScript Module Pattern):
It is used to define objects and specify the variables and the functions that can be accessed from outside the scope of the function. We expose certain properties and function as public and can also restrict the scope of properties and functions within the object itself, making them private. This means that those variables cannot be accessed outside the scope of the function. We can achieve data hiding an abstraction using this pattern in the JavaScript.
```javascript
function EmployeeDetails() {
  var name: "Mayank";
  var age = 30;
  var designation = "Developer",
  var salary = 10000;


  
  return {
    name: name,
    age: age,
    designation: designation
  }
}

var newEmployee = EmployeeDetails()
var userName = newEmployee.name;
var userAge = newEmployee.age;
var userDesignation = newEmployee.designation;

// This will result in "undefined" value
var userName = newEmployee.salary;
```
##    User-defined Callback Functions (writing functions that take a callback) 
```javascript
function callbackExample(number, callback){
  return callback(number)
}
function cb(number){
  return number * number
}

callbackExample(5,cb)
// returns 25
```

##    Explain the methods map, filter and reduce 
```javascript
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Christian", "Ib", "Thomas"];
//Filter
let Filter = names.filter(name => name.length <= 3); //returns [Jan, Bo, Ib]

//Map
var upperNames = names.map(function(name){
    return name.toUpperCase(); //Returns [ 'LARS','JAN','PETER','BO','FREDERIK','CHRISTIAN','IB','THOMAS' ]
 }) 
  
//Reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```
##    Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6) 
```javascript
    function Person(name, age) {
        var name = name;
        var age = age;

        return {
            setName: function(value) {
                name = value;
            },
            setAge: function(value) {
                age = value;
            },
            getInfo: function() {
                return {
                    name: name,
                    age: age
                }
            }
        };
    }

    module.exports = Person;
```

##    Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,   maps/sets etc. 
### let
```javascript
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```
### arrow functions
```javascript
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```
### destructuring arrays
```javascript
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```
### destructuring rest parameter
```javascript
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```
### destructuring objects
```javascript
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"
```
### Maps and sets
```javascript
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: undefined
```

```javascript
let myMap = new Map()

// Add new elements to the map
myMap.set('bar', 'foo')
myMap.set(1, 'foobar')

// Update an element in the map
myMap.set('bar', 'baz')
```

##    Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6. 
JavaScript supports only prototypal inheritance with one type of abstractions: objects
Java Supports classical object-oriented programming have two types of abstractions: classes and objects. 
```javascript
class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}class Car extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
 
}let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car
```

##    Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events 

```javascript
const EventEmitter = require('events')

class DOS_Detector extends EventEmitter{
  constructor(timeValue){
    super();  //Figure out what it is you have to extend (use moshes video)
    this.urls = new Map();
    this.TIME_BETWEEN_CALLS = timeValue;
  }
  addUrl = (url) =>{
    const time = new Date().getTime();
    if(this.urls.has(url)){
      const deltaTime = time - this.urls.get(url) 
      if(deltaTime < this.TIME_BETWEEN_CALLS){
        console.log("TODO: Fire the 'DosDetected' event")
        //Add this info to the event {url:url,timeBetweenCalls:deltaTime}
        this.emit('DOS_message', {url:url,timeBetweenCalls:deltaTime})
      }
    }
    this.urls.set(url,time);
  }
}
// Export the class using nodes CommonJS module system (require/exports)
module.exports = DOS_Detector
```

```javascript
const http = require('http');
const osInfo = require("./os-info")
const DOS_Detector = require('./dos-detector');
const dos_Detector = new DOS_Detector(9000);

const server = http.createServer((req, res) => {
  dos_Detector.addUrl(req.url)
  console.log(req.url)
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(osInfo()))
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  console.log(sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');

//Register for the "DosDetected" event and console.log the url and time info.
dos_Detector.on('DOS_message', (args) => {
  console.log('DDOS', args)
});


```

# ES6,7,8,ES-next and TypeScript
## Provide examples with es-next, running in a browser, using Babel and Webpack
## Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
Babel and ES6 + ES-Next makes it possible to use the newest features of the JavaScript language on older browsers and nodejs environments because it converts the new features into backwards compatible versions of JavaScript.
TypeScript simplifies JavaScript code, making it easier to read and debug, it provides static checking by helping you finding bugs because you can assign types to variables so you are always sure what input your functions and variables contains
## Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
### classes
```javascript
/*
A) The declaration below defines a Shape class, 
which as it's only properties has a color field +  a getArea() and a getPerimeter() function which both returns undefined. 
This is the closest we get to an abstract method in Java.
*/

abstract class Shape {
  private _color: string;
  constructor(color: string) {
    this._color = color;
  }
  abstract get area(): number;
  abstract get perimeter(): number;
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color;
  }
  toString(): string {
    return `Shape with color ${this._color}`;
  }
}
//let shape = new Shape("blue");

// B) Create a new class Circle that should extend the Shape class.
/*
Provide the class with:
A radius field
A constructor that takes both colour and radius.
Overwritten versions of the methods defined in the Base
Getter/Setter for radius
Test the class constructor, the getters/setters and the three methods.
*/
class Circle extends Shape {
  private _radius: number;
  constructor(color: string, radius: number) {
    super(color);
    this._radius = radius;
  }
  get area(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
  get perimeter(): number {
    return 2 * Math.PI * this._radius;
  }
  get radius(): number {
    return this._radius;
  }
  set radius(radius: number) {
    this._radius = radius;
  }
}
```
### Generics
```javascript

/**
 * a) Implement a generic function which will take an array of any kind,
 * and return the array reversed (just use the built-in reverse function),
 * so the three first calls below will print the reversed array, and the last call will fail.
 */
function reverseArr<T>(arg: T[]): T[] {
  return arg.reverse();
}
console.log(
  reverseArr<string>(["a", "b", "c"])
);
console.log(
  reverseArr<number>([1, 2, 3])
);
console.log(
  reverseArr<boolean>([true, true, false])
);
```
```javascript

// b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:

class DataHolder<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }
  get value(): T {
    return this._value;
  }
  set value(value: T) {
    this._value = value;
  }
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
```
### Interfaces
```javascript
// a Create a TypeScript interface IBook, which should encapsulate information about a book
  interface IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
  }

  class Book implements IBook {
    title: string;
    author: string;
    published?: Date | undefined;
    pages?: number | undefined;
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
  }
  const book = new Book("Harry Potter", "J.K. Rowling");
  console.log("f: ", book);
  book.pages = 300;
  console.log("f: ", book);
```

## Explain how we can get typescript code completion for external imports.
npm install -g typescript
## Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)
    Stage 0: Strawperson — to allow input into specifications
    Stage 1: Proposal — make the case for the addition, describe the solution and identify the potential challenges
    Stage 2: Draft — describe the syntax and semantics using formal spec language
    Stage 3: Candidate — states that further refinement will need feedback from implementations and users
    Stage 4: Finished — states that the addition is ready for inclusion in the formal ECMAScript standard
 
# Callbacks, Promises and async/await
## Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:
![alt text](https://media.prod.mdn.mozit.cloud/attachments/2018/04/18/15911/32e79f722e83940fdaea297acdb5df92/promises.png)
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
Promises solve the problem of callback hell which can quickly lead to unmanageable code

## Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
```javascript
// how to avoid this
firstFunction(args, function() {
  secondFunction(args, function() {
    thirdFunction(args, function() {
      // And so on…
    });
  });
});

// split your functions up and use promises
const getBeef = nextStep => {
  const fridge = leftFright;
  const beef = getBeefFromFridge(fridge);
  nextStep(beef);
};

const cookBeef = (beef, nextStep) => {
  const workInProgress = putBeefinOven(beef);
  setTimeout(function() {
    nextStep(workInProgress);
  }, 1000 * 60 * 20);
};

const makeBurger = () => {
  return getBeef()
    .then(beef => cookBeef(beef))
    .then(cookedBeef => getBuns(beef))
    .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef));
};

// Make and serve burger
makeBurger().then(burger => serve(burger));

```

## Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
```javascript
function getSecureRandoms(size){
  return new Promise((resolve,reject)=>{
    crypto.randomBytes(size, function(err, buffer) {
      if(err) return reject(new Error("something went wrong"))
      let secureHex = buffer.toString('hex');
      return resolve(secureHex)
    });
  })
}

d
const p1 = getSecureRandoms(48)
const p2 = getSecureRandoms(40)
const p3 = getSecureRandoms(32)
const p4 = getSecureRandoms(24)
const p5 = getSecureRandoms(16)
const p6 = getSecureRandoms(8)
const promises = [p1,p2,p3,p4,p5,p6]
Promise.all(promises).then(data => console.log(data.join(", ")))

```
## Example(s) that demonstrate how to implement our own promise-solutions.
```javascript
function getSecureRandoms(size){
  return new Promise((resolve,reject)=>{
    crypto.randomBytes(size, function(err, buffer) {
      if(err) return reject(new Error("something went wrong"))
      let secureHex = buffer.toString('hex');
      return resolve(secureHex)
    });
  })
}
```
## Example(s) that demonstrate error handling with promises
```javascript
function getSecureRandoms(size){
  return new Promise((resolve,reject)=>{
    crypto.randomBytes(size, function(err, buffer) {
      if(err) return reject(new Error("something went wrong"))
      let secureHex = buffer.toString('hex');
      return resolve(secureHex)
    });
  })
}
getSecureRandoms(48)
.then(data => whatever)
.catch(err => console.err(err))
```

## Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
The async/await syntax is cleaner and more readable as you can read it line by line. It also provides us with the normal try/catch
Provide examples to demonstrate 
Why this often is the preferred way of handling promises
Error handling with async/await
      Serial or parallel execution with async/await.
```javascript
function getSecureRandoms(size){
  return new Promise((resolve,reject)=>{
    crypto.randomBytes(size, function(err, buffer) {
      if(err) return reject(new Error("something went wrong"))
      let secureHex = buffer.toString('hex');
      return resolve(secureHex)
    });
  })
}
const testAsync = async () => {
  try{
    const p1 = getSecureRandoms(48);
    const p2 = getSecureRandoms(40);
    const p3 = getSecureRandoms(32);
    const p4 = getSecureRandoms(24);
    const p5 = getSecureRandoms(16);
    const p6 = getSecureRandoms(8);
    // serial execution
    const res1 = await p1;
    const res2 = await p2;
    const res3 = await p3;
    const res4 = await p4;
    const res5 = await p5;
    const res6 = await p6;
    // parallel execution
    await Promise.all(p1, p2, p3, p4, p5, p6);
    console.log(res1, res2, res3, res4, res5, res6);
  } catch (Exception err) {
    console.log(err)
  }
  
};

testAsync();
```
