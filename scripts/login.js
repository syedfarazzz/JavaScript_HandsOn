// nested if else
let username = prompt("Enter Username");
let pass = prompt("Enter Password");

if ( username != "" && pass != ""){
    
    if(username == "admin" && pass == "adm"){
       alert("Login Successfull"); 
       window.location.href = "https://www.google.com/"
    }
    else
    {
        alert("Login Unsuccessful");
    }
}
else{
    alert("Please Enter All Fields");
}