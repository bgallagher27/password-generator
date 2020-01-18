// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Please choose a password length (8 - 128 characters)");

var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!@#$%^&*()_+-=";

var password = "";

for(var i = 0; i <=passwordLength -1; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

document.querySelector("#password").value = password;

if (passwordLength < 8) {
    alert("Please choose a length between 8 and 128");
}

if (passwordLength > 128) {
    alert("Please choose a length between 8 and 128");
}
