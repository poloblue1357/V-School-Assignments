const readline = require("readline-sync")

console.log("Welcome to the game. And may the odds be ever in your favor!")
const name = readline.question("Please enter your name: ")
console.log(`Nice to meet you ${name}`)

let isAlive = true;
let hasWon = false;

const troll = new Enemy("Troll", 100, 20)
const ghost = new Enemy("Ghost", 120, 25)
const witch = new Enemy("Witch", 110, 30)
const hag = new Enemy("Hag", 200, 50)
const enemies = [troll, ghost, witch, hag]
function Enemy(name, hp, damage) {
    this.name = name;
    this.health = hp;
    this.damage = damage;
}
const hero = new Hero(name, 400, 50)
function Hero(name, hp, damage) {
    this.name = name;
    this.health = hp;
    this.damage = damage;
}
let weapons = ["wand", "sword", "knife", "dagger"]
let inventory = []

while(isAlive && !hasWon) {
    let choice = readline.keyIn("Would you like to (w) walk, (p) print status and inventory, or (q) quit?", {limit: "wpq"})
    if(choice === "w") {
        walk()
    } else if(choice === "p") {
        printInventory()
    } else if(choice === "q") {
        console.log("You quit.")
        isAlive = false
    }

function walk() {
    let chance = Math.floor(Math.random() * 4)
    if(chance == 1) {
        enemyEncounter()
    } else {
        console.log("You continue walking safely...")
    }
}
function printInventory() {
    console.log(name, hero.health, inventory)
}
function randomEnemy() {
    let rEnemy = Math.floor(Math.random() * enemies.length)
    return enemies[rEnemy]
}
function enemyEncounter() {
    let indexEnemy = randomEnemy()
    console.log(`Oh no! You encountered a ${indexEnemy.name}!`)
    let decision = readline.keyIn("Do you want to (f) fight, (r) run, or (q) quit?", {limit: "frq"})
    if(decision == "f") {
        fight(indexEnemy)
    } else if(decision == "r") {
        run(indexEnemy)
    } else if(decision == "q") {
        isAlive = false
        console.log("Only cowards quit.")
    }
}
function fight(indexEnemy) {
    while(indexEnemy.health > 0 && hero.health > 0) {
        let hDamage = Math.floor(Math.random() * 10) + 40
        indexEnemy.health -= hDamage
        console.log(`The enemy now has ${indexEnemy.health} hp!`)
        let eDamage = Math.floor(Math.random() * 10) + 40
        hero.health -= eDamage
        console.log(`${name} now has ${hero.health} hp!`)
        if(indexEnemy.health <= 0) {
            hero.health += 100
            let wChoice = Math.floor(Math.random() * weapons.length)
            let randomWeapon = weapons[wChoice]
            inventory.push(randomWeapon)
            console.log(`You killed the ${indexEnemy.name}.`)
            enemies.splice(enemies.indexOf(indexEnemy), 1)
            hasWon()
        } else if(hero.health <= 0) {
            console.log("You lose!")
            isAlive = false
        } 
    }
}
function hasWon() {
    if(enemies == undefined || enemies.length == 0) {
        console.log("You won!")
        isAlive = false 
    } else {
        console.log("Continue your journey....")
    } 
}
function run() {
    let chance = Math.random()
    if(chance >= 0.5) {
        console.log("You got away safely!")
    } else {
        console.log("You can't escape. You will now fight.")
        fight()
    }
}
}

