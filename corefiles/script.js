//Once I get this working I'll streamline it. Gonna be messy until then tho....

// these are my base arrays
var generateBtn = document.querySelector("#generate");
const lowerCaseArray = ["abcdefghijklmnopqrstuvwxyz"];
const upperCaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharArray = "!@#$%^&*()";
let chosenArrays;

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
  //here is the function determining which arrays will be used based on user input
  if(lCChoice === true){
    let chosenArrays = this + lowerCaseArray //So what do I use if not let? I want to keep updating chosenArrays as the function continues. Bad approach?
    console.log("You've opted for lower case")
    console.log(chosenArrays)
  }
  if(uCChoice ===true){
    let chosenArrays = this + upperCaseArray;
    console.log("you've opted for upper case")
    console.log(chosenArrays)
  }
  if(nChoice ===true){
    let chosenArrays = [...this, ...numberArray]
    console.log("you've opted for numbers")
    console.log(chosenArrays)
    
  }
  if(sCChoice ===true){
    let chosenArrays = allArrays + specialCharArray 
    console.log("you've opted for special characters")
  }    
  else if (lCChoice === false && uCChoice ===false && nChoice ===false && sCChoice ===false){
    console.log("Fine. Just use 'password' then.")
   
  }
  console.log("----------")
  console.log(chosenArrays)

  
  
  //used this to see if == added the true statement to the arrays but no such luck. Am I seriously gonna do each one manually? Serious consideration at this point.
  //console.log(numberArray)
  
  
  //MY. MAIN. PROBLEM.
  //Now let's cherry pick the arrays marked true 
    





})
  /*
for (let i = 0; i < 10; i++) {
  let number = Math.random(lowerCaseArray)
  console.log(number)
  Math.floor(random()*lowerCaseArray.length)
}
*/

// #password
//  document.getElementById("password").innerHTML= passwordOutput()











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