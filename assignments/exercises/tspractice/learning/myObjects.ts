
export {}

// const User = {
//     name: "dan", 
//     email: "dan@lco.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "dan", isPaid: false, email: "d@d.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

// info from comments about the correct way to do the functions above
// function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {}
// type User = { name: string, isPaid: boolean }
// function createUser({ name, isPaid }: User) {}

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetils?: number
}

let myUser: User = {
    _id: "1245",
    name: "d",
    email: "d@d.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "d@gmail.com"
// myUser._id = "asa"
