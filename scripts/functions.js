//Functions

function firtsChar(anyString){
    return anyString[0];
}

console.log(firtsChar("faraz"));

function findTarget(myarray , mytarget){
    for (i = 0; i< myarray.length; i++){
        // console.log(myarray[i])
        if(myarray[i] === mytarget){
            return i;
        } 
    }
    return -1
    
}

let myarray = [1,4,6,7,88];
let mytarget = 6;
let ans = findTarget(myarray, mytarget)
console.log(ans);

console.log("----------------------")

//Arrow Functions
// Normal Function
function normalFunction(){
    console.log("I am a normal function");
}
normalFunction();

//Function Expression
const functionExpression = function(){
    console.log("I am a function expression");
}
functionExpression();

//Arrow Function
const arrowFunction = () => {
    console.log("I am an arrow Function");
}
arrowFunction();

//Some more functions to arrow functions
// function firtsChar(anyString){
//     return anyString[0];
// }
//the above one is converted
//parameters if single can be without ()
firtsCharr = anyString => {
    return anyString[0];
}
console.log(firtsChar("abc"));

// it can also be optimized as below , we can skip return "keyword"
firtsCharr = anyString => anyString[0];
console.log(firtsCharr("cba"));
console.log("----------------------")

//FUNCTION INSIDE A FUNCTION
//In javascript we can make functions inside another function
function app(){
    const myFunc = function(){
        console.log("Function")
    }
    const addTwo = (num1, num2) => num1 + num2;

    const mulTwo = (num1, num2) => num1*num2;

    console.log("inside app");

    console.log(addTwo(4,5));
    console.log(mulTwo(4,5));
}

app();
console.log("----------------------")

//Lexical Scope or Lexical Enviornment
//By definition, lexical environment is a data structure that holds the identifier-variable mapping. So if we take a 
//simple function with variables inside it, the lexical environment is holding the identifier-variable mapping of those variables.

//When a function runs, a Lexical Environment is created to store its local variables with their values and the Reference to the outer 
//environment in which it was created. Functions first searches for the variable inside their inner Lexical Environment, if not found 
//they move to outer one and so on until the global one.

//isme function sbse andr se jb chaly ga tw pehly apne block me search krega myvar1, if not found then go to its lexical env where it was
//created, if not found then go to lexical env of the outer func where it was called and so on to global.
const myVar1 = "value59";
function myApp(){
    function myFunc1(){
        //const myVar1 = "value59";
        const myFunc2 = () => console.log("inside myFunction", myVar1);
        myFunc2();
    }
    console.log(myVar1);
    myFunc1();
} 
myApp();
// myFunc2(); error = ReferenceError: myFunc2 is not defined

//Default Parameters
const addThree = (a, b =0, c =0) => {
    return a+b+c;
}
console.log(addThree(7));   //since there is no value for b and c, default value set in the parameters will be passed. i.e. 0 in our case.

//Rest Parameters
function myRestFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myRestFunc(2,4,7,8,9);

function addAll(...numbers){
    let total = 0;
    for (let number of numbers){
        total = total + number;
    } return total;
}
console.log(addAll(2,3,7,8));
console.log("-----------------");

//Parameters Destructuring
const obj2 = {
    key1 : "valueobj2",
    key3 : "value3",
    key4 : "value4"
}

function printDetails({key1: k1,key3,key4}){ //parameters or whenever object destructuring it is necessary to give same name as object keys.
    console.log(k1);
    console.log(key3);
    console.log(key4);
}
printDetails(obj2);
console.log("-----------------");

//CALLBACK FUNCTIONS
function myFunc4(fname){
    console.log("inside my fn 3");
    console.log(`your name is ${fname}`);
}
function myFunc3(callback) {
    console.log("I am a fn and...");
    callback("faraz");
}

myFunc3(myFunc4);
console.log("-----------------");

//Function returning functions

function returnFn(){
    console.log("I will return a fn");
    function returnFnInside(){
        console.log("this is the returned fn");
    }
    return returnFnInside;
}

const ans1 = returnFn();
ans1();