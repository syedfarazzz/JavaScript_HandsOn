let games = new Array(5)
for(i = 0 ; i < games.length; i++ ){
    games[i] = prompt("Enter Value for array")
}

for(i = 0 ; i < games.length; i++ ){
    document.write(games[i]+"<br>")
}

let arr = [1,2,2,4,3,6]
let myArr3 = new Array(6,"f","z");
document.write(arr.concat(myArr3)+ "<br>");

document.write(arr.join("-") + "<br>");

document.write(myArr3.pop()+"<br>")
myArr3.push("Faraz")
document.write(games.sort());

Table
let number = prompt("Enter Number ");
for (i=1; i<=10 ; i++){
    let ans = number * i;
    document.write(number + "x" + i + "=" + ans + "<br>");
}

document.write("<br>")
//2d Arrays
let persons = [
    ["Ali", 22, "Hyderabad",2000],
    ["Bilal", 24, "Karachi",2010],
    ["Ahmed", 23, "Sukker",2111]
];
// alert(persons[1].length)

for (let rows = 0 ; rows< persons.length; rows++){

    for (let col = 0; col < persons[rows].length ; col++){

        document.write(persons[rows][col] + "<br>")
    }
}

document.write("<br>")
let people = new Array(3)
people[0] = new Array("Sarib", 21, "Punjab")
people[1] = new Array("Ali", 21, "Sindh")
people[2] = new Array("Shahrukh", 21, "Balochistan")

for(rows in people){

    for(col in people[rows]){
        document.write(people[rows][col] + "<br>")
    }
}

