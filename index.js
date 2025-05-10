//  Find the second largest element

// let arr = [1, 5, 9, 2, 3, 5,8];
// let Max = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > Max) {
//     Max = arr[i];
//   }
// }
// let Smax = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < Max && arr[i] > Smax) {
//     Smax = arr[i];
//   }
// }
// console.log(Smax);

// Sum of All Elements
// let arr = [1, 5, 9, 2, 3, 5,8];

// let sum = 0;
// for (let i = 0;i<arr.length ; i++){
//     sum += arr[i]
// }

// console.log(sum)

//
// Remove Duplicates from an Array

// let arr = [1, 1, 1, 2, 5, 5, 5, 6, 9, 9, 3];
// let Oarr = [];

// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;

//   for (let j = 0; j < Oarr.length; j++) {
//     if (arr[i] === Oarr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     Oarr.push(arr[i]);
//   }
// }
// console.log(Oarr);

// Check if Array is Sorted
// bobble sorting

// let arr = [1, 5, 4, 2, 7, 3, 6];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     if (arr[j] < arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
// console.log(arr);

// Reverse an Array

// let arr = [1, 5, 8, 6, 8, 5, 5, 89, 2];
// let Rarr = [];
// for (let i = arr.length - 1; i >=0; i--) {
//   Rarr.push(arr[i]);
// }
// console.log(Rarr);


