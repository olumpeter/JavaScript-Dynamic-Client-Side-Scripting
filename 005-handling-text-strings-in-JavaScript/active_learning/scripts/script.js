const concatenationInContextButton = document.querySelector(".concatenation_in_context > button")

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector(".concatenation_in_context > #greeting")
    greeting.textContent = `Hello ${name}, nice to see you!`
}

concatenationInContextButton.addEventListener("click", greet)

