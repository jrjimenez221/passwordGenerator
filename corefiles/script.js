// these are my base arrays
var generateBtn = document.querySelector("#generate");
let lowerCaseArray = ["abcdefghijklmnopqrstuvwxyz"]
let upperCaseArray = lowerCaseArray.to
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharArray = "!@#$%^&*()"
//let allArrays = [...lowerCaseArray, ...upperCaseArray, ...specialCharArray]
let allArrays = function test(){
  let arrays = lowerCaseArray.split("").concat(numberArray);
}
console.log(allArrays.length)

let generateIt = document.querySelector("#generate"); //select's the element marked #generate
//this is my function prompting the user to choose which arrays will be used

generateIt.addEventListener("click", function(event) { // adds click function
    let lCChoice = confirm("Generate a password with lower case letters?")
    let uCChoice = confirm("Upper Case Letters?")
    let nChoice = confirm("Numbers?")
    let sCChoice = confirm("What about special characters?")
    //here is the function determining which arrays will be used based on user input
    if(lCChoice === true){
      lowerCaseArray == true    
    }
    if(uCChoice ===true){
      upperCaseArray == true
    }
    if(nChoice ===true){
      numberArray == true
    }
    if(sCChoice ===true){
      specialCharArray == true
    }    
    for (let i = 0; i < allArrays.length; i++) {
      const array = allArrays[i];

      if(array === true){
        console.log(array)
      }
      
    }
  })
  
  /*
  
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