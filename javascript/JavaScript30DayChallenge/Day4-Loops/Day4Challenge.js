console.log("Day 4: Loops");
console.log("Task / Activities");
console.log("Activity 1 : For Loop");
console.log("Task 1 : ");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Task 2 : ");
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

console.log("Activity 2 : While Loop");
console.log("Task 3 : ");
let iLoop = 1;
let total = 0;
while (iLoop < 11) {
  total = total + iLoop;
  iLoop++;
}
console.log(total);

console.log("Task 4 : ");
let iLoop2 = 10;

while (iLoop2 > 0) {
  console.log(iLoop2);
  iLoop2--;
}

console.log("Activity 3 : Do While Loop");
console.log("Task 5 : ");
let iLoop3 = 1;

do {
  console.log(iLoop3);
  iLoop3++;
} while (iLoop3 <= 5);

console.log("Task 6 : ");
let iLoop4 = 4;
let fact = 1;
do {
  fact = fact * iLoop4;
  iLoop4--;
} while (iLoop4 >= 1);

console.log(fact);
console.log("Activity 4 : Nested Loops");
console.log("Task 7 : ");
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

console.log("Activity 5");
console.log("Task 8 : ");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

console.log("Task 9 : ");
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
