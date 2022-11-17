var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

const peopleLoop = []
function forception(people, alphabet) {
    for(i = 0; i < people.length; i++) {
        peopleLoop.push(people[i])
        for(j = 0; j < alphabet.length; j++) {
            peopleLoop.push(alphabet[j]) 
        }
    } 
}
forception(people, alphabet)
console.log(peopleLoop)

