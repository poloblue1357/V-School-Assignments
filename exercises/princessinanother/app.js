class Player {
    constructor(name, totalCoins, status) {
        this.Name = name;
        this.TotalCoins = totalCoins;
        this.Status = status
        } 
}
hasStar = false;
gameActive = true;
    
function setName(namePicked) {
        console.log("Mario")
    }
function gotHit() {
        console.log()
    }
function gotPowerUp() {

    }
function addCoin() {
        totalCoins++
    }
function print() {
        console.log(name, totalCoins, status, star-properties)
    }
function randomRangeFunction() {
    let number = Math.floor(Math.random() * 2)
        if(number == 0) {
            gotHit()
        } else if(number == 1) {
            gotPowerUp()
        } else if(number == 2) {
            addCoin()
        }
    print()
    const randomRange = windows.setInterval(1000)

    }  
const status = ["Powered Up", "Big", "Small", "Dead"];
const Mario = new Player("Mario", 0, status[0] ) 
console.log(Mario)
 
