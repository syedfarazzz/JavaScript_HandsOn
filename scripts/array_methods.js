//Important Array Methods
const users = [
    {userId : 1, firstName : "Qamar", gender: "male"},
    {userId : 2, firstName : "Sameer", gender: "male"},
    {userId : 3, firstName : "Hamza", gender: "male"},
]

//forEach array method can take 3 arguments: and return 3 values: one array w.r.t index, index , all arrays of objects
//parameters custom name hoskty hn order is imp

users.forEach((user, inde, whole_array ) => { 
    console.log(user, inde, whole_array);
})
console.log("---------------------------")

//map method
const userNames = users.map((userN) => {
    return userN.firstName;
})
console.log(userNames);