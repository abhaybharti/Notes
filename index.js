// Bubble sort algorithm
// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       const current = arr[i];
//       const next = arr[i + 1];
//       if (current > next) {
//         // Swap elements
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);

//   return arr;
// }
function bubbleSort(arr, isAscending) {
  const n = arr.length;
  let swapped = false;
  do {
    // Create a flag that will allow the function to terminate early if there's nothing left to sort
    swapped = false;

    // Start looking at each item of the array one by one, comparing it with its adjacent value
    for (let j = 0; j < n - 1; j++) {
      let current = arr[j];
      let next = arr[j + 1];
      // If we find an element that is greater than its adjacent element, then swap them

      if (isAscending) {
        // sort in ascending order
        if (current > next) {
          // Swap values using destructuring assignment syntax
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          // Set the flag to True so we'll loop again
          swapped = true;
        }
      } else {
        //sort in descending order
        if (current < next) {
          // Swap values using destructuring assignment syntax

          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          // Set the flag to True so we'll loop again
          swapped = true;
        }
      }
    }
  } while (swapped);

  return arr;
}

const arr = [5, 2, 8, 3, 1, 6, 4]; // example array
console.log(arr);
console.log(bubbleSort(arr, true));
console.log(bubbleSort(arr, false));
