const form = document.getElementById("registerForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Character successfully created!");

window.location.href="login.html";

});