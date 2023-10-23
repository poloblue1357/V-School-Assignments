"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Greets the world.
// console.log("Hello World!");
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
