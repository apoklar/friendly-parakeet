// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var special = "!@#$%^&*()".split("")  

function userInput() {
  var length = prompt("How long do you want your password? Choose between 8 and 128.")
  if (length < 8||length > 128||isNaN(length)) {
    alert("You must put a number between 8 and 128.")
    return
  }

  var wantsNumbers = confirm("Do you want any numbers?")
  var wantsUppercase = confirm("Do you want any uppercase letters?")
  var wantsLowercase = confirm("Do you want any lowercase letters?")
  var wantsSpecial = confirm("Do you want any special characters?")

  if (wantsNumbers === false && wantsUppercase === false && wantsLowercase === false && wantsSpecial === false) {
    alert("You must answer OK to at least one.")
    return
  }
  
  var userAnswers = {
    length: length,
    wantsNumbers: wantsNumbers,
    wantsUppercase: wantsUppercase,
    wantsLowercase: wantsLowercase,
    wantsSpecial: wantsSpecial
  }

  return userAnswers
}

function generatePassword() {
  
  var randomPassword = "";
  var possibleCharacters = [];
  var options = userInput();
    
    if (options.wantsNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
    }
    if (options.wantsLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercase);
    }
    if (options.wantsUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercase);
    }
    if (options.wantsSpecial) {
      possibleCharacters = possibleCharacters.concat(special);
    } 
  
  
  for (var i = 0; i <= length; i++) {
    var randomIndex = [Math.floor(Math.random() * options.length)];
    possibleCharacters.push(randomIndex);

  } 

  document.getElementById("password").value = randomPassword;
  
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
