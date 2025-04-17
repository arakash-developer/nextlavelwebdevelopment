"use strict";
// string, 
let a = "Hello World";
console.log(a);
// number,  
let roll = 10;
console.log(roll);
// boolean,
let isPresent = true;
console.log(isPresent);
// any,
let x = 10;
console.log(x);
// array,
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// tuple,   
let tuple = [1, "Hello"];
console.log(tuple);
// enum,
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
