const arr = [
  15, 23, 52, 20, 84, 95, 34, 55, 44, 79, 34, 13, 11, 95, 100, 454, 121, 525,
  369, 20, 15,
];
const str = ["hello", "WOrld", "JavaScript", "Mongo", "sQL"];

// Print odd numbers in an array
const odd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

// Convert all the strings to title caps in a string array
const titleCaps = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(
      str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase()
    );
  }
};

// Sum of all numbers in an array

const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
};

// Return all the prime numbers in an array

const prime = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j == 0) {
        count = count + 1;
      }
    }
    if (count == 2) {
      console.log(arr[i]);
    }
  }
};

// Return all the palindromes in an array
const pallindrome = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let r = 0;
    let rev = 0;
    let temp = arr[i];
    // console.log(temp)
    while (temp > 0) {
      r = +(temp % 10);
      rev = rev * 10 + r;
      temp = Math.floor(temp / 10);
      // console.log(temp, rev)
    }

    if (rev == arr[i]) {
      console.log(arr[i]);
    }
  }
};
