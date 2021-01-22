var arr = [8, 10, 1, 3, 6, 90, 33, 11, 5, 2];

// function bubblSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         const tmp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }
// }
// bubblSort(arr);
// console.log(arr);

function bubblSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}
// bubblSort1(arr);
// console.log(arr);
