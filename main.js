// JS code that checks validation as the user progresses the form

var form = document.getElementsByTagName('form')[0];
console.log(form);
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
// When user leaves form field, it should automatically validate the field

// Email match check
if (emailConfirm.value != email) {
  console.log("the emails dont match, add error");
}

// Country is dropdown, so just need to make sure a country is selected.
// Zipcode valid Regex Check
// rule1 --> 5 digit zip
// rule2 -->zips can also be 5 digits (dash) and extra 4 digits
// rule1 = /[0-9]/;
function validateZip(zipObject) {
  let rule = new RegExp('[0-9]{5}');
  // also add rule that allows for dash-preceded 4 digit extension
  let rule = new RegExp('[0-9]{5}');
  let checkZip = rule.test(zipCode.value);
  if (checkZip!=true) {
    console.log("theres no valid zip");
  }
  if (checkZip==true) {
    console.log("the zip is ok")
  }  
}
// Valid Password Check
// check for at least 1 #
// check for at least 1 uppercase
// check for at least 1 non-alphanumeric symbol
function validatePW(pwObject) {
  let rule=
  let 
  pwObject = 
}

// Password Match Check
let pwValue = pw.value;
let pwConfirmValue = pwConfirm.nodeValue;
function validateConfirmisEqual(object1, object2) {
  if (object1.value != object2.value) {
    console.log(object1.id +" does not match " + object2.id);
  }
}


// the submit button should doublecheck and make sure all fields
//  are validly filled in. 