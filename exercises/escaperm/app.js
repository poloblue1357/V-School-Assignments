const readlineSync = require('readline-sync')
const option = ["Put hand in hole", "Find the key", "Open the door"]
let isAlive = true

const index = readlineSync.keyInSelect(option,("Welcome to the game. Here are your options: "))
// const b = readlineSync.keyInSelect(option, ("Good call. Now what will you do? "))
// const c = readlineSync.keyInSelect(option, ("You're free now! "))
while(isAlive === true){
     if (option[index] === 'Put hand in hole'){
       console.log("You're Dead!")
       isAlive = false
    } else if (option[index] === "Find the key") {
        console.log("Good call! Now what will you do? ")
        isAlive = false
    } else if (option[index] === "Open the door") {
        console.log(index)
        isAlive = false
    }

}
   
