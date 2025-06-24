let fruits=[`apple`,`banana`,`grapes`,`mango`]
console.log(fruits[2]);
fruits.push(`jackfruit`)
console.log(fruits);
fruits.shift()
console.log(fruits);
console.log(fruits.length);
console.log("Elements in array");
for(let i=0;i<fruits.length;i++)
    {
        console.log(fruits[i])
    }
console.log(fruits.reverse());
let arr=[1,2,3,4,5];
let sm=0;
for(let i=0;i<arr.length;i++)
    {
        sm+=arr[i];
    }
console.log(sm);