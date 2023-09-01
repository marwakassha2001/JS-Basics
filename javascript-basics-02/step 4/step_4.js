const resetButton = document.querySelector("button");

resetButton.addEventListener("click", function () {
    const inputs = document.querySelectorAll("input");
    const confirmReset = window.confirm("are you sure?");
    if (confirmReset) {
        for(const input of inputs)
        input.value= null;

    }
});