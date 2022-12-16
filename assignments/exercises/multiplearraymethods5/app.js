// var peopleArray = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// const a = peopleArray.filter(function(person) {
//     if(person.age >= 18) {
//         return person
//     }
// })

// const b = a.sort(function(a, b) {
//     return a.lastName.localeCompare(b.lastName)
// })
// console.log(b)

// const c = b.map(function(name) {
//     return "<li>" + name.firstName + " " + name.lastName + " is " + name.age + "</li>"
// })
// console.log(c)



const charArr = ["$hello!", "%%^%%", "test!"]

let c = charArr.filter(item => item.match(/$/) ? item : null)
let d = charArr.filter(item => {
    if(item.match("l")) {
        return item
    } else {
        return null
    }
})

console.log(d)

