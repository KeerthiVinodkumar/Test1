
function clearErrors() {
    errors = document.getElementsByClassName("error"); //copying all elements with classname 'error' into errors variable
    for (let item of errors) { //for of loop - each copied element is passed into item variable one by one in a loop
      item.innerHTML = ""; //setting content of copied elements to "" i.e clearing the error text.
    }
  }
  function seterror(id, error) {
    //getting called from validate form function with two parameters
    document.getElementById(id).innerHTML = error; //this sets the concerned paragraph tag with error message
  }

  function validateform(event) {
    //this function is getting called from form tag
    var returnval = true; 
              //form will validate only when returnval is trueclearErrors();
    clearErrors()
    greenvisible()
    green()
    checkgreen()
    // alert("Succesfully")
    function redvisible(){
      document.getElementById("failure-icon").style.display ="block" 
      document.getElementById("success-icon").style.display ="none" 
    }
    function greenvisible(){
      document.getElementById("failure-icon").style.display ="none" 
      document.getElementById("success-icon").style.display ="block"
    }
    function red(){
      document.getElementById("fail-icon").style.display ="block" 
      document.getElementById("pass-icon").style.display ="none" 
    }
    function green(){
      document.getElementById("fail-icon").style.display ="none" 
      document.getElementById("pass-icon").style.display ="block"
    }
    function checkred(){
      document.getElementById("wrong-icon").style.display ="block" 
      document.getElementById("correct-icon").style.display ="none" 
    }
    function checkgreen(){
      document.getElementById("wrong-icon").style.display ="none" 
      document.getElementById("correct-icon").style.display ="block"
    }
    var name = document.getElementById("username").value;
    if (name =="") {
      seterror("usererror", "*name should not be blank");
      returnval = false;
      redvisible()
    }
     else if (name.startsWith(" ")) {
       seterror("usererror", "*name cannot start with a space");
       returnval = false;
       redvisible()
    }
    else if(name.endsWith(" ")){
        seterror("usererror", "*name cannot end with a space");
       returnval = false;
       redvisible()
    }
    else if(name.search(/^[a-zA-Z ]*$/) == -1){
        seterror("usererror", "*please write in ABc");
       returnval = false;
       redvisible()
    }
    var email = document.getElementById("emailid").value;
    if (email == "") {
      seterror("emailerror", "*email should not be blank");
      returnval = false;
      red()
    }
    else if(email.length > 50){
          seterror("emailerror", "*email should not be gratar than 50")
          returnval = false;
          red()
          
    }
    else if(email.search(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/) == -1){
             seterror("emailerror", "invalid email address");
             returnval = false;
             red()
             
    }


    var password = document.getElementById("password").value;
    if (password == "") {
      seterror(
        "passworderror",
        "*password should not be blank" )
      returnval = false;
      checkred()
      }
      else if(password.length<7 || password.length >21){
        seterror(
            "passworderror",
            "*password should be grater than 7 and less than 21" )
            returnval = false;
            checkred()
      }
      else if(password.search(/[A-Z]/) == -1){
        seterror(
        "passworderror",
        "*password should contain atleast one Capital Letter" )
        returnval = false;
        checkred()
      }
      else if(password.search(/[a-z]/) == -1){
        seterror(  "passworderror",
        "*password should contain atleast one small Letter")
        returnval = false;
        checkred()
      }
      else if(password.search(/[0-9]/) == -1){
        seterror(  "passworderror",
        "*password should contain atleast one Number")
        returnval = false;
        checkred()
      }
      else if(password.search(/[!\@\#\$\^\&\*]/) == -1){
        seterror(  "passworderror",
        "*password should contain atleast one Special Charcter")
        returnval = false;
        checkred()
      }
      

  event.preventDefault();
}

