//Object Creation
let bike = {
    name : "Suzuki-GS150",
    // color : clr,
    price : 200000,
    discount : function()
    {
        let amount = this.price - 2000
        return amount
    }
}

bike.discount()
// clr = prompt("Enter Bike Color ")
console.log("-------------------");

console.log(bike.name,bike.discount())
console.log("-------------------");

const person = {
    name: "faraz",
    age : 22,
    "person hobbies": [ "guitar", "sleeping", "listening" ] 
    }

// agr koi esi key jisme space ho tw usko " me krdo q k wese b JavaScript as string consider krta hai

console.log( person.name )
console.log( person["person hobbies"] )
console.log("-------------------");

// value dono se askti ha but brackets k kch benefits hn like 1) string with space get hoiskta ha
// variable se key get kr skt hn

const key = "email"
person[key] = "syed@gmail.com"
console.log(person)
console.log("-------------------");
//how to iterate object
//for in loop
//Object.keys

for(let keyy in person){
    console.log(`${keyy} : ${person[keyy]}`)
}
console.log("-------------------");

//this will return an array
console.log(Object.keys(person));

console.log("-------------------");

for(let key_1 of Object.keys(person)){
    console.log(key_1)
}
console.log("-------------------");



const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = { }
obj[key1] = value1;
obj[key2] = value2;

for(let k in obj){
    console.log(`${k} : ${obj[k]}`);
}
console.log("-------------------");

//Spread Operator in Objects
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key1 : "valueobj2",
    key3 : "value3",
    key4 : "value4"
}

const newObj = {...obj1, obj2, key69: "value69", ..."abc"};
//const newObj = {...obj1, ...["Item1" , "Item2"]};
console.log(newObj);
console.log("-------------------");

//Object Destructuring
const band ={
    bandName : "boond",
    famousSong: "Sajni",
    year : 1968,
    anotherFamousSong : "Pass"
}

let {bandName , famousSong: nowImavar, ...restProps} = band;
console.log(bandName , nowImavar , restProps);
console.log("-------------------");

//Objects inside an Array
//very useful in realworld applications
//array k andr alg alg objects store kr skty hn
const users = [
    {userId : 1, firstName : "Qamar", gender: "male"},
    {userId : 2, firstName : "Sameer", gender: "male"},
    {userId : 3, firstName : "Hamza", gender: "male"},
]

for (let user of users){
    console.log(user.firstName)
    console.log(user)
}
console.log("-------------------");
for (let i in users){
    console.log(users[i])
    console.log(users[i].gender)
}

console.log("-------------------");
//Nested Destructuring
const [user1 , user2 , user3] = users;
console.log(user1, typeof user1);
console.log("-------------------");
const [{firstName: nowImanewvar}, , user_3] = users;
console.log(nowImanewvar, typeof nowImanewvar, "     ",user_3, typeof user_3);
