var form = document.getElementById("loginForm");
var username = document.getElementById("username");
var password = document.getElementById("password");
var userError = document.getElementById("userError");
var passError = document.getElementById("passError");

form.addEventListener("submit", function(event){

    event.preventDefault();

    userError.innerHTML = "";
    passError.innerHTML = "";

    var valid = true;

    if(username.value == ""){
        userError.innerHTML = "Username is required";
        valid = false;
    }
    else if(username.value.length < 5){
        userError.innerHTML = "Username must be at least 5 characters";
        valid = false;
    }

    if(password.value == ""){
        passError.innerHTML = "Password is required";
        valid = false;
    }
    else if(password.value.length < 8){
        passError.innerHTML = "Password must be at least 8 characters";
        valid = false;
    }

    if(valid == true){
        alert("Login Successful!");
    }

});