// Assignment code here

//Character Arrays

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e,", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
let numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function for prompts
var promptCriteria = function () {

  var characterLength = Number(window.prompt("How many characters would you like in your password? Choose between at least 8 characters and less than 128 characters"));

  if (characterLength < 8 || characterLength > 128) {
    alert("Password must be between 8 and 128 characters.")

    return null;
  }

  var hasUpperCharacters = confirm("Click ok if you would like uppercase characters.")

  var hasLower = confirm("Click ok for lower case characters.")

  var hasNumbers = confirm("Click ok for numbers.")
  var hasSpecCharacters = confirm("Click ok for special characters.")

  if (hasUpperCharacters === false && hasLower === false && hasNumbers === false && hasSpecCharacters === false) {
    alert("Must choose at least one option.");
    return null;
  }

  // password

  var passwordCriteriaObj = {
    length: characterLength,
    upperCaseOpt: hasUpperCharacters,
    lowerCaseOpt: hasLower,
    numberOpt: hasNumbers,
    specialCharacOpt: hasSpecCharacters
  }
  return passwordCriteriaObj

}

var generatePassword = function () {

  var passwordOptions = promptCriteria();
  console.log(passwordOptions);


  var possibleCharactersArray = [];


  if (passwordOptions.upperCaseOpt) {
    possibleCharactersArray = possibleCharactersArray.concat(upperCase)

    possibleCharactersArray.push(upperCase[Math.floor(Math.random() * upperCase.length)])
    //guaratneeCharacters.push(upperCase[Math.floor(Math.random() * upperCase.length)])
    //console.log(possibleCharactersArray)
  }

  if (passwordOptions.lowerCaseOpt) {
    possibleCharactersArray = possibleCharactersArray.concat(lowerCase)

    possibleCharactersArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
    //console.log(possibleCharactersArray)
    //guaratneeCharacters.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
    //console.log(guaratneeCharacters)

  }

  if (passwordOptions.numberOpt) {
    possibleCharactersArray = possibleCharactersArray.concat(numberChoices)

    possibleCharactersArray.push(numberChoices[Math.floor(Math.random() * numberChoices.length)])
    //console.log(possibleCharactersArray)
    //guaratneeCharacters.push(numberChoices[Math.floor(Math.random() * numberChoices.length)])
    //console.log(guaratneeCharacters)
  }

  if (passwordOptions.specialCharacOpt) {
    possibleCharactersArray = possibleCharactersArray.concat(specChar)

    possibleCharactersArray.push(specChar[Math.floor(Math.random() * specChar.length)])

    //console.log(possibleCharactersArray)
    //guaratneeCharacters.push(specChar[Math.floor(Math.random() * specChar.length)])
    // console.log(guaratneeCharacters)
  }

  for (var i = 0; i < possibleCharactersArray.length; i++) {
    //promptCriteria(characterLength);


    possibleCharactersArray.push(possibleCharactersArray[Math.floor(Math.random() * possibleCharactersArray.length)])
    console.log(possibleCharactersArray);
  }

}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

  alert(password)

  // console.log("The password is" + writePassword + ".");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

