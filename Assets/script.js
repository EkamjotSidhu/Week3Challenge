// Assignment code here
var numbers = "0123456789!\#$%&\'()*+,-./:;<?@[\\]^_`{|}~"
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&\'()*+,-./:;<?@[\\]^_`{|}~"
var lowAlpha = "abcdefghijklmnopqrstuvwxyz!\#$%&\'()*+,-./:;<?@[\\]^_`{|}~"
var fullChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&\'()*+,-./:;<?@[\\]^_`{|}~"
var charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&\'()*+,-./:;<?@[\\]^_`{|}~"
var lowCharList = "0123456789abcdefghijklmnopqrstuvwxyz!\#$%&\'()*+,-./:;<?@[\\]^_`{|}~"
var password = ""
function generatePassword() {
  var criteria = Number(prompt("PLease enter password length between 8 and 128"))
  if (criteria < 8 || criteria > 128) {

    return ("Please enter valid number between 8 and 128")
  } else if (criteria >= 8 && criteria <= 128) {
    var lowercase = prompt("Do you want lowercase? Y/N").toUpperCase()
    var uppercase = prompt("Do you want UpperCase? Y/N").toUpperCase()
    var num = prompt("Do you want numbners? Y/N").toUpperCase()
    if (lowercase == "Y" && uppercase == "Y" && num == "Y") {
      for (var i = 1; i <= criteria; i++) {
        password = password + fullChar[Math.floor((Math.random() * fullChar.length))]
      }
    }
    else if (lowercase == "N" && uppercase == "Y" && num == "Y") {
      for (var i = 1; i <= criteria; i++) {
        password = password + charList[Math.floor((Math.random() * charList.length))]
      }
    }
    else if (lowercase == "Y" && uppercase == "N" && num == "Y") {
      for (var i = 1; i <= criteria; i++) {
        password = password + lowCharList[Math.floor((Math.random() * lowCharList.length))]
      }
    }
    else if (lowercase == "Y" && uppercase == "N" && num == "N") {
      for (var i = 1; i <= criteria; i++) {
        password = password + lowAlpha[Math.floor((Math.random() * lowAlpha.length))]
      }
    }
    else if (lowercase == "N" && uppercase == "Y" && num == "N") {
      for (var i = 1; i <= criteria; i++) {
        password = password + alpha[Math.floor((Math.random() * alpha.length))]
      }
    }
    else if (lowercase == "N" && uppercase == "N" && num == "Y") {
      for (var i = 1; i <= criteria; i++) {
        password = password + numbers[Math.floor((Math.random() * numbers.length))]
      }
    }

  }
  return (password)


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

