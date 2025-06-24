const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3) ;

//remove element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

//numeric array
let num =[1,5,8,9,4,3];
let sortedarr=num.toSorted();
console.log(sortedarr)


// Check if an array includes a specific item.
const search=array3.includes(3)
console.log(search)

// Find the index of an element.
const indexnum=array3.indexOf(4)
console.log(indexnum)