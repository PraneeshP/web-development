
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//-------------------

let arr4 = [1, 2, 3, 4, 5, 6];
let indexToRemove = 2;

arr4.splice(indexToRemove, 2); // 3 4
console.log(arr4); // Output: [1, 2, 5, 6]

//-------------------

let arr5 = [5, 2, 8, 1, 9];
arr5.sort((a, b) => a - b);
console.log(arr5); // Output: [1, 2, 5, 8, 9]

//--------------------

let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.includes(3)); // Output: true
console.log(arr6.includes(6)); // Output: false

//-------------

let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.indexOf(3)); // Output: 2