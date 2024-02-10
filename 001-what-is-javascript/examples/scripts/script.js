// Example 1

const exampleOneButton = document.getElementById("example-1-button");

function updateName() {
    const name = prompt("Enter a new name");
    exampleOneButton.textContent = `Player 1: ${name}`;
}

exampleOneButton.addEventListener("click", updateName);

// Example 2

const exampleTwoButton = document.getElementById("example-2-button");

function createParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "You clicked the button!";
    document.body.appendChild(paragraph);
}

exampleTwoButton.addEventListener("click", createParagraph);
