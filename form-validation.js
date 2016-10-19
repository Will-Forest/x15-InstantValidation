function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var space= userEntered.indexOf(" ");
  //Show message that there is an error with the username...
  if (userEntered .length < 6) {
  document.getElementById("usernameError").innerHTML=
  "Your username must be at least 6 characters long.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");}
else if (space > -1) {
document.getElementById("usernameError").innerHTML=
"Your username may not have any spaces.";
document.getElementById("usernameError").classList.remove("hidden-message");
document.getElementById("usernameError").classList.add("shown-message");
//Turn the username items red
document.getElementById("usernameGroup").classList.add("has-error");}

else {document.getElementById("usernameGroup").classList.add("has-success");
document.getElementById("usernameGroup").classList.remove("has-error");
document.getElementById("usernameError").innerHTML= " ";
}


if (passEntered == "password" || passEntered =="Password"){
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML=
  "You may not use 'Password' as your password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");}
else if (passEntered == userEntered) {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML=
  "You may not use your username as your password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");}
else if (passEntered .length < 6 ) {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML=
  "Your password must be at least 6 characters long.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");}
  else if (passEntered .length > 20 ) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML=
    "Your password must have 20 characters or less.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");}
  else {document.getElementById("passwordGroup").classList.add("has-success");
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordError").innerHTML=" "}
}
