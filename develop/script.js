// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var passwordLength = prompt("How long would you like your password to be? (No more than 100 characters)");
  passwordLength = parseInt(passwordLength);

  while (isNaN(passwordLength) || passwordLength > 100) {
    passwordLength = prompt("Invalid length. Password cannot be larger than 100 characters.");
    passwordLength = parseInt(passwordLength);
  }
}

  var addLowercase = confirm("Would you like lowercase characters?");
  var addUppercase = confirm("Would you like uppercase characters?");
  var adedNumbers = confirm("Would you like numeric characters?");
  var addSpecial = confirm("Would you like special characters?");

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected!");
    addLowercase = confirm("Would you like lowercase characters?");
    addUppercase = confirm("Would you like uppercase characters?");
    addNumbers = confirm("Would you like numeric characters?");
    addSpecial = confirm("Would you like special characters?");
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
