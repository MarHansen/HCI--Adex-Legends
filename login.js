let id = (id) => document.getElementById(id);


let username = id("name"),
 form = id("loginform"),
 pass = id("pass"),
 errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

   validasi();
});

const validasi = () => {
    const usernameValue = username.value.trim();
    const passValue = pass.value.trim();

    if(usernameValue === ''){
       errorMsg[0].innerHTML = "Username is required";
    }
    else if(usernameValue.length <= 3){
        errorMsg[0].innerHTML = "Username must at least 4 characters"
    }
    else if(username.Value.length >= 26){
        errorMsg[0].innerHTML = "Username maximum 25 characters"
    }

    if(passValue === ''){
       errorMsg[1].innerHTML = "Password is required";
    }
    else if(passValue.length <= 8){
       errorMsg[1].innerHTML = "Password is too short!";
    }
    else if(passValue.length >= 26){
       errorMsg[1].innerHTML = "Password is too long!";
    }

}