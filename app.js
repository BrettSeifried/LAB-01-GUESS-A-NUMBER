// Inputs
const userGuess = document.getElementById('input');
const button = document.getElementById('submit');
const remain = document.getElementById('chanes');
let randomNum = Math.floor(Math.random() * (20 - 0) + 1);
let numGuesses = 0;

// events
button.addEventListener('click', () =>{
  numGuesses++;
  const guess = (Number(userGuess.value));
  motivation.style.display = 'none';

  let remain;
  if(guess === randomNum){
    remain = 'You got it!'
  } else if (numGuesses === 4) {
    remain= 'You are out of guesses';
    button.style.display = 'none'
  } else if (guess > randomNum) {
    remain = 'Number too high!';
  } else if (guess < randomNum) {
    remain = 'Number too low'
  }

});



