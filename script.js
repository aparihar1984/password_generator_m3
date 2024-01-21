// Assignment code here

// GIVEN I need a new, secure password

// Assignment purpose/task

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// Define variables (var) for numbers, upper case letters, lower case letters and special characters

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// Define criteria prompts that must be included in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Use an if statement to ensure that the user entered password is between 8 and 128 characters, or else return a prompt that states
// "Password must between 8 and 128 characters!"

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// Use another if statement to ensure that the user entered password includes an upper case letter, a lower case letter, a number and a
// special character.  For the if statement, use the logical AND (&&) and the logical OR (||) operators.

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// Define a variable that stores all the password information

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// After searching for information using google, we can generate a random characters from an array using the 
// Math.floor(Math.random() * arr.length) function
// Use the .concat or += to add each array (upper case, lower case, etc...) to the password

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

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
