const fetch = require("node-fetch");
var now = require("performance-now");
const URL = "https://swapi.dev/api/people/";

function fetchPerson(url) {
  return fetch(url).then(res => res.json());
}
async function printNames() {
  var start = now();
  console.log("Before");
  const person1 = fetchPerson(URL + "1");
  const person2 = fetchPerson(URL + "2");
  const result1 = await person1;
  const result2 = await person2;
  console.log(result1.name);
  console.log(result2.name);
  console.log("After all");
  var end = now();
  console.log(end - start);
}

printNames();
