const User = {
    name: "dan", 
    email: "dan@lco.dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "dan", isPaid: false, email: "d@d.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

export {}