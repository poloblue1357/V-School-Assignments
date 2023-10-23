"use strict";
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
let loginUser = (name, email, isPaid = false) => { };
// addTwo(5)
let myValue = addTwo(5);
getUpper("dan");
signUpUser("dan", "dan@lco.dev", false);
loginUser("h", "h@h.com");
// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
// this syntax is good, it ensures the output has the appropriate type
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
