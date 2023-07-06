// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@$%^&*()_+[]{}|\~`:;<>,.?/=";

  var passwordLength = prompt("How many characters long would you like your password to be? (Between 9 and 128 characters)");
  passwordLength = parseInt(passwordLength);

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid length. Password must be between 8 and 128 characters.");
    passwordLength = parseInt(passwordLength);
  }


  var addLowercase = confirm("Would you like lowercase characters?");
  var addUppercase = confirm("Would you like uppercase characters?");
  var addNumbers = confirm("Would you like numeric characters?");
  var addSpecial = confirm("Would you like special characters?");

  while (!addLowercase && !addUppercase && !addNumbers && !addSpecial) {
    alert("At least one character type must be selected!");
    addLowercase = confirm("Would you like to include lowercase characters?");
    addUppercase = confirm("Would you like to include characters?");
    addNumbers = confirm("Would you like to include characters?");
    addSpecial = confirm("Would you like to include characters?");
  }

  var charset = "";
  if (addLowercase) {
    charset += lowercaseChars;
  }
  if (addUppercase) {
    charset += uppercaseChars;
  }
  if (addNumbers) {
    charset += numericChars;
  }
  if (addSpecial) {
    charset += specialChars;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// I got help with this from a family member, but all code was written by me and I learned a lot through this project.