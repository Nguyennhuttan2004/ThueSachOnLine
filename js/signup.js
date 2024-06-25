const formSignup = document.getElementById("formSignup");
const username = document.getElementById("txtUser");
const email = document.getElementById("txtEmail");
const password = document.getElementById("txtPass");

const userNameErr = document.getElementById("userNameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
 

formSignup.addEventListener("submit",function(e){
    e.preventDefault();

    // validation dữ liệu đầu vào
    if(!username.value){
        userNameErr.style.display= "block";
    }else{
        userNameErr.style.display= "none";
    }
})