const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    loginBtn.innerText = "Authenticating...";

    loginBtn.disabled = true;

    setTimeout(() => {

        window.location.href = "character.html";

    },2000);

});