// enums are used to restrict the users choice

// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2


// adding 'const' before enum will drastically change the output code in the .js file
enum SeatChoice {
    AISLE = "aisle", 
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE