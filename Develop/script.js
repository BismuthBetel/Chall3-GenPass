// Assignment code here
var characters = Math.random().toString(36).slice(-8);

// window.prompt("Generate a random password!");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function forPrompt() {
  let generateBtn = prompt("Please select the criteria for your password.");
  alert(generateBtn);
}

let randomNumbers = function() {

}

let randomLetters = function()
{ }
  
  // let generatePassword = function() {
//   if ( )
// }

// Write password to the #password input
function writePassword() {
  let generatePassword = Math.random().toString(36).slice(-8);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // characters = password;
  
  passwordText.value = password;

  // console.log("The password is" + writePassword + ".");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();