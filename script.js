// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Please choose a password length (8 - 128 characters)");

if (passwordLength >=8) {
    
} else {
    alert("Please choose a length between 8 and 128");
}

if (passwordLength <=128) {
    
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