
//concatination
let arr = [1,2,2,4,3,6]
let myArr3 = new Array("z","f","a","c");
console.log(arr.concat(myArr3));

//join
console.log(arr.join("-"));

//push and pop
console.log(myArr3.pop())
myArr3.push("Faraz")
console.log(myArr3);

//sort
console.log(myArr3.sort());

//unshift  --add into array in the beginning
myArr3.unshift("Ahmed", "Qamar");
console.log(myArr3);

//shift --remove item from the beginning
let removedItem = myArr3.shift();
console.log(removedItem);

let array1 = ["item1", "Item2"];
//let array2 = ["item1", "Item2"];

let array2 = array1.slice(0);
console.log(array2);

console.log(array1===array2)
//false bcz it matches addresses and not values if want to compare values then give indexes
array2.push("Item3");
console.log(array1===array2)
console.log(array1,array2)

//Cloning of an Array
//spread operator
let array3 = [...array1,...array2,"Item6"]
console.log(array3);

//for of loop
for(i of array2 ){
    console.log(i)
}

//for in loop
for (j in array2){
    console.log(array2[j])
}

//Spread Operator 
const ar1 = [1,2,5];
const ar2 = [6,7,8];

const newArr = [..."123456"];
console.log(newArr);