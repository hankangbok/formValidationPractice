// JS code that checks validation as the user progresses the form

var form = document.getElementsByTagName('form')[0];
// For future note: I could make a function to get all the element
// Ids inside the formso that I don't have to explicitly type this all out
// Thats a future feature to implement.
let email = document.getElementById('email');
let emailConfirm = document.getElementById('emailConfirm');
let country = document.getElementById('country');
let zipCode = document.getElementById('zipCode');
let zipCodeExtension = document.getElementById('zipCodeExtension');
let pw = document.getElementById('pw');
let pwConfirm = document.getElementById('pwConfirm');

// Email match check
// Password match check
function validateConfirmisEqual(object1, object2) {
  if (object1.value != object2.value) {
    console.log(object1.id +" does not match " + object2.id);
    object2.className = ":invalid";
    object2.setCustomValidity(object2 + ' doesn\'t match');
  }
  if (object1.value==object2.value) {
    object2.setCustomValidity('');
    object2.className= ":valid";
  }
}

// Zipcode Validation
function validateZip(zipObject) {
  let rule = new RegExp('^[0-9]{5}$');
  // also add rule that allows for dash-preceded 4 digit extension
  let rule2 = new RegExp('^[0-9]{5}(-[0-9]{4})$');
  let checkZip = rule.test(zipCode.value);
  let checkZip2 = rule2.test(zipCode.value);
  if (checkZip!=true && checkZip2!=true) {
    console.log("theres no valid zip");
    zipObject.setCustomValidity('That is not a valid zip');
  }
  else {
    console.log("the zip is ok");
    zipObject.setCustomValidity('');
  }  
}
// Valid Password Check
// check for at least 1 #
// check for at least 1 uppercase
// check for at least 1 non-alphanumeric symbol
function validatePW(pwObject) {
  // let rulePW = new RegExp('^(?=.*\d)(?=.*[A-Z])(?=.*\W)$');
  let rulePW = /(?=.*\d)(?=.*[A-Z])(?=.*\W)/;
  let checkPW = rulePW.test(pwObject.value);
  if (checkPW==false) {
    console.log(pwObject.value);
    console.log("this password is invalid");
    pwObject.classList.add('invalid');
    pwObject.setCustomValidity('invalid!');
  }
  if (checkPW==true) {
    console.log(pwObject.value);
    console.log("that pw is acceptable")
    pwObject.setCustomValidity('');
  }
}

document.querySelector('#submit').addEventListener("click",function(e){
  alert("that worked! High 5")
  e.preventDefault();
});
