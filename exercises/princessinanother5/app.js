let status = ["dead", "small", "big", "powered up"]
let totalCoins = 0

class Player {
    constructor(name, totalCoins, status, hasStar, gameActive = true) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar 
        this.gameActive = gameActive
    } 
    setName(namePicked ) {
      
    }
    gotHit() {
        
    }
    gotPowerup() {

    }
    addCoin() {
        totalCoins++
    }
    print() {
        console.log(name, totalCoins, status, hasStar)
    }
}
function randomRange() {
    let randomNumber = Math.floor(Math.random(1, 3))
    console.log(randomNumber)
    if(randomNumber === 1) {
        Player.gotHit()
    } else if( randomNumber === 2) {
        Player.gotPowerup()
    } else if(randomNumber === 3) {
        Player.addCoin()
    }
}
setInterval(() => {
    console.log(Player.print())
    if(gameActive === false) {
        setTimeout(() => {
            console.log("Game over.")
        }, 1);
    }
}, 1000);

