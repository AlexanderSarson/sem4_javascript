"use strict";
// b) Design a function "implementing" this interface which returns an array with the three strings
let func;
func = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};
// c) Design another implementation that returns an array, with the three strings uppercased.
let func2;
func2 = (arg1, arg2, arg3) => {
    return [arg1.toUpperCase(), arg2.toUpperCase(), arg3.toUpperCase()];
};
// d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
// e) Test f2 with the two implementations created in b+c.
f2(func);
f2(func2);
// f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
//# sourceMappingURL=interfaces2.js.map