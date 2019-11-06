// function doubleNumbers(arrays) {
//     return arrays.map( (array) => {
//         return array * 2
//     })
// }

// console.log(doubleNumbers([2, 4, 8]))

// function makeAString(numbers) {
//     return numbers.map( (number) => {
//         return number.toString()
//     })
// }
// console.log(makeAString([2, 5, 100]))

// function capitalizeNames (names) {
//     return names.map( (name) => {
//         return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
//     })
// }
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

// function namesOnly(arrays){
//     return arrays.map( (array) => {
//         return array.name
//     })
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  
// function makeStrings(arr){
//     return arr.map( (ar) => {
//         if(ar.age >= 18){
//             console.log(ar.name + " can go to the matrix")
//         } else {
//             console.log(ar.name + " can't go")
//         }
//     })
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

//   function readyToPutInTheDOM(arr){
//     return arr.map( (a) => {
//         return `<h1>${a.name}</h1>` + `<h2>${a.age}</h2>`
//     })
//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

//   const movies = [
//     { name: "movie1", genre: "horror" },
//     { name: "movie2", genre: "action" },
//     { name: "movie3", genre: "action" },
//     { name: "movie4", genre: "fantasy" }
// ]

// const actionGenre = movies.filter(movie => movie.genre == "action")
// console.log(actionGenre)

// function fiveAndGreaterOnly(arr) {
//     return arr.filter( (number) => {
//         return number > 5
//     })
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// function evensOnly(arr) {
//     return arr.filter( (number) => {
//         return number % 2 == 0
//     })
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// function fiveCharactersOrFewerOnly(arr) {
//     return arr.filter ( (word) => {
//         return word.length <= 5
//     })
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family",  "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// function peopleWhoBelongToTheIlluminati(arr){
//     return arr.filter ( (person) => {
//         return person.member == true
//     })
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

//   function ofAge(arr){
//     return arr.filter ( (person) => {
//         return person.age >= 18
//     })
//   }
//   // test
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ])); 
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]

//   function leastToGreatest(arr) {
//     return arr.sort( (a, b) => {
//         return a - b
//     })
//   }
  
//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 

// function greatestToLeast(arr) {
//     return arr.sort(( a, b) => {
//         return b - a
//     })
//   }
  
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

// function lengthSort(arr) {
//     return arr.sort ( (a, b) => {
//         return a.length - b.length
//     })
//   }
  
//   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 

// function alphabetical(arr) {
//     return arr.sort()
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

// function byAge(arr){
//     return arr.sort( (a, b) => {
//         return a.age - b.age
//     })
//   }
  
//   console.log(byAge([
//       { name: "Quiet Samurai", age: 22 },
//       { name: "Arrogant Ambassador", age: 100 },
//       { name: "Misunderstood Observer", age: 2 },
//       { name: "Unlucky Swami", age: 77 }
//   ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]
  var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function multipleArray(arr) {
    const olderPeople = arr.filter((person) => person.age >= 18)
    const almostDone = olderPeople.sort((a, b) => (a.lastName > b.lastName))
    return almostDone.map((person) => {
        return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
    }) 
}  
console.log(multipleArray(peopleArray))
