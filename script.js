// Assignment code here

// GIVEN I need a new, secure password

// Assignment purpose/task

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria



// Define variables (var) for numbers, upper case letters, lower case letters and special characters

// Numbers Array
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Lower Case Letters Array
var lowerCase = ["a",  "b",  "c", "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z"];

//Upper Case Letters Array
var upperCase = ["A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z"];

// Special Characters Array
var specialChar = ["!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "(",  ")",  "+",  ":",  "?",  "<",  ">",  "{",  "}",  "[",  "]",  
".",  "-",  "/"];

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// Define criteria prompts that must be included in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Use an if statement to ensure that the user entered password is between 8 and 128 characters, or else return a prompt that states
// "Password must between 8 and 128 characters!"

function getPasswordPrompts() {
  var getPasswordLength = parseInt(prompt("Choose the Number of Characters For Your Password!"));
  if(getPasswordLength < 8 ) {
    alert("A Minimum Number of 8 Characters is Requried!");
    generatePassword();
  }
  if(getPasswordLength > 128 ) {
    alert("A Maximum Number of 128 Characters is Requried!");
    generatePassword();
  }
  if (isNaN(getPasswordLength)) {
    alert("Invalid Input. Please Insert A Number!");
    generatePassword();
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  // Use another if statement to ensure that the user entered password includes an upper case letter, a lower case letter, a number and 
  // a special character.  For the if statement, use the logical AND (&&) and the logical OR (||) operators.

  //Confirm including lowercase letters
  var includeLowerCase = window.confirm("Click OK to Include Lowercase Characters!");


  //Confirm including uppercase letter
  var includeUpperCase = window.confirm("Click OK to Include Uppercase Characters!");


  //Confirm including numbers
  var includeNumber = window.confirm("Click OK to Include Numbers!");


  //Confirm including special characters
  var includeSpecialCharacters = window.confirm("Click OK to Include Special Characters!");


  if (!includeLowerCase && !includeUpperCase && !includeNumber && !includeSpecialCharacters) {
    alert("A Minimum of 1 Character Type Is Needed!");
    return;
}

 //stores password Info in object
 var passwordInfo = {
  passwordLength: getPasswordLength,
  includeLowerCase: includeLowerCase,
  includeUpperCase: includeUpperCase,
  includeNumber: includeNumber,
  includeSpecialCharacters: includeSpecialCharacters
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

// Password Generated based on the prompts entered
function generatePassword() {

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
