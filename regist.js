let id = (id) => document.getElementById(id);


let username = id("name"),
 email = id("mail"),
 form = id("form"),
 pass = id("pass"),
 confirm = id("confirm-pass"),
 errorMsg = document.getElementsByClassName("error");


 form.addEventListener("submit", (e)=>{
     e.preventDefault();

    validasi();
 });

 function validasiEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

 const validasi = () => {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passValue = pass.value.trim();
     const confirmValue = confirm.value.trim();

     if(usernameValue === ''){
        errorMsg[0].innerHTML = "Username is required";
     }
     else if(usernameValue.length <= 3){
         errorMsg[0].innerHTML = "Username must at least 4 characters"
     }
     else if(username.Value.length >= 26){
         errorMsg[0].innerHTML = "Username maximum 25 characters"
     }

     if(emailValue === ''){
        errorMsg[1].innerHTML = "Email is required";
     }
     else if(!validasiEmail(emailValue)){
        errorMsg[1].innerHTML = "Invalid Email address!";
     }

     if(passValue === ''){
        errorMsg[2].innerHTML = "Password is required";
     }
     else if(passValue.length <= 8){
        errorMsg[2].innerHTML = "Password is too short!";
     }
     else if(passValue.length >= 26){
        errorMsg[2].innerHTML = "Password is too long!";
     }

     if(confirmValue === ''){
        errorMsg[3].innerHTML = "Please confirm your password";
     }
     else if(confirmValue != passValue){
        errorMsg[3].innerHTML = "Password doesn't match!";
     }

 }
