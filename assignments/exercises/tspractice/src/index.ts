// console.log("typescript is here still")

// interface testingUser {
//     name: string,
//     date?: Date,
//     queueNumber: number
// }

// function testing(tst: testingUser): string {
//     console.log(`The first user of TypeScript is ${tst.name} and today is ${Date()} and my queue number is ${tst.queueNumber}!`)
//     return `The first user of TypeScript is ${tst.name} and today is ${Date()} and my queue number is ${tst.queueNumber}!`
// }



// let x = document.createElement("h3")
// x.textContent = testing({name: "Dan Patterson", queueNumber: 14})
// document.body.append(x)

// class Zeus {
//     public email: string  
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// class Zeus {

//     protected _courseCount = 1

//     readonly city: string = "Jaipur"
//     constructor(
//         public email: string, 
//         public name: string,
//         private userId?: string
//         ){
//     }

//     private deleteToken() {
//         console.log("Token deleted")
//     }

//     get getAppleEmail():string {
//         return `apple${this.email}`
//     }

//     get courseCount(): number {
//         return this._courseCount
//     }
//     // set has no return type
//     set courseCount(courseNum) {
//         if(courseNum <= 1) {
//             throw new Error("Course count should be more than 1")
//         }
//         this._courseCount = courseNum
//     }
// }

// class SubUser extends Zeus {
//     isFamily: boolean = true
//     changeCourseCount() {
//         this._courseCount = 4
//     }
// }

// const hitesh = new Zeus("d@d.com", "hitesh")
// hitesh.name 


console.log("Hello World!")

let age: number = 20;
let testing: string = "testing"

if(age < 50) {
    age += 10
}

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level

function render(document: string) {
    console.log(document)
}

let numbers: number[] = []
numbers.forEach(n => n.toString)

// A tuple is a typed array with a pre-defined length and types for each index.

let pUser: [number, string] = [1, "dan"]
pUser[0].toString

// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

// const small = 1
// const medium = 2
// const large = 3

// PascalCase
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)

function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022) {
        return income * 1.2
    }
    return income * 1.3
}
calculateTax(10_000, 2023)

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: "dan",
    retire: (date: Date) => {
        console.log(date)
    }
}

function kgToLbs(weight: number | string): number {
    //Narrowing
    if(typeof weight === "number") {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}
kgToLbs(10)
kgToLbs("10")

// Intersection

type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal types (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = "cm" | "inch"

// nullable types
function greet(name: string | null | undefined) {
    if(name) 
        console.log(name.toUpperCase())
    else
        console.log("Hola!")
}
greet(null)

//optional chaining

type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(1)
// optional property access operator
    console.log(customer?.birthday?.getFullYear())


    // optional element access operator
    // customers?.[0]

// optional call
let log: any = (message: string) => console.log

