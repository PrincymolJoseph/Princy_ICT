var name1 = document.getElementById("validationName1");
var name2 = document.getElementById("validationName2");
var PIN = document.getElementById("validationPIN");
var phone = document.getElementById("validationPhone");
var email = document.getElementById("validationEmail");
var pwd1 = document.getElementById("validationPass1");
var pwd2 = document.getElementById("validationPass2");


// var regxPh = /^([0-9]{10})$/

// var regxPh = /^(\d{10}|\d{3}[\s.-]?\d{3}[\s.-]?\d{4})$/;

// var regxN = /^([\w\s]+)$/

var regxN = /^[a-zA-Z\s]+$/

var regxPIN = /^[\d]+$/

var regxPh = /^(\d{10}|\d{3}\s\d{3}\s\d{4}|\d{3}-\d{3}-\d{4}|\d{3}\.\d{3}\.\d{4})$/;

var regxE = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

var regxP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;

function checkPasswordLength(password) {
    var span = document.getElementById("errorSpan");
    if (password.length >= 12) {
      span.style.color = "green";
      return;
    } else if (password.length >= 8) {
      span.style.color = "yellow";
      return;
    } else {
      span.style.color = "red";
    }
  }

function validate(){
    if(name1.value.trim()==""){
        alert("FirstName field could not be empty");
        return false;
    }
    else if((regxN.test(name1.value))==false){
        alert("FirstName field can have only alphabets or space!!!");
        return false;
    }
    else if((regxN.test(name2.value))==false){
        alert("LastName field can have only alphabets or space!!!");
        return false;
    }

    if(PIN.value.trim()==""){
        alert("PIN field could not be empty");
        return false;
    }
    else if(regxPIN.test(PIN.value)==false){
        alert("PIN field can have only numbers!!!");
        return false;
    }
    
    if(phone.value.trim()==""){
        alert("Phone number field could not be empty");
        return false;
    }
    else if(regxPh.test(phone.value)==false){
        alert("Phone number format incorrect!!!");
        return false;
    }
    
    if(email.value.trim()==""){
        alert("Email field could not be empty");
        return false;
    }
    else if(regxE.test(email.value)==false){
        alert("Email format incorrect!!!");
        return false;
    }

    if(pwd1.value.trim()==""){
        alert("Password field could not be empty");
        return false;
    }
    else if(regxP.test(pwd1.value)==false){
        alert("Password should contain atleast 8 characters,one uppercase,one lowercase and one number!!!");
        return false;
    }
    else if(pwd1.value!=pwd2.value){
        alert("Second password must be same as the first one!!!");
        return false;
    }

    return true;
}