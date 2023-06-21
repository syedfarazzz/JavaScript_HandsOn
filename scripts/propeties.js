let a = "           faraz ahmed             ";
console.log(a.length);
let b = a.trim();
console.log(b.length)

console.log(a.toUpperCase())

console.log(b.slice(5-8))

//just concatinate a string to convert int to string
console.log(typeof(45 + ""))
//add + before a string to convert to numbers
console.log(typeof(+b))

let str = "4" + "6";
console.log(str)
let str1 = +"4" + +"6";
console.log(str1)

let winningnum = 20;
if (winningnum === 19){
    console.log("You guessed it right")
}
else if(winningnum < 19){
    console.log("Low")
}
else {
    console.log("High")
}

let num = 0;
while(num<10){
    console.log(`value: ${num}`);
    num++;
}