//How to choose between three values
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;
let seat = 0;
if (seat === AISLE) {
  console.log("aisle");
} else if (seat === MIDDLE) {
  console.log("middle");
} else if (seat === WINDOW) {
  console.log("window");
}

//Same solution using ENUM
const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const hcSeat = SeatChoice.AISLE; //Chances of error are less due to modification of values
