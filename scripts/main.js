
// let myVar = document.querySelector("h1");
// myVar.textContent = "Changed";

var age = parseInt(prompt("Enter your Age"));

let statuss = (typeof(age) == "number" && (age >= 18) ? "<br>" + "Eligible" + "<br>" : "<br>" + "NOt Eligible" + "<br>");

document.write(statuss);

let x = prompt("Enter first number");
let y = prompt("Enter first number");


function add(x,y){
    let z = parseInt(x)+parseInt(y);
    document.write("result is " + z);
}

let myArr = [1,2,5,"hi"];

let myArr2 = new Array(3);
myArr2[0] = "H";
myArr2[1] = "e" 
myArr2[2] = "l"

let myArr3 = new Array(6,"f","z");

for(i in myArr3){
    document.write(myArr3[i] + "<br>")
}

for (i = 0; i <myArr.length; i++){
    document.write(myArr[i] + "<br>")
}

let arr = [1,2,2,4,3,6]
// first access all members of array one by one
// when accessing store unique item in different variables
// if any item repeats store in their respective variable


for (i in arr ){
    // if(arr[i].valueOf == fn)
    console.l
}









