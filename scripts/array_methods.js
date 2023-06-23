//Important Array Methods
const users = [
    { userId: 1, firstName: "Qamar", gender: "male" },
    { userId: 2, firstName: "Sameer", gender: "male" },
    { userId: 3, firstName: "Hamza", gender: "male" },
]

//forEach array method can take 3 arguments: and return 3 values: one array w.r.t index, index , all arrays of objects
//parameters custom name hoskty hn order is imp

users.forEach((user, inde, whole_array) => {
    console.log(user, inde, whole_array);
})
console.log("---------------------------")

//map method
const userNames = users.map((userN, index) => {
    return [userN.firstName, index];
})
console.log(userNames);

const userNamesWithIndex = users.map((userN, index) => {
    return `${index}: ${userN.firstName}`;
});

console.log(userNamesWithIndex);
console.log("---------------------");

//Filter Method
//Basically return prh filter krskty hn kia chez return ho aur kia na ho
const numbers = [1,2,3,4,5,6,7];
const evenNumbers = numbers.filter( ( number ) => { return number%2 === 0; } )
console.log(evenNumbers);

console.log("---------------------");

//reduce Method
//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated 
//result, and is provided as an argument in the next call to the callback function.

//@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each 
//element in the array.

//@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to 
//the callbackfn function provides this value as an argument instead of an array value.

const userCart = [
    {userId : 1, productName : "apple", price : 777},
    {userId : 2, productName : "mango", price : 257},
    {userId : 3, productName : "banana", price : 384}
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0 )

//initital value b de skty hn 0 in our case, pehla parameter accumulate(total krta rehta), 2nd k pas poora obj one by one ata rehta, us 
//object me se hum value apni get krwa skty jo chahye ho

console.log(totalAmount);
console.log("----------------------");

//sort method
//it sorts on the basis of ASCII Code Value Differance , compare a and b, if diff is +ve => b is greater.
//using slice to get duplicated sorted array, as without it, it will modified the original one
const lowToHigh = userCart.slice(0).sort((a,b) => {return a.price - b.price} )
const highToLow = userCart.slice(0).sort((a,b) => {return b.price - a.price} )
console.log(lowToHigh);
console.log(highToLow);
console.log(userCart); 

//find method
//find method with the help of callback fn Returns the value of the first element in the array where predicate is true,
// and undefined otherwise., so apply on unique entry only like userID.
const myCart = userCart.find((cart) => { return cart.userId === 3 });
console.log(myCart);

//every method
//it gives true or false if condition is satisfied for every member of the array
const everyMethod = userCart.every( checkPrice =>  checkPrice.price < 700 )
console.log(everyMethod);

//some Method
//some method yeh bteaga keh kch ese hn ya nh jbky every sbka btata tha true or false
const someMethod = userCart.some( checkSomePrice =>  checkSomePrice.price < 500 )
console.log(someMethod);

//fill method
//fill krdeta ha simple aur ap apni mrzi k index b choose kr skty like array.fill(number, startIndex, tillIndex)
const newArr = new Array(5);
newArr.fill("f");
console.log(newArr)
const myArray = [1,2,3,4,5,6,7];
myArray.fill(55, 2,5);
console.log(myArray);

console.log("---------------");

//splice Method
//start, delete, insert

let array1 = ["item1", "Item2", "Item3", "Item4"];
//delete
const deletedItem = array1.splice(1,2); //start index, no. of del items
console.log(deletedItem, " ", array1);

//insert
array1.splice(1,0,"Item2", "Item3");
console.log(array1);

//insert and delete
const deltItem = array1.splice(1, 2, "inserted Item");
console.log(deltItem, " ", array1);
console.log("-----------------");

//Sets (Iterable)
// Store data, also have its own methods
//no index-based access
//Order is not guarenteed as no index access
//unique items only (no duplicates)
const newArr1 = [1,2,4,4,2,6,1,3];
// const uniqueElements = new Set("abc");
// uniqueElements.add(2);
// if (uniqueElements.has(1)){

// }
const uniqueElements = new Set(newArr1);
let length = 0;
for (let element of uniqueElements){
    length++;
}
console.log(length);

console.log("-----------------");

/*
Maps
Map is iteratable
store data in ordered fashion
store key value pair (like object)
duplicate keys are not allowed like Objects
different between maps and objects
Objects can only have string or symbols as key
In maps you can use anything as keys like array, number or string
*/

const person = new Map();
person.set("firstName", "Faraz");
person.set("age", 7);
person.set(1, "One");
person.set([1,2,3],"onetwothree");
console.log(person);
console.log(person.get(1)); //now this is not a string but a number "1";

for(let key of person.keys()){
    console.log(key, typeof key);
}


