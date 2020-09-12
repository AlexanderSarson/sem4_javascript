//Callbacks
//1)
//2)

//a)
const _ = {};

_.filter = function(list, callback) {
  if (Array.isArray(list)) {
    let arr = [];
    for (let item of list) {
      if (callback(item)) {
        arr.push(item);
      }
    }
    return arr;
  }
};

const weapons = ["candlestick", "lead pipe", "revolver"];

console.log(
  _.filter(weapons, function(item) {
    if (item === "candlestick") {
      return true;
    }
  })
);

//b)

_.map = function(list, callback){
  if(Array.isArray(list)){
    arr = []
    for (let item of list){
      arr.push(callback(item))
    }
    return arr
  }
}

const makeBroken = function(item) {
  return `broken ${item}`;
};

console.log(_.map(weapons, makeBroken));

//3)
function myFilter(callback) {
    let arr = [];
    for (let item of this) {
      if (callback(item)) {
        arr.push(item);
      }
    }
    return arr;
};
function myMap(callback) {
  let arr = [];
  for (let item of this) {
      arr.push(callback(item));

  }
  return arr;
};
Array.prototype.myFilter = myFilter
Array.prototype.myMap = myMap

var names = ["Lars", "Peter", "Jan", "Bo"];
var newArray = names.myFilter(function(name){
  return name == "Lars";
})
var newArray2 = names.myMap(function(name){
  return name + "!!"
})
console.log(newArray)
console.log(newArray2)

//reduce-method
//a)

var all= ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(", "))
console.log(all.join(" "))
console.log(all.join("#"))

//b)
var numbers = [2, 3, 67, 33]; 
var sumOfNumbers = numbers.reduce((acc, currVal) => {
  return acc + currVal
}, 0)
console.log(sumOfNumbers)

//c)
let members = [
  {name : "Peter", age: 18},
  {name : "Jan", age: 35},
  {name : "Janne", age: 25},
  {name : "Martin", age: 22},
 ]
let averageAge = members.reduce((acc, {age}, idx, arr) => {
  return idx < arr.length -1 ? acc + age : (acc + age) / arr.length
}, 0) 
console.log(averageAge)

//d)
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

let voteCount = votes.reduce((acc, currVal) => {
  acc[currVal] = acc[currVal] ? acc[currVal] + 1 : 1
  return acc
}, {})
console.log(voteCount)


// Hoisting 
// Team up with another member in the class and implement at least two examples to illustrate that:
// Function declarations are completely hoisted
// var declarations are also hoisted, but not assignments made with them
console.log(hoistedFunction())
console.log(thisIsAlsoHoisted)
function hoistedFunction() {
  console.log("this is hoisted")
}

var thisIsAlsoHoisted = "But this is not"

// Explain to each other (as if it was the exam):
// What hoisting is
// A design rule we could follow when using var, now we know about hoisting

// When we have a function declaration or var declaration it is hoisted up to the top where we can make use of it even though JS hasn't gotten to the line yet
// A good design rule is to always declare your functions or variables at the top of the page.

