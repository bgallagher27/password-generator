// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Please choose a password length (8 - 128 characters)");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%&*+-:;_";
var all = upperCase + lowerCase + numbers + symbols;

if (passwordLength >=8) {
    writePassword;
} else {
    alert("Please choose a length between 8 and 128");
}

if (passwordLength <=128) {
    writePassword;
} else {
    alert("Please choose a length between 8 and 128");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER