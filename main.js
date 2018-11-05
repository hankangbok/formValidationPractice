// JS code that checks validation as the user progresses the form

var form = document.getElementsByTagName('form')[0];
console.log(form);
// For future note: I could make a function to get all the element
// Ids inside the formso that I don't have to explicitly type this all out
// Thats a future feature to implement.
var email =document.getElementById('email');
var emailConfirm =document.getElementById('emailConfirm');
var country =document.getElementById('country');
var zipCode =document.getElementById('zipCode');
var pw = document.getElementById('pw');
var pwConfirm = document.getElementById('pwConfirm');
// If user leaves form field, it should automatically validate the field
// function whatth() {
//   var helloWorld = "hello world";
//   console.log(helloWorld);
// }


// the submit button should doublecheck and make sure all fields
//  are validly filled in. 
var pwValue = pw.value;
var pwConfirmValue = pwConfirm.nodeValue;
if (pwConfirmValue!=pwValue){
  console.log("the passwords don't match blergh")
}