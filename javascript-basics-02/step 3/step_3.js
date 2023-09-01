const newDiv = document.createElement("div");
const inputElement = document.querySelector("#name");
newDiv.id = "myDiv";
document.body.appendChild(newDiv)
const div = document.querySelector('myDiv')
inputElement.addEventListener("input", function() {
    newDiv.textContent = inputElement.value;
});