"use strict";
// enums are used to restrict the users choice
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
// adding 'const' before enum will drastically change the output code in the .js file
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.AISLE;
//# sourceMappingURL=myEnums.js.map