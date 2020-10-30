//Once I get this working I'll streamline it. Gonna be messy until then tho....

// these are my base arrays
var generateBtn = document.querySelector("#generate");
const lowerCaseArray = "abcdefghijklmnopqrstuvwxyz";
const upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharArray = "!@#$%^&*()";
let chosenArrays = []

let allArrays = [...lowerCaseArray, ...upperCaseArray, ...numberArray, ...specialCharArray]
console.log(allArrays)

//let allArrays = [...lowerCaseArray, ...upperCaseArray, ...specialCharArray]

/*
let allArrays = function test(){
  let arrays = lowerCaseArray.split("").concat(numberArray);
}
console.log(allArrays.length)
*/

let generateIt = document.querySelector("#generate"); //select's the element marked #generate

//this is my function prompting the user to choose which arrays will be used
generateIt.addEventListener("click", function(event) { // adds click function
  let lCChoice = confirm("Generate a password with lower case letters?")
  let uCChoice = confirm("Upper Case Letters?")
  let nChoice = confirm("Numbers?")
  let sCChoice = confirm("What about special characters?")
  let charSelect = parseInt(prompt("How many characters should be used for your password?"))
  //here is the function determining which arrays will be used based on user input
  if(lCChoice === true){
    chosenArrays = [...chosenArrays, ...lowerCaseArray] //So what do I use if not let? I want to keep updating chosenArrays as the function continues. Bad approach?
    console.log("You've opted for lower case")
    console.log(chosenArrays)
  }
  if(uCChoice ===true){
    chosenArrays = [...chosenArrays, ...upperCaseArray]
    console.log("you've opted for upper case")
    console.log(chosenArrays)
  }
  if(nChoice ===true){
    chosenArrays = [...chosenArrays, ...numberArray]
    console.log("you've opted for numbers")
    console.log(chosenArrays)
    
  }
  if(sCChoice ===true){
    chosenArrays = [...chosenArrays, ...specialCharArray] 
    console.log("you've opted for special characters")
  }    
  else if (lCChoice === false && uCChoice ===false && nChoice ===false && sCChoice ===false){
    console.log("Fine. Just use 'password' then.")
   
  }
  
  console.log("----------")
  console.log(chosenArrays)
  let passwordProgress = ""
  for (let i = 0; i < charSelect; i++) {
  
    let number = Math.floor(Math.random()*chosenArrays.length)
    console.log(number)
    passwordProgress += chosenArrays[number] 
  }

  document.getElementById("password").innerHTML= passwordProgress
  
  
  //used this to see if == added the true statement to the arrays but no such luck. Am I seriously gonna do each one manually? Serious consideration at this point.
  //console.log(numberArray)
  
  
  //MY. MAIN. PROBLEM.
  //Now let's cherry pick the arrays marked true 


})








 //#password











  /*
  // felt like doing every single out come was cop out and will make this code bloated

  if(lCChoice === true && uCCase === true && nChoice === true && sCChoice === true){
    const allSelected = [...lCChoice, ...uCCase, ...nChoice, sCChoice];
  }
  else if(lCChoice ===)
  
  document.querySelector("#tip-amount")




for (let i = 0; i < lowerCaseArray.length; i++) {
  const LcL = lowerCaseArray[i];

  console.log(LcL)
  
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 */