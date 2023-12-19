// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// vegetables.pop()
// console.log(vegetables)

// fruit.shift()
// console.log(fruit)

// const x = fruit.indexOf("orange")
// console.log(x)

// fruit.push(x)
// console.log(fruit)

// const y = vegetables.length
// console.log(y)

// vegetables.push(y)
// console.log(vegetables)

// const food = fruit.concat(vegetables)
// console.log(food)

// food.splice(4, 2)
// console.log(food)

// food.reverse()

// const a = food.toString()
// console.log(a)

// What Javascript statement in place of "?" will make the result always be between 
// 6 and 7? 
const x = 2; 
// let y = 4; 
// function update(arg) { 
    // return Math.random() + y * arg; 
// } 
y = 2; 
// ?; 
// const result = update(x);

function update(arg) {
    return Math.random() + (y * arg) + 2
}
console.log(update(x))