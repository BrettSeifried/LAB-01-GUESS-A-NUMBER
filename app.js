// Inputs
const userGuess = document.getElementById('input');
const button = document.getElementById('submit');
const remain = document.getElementById('chances');
const displayGuesses = document.getElementById('guesses');
const refresh = document.getElementById('restart');
let randomNum = Math.floor(Math.random() * (20 - 0) + 1);
let numGuesses = 4;

// events
button.addEventListener('click', () =>{
    numGuesses--;
    const guess = (Number(userGuess.value));
    let userMessage;
    if (guess === randomNum){
        userMessage = 'You got it!';
    } else if (numGuesses === 0) {
        userMessage = 'You are out of guesses, You lose';
        button.style.display = 'none';
    } else if (guess > randomNum) {
        userMessage = 'Number too high!';
    } else if (guess < randomNum) {
        userMessage = 'Number too low';
    }
    remain.textContent = `${userMessage}`;
    displayGuesses.textContent = `${numGuesses}`;
});

refresh.addEventListener('click', () => {
    numGuesses = 4;
    button.style.display = '';
    remain.textContent = '';
});

