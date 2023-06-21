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


console.log(bike.name,bike.discount())