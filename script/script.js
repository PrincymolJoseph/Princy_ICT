var email = document.getElementById("inputEmail3");
var pwd = document.getElementById("inputPassword3");

var regxE = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

var regxP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;

function validate(){
    if(email.value.trim()==""||pwd.value.trim()==""){
        alert("Fields could not be empty");
        return false;
    }
    else if(regxE.test(email.value)==false){
        alert("Email format not correct!!!");
        return false;
    }
    else if(regxP.test(pwd.value)==false){
        alert("Password should contain atleast 8 characters,one uppercase,one lowercase and one number!!!");
        return false;
    }
    else{
        // alert('Good!!!');
        return true;
    }
}