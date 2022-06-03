let randomNumber = Math.floor(Math.random() * 10) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const wellDone = document.querySelector('.wellDone');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = '!!!Congratulations!!! You got it right in ' + guessCount + ' guesses';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        guesses.textContent = 'Correct guess was: ' + randomNumber;
        if (guessCount <= 3) {
            wellDone.textContent = 'You are good at this game, most people need at least 4 guesses to correctly guess the number'
        }
        setGameOver();
    } else if (guessCount === 4) {
        lastResult.textContent = '!!!GAME OVER!!! You have used all 4 guesses !!!GAME OVER!!!';
        lowOrHi.textContent = '';
        guesses.textContent = 'Correct guess was: ' + randomNumber;
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = 'red';
    }
    if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low';
    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high';
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 10) + 1;
}
