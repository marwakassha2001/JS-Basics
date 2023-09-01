const passwordInput = document.getElementById("password");
const confirmationInput = document.getElementById("confirmation");
const testButton = document.querySelector("button");
const imageElement = document.querySelector("#password");
testButton.addEventListener("click", () => {
    if(passwordInput.value!==confirmationInput.value){
        passwordInput.style.border = "3px solid red";
        confirmationInput.style.border = "3px solid red";
    }
});
