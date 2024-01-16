let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

const guessField = document.querySelector('.guessField');
const guessesOutput = document.querySelector('.guessesOutput');
const lastResultOutput = document.querySelector('.lastResultOutput');
const lowOrHighOutput = document.querySelector('.lowOrHighOutput');

function checkGuess() {

    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guessesOutput.textContent += `Previous guesses: `;
    }

    guessesOutput.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResultOutput.textContent = 'Congratulations! You got it right!';
        lastResultOutput.style.backgroundColor = 'green';
        lowOrHighOutput.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResultOutput.textContent = '!!!GAME OVER!!!';
        lowOrHighOutput.textContent = '';
        setGameOver();
    } else {
        lastResultOutput.textContent = 'You got it wrong!';
        lastResultOutput.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHighOutput.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHighOutput.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParagraphs = document.querySelectorAll('.resultParagraphs p');
    for (const resetParagraph of resetParagraphs) {
        resetParagraph.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResultOutput.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

const guessSubmit = document.querySelector('.guessSubmit');

guessSubmit.addEventListener('click', checkGuess);
