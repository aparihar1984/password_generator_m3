// Assignment code here

// GIVEN I need a new, secure password

// Assignment Purpose/Task

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// Define variables (var) for numbers, upper case letters, lower case letters and special characters

// Defining Numbers Array
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var numbers = "0123456789"

// Defining Lower Case Letters Array
var lowerCaseArr = ["a",  "b",  "c", "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z"];
// var lowerCase = "abcdefghijklmnopqrstuvwxyz"

// Defining Upper Case Letters Array
var upperCaseArr = ["A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z"];
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZ"

// Defining Special Characters Array
var specialCharArr = ["!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "(",  ")",  "+",  ":",  "?",  "<",  ">",  "{",  "}",  "[",  "]", ".",  "-",  "/"];
// var specialChar = "!@#$%^&*()+:?<>{}[].-/"

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Use an if statement to ensure that the user entered password is between 8 and 128 characters, or else return a prompt that states
// "Password must between 8 and 128 characters!"

// Defining The Function That Will Feature All Prompts
function getPrompts() {

  var getLength = parseInt(prompt("Choose the Number of Characters For Your Password!"));
  if(isNaN(getLength) || getLength < 8 || getLength > 128) {
    alert("Invalid Input.  Please Enter A Number That Is Between 8 - 128 Digits!");
    // generatePassword();
    return false;
  }

  // var getLength = parseInt(prompt("Choose the Number of Characters For Your Password!"));
  // if(getLength < 8 ) {
  //   alert("A Minimum Number of 8 Characters is Requried!");
  //   generatePassword();
  // }
  // if(getLength > 128 ) {
  //   alert("A Maximum Number of 128 Characters is Requried!");
  //   generatePassword();
  // }
  // if(isNaN(getLength)) {
  //   alert("Invalid Input. Please Insert A Number!");
  //   generatePassword();
  // }

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // Define criteria prompts that must be included in the password

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  // Use another if statement to ensure that the user entered password includes an upper case letter, a lower case letter, a number and 
  // a special character.  For the if statement, use the logical AND (&&) and the logical OR (||) operators.

  // Using Confirm For Lowercase Letters
  var confirmLowerCase = window.confirm("Click OK to Include Lower Case Characters!");


  // Using Confirm For Uppercase Letters
  var confirmUpperCase = window.confirm("Click OK to Include Upper Case Characters!");


  // Using Confirm For Numbers
  var confirmNumbers = window.confirm("Click OK to Include Numbers!");


  // Using Confirm For Special Characters
  var confirmSpecialCharacters = window.confirm("Click OK to Include Special Characters!");

  // If Statement Featuring 'AND' Logical Operator (will be true if and only if all the operands are true)
  //   if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialCharacters) {
  //     alert("A Minimum of 1 Character Type Is Needed!");
  //     return;
  // }

  // If Statement Featuring Strict Equality (===) Operator (Examining Operands)
  if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
    alert("A Minimum of 1 Character Type Is Needed!");
    return false;
}

// Storing The Password Information Into an Object
 var passwordInfo = {
  passwordLength: getLength,
  includingLowerCase: confirmLowerCase,
  includingUpperCase: confirmUpperCase,
  includingNumbers: confirmNumbers,
  includingSpecialCharacters: confirmSpecialCharacters
};

return passwordInfo; 
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// Define a variable that stores all the password information

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// After searching for information using google, we can generate a random characters from an array using the 
// Math.floor(Math.random() * arr.length) function
// Use the .concat or += to add each array (upper case, lower case, etc...) to the password

// Generating a Random Character From An Array
function getRandomChar(arr) {
  var randomChar = Math.floor(Math.random() * arr.length);
  var selectedChar = arr[randomChar];

  return selectedChar;
}

// Password That Is Generated Based On The Prompts Given
function generatePassword() {

  // passwordInfo Objects
  var passwordObjects = getPrompts();
 
  // Storing The Created Password
  var createdPassword = [];

  // Storing The Types Of Characters Included In The Password In An Array
  var availableChar = [];

  // Adding The Array Of Lower Characters To An Array Of Available Characters
  if(passwordObjects.includingLowerCase) {
    availableChar = availableChar.concat(lowerCaseArr);
  }

  // Adding The Array Of Upper Characters To An Array Of Available Characters
  if(passwordObjects.includingUpperCase) {
    availableChar = availableChar.concat(upperCaseArr);
  }

  // Adding The Array Of Numbers To An Array Of Available Characters
  if(passwordObjects.includingNumbers) {
    availableChar = availableChar.concat(numbersArr);
  }

  // Adding The Array Of Special Characters To An Array Of Available Characters
  if(passwordObjects.includingSpecialCharacters) {
    availableChar = availableChar.concat(specialCharArr);
  }

  // For Loop Iterating Through The Password Length To Generate The Random Index From The Array Of Available Characters
  for (var i = 0; i < passwordObjects.passwordLength; i++) {
    var c = getRandomChar(availableChar);

    // Creating The Password
    createdPassword.push(c);
  }
  
  return createdPassword.join("");
  
}

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
