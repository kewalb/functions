//Syntax

// (function () {
//   statements
// })();

const arr = [
  15, 23, 52, 20, 84, 95, 34, 55, 44, 79, 34, 13, 11, 95, 100, 454, 121, 525,
  369, 20, 15
];
const str = ["hello", "WOrld", "JavaScript", "Mongo", "sQL"];

let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];

// // Print odd numbers in an array
// (function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       console.log(arr[i]);
//     }
//   }
// })(arr);

// // Convert all the strings to title caps in a string array
// (function (str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(
//       str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase()
//     );
//   }
// })(str);

// // Sum of all numbers in an array
// (function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// })(arr);

// // Return all the prime numbers in an array
// (function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 1; j <= arr[i]; j++) {
//       if (arr[i] % j == 0) {
//         count = count + 1;
//       }
//     }
//     if (count == 2) {
//       console.log(arr[i]);
//     }
//   }
// })(arr);

// Return all the palindromes in an array
// (function (arr){
//     for (let i = 0; i < arr.length; i++){
//         let r = 0;
//         let rev = 0;
//         let temp = arr[i]
//         // console.log(temp)
//         while(temp > 0){
//             r = + (temp % 10);
//             rev = rev*10 + r;
//             temp = Math.floor(temp / 10)
//             // console.log(temp, rev)
//         }

//         if(rev == arr[i])
//         {console.log(arr[i])}

//     }

// })(arr);

// Return median of two sorted arrays of same size
(function () {
    
})();

// Remove duplicates from an array
// (function (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] == arr[j]){
//                 console.log(arr[i], arr[j])
//                 arr.pop(arr[j])
//             }
//         }
//     }
//     console.log(arr)
// })(arr);

// Rotate an array by k times
// (function (arr, k) {
//   k = k % arr.length;
//   n = arr.length;
//   let newArr = []
//   for (let i = 0; i < n; i++) {
//     if (i < k) {
//       newArr[i] = (arr[n + i - k]);
//     } else {
//         newArr[i] = (arr[i - k]);
//     }
//   }
//   console.log(newArr)
// })(arr, 2); // here 2 is no of rotations
