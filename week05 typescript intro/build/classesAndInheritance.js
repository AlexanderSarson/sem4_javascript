"use strict";
/*
A) The declaration below defines a Shape class,
which as it's only properties has a color field +  a getArea() and a getPerimeter() function which both returns undefined.
This is the closest we get to an abstract method in Java.
*/
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    toString() {
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
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    get area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    get perimeter() {
        return 2 * Math.PI * this._radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
}
// TEST
let circle = new Circle("Red", 5);
console.log("area: ", circle.area);
console.log("perimeter: ", circle.perimeter);
console.log(circle.toString());
circle.color = "blue";
console.log(circle.toString());
console.log("radius: ", circle.radius);
circle.radius = 50;
console.log("radius: ", circle.radius);
/**

C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.
Provide the class with:
A height field
A constructor that takes colour, radius and height.
Overwritten versions of relevant methods defined in the Base (getter for perimeter should throw "not implemented")
A getVolume() method  (or better, a getter called volume)
Getter/Setter for height

 */
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get perimeter() {
        throw new Error("not implemented");
    }
    get volume() {
        return Math.PI * Math.pow(this.radius, 2) * this._height;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
}
let cylinder = new Cylinder("green", 5, 10);
console.log("Volume: ", cylinder.volume);
//cylinder.perimeter;
console.log("height", cylinder.height);
cylinder.height = 15;
console.log("height", cylinder.height);
//# sourceMappingURL=classesAndInheritance.js.map