// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Please choose a password length (8 - 128 characters)");

var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!@#$%^&*()_+-=";

var password = "";

for(var i = 0; i <=passwordLength; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

document.querySelector("#password").value = password;

console.log(password);