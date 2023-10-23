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
class Zeus {

    private _courseCount = 1

    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        private userId?: string
        ){
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail():string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }
    // set has no return type
    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const hitesh = new Zeus("d@d.com", "hitesh")
// hitesh.name 
