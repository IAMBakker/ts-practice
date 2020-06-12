let buttonClicked = false;
const button = document.getElementById("buttonId")!;

button.addEventListener("click", () => {
    buttonClicked = true;
    button.setAttribute("disabled", "true");
    console.log("The button was clicked!")
});
